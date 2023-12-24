import React from "react";
import { Event } from "@/@types/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface EventCardProps {
  tournament: Event;
}

const EventCard: React.FC<EventCardProps> = ({ tournament }) => {
  return (
    <div className="text-white">
      <Card>
        <CardHeader>
          <CardTitle>{tournament.name}</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <CardDescription className="flex w-full flex-row justify-between">
            <div>{tournament.game}</div>
            <div>{tournament.creator_name}</div>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventCard;
