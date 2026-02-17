import { ResetPasswordForm } from "@/features/auth/components/reset-password-form";

interface ResetPasswordUIProps {
  token: string;
}

const ResetPasswordUI = ({ token }: ResetPasswordUIProps) => {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Reset password</h1>
        <p className="text-muted-foreground">Enter your new password below.</p>
      </div>
      <ResetPasswordForm token={token} />
    </div>
  );
};

export default ResetPasswordUI;
