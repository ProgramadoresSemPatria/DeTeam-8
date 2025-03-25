import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            <span className="text-green-500">FinAI</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-purple-500 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-purple-500 transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link
          className="text-sm font-medium hover:text-purple-500 transition-colors"
          href="/SignIn"
        >
          Login
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-500 transition-colors"
          href="/SingUp"
        >
          Sign up
        </Link>
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
