import { signOut } from "@/auth";
import { Button } from "./ui/button";

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({
          redirectTo: "/",
        });
      }}
    >
      <Button type="submit">Log Out</Button>
    </form>
  );
}
