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
  getEvents: () => Promise<any | null>;
  FindEvent: (uuid: string) => Promise<any | null>;

  // Replace 'any' with the actual type of session data
  token: any | null; // Replace 'any' with the actual type of token
}

const StoreContext = createContext<StoreContextProps>({
  isSignedin: false,
  getSession: async () => null,
  getEvents: async () => null,
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

  const FindEvent = async (uuid: string) => {
    return null;
  };
  const context: StoreContextProps = {
    token: token,
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
