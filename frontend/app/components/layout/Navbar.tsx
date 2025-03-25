import { Calendar } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-5 flex items-center justify-between text-black">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center space-x-2">
            <Calendar className="h-6 w-6" />
            <span className="font-bold inline-block lg:text-xl">EventManager</span>
          </Link>
      </div>

      <div className="flex items-center gap-8 sm:text-lg font-medium">
        <button>
          <Link href="/login">Login</Link>
        </button>
        <button>
          <Link href="/signup">Signup</Link>
        </button>
      </div>

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
    </nav>
  );
}
