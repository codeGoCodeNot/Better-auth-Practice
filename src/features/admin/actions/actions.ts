"use server";

import getSession from "@/lib/get-session";
import { forbidden, unauthorized } from "next/navigation";
import { setTimeout } from "node:timers/promises";

export const deleteApplication = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) unauthorized();
  if (user?.role !== "admin") forbidden();

  await setTimeout(800);
};
