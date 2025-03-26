import { Link } from 'next-view-transitions';

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <p className="text-3xl font-semibold">
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
