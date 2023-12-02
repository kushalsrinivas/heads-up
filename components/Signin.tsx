import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
interface SigninProps {
  handler: (state: boolean) => void;
}

function Signin({ handler }: SigninProps) {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function googleAuth() {
    const res = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log();
  }
  const handleSubmit = async () => {
    supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  };
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
          className="w-full"
          variant={"secondary"}
          onSubmit={handleSubmit}
        >
          Sign In
        </Button>
        <Button
          onClick={() => {
            handler(false);
          }}
          className="w-full"
        >
          Discord
        </Button>
      </div>
    </div>
  );
}

export default Signin;
