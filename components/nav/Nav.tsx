import Link from "next/link";
import React from "react";
import { AnimatedModalNav } from "./animated-modal-nav/AnimatedModalNav";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex justify-between px-10 py-5 shadow-sm">
      <Link legacyBehavior href="/">
          <Image src="/images/logo.svg" width={120} height={120} alt="logo" className="cursor-pointer"/>
      </Link>

      <ul className="text-brand font-medium flex items-center gap-3">
        <li>
          <Link href="/publier">Publier une annonce</Link>
        </li>
        <li>
          <AnimatedModalNav />
        </li>
      </ul>
    </nav>
  );
}
