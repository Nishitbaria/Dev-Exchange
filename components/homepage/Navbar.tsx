"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Link as ScrollLink } from 'react-scroll'


export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleLogin = () => {
        router.push('/sign-in')
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm dark:bg-dark-300/50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-1">
                            <Image
                                src="/assets/images/site-logo.svg"
                                width={23}
                                height={23}
                                alt="DevFlow"
                            />

                            <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">Dev <span className="text-primary-500">Exchange</span></p>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="text-dark-100 dark:text-light-900 hover:text-primary-500 dark:hover:text-primary-100 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <ScrollLink
                                to="features"
                                smooth={true}
                                duration={500}
                                className="text-dark-100 dark:text-light-900 hover:text-primary-500 dark:hover:text-primary-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                            >
                                Features
                            </ScrollLink>
                            <Link href="/contactus" className="text-dark-100 dark:text-light-900 hover:text-primary-500 dark:hover:text-primary-100 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="outline"
                            className="text-dark-100 dark:text-light-900 border-dark-100 dark:border-light-900 hover:bg-primary-500 hover:text-light-900 dark:hover:bg-primary-100 dark:hover:text-dark-100"
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleDarkMode}
                            className="text-dark-100 dark:text-light-900 hover:bg-primary-500 hover:text-light-900 dark:hover:bg-primary-100 dark:hover:text-dark-100"
                        >
                            {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            className="md:hidden text-dark-100 dark:text-light-900 hover:bg-primary-500 hover:text-light-900 dark:hover:bg-primary-100 dark:hover:text-dark-100"
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" className="text-dark-100 dark:text-light-900 hover:text-primary-500 dark:hover:text-primary-100 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                            <Link href="/" className="text-dark-100 dark:text-light-900 hover:text-primary-500 dark:hover:text-primary-100 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                            <ScrollLink
                                to="features"
                                smooth={true}
                                duration={500}
                                className="text-dark-100 dark:text-light-900 hover:text-primary-500 dark:hover:text-primary-100 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </ScrollLink>
                            <Link href="/contact" className="text-dark-100 dark:text-light-900 hover:text-primary-500 dark:hover:text-primary-100 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}