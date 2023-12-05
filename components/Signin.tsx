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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const handleSubmit = async () => {
    const res = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log(res);
  };
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
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    );
  }
  return (
    <div className="w-full m-auto p-10">
      <h1 className="text-white p-5 text-center text-4xl font-black tracking-wider hover:tracking-wide transition-all ease-in-out">
        SIGN IN
      </h1>
      <div className="p-5 flex flex-col gap-2">
        <Label className="text-white font-bold text-3xl tracking-tighter hover:tracking-wide transition-all ease-in-out ">
          User Name
        </Label>
        <Input
          className="text-xl font-semibold"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        ></Input>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <Label className="text-white font-semibold text-3xl tracking-tighter hover:tracking-wide transition-all ease-in-out ">
          Password
        </Label>
        <Input
          className="text-xl font-semibold"
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        ></Input>
      </div>
      <div className="p-5 flex flex-row w-full gap-5 justify-between">
        <Button
          className="w-full font-bold"
          variant={"secondary"}
          onSubmit={handleSubmit}
        >
          Sign In
        </Button>
        <Button
          onClick={signInWithDiscord}
          className="w-full  font-bold flex flex-row gap-3"
        >
          <FaDiscord /> Discord
        </Button>
      </div>
    </div>
  );
}

export default Signin;
