"use client";

import { LoadingButton } from "@/components/loading-button";
import { authClient } from "@/lib/auth-client";
import { signInPath } from "@/path";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { set } from "zod";

export function LogoutEverywhereButton() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogoutEverywhere = async () => {
    setLoading(true);

    const { error } = await authClient.revokeSessions();

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
      router.push(signInPath());
    }
  };

  return (
    <LoadingButton
      variant="destructive"
      onClick={handleLogoutEverywhere}
      loading={loading}
      className="w-full"
    >
      Log out everywhere
    </LoadingButton>
  );
}
