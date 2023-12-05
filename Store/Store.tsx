import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
export const GETSESSION = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    console.log(user);
  }
  return user;
};
