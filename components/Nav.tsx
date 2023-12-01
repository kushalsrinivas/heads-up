import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Link from "next/link";

function Nav() {
  return (
    <div className="w-full  flex flex-row bg-black justify-between p-5 align-middle">
      <div>
        <h1 className="text-4xl text-white font-black tracking-tighter hover:tracking-wide ease-in-out transition-all">
          <Link href={"/"}>HEADS UP</Link>
        </h1>
      </div>
      <div className="flex flex-row  gap-2">
        <Button variant={"secondary"}>create tournament</Button>
        <Link href={"/Login"}>
          <Button>Profile</Button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
