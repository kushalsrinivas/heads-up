"use client";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useStoreContext } from "@/app/Context/Store";
import { Event } from "@/@types/schema";

function Page() {
  const ctx = useStoreContext();
  const params = useParams<{ uuid: string }>();
  const [data, setData] = useState<Event | null>(null);
  useEffect(() => {
    ctx
      .FindEvent(params.uuid)
      .then((res) => res)
      .then((result) => {
        console.log(result);
        setData(result[0]);
      });
  }, []);
  if (!data) {
    return <div>loading</div>;
  }
  return (
    <div>
      <ul>
        <li>{data.name}</li>
        <li>{data.creator_name}</li>
        <li>{data.game}</li>
        <li>{data.description}</li>
        <li>{data.no_players}</li>
      </ul>
    </div>
  );
}

export default Page;
