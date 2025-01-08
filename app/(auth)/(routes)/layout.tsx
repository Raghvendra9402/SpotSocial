import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-slate-400 via-red-400 to-lime-500 h-full flex justify-center items-center">
      {children}
    </div>
  );
}
