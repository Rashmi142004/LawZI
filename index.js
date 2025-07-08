import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>LAW-ZI | Law Simplified for Gen Z</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-lightGrey text-white px-6 py-12">
        <nav className="w-full max-w-5xl flex justify-between items-center text-sm mb-8">
          <div className="text-lg font-heading">LAW-ZI</div>
          <div className="flex gap-6 font-body text-white">
            <a href="#" className="hover:text-lightGrey">Home</a>
            <a href="#" className="hover:text-lightGrey">Ask AI</a>
            <a href="#" className="hover:text-lightGrey">Docs</a>
            <a href="#" className="hover:text-lightGrey">About</a>
            <a href="#" className="hover:text-lightGrey">Contact</a>
          </div>
        </nav>

        <img src="/logo.png" alt="Lawzi Logo" className="w-28 h-28 mb-6" />
        <h1 className="text-5xl font-heading font-bold mb-2 text-primary">LAW-ZI</h1>
        <p className="text-md font-body mb-8 text-white">Law Simplified for Gen Z</p>

        <div className="flex gap-4 mb-6">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">Login</button>
          <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">Sign Up</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-lg mb-6">
          <select className="bg-darkGrey text-white px-4 py-2 rounded">
            <option>Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          <select className="bg-darkGrey text-white px-4 py-2 rounded">
            <option>Select Language</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
          <select className="bg-darkGrey text-white px-4 py-2 rounded">
            <option>Select Category</option>
            <option>FIR</option>
            <option>Harassment</option>
            <option>Property</option>
          </select>
        </div>

        <a href="#">
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition font-semibold">
            Ask a Legal Question
          </button>
        </a>
      </div>
    </>
  );
}