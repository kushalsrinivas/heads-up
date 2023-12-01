"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {};
  return (
    <div className="h-auto w-screen bg-black flex flex-row">
      <div className="h-screen w-screen flex justify-center p-20 bg-black">
        <main className="relative h-full w-full overflow-hidden ">
          <div className="absolute inset-0">
            <Image
              src={"https://media.giphy.com/media/Ev4gQixBkzGAzbpttl/giphy.gif"}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </main>
      </div>
      <div className="w-1/2 m-auto p-10">
        <div className="p-5 flex flex-col gap-2">
          <Label className="text-white font-bold text-3xl tracking-tighter hover:tracking-wide transition-all ease-in-out ">
            NAME
          </Label>
          <Input
            className="text-xl font-semibold"
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
          <Label className="text-white font-bold text-3xl tracking-tighter hover:tracking-wide transition-all ease-in-out ">
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
            Sign Up
          </Button>
          <Button className="w-full" onSubmit={handleSubmit}>
            already a member?
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
