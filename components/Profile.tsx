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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./Theme-toogle";
import { LogOut, DollarSign, BarChart, Settings } from "lucide-react";
import DashBoard from "./profile/DashBoard";
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
  return (
    <div className="h-full flex flex-row w-full dark:bg-black ">
      <div className="flex p-10 w-1/4 flex-col gap-2  ">
        {options.map((item, id) => {
          return <h1 key={id}>{item.name}</h1>;
        })}
      </div>
      <div className="w-full">{Display.component}</div>
    </div>
  );
};

export default Profile;
