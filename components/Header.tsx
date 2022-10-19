import React from "react"
import Image from "next/image"
import { BellIcon, EyeIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon, ChatIcon } from '@heroicons/react/outline'
import { HomeIcon, ChevronDownIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'



function Header() {
  const { data: session } = useSession();

  return (
    <div className=" sticky top-0 z-50 flex bg-white items-center px-4 shadow-sm ">

      <div className="relative h-20 w-36 flex-shrink-0 cursor-pointer">
        <Image
          src="https://i.ibb.co/HKPbQbB/logo-rabbit.png"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <ChevronDownIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
      </div>
      
      {/* Search Box */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input className="flex-1 bg-transparent outline-none" type="text" placeholder="Search Rabbit" />
        <button type="submit" hidden />
      </form>

      <div className="mx-5 items-center space-x-2 text-gray-500 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      {session ? (<div onClick={() => signOut()} className="hidden items-center space-x-2 border border-gray-100 p-2 lg:flex ">
        <div className="relative h-6 w-6 flex-shrink-0">
          <Image
            src="https://i.ibb.co/YhMfWy0/logo-full-screen.png"
            layout="fill"
            objectFit="contain"
            alt="log in"
          />
        </div>
        <div className="flex-1 text-xs">
          <p className="truncate">{session?.user?.name}</p>
          <p className="text-gray-300">sign Out</p>
        </div>
      </div>
      ) : (
        <div onClick={() => signIn()} className="hidden items-center space-x-2 border border-gray-100 p-2 lg:flex ">
          <div className="relative h-6 w-6 flex-shrink-0 grayscale">
            <Image
              src="https://i.ibb.co/YhMfWy0/logo-full-screen.png"
              layout="fill"
              objectFit="contain"
              alt="log in"
            />
          </div>
          <p className="text-gray-300">Sign In</p>
        </div>
      )}

      {/* Sign in/out */}
      {/* onClick: make an arrow function to match the signature */}

    </div>
  )
}

export default Header

