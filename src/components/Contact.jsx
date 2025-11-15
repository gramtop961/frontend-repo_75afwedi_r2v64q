import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/hello`)
      const data = await res.json()
      setStatus({ ok: true, message: data.message || 'Sent!' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: 'Something went wrong.' })
    }
  }

  return (
    <form onSubmit={submit} className="max-w-xl space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input name="name" required className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input name="email" type="email" required className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
      </div>
      <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-white hover:bg-gray-800">Send</button>
      {status && (
        <p className={status.ok ? 'text-green-600' : 'text-red-600'}>{status.message}</p>
      )}
    </form>
  )
}
