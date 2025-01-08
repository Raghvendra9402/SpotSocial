"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export function LoginCard() {
  async function onclick(provider: "google" | "github") {
    try {
      const result = await signIn(provider, { redirect: false });
      console.log("Sign-in result:", result);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex gap-4 items-center bg-white p-3 rounded-lg shadow-md cursor-pointer justify-center hover:ring-2 hover:ring-emerald-500"
        onClick={() => onclick("google")}
      >
        <FcGoogle className="w-6 h-6" />
        <span className="text-xl font-sans font-semibold tracking-tight">
          Login With Google
        </span>
      </div>
      <div
        className="flex gap-4 items-center bg-white p-3 rounded-lg shadow-md cursor-pointer justify-center hover:ring-2 hover:ring-emerald-500"
        onClick={() => onclick("github")}
      >
        <FaGithub className="w-6 h-6" />
        <span className="text-xl font-sans font-semibold tracking-tight">
          Login With Github
        </span>
      </div>
    </div>
  );
}
