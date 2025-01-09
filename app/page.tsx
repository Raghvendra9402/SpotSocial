import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { GiBrain } from "react-icons/gi";

export default async function Home() {
  const session = await auth();
  if (session) redirect("/dashboard");
  return (
    <>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex gap-4 mb-6 text-purple-500">
          <GiBrain className="w-12 h-12" />
          <h1 className="text-5xl font-bold">SpotSocial</h1>
        </div>
        <div className="max-w-prose text-center">
          <p className="text-slate-600">
            Your ultimate hub for organizing all your social media content in
            one place—find what you need effortlessly with cutting-edge
            technology!
          </p>
        </div>
      </div>
    </>
  );
}
