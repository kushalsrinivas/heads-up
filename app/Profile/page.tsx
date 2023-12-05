"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Profile from "@/components/Profile";
function Home() {
  const [User, setUser] = useState<Object | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClientComponentClient();
  const router = useRouter();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  };
  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, []);
  if (loading) {
    return (
      <h1 className="p-10 w-full text-center flex justify-center items-center text-white bg-black text-3xl font-bold">
        loading
      </h1>
    );
  } else {
    if (User) {
      return (
        <div>
          <Profile></Profile>
          <div className="p-10 w-full text-center flex justify-center items-center text-white bg-black text-3xl font-bold">
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      );
    } else {
      router.push("/Login");
    }
  }
}

export default Home;
