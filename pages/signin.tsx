import type { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { Layout } from '../components/Layout'

const SignIn: NextPage = () => {
  return (
    <Layout>
      <div className="w-96 mx-auto flex items-center flex-col gap-3 h-full">
        <button
          className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 gap-2"
          onClick={() => signIn('google')}
        >
          <div className="relative flex items-center space-x-11 justify-center">
            <Image
              width="30"
              height="30"
              src=" https://img.icons8.com/color/48/000000/google-logo.png"
            />

            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
              Continue with Google
            </span>
          </div>
        </button>

        <button
          className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
          onClick={() => signIn('facebook')}
        >
          <div className="relative space-x-6 flex items-center justify-center w-full">
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
            />
            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
              Continue with Facebook
            </span>
          </div>
        </button>

        <button
          className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
          onClick={() => signIn('github')}
        >
          <div className="relative space-x-11 flex items-center justify-center w-full">
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
            />
            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
              Continue with Github
            </span>
          </div>
        </button>
      </div>
    </Layout>
  )
}

export default SignIn
