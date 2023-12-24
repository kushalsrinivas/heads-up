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
    <div className="h-full">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex flex-row w-full justify-between">
            <h1>{tournament.name}</h1>
            <h1 className="text-green-300">${tournament.pricepool.pool}</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{tournament.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <CardDescription className="flex w-full  flex-row justify-between">
            <div className="text-white opacity-50">{tournament.game}</div>
            <div className="text-white opacity-50">
              {tournament.creator_name}
            </div>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EventCard;
