"use client";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect, useContext, use, useState } from "react";
// import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useStoreContext } from "./Context/Store";

export default function Home() {
  // const cookieStore = cookies();
  // const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const [loading, setLoading] = useState(false);
  const ctx = useStoreContext();
  useEffect(() => {
    ctx.getSession();
  }, []);
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

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
    </div>
  );
}
