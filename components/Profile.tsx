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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileProps {
  username: string;
  avatar_url: string;
}

const Profile: FC<ProfileProps> = (props) => {
  return (
    <div className="h-full w-full bg-black text-white ">
      <div className="flex flex-row p-10 ">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage src={props.avatar_url} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {props.username}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{props.username}</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
