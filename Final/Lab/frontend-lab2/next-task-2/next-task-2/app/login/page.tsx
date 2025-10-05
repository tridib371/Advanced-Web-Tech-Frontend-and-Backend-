export default function LoginPage() {
  return (
    <> 
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"/>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"/>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
    </>
  );
}
