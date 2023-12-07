"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

interface StoreContextProps {
  isSignedin: boolean;
  getSession: () => Promise<any | null>; // Replace 'any' with the actual type returned by getSession
  setSession: (session: any | null) => void;
  LogoutSession: () => void; // Replace 'any' with the actual type of session data
  token: any | null; // Replace 'any' with the actual type of token
}

const StoreContext = createContext<StoreContextProps>({
  isSignedin: false,
  getSession: async () => null,
  setSession: () => {},
  LogoutSession: async () => {},
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

  const setSession = (session: any | null) => {
    setToken(session);
  };
  const LogoutSession = async () => {
    const res = await supabase.auth.signOut();
    setToken(null);
    router.push("/Login");
  };

  const context: StoreContextProps = {
    token: token,
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
