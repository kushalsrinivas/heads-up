import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createContext, ReactNode, useState } from "react";

interface StoreContextProps {
  getSession: () => Promise<any | null>;
  setSession: (session: any) => void;
  token: any;
}

const StoreContext = createContext<StoreContextProps>({
  getSession: async () => null,
  setSession: () => {},
  token: null,
});

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const supabase = createClientComponentClient();
  const [token, setToken] = useState<any>(false);

  const getToken = async (): Promise<any | null> => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setToken(user);

    return user || null;
  };

  const setSession = (session: any): void => {
    setToken(session);
  };

  const context: StoreContextProps = {
    token,
    getSession: getToken,
    setSession,
  };

  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
