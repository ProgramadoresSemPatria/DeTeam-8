import { Calendar } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="max-w-7xl mx-auto py-5 sticky top-0 z-50 bg-white">
      <nav className='flex items-center justify-between'>
        <div className="flex items-center gap-6">
          <Link href="/">
            <p className="text-3xl font-semibold flex items-center gap-1">
              <Calendar className="h-6 w-6 text-blue-500" />
              <span className="text-blue-500">EventoFacil</span>
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link
            className="text-md font-medium hover:text-blue-500 transition-colors"
            href="/sign-in"
          >
            Login
          </Link>
          <Link
            className="text-md font-medium hover:text-blue-500 transition-colors"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* {user ? (
        <div className="flex items-center gap-4">
          <p>{user.name}</p>
          <button>Logout</button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <button>Login</button>
          <button>Sing up</button>
        </div>
      )} */}
    </header>
  );
}
