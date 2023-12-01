"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Signup from "@/components/Signup";
import Signin from "@/components/Signin";
function Page() {
  const handleSubmit = async () => {};
  const [isMemeber, setMember] = useState(false);
  const [url, setUrl] = useState("");
  const handler = (state: boolean) => {
    setMember(state);
  };
  const list = [
    "https://media.giphy.com/media/vWye6xPB61oZ7Mx8hq/giphy.gif",
    "https://media.giphy.com/media/sCIIl5TVOzdfmRfMI0/giphy.gif",
    "https://media.giphy.com/media/zsqpYMxi6gRrUX2PCB/giphy.gif",
  ];
  useEffect(() => {
    setUrl(list[Math.floor(Math.random() * list.length)]);
  }, []);
  return (
    <div className="h-auto w-screen bg-black flex flex-row">
      <div className="h-screen w-full flex justify-center p-20 bg-black">
        <main className="relative h-full w-full overflow-hidden ">
          <div className="absolute inset-0">
            <Image src={url} layout="fill" objectFit="cover" alt="" />
          </div>
        </main>
      </div>

      {isMemeber ? <Signin handler={handler} /> : <Signup handler={handler} />}
    </div>
  );
}

export default Page;
