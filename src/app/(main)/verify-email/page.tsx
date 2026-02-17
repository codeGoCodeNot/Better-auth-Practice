import getSession from "@/lib/get-session";
import { dashboardPath } from "@/path";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ResendVerificationButton from "../../../features/email-verification/components/resend-verification-button";

export const metadata: Metadata = {
  title: "Verify Email",
};

const VerifyEmailPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) return null;

  if (user.emailVerified) redirect(dashboardPath());

  return (
    <main className="flex flex-1 items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Verify your email</h1>
          <p className="text-muted-foreground">
            A verification email was sent to your inbox.
          </p>
        </div>
        <ResendVerificationButton email={user.email} />
      </div>
    </main>
  );
};

export default VerifyEmailPage;
