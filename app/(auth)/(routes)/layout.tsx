import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-sky-50 h-full flex justify-center items-center">
      {children}
    </div>
  );
}
