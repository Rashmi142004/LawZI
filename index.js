export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-6 font-sans">
      <nav className="flex flex-col space-y-2 text-sm mb-4">
        <strong>LAW-ZI</strong>
        <ul className="space-y-1 list-disc list-inside">
          <li>Home</li>
          <li>Ask a Question</li>
          <li>Upload Document</li>
          <li>Contact</li>
          <li>EN</li>
        </ul>
      </nav>
      <img src="/logo.png" alt="Lawzi Logo" className="w-32 h-auto mb-4" />
      <h1 className="text-3xl font-bold">LAW-ZI</h1>
      <p className="text-lg mb-4">Law Simplified for Gen Z</p>
      <div className="space-x-2">
        <button className="px-4 py-1 bg-blue-600 text-white rounded">Login</button>
        <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded">Sign Up</button>
      </div>
    </div>
  );
}
