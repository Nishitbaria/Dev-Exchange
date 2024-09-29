import React from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
    { name: "About", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Licensing", href: "#" },
    { name: "Contact", href: "#" },
];

const Footer = () => {
    return (
        <footer className="overflow-hidden py-6 px-4 md:rounded-t-2xl">
            <div className="w-full space-y-6">
                <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                    <Link href="/" className="block max-w-fit mb-4 sm:mb-0">
                        <div className="inline-flex items-center space-x-2">
                            <Image
                                src="/assets/images/site-logo.svg"
                                width={23}
                                height={23}
                                alt="DevExchange"
                            />
                            <p className="text-base">
                                <span className="font-bold">Dev</span>
                                Exchange
                            </p>
                        </div>
                    </Link>
                    <nav>
                        <ul className="flex flex-wrap justify-center gap-4 font-medium">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <hr className="border-[#E4E4E7] dark:border-[#27272A]" />
                <p className="text-center text-sm leading-5 text-gray-600 dark:text-gray-300">
                    © {new Date().getFullYear()} DevExchange. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
