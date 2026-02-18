import getSession from "@/lib/get-session";
import { dashboardPath } from "@/path";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getSession();
  const user = session?.user;

  if (user) redirect(dashboardPath());

  return children;
};

export default AuthLayout;
