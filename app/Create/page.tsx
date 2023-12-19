"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useStoreContext } from "../Context/Store";
import { SiPubg } from "react-icons/si";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

function Home() {
  const ctx = useStoreContext();
  const router = useRouter();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [NoPlayer, setNP] = useState(0);
  const [Game, setGame] = useState("BGMI");
  const d = new Date();
  const [Schedule, setSchedule] = useState<Date>();
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
      <div className="h-[65vh] flex flex-col gap-3">
        <div>
          <Label className="text-3xl font-bold ">Name </Label>
          <Input
            placeholder="Valorant epic battle"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Label className="text-3xl font-bold ">Description </Label>
          <Textarea
            maxLength={2000}
            cols={15}
            rows={15}
            placeholder="epic gaming desciption"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>
      <div className="h-full w-full ">
        <Label className="text-3xl font-bold ">Game</Label>
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
        <Label className="text-3xl font-bold ">Number of players </Label>
        <Input
          placeholder="1"
          type="number"
          value={NoPlayer}
          onChange={(e) =>
            setNP(parseInt(e.target.value) > 0 ? e.target.value : 0)
          }
        />
      </div>
      <div className="flex flex-col gap-5">
        <Label className="text-3xl font-bold ">Tournament date </Label>
        <div className="flex flex-col gap-5">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full pl-3 text-left font-normal")}
              >
                {d.toDateString(Schedule)}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                onSelect={(date: any) => {
                  setSchedule(new Date().toDateString(date));
                  console.log("====================================");
                  console.log(date);
                  console.log("====================================");
                  console.log("sdfsdfsd", new Date().toDateString(date));
                }}
                disabled={
                  (date) => date <= new Date()
                  // || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button>Publish tournament</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
