export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="py-2 px-4 rounded-md no-underline bg-gray-300 text-gray-900 hover:bg-gray-200">
        Salir
      </button>
    </form>
  )
}
