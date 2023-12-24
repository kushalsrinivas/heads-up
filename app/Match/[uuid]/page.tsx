"use client";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect } from "react";

function Page() {
  const params = useParams<{ uuid: string }>();
  console.log(params.uuid);
  return <div>{params.uuid}</div>;
}

export default Page;
