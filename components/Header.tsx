"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const [url, setUrl] = useState("");
  const list = [
    "https://media.giphy.com/media/Ev4gQixBkzGAzbpttl/giphy.gif",
    "https://media.giphy.com/media/xT39DiFOlBJITZmKLC/giphy.gif",
    "https://media.giphy.com/media/4zOO9xNkUrY6hTrtxf/giphy.gif",
    "https://media.giphy.com/media/xd5kq59h2JlRzB8Uer/giphy.gif",
  ];
  useEffect(() => {
    setUrl(list[Math.floor(Math.random() * list.length)]);
  }, []);
  return (
    <div className="h-auto w-screen bg-black">
      <main className="relative h-72 overflow-hidden ">
        <div className="absolute inset-0">
          <Image src={url} layout="fill" objectFit="cover" alt="" />
        </div>
      </main>
    </div>
  );
}

export default Header;
