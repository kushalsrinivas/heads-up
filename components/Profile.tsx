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

interface ProfileProps {
  username: string;
}

const Profile: FC<ProfileProps> = (props) => {
  return (
    <div className="h-full w-full bg-black text-white ">
      <div className="flex flex-row">
        <Card>
          <CardHeader>
            <CardTitle>{props.username}</CardTitle>
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
