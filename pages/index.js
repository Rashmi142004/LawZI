import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-body">
      <Head>
        <title>Lawzi - Law Simplified for Gen Z</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* NAVIGATION */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-3xl font-display tracking-wider">LAW-ZI</div>
        <ul className="flex gap-6 text-sm">
          <li>Home</li>
          <li>Ask a Question</li>
          <li>Upload Document</li>
          <li>Contact</li>
          <li className="border px-2 py-1 rounded">🌐 EN</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <main className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <Image src="/logo.png" alt="Lawzi Logo" width={120} height={120} />
        <h1 className="mt-6 text-5xl font-display font-bold">LAW-ZI</h1>
        <p className="mt-4 text-xl text-gray-300">Law Simplified for Gen Z</p>

        <div className="mt-8 flex gap-6">
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">Login</button>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black">Sign Up</button>
        </div>
      </main>
    </div>
  )
}
