import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { GiBrain } from "react-icons/gi";

export default async function Home() {
  const session = await auth();
  if (session) redirect("/dashboard");
  return (
    <>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex gap-4 mb-6">
          <GiBrain className="w-12 h-12" />
          <h1 className="text-5xl font-bold">SpotSocial</h1>
        </div>
        <div className="max-w-prose text-center">
          <p className="text-slate-600">
            A place where you can save your social media content at one place
            and find content hassle free using new tech stack.
          </p>
        </div>
      </div>
    </>
  );
}
