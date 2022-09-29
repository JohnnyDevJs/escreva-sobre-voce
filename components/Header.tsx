import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChatCentered, Lock, CopySimple, PlusCircle } from 'phosphor-react'

const Header = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  const router = useRouter()
  const isActive: (pathname: string) => boolean = pathname =>
    router.pathname === pathname

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <header className="w-100 h-16 bg-[#e0e8ee] flex items-center">
      <div className="w-[1344px] mx-auto flex justify-between">
        <div className="flex items-center gap-7">
          <button className="bg-green-700 hover:bg-green-500 transition duration-300 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2">
            <ChatCentered size={20} weight="bold" />
            Posts
          </button>
          {session ? (
            <>
              <button className="bg-green-500 border border-green-500 hover:border-green-700 hover:bg-green-700 transition duration-300 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2">
                <CopySimple size={20} weight="bold" />
                Drafts
              </button>

              <button className="bg-transparent border border-green-700 hover:bg-green-700 hover:border-green-700 hover:text-white transition duration-300 text-green-700 font-medium py-2 px-4 rounded-lg flex items-center gap-2">
                <PlusCircle size={20} weight="bold" />
                New post
              </button>
            </>
          ) : null}
        </div>

        {session ? (
          <>
            <div className="flex items-center gap-5">
              <button
                onClick={() => signOut()}
                className="bg-green-500 hover:bg-green-700 border border-green-500 hover:border-green-700 transition duration-300 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2"
              >
                <Lock size={20} weight="bold" />
                Logout
              </button>
              <div className="w-11 h-11 rounded-full bg-violet-300 relative">
                <Image
                  className="object-cover rounded-full absolute overflow-hidden w-full h-full"
                  layout="fill"
                  src={session.user.image}
                  alt={session.user.name}
                />
              </div>
            </div>
          </>
        ) : (
          <Link passHref href="/signin">
            <button className="bg-green-500 hover:bg-green-700 border border-green-500 hover:border-green-700 transition duration-300 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2">
              <Lock size={20} weight="bold" />
              Sign In
            </button>
          </Link>
        )}
      </div>
    </header>
  )
}

export { Header }
