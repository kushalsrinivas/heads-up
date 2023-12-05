import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect, useContext, use } from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import StoreContext from "@/Store/Store";
export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { getSession, setSession, token } = useContext(StoreContext);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    console.log(user);
    setSession(user);
    return (
      <h1 className="text-white bg-black">{user.user_metadata.full_name}</h1>
    );
  }
  return (
    <div>
      <Header></Header>
    </div>
  );
}
