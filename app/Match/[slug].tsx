import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Match() {
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);
  }, []);
  return <div className="text-white text-4xl">sdfsd;fks;dlkf</div>;
}

export default Match;
