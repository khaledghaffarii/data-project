// import {
//   GlobeAltIcon,
//   MenuIcon,
//   UserCircleIcon,
//   SearchIcon,
//   UsersIcon,
// } from '@heroicons/react/solid'
// import { useState } from 'react'

// import { useRouter } from 'next/dist/client/router'

// function Header({ placeholder }) {
//   const [startDate, setStartDate] = useState(new Date())
//   const [endDate, setEndDate] = useState(new Date())
//   const [searchInput, setSearchInput] = useState('')
//   const [noOfGuests, setNoOfGuests] = useState(1)
//   const router = useRouter()

//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     key: 'selection',
//   }

//   function resetInput() {
//     setSearchInput('')
//   }

//   function search() {
//     if (!searchInput) return

//     router.push({
//       pathname: '/search',
//       query: {
//         location: searchInput,
//         startDate: startDate.toISOString(),
//         endDate: endDate.toISOString(),
//         noOfGuests,
//       },
//     })

//     setSearchInput('')
//   }

//   return (
//     <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-6 px-6 shadow-md md:px-10">
//       {/* Search */}{' '}
//       <div class="ml-48 mt-1 w-full">
//         <div className="ml-7 mr-7 flex   rounded-full py-2 md:border-2 md:shadow-sm">
//           <input
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && search()}
//             placeholder={placeholder || 'Start your Search'}
//             className="flex-grow bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 outline-none"
//           />
//           <SearchIcon className="mx-auto hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
//         </div>
//       </div>
//       <div class="ml-60 ">
//         <div class="justify-content mt-3 flex py-0">
//           <select
//             class="form-select m-0 block w-72 border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-2 text-base font-normal text-gray-500 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
//             aria-label="Default select example"
//           >
//             <option selected>Facebook_UID</option>
//             <option value="1">First_Name_FB</option>
//           </select>
//         </div>
//       </div>
//       {/* Right */}
//       <div className=" flex justify-between">
//         {' '}
//         <div className="justify-content  flex items-center space-x-4 text-gray-500">
//           <p className="hidden cursor-pointer md:inline">Search from</p>
//           <p className="hidden cursor-pointer md:inline">import</p>
//           <p className="hidden cursor-pointer md:inline">Status</p>
//           <p className="hidden cursor-pointer md:inline">Update</p>
//           <p className="hidden cursor-pointer md:inline">Settings</p>
//         </div>
//         <div className="flex items-center  space-x-2 rounded-full border-2 p-2 text-gray-500">
//           <MenuIcon className="h-6 cursor-pointer" />
//           <UserCircleIcon className="h-6 cursor-pointer" />
//         </div>
//       </div>
//       {/* Calender */}
//     </header>
//   )
// }

// export default Header
import {
  //MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  //SearchIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
//import { useSelector } from 'react-redux'
//import { selectItems } from '../slices/basketSlice'
import { useRouter } from 'next/router'
//import { signIn, signOut, useSession } from "next-auth/client";
import { Fragment } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
function Header() {
  //const items = useSelector(selectItems)
  //const router = useRouter()
  //const [session] = useSession()
  const { data: session } = useSession()
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  console.log(HTMLImageElement.src)
  return (
    <header className="sticky top-0 z-50">
      <div className="flex-grow items-center bg-amazon_blue p-1 py-2 lg:flex">
        <div className="mt-2 hidden  flex-grow items-center sm:flex-grow-0  lg:flex">
          <p className="h-15 ml-12 w-36  animate-pulse  font-mono text-3xl text-white">
            Home
          </p>
        </div>
        {/* Search */}
        <div className=" flex h-10 flex-grow cursor-pointer items-center rounded-md bg-yellow-500 hover:bg-yellow-600">
          <input
            className="h-full w-full flex-shrink flex-grow rounded-l-md p-2 px-4 focus:outline-none  "
            type="text "
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* select */} {/* Right */}
        <div class="flex justify-between">
          <div class=" mb-3   lg:ml-10">
            <div class="justify-content mt-3  py-0 lg:flex lg:w-full">
              <select
                class="form-select m-0 block w-64 rounded-md border  border-solid border-gray-300 bg-white bg-clip-padding px-3  py-2 text-base font-normal text-gray-800 transition ease-in-out focus:border-blue-600 focus:bg-white  focus:text-gray-900  focus:outline-none lg:w-72 "
                aria-label="Default select example"
              >
                <option defaultValue="0" selected>
                  Facebook_UID
                </option>
                <option value="1">First_Name_FB</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-6 whitespace-nowrap text-xs text-white lg:mx-6">
            <div
              // onClick={!session ? signIn : signOut}
              className="link cursor-pointer"
            >
              {/* <p className="hover:underline">
                {session ? `Hello, ${session.user.name}!` : "Sign In"}
              </p> */}

              <Menu as="div" className="relative inline-block text-left ">
                <div>
                  {!session?.user?.image ? (
                    <Menu.Button className="rounded-full border-2 p-2 text-yellow-500">
                      <UserCircleIcon
                        className="h-8 w-8 cursor-pointer lg:w-full"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  ) : (
                    <Menu.Button className="">
                      <img
                        className="m-1 w-12 cursor-pointer rounded-full hover:scale-125 lg:m-0 lg:h-14  lg:w-full"
                        alt=" profile pic"
                        src={session?.user?.image}
                      />
                    </Menu.Button>
                  )}
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={signOut}
                              type="submit"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex w-full  justify-center space-x-5 bg-amazon_blue-light p-4 pl-0  text-sm text-white lg:space-x-20">
        <p className="link">Search from</p>
        <p className="link">import</p>
        <p className="link">Status</p>
        <p className="link ">Update</p>
        <p className="link ">Settings</p>
      </div>
    </header>
  )
}

export default Header
