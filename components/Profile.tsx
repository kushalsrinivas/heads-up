import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DashBoard from "./profile/DashBoard";
import Settings from "./profile/Settings";
import { useStoreContext } from "@/app/Context/Store";
interface ProfileProps {
  username: string;
  avatar_url: string;
}

const Profile: FC<ProfileProps> = (props) => {
  const options = [
    {
      name: "dashboard",
      component: (
        <DashBoard username={props.username} avatar_url={props.avatar_url} />
      ),
    },
    {
      name: "settings",
      component: <Settings></Settings>,
    },
  ];
  const [Display, setDisplay] = useState(options[0]);
  const ctx = useStoreContext();
  return (
    <div className="h-full flex flex-row w-full dark:bg-black ">
      <div className="flex p-10 w-1/4 flex-col gap-2  ">
        {options.map((item, id) => {
          return (
            <Button
              variant={"outline"}
              onClick={() => {
                setDisplay(
                  options.filter((temp, id) => temp.name === item.name)[0]
                );
              }}
              name={item.name}
              key={id}
            >
              {item.name}
            </Button>
          );
        })}
        <Button disabled variant={"ghost"}>
          Clan
        </Button>
        <Button
          onClick={() => {
            ctx.LogoutSession();
          }}
          variant={"destructive"}
        >
          Log Out
        </Button>
      </div>
      <div className="w-full">{Display.component}</div>
    </div>
  );
};

export default Profile;
