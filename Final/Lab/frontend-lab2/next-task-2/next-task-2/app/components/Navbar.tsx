import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-950 text-white p-4 flex justify-between">
      <h1 className="font-bold">EventHub</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/customer/dashboard">Customer Dashboard</Link>
        <Link href="/users">Users</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
}
