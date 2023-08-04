import Link from 'next/link'

export default function LoginButton() {
  return (
    <Link
      href="/login"
      className="py-2 px-4 rounded-md no-underline bg-gray-300 text-gray-900 hover:bg-gray-200"
    >
      Ingresar
    </Link>
  )
}
