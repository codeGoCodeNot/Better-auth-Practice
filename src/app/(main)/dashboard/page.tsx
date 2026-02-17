import ProfileInformation from "@/features/dashboard/components/profile-information";
import EmailVerificationAlert from "@/features/email-verification/components/email-verification-alert";
import getSession from "@/lib/get-session";
import { verifyEmailPath } from "@/path";
import type { Metadata } from "next";
import { redirect, unauthorized } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) unauthorized();
  if (!user.emailVerified) redirect(verifyEmailPath());

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s your account overview.
          </p>
        </div>

        {!user.emailVerified && <EmailVerificationAlert />}
        <ProfileInformation user={user} />
      </div>
    </main>
  );
};

export default DashboardPage;
