"use client";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect, useContext, use, useState } from "react";
import { BounceLoader } from "react-spinners";
import { useStoreContext } from "./Context/Store";
import Link from "next/link";
import { Event } from "@/@types/schema";
import EventCard from "@/components/events/Event_card";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Event[] | null>(null);
  const ctx = useStoreContext();
  useEffect(() => {
    ctx.getSession();
  }, []);
  useEffect(() => {
    ctx
      .getEvents()
      .then((res) => res)
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, [ctx.token]);

  return (
    <div className="h-screen bg-black">
      <Header></Header>
      <h1 className="text-white text-3xl bg-black font-bold">
        {ctx.token ? (
          <h1 className="text-yellow-400 w-[95%] m-auto mt-4">
            <span className="text-white mr-3">welcome back</span>
            {ctx.token.user_metadata.full_name}
          </h1>
        ) : (
          <h1 className="text-white">lets game</h1>
        )}
      </h1>
      <div className="text-white flex flex-row items-center gap-3 w-[95%] m-auto my-5 text-4xl font-bold">
        Live
        <BounceLoader
          color="rgba(214, 54, 54, 1)"
          size={26}
          speedMultiplier={1}
        />
      </div>
      {events ? (
        <div className="w-[95%] m-auto grid grid-cols-4 gap-5 ">
          {events?.map((tournament, id) => {
            return (
              <Link
                className="min-h-[900px]"
                key={id}
                href={`Match/${tournament.uuid}`}
              >
                <EventCard tournament={tournament}></EventCard>
              </Link>
            );
          })}
        </div>
      ) : (
        "loading events"
      )}
    </div>
  );
}
