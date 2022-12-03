import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const navLinks = [
    {
      id: 1,
      name: "About Us",
      url: "/aboutus",
    },
    {
      id: 2,
      name: "Partners",
      url: "/partners",
    },
  ];
  return (
    <div
      style={{
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px",
      }}
      className="sticky top-0 bg-black z-2 max-w-row mx-auto px-4 "
    >
      <div className="max-w-row mx-auto flex flex-row justify-between items-center px-4 py-4 md:px-2 ">
        <div className="w-fit">
          <Link href="/" prefetch={false} legacyBehavior>
            <a>
              <img src="/images/transp-logo1.png" className="h-12 px-2"></img>
            </a>
          </Link>
        </div>
        <div className="hidden md:block md:w-2/5">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                prefetch={false}
                legacyBehavior
              >
                <a
                  className={`font-semibold text-white ${
                    router.pathname === link.url
                      ? "opacity-100 border-b-4 border-white"
                      : "opacity-60"
                  }`}
                >
                  <li>{link.name}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex gap-4">
            <button value="Login" onClick={() => router.push("/login")} />
          </div>
        </div>
      </div>
    </div>
  );
}
