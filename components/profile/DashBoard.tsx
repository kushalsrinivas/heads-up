import React, { FC } from "react";
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
import { LogOut, DollarSign, BarChart } from "lucide-react";
interface ProfileProps {
  username: string;
  avatar_url: string;
}
const DashBoard: FC<ProfileProps> = (props) => {
  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex flex-row items-center justify-between gap-3">
            <div className="">DASHBOARD</div>
            <div>
              <div className="flex flex-row gap-3 items-center">
                <Avatar>
                  <AvatarImage src={props.avatar_url} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {props.username}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex lg:flex-row flex-col items-center gap-5 ">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-row items-center gap-3 justify-between">
                    <DollarSign className="h-4 w-4 "></DollarSign>
                    <h1 className="font-normal">wallet</h1>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-xl">$ 239</div>
                <CardDescription>Balance</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-row items-center gap-3 justify-between">
                    <BarChart className="h-4 w-4 "></BarChart>
                    <h1 className="font-normal">Earned</h1>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-xl">$ 2429</div>
                <CardDescription>total money earnt</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-row items-center gap-3 justify-between">
                    <BarChart className="h-4 w-4 "></BarChart>
                    <h1 className="font-normal">Matches</h1>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-xl">+29</div>
                <CardDescription>total matches played</CardDescription>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashBoard;
