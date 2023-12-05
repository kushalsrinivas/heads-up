import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState, useContext, useEffect } from "react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FaDiscord } from "react-icons/fa6";
import { useRouter } from "next/navigation";
function Signin() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [User, setUser] = useState<Object | null>(null);
  const [Loading, setLoading] = useState(true);
  async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  };
  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, []);
  if (Loading) {
    return (
      <h1 className="p-10 w-full text-center flex justify-center items-center text-white bg-black text-3xl font-bold">
        loading
      </h1>
    );
  }
  if (User) {
    return (
      <div className="p-10 w-full text-center flex justify-center items-center text-white bg-black text-3xl font-bold">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    );
  }
  return (
    <div className="w-full m-auto p-10">
      <h1 className="text-white p-5 text-center text-4xl font-black tracking-wider hover:tracking-wide transition-all ease-in-out">
        SIGN IN
      </h1>

      <div className="p-5 flex flex-row w-full gap-5 justify-between">
        <Button
          onClick={signInWithDiscord}
          variant={"secondary"}
          className="w-1/2 m-auto h-[20vh] text-3xl font-bold flex flex-row gap-3"
        >
          <FaDiscord /> Discord
        </Button>
      </div>
    </div>
  );
}

export default Signin;
