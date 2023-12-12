"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  return (
    <div className="flex justify-center flex-col w-1/2 m-auto clear">
      <div>
        <Label>Name </Label>
        <Input
          placeholder="Valorant epic battle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Label>Game </Label>
        <Input
          placeholder="Valorant epic battle"
          type="week"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>{" "}
      <div>
        <Label>Name </Label>
        <Input
          placeholder="Valorant epic battle"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
