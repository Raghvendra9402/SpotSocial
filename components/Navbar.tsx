import Link from "next/link";
import { GiBrain } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { auth } from "@/auth";
import { SignOutButton } from "./signoutButton";

export default async function Navbar() {
  const session = await auth();
  return (
    <header className="bg-neutral-200/90 px-2 md:px-5 lg:px-10 py-5 border-b">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <GiBrain className="w-10 h-9 text-purple-500" />
          <h1 className="hidden md:block text-3xl font-semibold bg-gradient-to-b from-purple-400 to-purple-700 text-transparent bg-clip-text">
            SpotSocial
          </h1>
        </Link>

        {session == null ? (
          <div className="max-w-32 flex items-center gap-1 bg-black text-white p-3 rounded-xl cursor-pointer">
            <Link href={"/dashboard"}>Get Started </Link>
            <FaArrowRight />
          </div>
        ) : (
          <div>
            <SignOutButton />
          </div>
        )}
      </div>
    </header>
  );
}
