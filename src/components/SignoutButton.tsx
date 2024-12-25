"use client";

import Image from "next/image";
import React from "react";
import { SignOutButton } from "@clerk/nextjs";
export default function SignoutButton() {
  return (
    <SignOutButton redirectUrl="/">
      <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight cursor-pointer">
        <Image src="/logout.png" alt="" width={20} height={20} />
        <span className="hidden lg:block">Logout</span>
      </div>
    </SignOutButton>
  );
}
