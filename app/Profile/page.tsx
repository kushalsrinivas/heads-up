"use client";

import { Button } from "@/components/ui/button";
import { useStoreContext } from "../Context/Store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Profile from "@/components/Profile";
import { UserData, userMetaData, UserMetadata } from "@/schema/schema";
function Home() {
  const [User, setUser] = useState<userMetaData | null>(null);
  const [loading, setLoading] = useState(true);
  const ctx = useStoreContext();

  const router = useRouter();
  const handleLogout = async () => {
    ctx.LogoutSession();
    router.push("/Login");
  };
  useEffect(() => {
    if (ctx.token) {
      setLoading(false);
      setUser(ctx.token.user_metadata);
    }
  }, []);
  if (loading) {
    return (
      <h1 className="p-10 w-full text-center flex justify-center items-center dark:bg-black text-3xl font-bold">
        loading
      </h1>
    );
  } else {
    if (User) {
      return (
        <div>
          <Profile
            username={User.full_name}
            avatar_url={User.avatar_url}
          ></Profile>
        </div>
      );
    } else {
      router.push("/Login");
    }
  }
}

export default Home;
