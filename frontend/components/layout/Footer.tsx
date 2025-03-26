"use client";

import {Link} from "next-view-transitions";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto border-t border-gray-200 bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-between">
            <Link href="/">
              <p className="text-2xl font-semibold">
                <span className="text-blue-500">EventoFacil</span>
              </p>
            </Link>
        </div>
      </div>
    </footer>
  );
}