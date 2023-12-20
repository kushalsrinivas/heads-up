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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useMultistepForm } from "@/lib/useMutlistepform";

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
  const { steps, currentStepIndex, step, next, back, isLastStep, isFirstStep } =
    useMultistepForm([
      <div key={123123}>
        <Label className="text-xl font-semibold  ">Name </Label>
        <Input
          placeholder="Valorant epic battle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mt-3">
          <Label className="text-xl font-semibold  ">Description </Label>
          <Textarea
            maxLength={2000}
            cols={15}
            rows={15}
            placeholder="epic gaming desciption"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>,

      <div key={32424} className="h-full w-full ">
        <Label className="text-xl font-semibold ">Game</Label>
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
      </div>,

      <div key={12938129839108}>
        <div className="flex flex-col gap-3">
          <Label className="text-lg opacity-75 font-semibold ">
            Number of players
          </Label>
          <Input
            placeholder="1"
            type="number"
            value={NoPlayer}
            onChange={(e) =>
              setNP(parseInt(e.target.value) > 0 ? e.target.value : 0)
            }
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-lg opacity-75 font-semibold ">
            Tournament date
          </Label>
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
                  }}
                  disabled={
                    (date) => date <= new Date()
                    // || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>,
    ]);
  return (
    <div className="flex justify-center flex-col w-1/2 m-auto gap-3 clear">
      <div className="h-[65vh] flex flex-col gap-3">
        <div>
          <Card>
            <CardHeader className="flex justify-between flex-row items-center w-full ">
              <CardTitle>Create your tournament</CardTitle>
              <CardTitle>
                {currentStepIndex + 1} / {steps.length}
              </CardTitle>
            </CardHeader>
            <CardContent>{step}</CardContent>
            <CardFooter className="flex flex-row justify-between">
              {isFirstStep ? null : (
                <Button variant={"outline"} onClick={back}>
                  back
                </Button>
              )}
              {isLastStep ? (
                <Button variant={"destructive"}>Publish</Button>
              ) : (
                <Button onClick={next}>next</Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
