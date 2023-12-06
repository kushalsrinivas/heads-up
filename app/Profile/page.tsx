"use client";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Profile from "@/components/Profile";
import { UserData, userMetaData, UserMetadata } from "@/schema/schema";
function Home() {
  const [User, setUser] = useState<userMetaData | null>(null);
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
      if (user && user.user_metadata) {
        setUser(user.user_metadata as UserMetadata);
      }
      setLoading(false);
    }

    getUser();
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
          <div className="p-10 w-full text-center flex justify-center items-center  dark:bg-black text-3xl font-bold">
            <Button variant={"destructive"} onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      );
    } else {
      router.push("/Login");
    }
  }
}

export default Home;
