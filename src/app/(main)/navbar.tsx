import codingInFlowLogo from "@/assets/coding_in_flow_logo.jpg";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/user-dropdown";
import getSession from "@/lib/get-session";
import { dashboardPath, verifyEmailPath } from "@/path";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export const Navbar = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    return null;
  }

  return (
    <header className="bg-background border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {user.emailVerified ? (
          <Link
            href={dashboardPath()}
            className="flex items-center gap-2 font-semibold"
          >
            <Image
              src={codingInFlowLogo}
              alt="Coding in Flow logo"
              width={32}
              height={32}
              className="border-muted rounded-full border"
            />
            Better-Auth Tutorial
          </Link>
        ) : (
          <div className="flex items-center gap-2 font-semibold">
            <Image
              src={codingInFlowLogo}
              alt="Coding in Flow logo"
              width={32}
              height={32}
              className="border-muted rounded-full border"
            />
            <p>Better-Auth Tutorial</p>
          </div>
        )}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserDropdown user={user} />
        </div>
      </div>
    </header>
  );
};
