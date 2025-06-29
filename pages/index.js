import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    })
    const data = await res.json()
    setAnswer(data.answer)
    setLoading(false)
  }

  return (
    <div>
      <Head>
        <title>Lawzi</title>
        <meta name="description" content="Simplify Legal Answers with AI" />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Welcome to Lawzi 👩‍⚖️</h1>
        <p>Get simplified legal answers instantly.</p>

        <form onSubmit={handleSubmit}>
          <textarea
            rows={4}
            placeholder="Type your legal question here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: '100%', padding: '10px', marginTop: '1rem' }}
            required
          />
          <button type="submit" style={{ marginTop: '1rem' }}>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>

        {answer && (
          <div style={{ marginTop: '2rem', background: '#f2f2f2', padding: '1rem' }}>
            <h3>AI Response:</h3>
            <p>{answer}</p>
          </div>
        )}
      </main>
    </div>
  )
}
