"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

interface StoreContextProps {
  isSignedin: boolean;
  getSession: () => Promise<any | null>; // Replace 'any' with the actual type returned by getSession
  setSession: (session: any | null) => void;
  LogoutSession: () => void;
  InsertData: (obj: any | null) => void;
  getPricePool: () => Promise<any | null>;
  getGamesPlayed: () => Promise<any | null>;
  getEvents: () => Promise<any | null>;
  getMatchPlayers: () => Promise<any | null>;


  FindEvent: (uuid: string) => Promise<any | null>;

  // Replace 'any' with the actual type of session data
  token: any | null; // Replace 'any' with the actual type of token
}

const StoreContext = createContext<StoreContextProps>({
  isSignedin: false,
  getSession: async () => null,
  getEvents: async () => null,
  getPricePool: async () => null,
  getGamesPlayed: async () => null,
  getMatchPlayers: async () => null,
  setSession: () => {},
  LogoutSession: async () => {},
  InsertData: async () => {},
  FindEvent: async (uuid: string) => null,
  token: null,
});

export const StoreProvider: React.FC<{ children: ReactNode }> = (props) => {
  const supabase = createClientComponentClient();
  const [token, setToken] = useState<Object | null>(null);
  const router = useRouter();
  const getToken = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setToken(user);

    return user || null;
  };
  const InserData = async (obj: any | null) => {
    const { data, error } = await supabase.from("tournaments").insert([obj]);
    console.log(data || error);
  };
  const setSession = (session: any | null) => {
    setToken(session);
  };
  const LogoutSession = async () => {
    const res = await supabase.auth.signOut();
    setToken(null);
    router.push("/Login");
  };

  const getEvents = async () => {
    const { data, error } = await supabase.from("tournaments").select("*");

    return data || null;
  };
  const getPricePool = async () => {};
  const getGamesPlayed = async () => {};
  const getMatchPlayers = async () => {};
  const FindEvent = async (uuid: string) => {
    const { data, error } = await supabase
      .from("tournaments")
      .select("*")
      .eq("uuid", uuid);
    return data || null;
  };
  const context: StoreContextProps = {
    token: token,
    getGamesPlayed : getGamesPlayed,
    getMatchPlayers : getMatchPlayers,
    getPricePool: getPricePool,
    FindEvent: FindEvent,
    getEvents: getEvents,
    InsertData: InserData,
    LogoutSession: LogoutSession,
    getSession: getToken,
    setSession: setSession,
    isSignedin: Boolean(token), // Assuming isSignedin is true if token is present
  };

  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  );
};

// Optional: Create a custom hook for accessing the context
export const useStoreContext = () => useContext(StoreContext);
