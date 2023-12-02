import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface SignupProps {
  handler: (state: boolean) => void;
}
function Signup({ handler }: SignupProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {};
  return (
    <div className="w-full m-auto p-10">
      <h1 className="text-white p-5 text-center text-4xl font-black tracking-wider hover:tracking-wide transition-all ease-in-out">
        SIGN UP
      </h1>
      <div className="p-5 flex flex-col gap-2">
        <Label className="text-white font-bold text-3xl tracking-tighter hover:tracking-wide transition-all ease-in-out ">
          NAME
        </Label>
        <Input
          className="text-xl font-medium"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        ></Input>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <Label className="text-white font-bold text-3xl tracking-tighter hover:tracking-wide transition-all ease-in-out ">
          Email
        </Label>
        <Input
          className="text-xl font-medium"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        ></Input>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <Label className="text-white font-bold text-3xl tracking-tighter hover:tracking-wide transition-all ease-in-out ">
          Password
        </Label>
        <Input
          className="text-xl font-medium"
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
          Sign Up
        </Button>
        <Button
          onClick={() => {
            handler(true);
          }}
          className="w-full"
        >
          already a member?
        </Button>
      </div>
    </div>
  );
}

export default Signup;
