"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useStoreContext } from "../Context/Store";
import { SiPubg } from "react-icons/si";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
function Home() {
  const ctx = useStoreContext();
  const router = useRouter();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [NoPlayer, setNP] = useState("");
  const [Game, setGame] = useState("BGMI");
  const [Schedule, setSchedule] = useState("");

  if (!ctx.token) {
    router.push("/Login");
  }
  const games = [
    {
      name: "BGMI",
      img: "https://play-lh.googleusercontent.com/DYXNS7NyuIgbCk5ElbK2Ch7dNuUnnCJ2ToDsV0QK0Q-MiGWQR7oDl9w8VXGinA5ureA",
    },
    {
      name: "Call Of Duty",
      img: "https://i.pinimg.com/originals/ab/40/f4/ab40f48fae759e94ee9c636bbbcba00d.png",
    },
  ];

  return (
    <div className="flex justify-center flex-col w-1/2 m-auto gap-3 clear">
      <div>
        <Label>Name </Label>
        <Input
          placeholder="Valorant epic battle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="h-full w-full ">
        <Label>Game</Label>
        <div className="flex lg:flex-row gap-3 flex-col h-full w-full p-5">
          {games.map((item, id) => {
            return (
              <div className="" key={id}>
                <Card
                  className={`hover:opacity-75 ${
                    item.name === Game ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => {
                    setGame(item.name);
                  }}
                >
                  <Image
                    className="rounded-t-xl"
                    src={item.img}
                    width={250}
                    height={150}
                    alt="ssfs"
                  ></Image>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>
      </div>{" "}

      <div>
        <Label>Name </Label>
        <Input
          placeholder="Valorant epic battle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button>submit</Button>
      </div>
    </div>
  );
}

export default Home;
