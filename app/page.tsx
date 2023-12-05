import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect, useContext, use, useState } from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  return (
    <div className="h-screen bg-black">
      <Header></Header>
      <h1 className="text-white text-3xl bg-black font-bold">
        {user ? (
          <>
            <h1 className="text-white">welcome back</h1>{" "}
            <h1 className="text-green-500">{user.user_metadata.full_name}</h1>
          </>
        ) : (
          "lets game"
        )}
      </h1>
    </div>
  );
}
