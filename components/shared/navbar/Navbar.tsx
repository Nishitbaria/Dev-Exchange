"use client"

import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useTheme } from '@/context/ThemeProvider'
import MobileNav from './MobileNav'
import GlobalSearch from '../search/GlobalSearch'
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu } from 'lucide-react'

const Navbar = () => {
  const { mode, setMode } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">Dev <span className="text-primary-500">Exchange</span></p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="text-dark-100 dark:text-light-900 hover:bg-primary-500 hover:text-light-900 dark:hover:bg-primary-100 dark:hover:text-dark-100"
        >
          {mode === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>

        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10'
              },
              variables: {
                colorPrimary: '#ff7000'
              }
            }}
          />
        </SignedIn>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="md:hidden text-dark-100 dark:text-light-900 hover:bg-primary-500 hover:text-light-900 dark:hover:bg-primary-100 dark:hover:text-dark-100"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {isMenuOpen && (
        <MobileNav />
      )}
    </nav>
  )
}

export default Navbar