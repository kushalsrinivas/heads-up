"use client";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect, useContext, use, useState } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useStoreContext } from "./Context/Store";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Object | null>(null);
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
          <h1 className="text-green-500">
            {ctx.token.user_metadata.full_name}
          </h1>
        ) : (
          <h1 className="text-white">lets game</h1>
        )}
      </h1>
      <h2 className="text-white font-bold">{events ? "done" : "loading"}</h2>
      {events ? (
        <div>
          {events?.map((tournament, id) => {
            return (
              <Link key={id} href={`Match/${tournament.uuid}`}>
                <div>{tournament.name}</div>
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
