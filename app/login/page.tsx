import Link from 'next/link'
import Messages from './messages'

export default function Login() {
  return (
    <div className="flex flex-col w-full p-2 max-w-md justify-center gap-4">

      <div className='flex'>
        <Link
          href="/"
          className="py-2 px-4 rounded-md no-underline text-gray-900 bg-gray-300 hover:bg-gray-200 flex items-center group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg> Back
        </Link>
      </div>

      <form
        className="flex flex-col w-full justify-center gap-2"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          value="example@email.com"
          required
        />
        
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          value="example-password"
          placeholder="••••••••"
          required
        />
        
        <button className="bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 mb-2">
          Sign In
        </button>
        <Messages />
      </form>
    </div>
  )
}
