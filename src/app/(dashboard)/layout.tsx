'use client'

import { Logo } from '@/components/logo'
import { useUser } from '@clerk/nextjs'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import {
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { getUserBusinesses } from '../api/business'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navigation = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Leads', href: '#', icon: FolderIcon, current: false },
    { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
  ]

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [businesses, setBusinesses] = useState([])
  const [loading, setLoading] = useState(true)
  const { isLoaded, isSignedIn, user } = useUser()

  useEffect(() => {
    async function fetchBusinesses() {
      setLoading(true)
      const { businesses } = await getUserBusinesses(
        '3430d213-6a81-46fa-98a5-689120fd9dee',
      )
      console.log(businesses)

      if (businesses) {
        setBusinesses(businesses)
      } else {
      }
      setLoading(false)
    }

    // if (userId) {
    fetchBusinesses()
    // }
  }, [])

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 xl:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>

              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-600 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className="size-6 shrink-0"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs/6 font-semibold text-gray-400">
                        Your businesses
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {businesses?.map((business) => (
                          <li key={business.name}>
                            <a
                            // href={team.href}
                            // className={classNames(
                            //   team.current
                            //     ? 'bg-gray-800 text-white'
                            //     : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            //   'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                            // )}
                            >
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                {business.name[0]}
                              </span>
                              <span className="truncate">{business.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="-mx-6 mt-auto">
                      <a
                        href="#"
                        className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800"
                      >
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="size-8 rounded-full bg-gray-800"
                        />
                        <span className="sr-only">Your profile</span>
                        <span aria-hidden="true">Tom Cook</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-300 px-6 ring-1 ring-white/5">
            <div className="flex h-16 shrink-0 items-center">
              <Logo className="mt-3 -ml-3 h-7" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-600 text-gray-100'
                              : 'text-gray-600 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-6 shrink-0"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs/6 font-semibold text-gray-400">
                    Your businesses
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {businesses?.map((business) => (
                      <li key={business.name}>
                        <a
                          href={'team.href'}
                          className={classNames(
                            // bus.current
                            //   ? 'bg-gray-600 text-white'
                            // : 'text-gray-600 hover:bg-gray-400 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-600 hover:bg-gray-400 hover:text-white',
                          )}
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-gray-300 text-[0.625rem] font-medium text-gray-800 group-hover:text-white">
                            {business.name[0]}
                          </span>
                          <span className="truncate">{business.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800"
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-gray-800"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="xl:pl-72">{children}</div>
      </body>
    </html>
  )
}
