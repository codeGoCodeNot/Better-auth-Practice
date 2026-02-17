import type { Metadata } from "next";
import { DeleteApplication } from "@/features/admin/components/delete-application";
import getSession from "@/lib/get-session";
import { forbidden, unauthorized } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
};

const AdminPage = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) unauthorized();
  if (user?.role !== "admin") forbidden();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Admin</h1>
          <p className="text-muted-foreground">
            You have administrator access.
          </p>
        </div>
        <DeleteApplication />
      </div>
    </main>
  );
};

export default AdminPage;
