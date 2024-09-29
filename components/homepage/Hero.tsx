import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center py-20">
                    <button className="group relative grid overflow-hidden rounded-full border bg-white px-4 py-1 transition-colors duration-200 dark:border-zinc-700 dark:bg-zinc-800">
                        <span className="z-10 flex items-center justify-center gap-1.5 py-0.5 text-sm text-gray-800 dark:text-zinc-300">
                            ✨ Introducing DevExchange
                            <ChevronRight className="size-4" />
                        </span>
                    </button>

                    <div className="mt-8 flex w-full max-w-3xl flex-col items-center">
                        <h1 className="bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-center text-4xl font-semibold text-transparent dark:from-white dark:to-zinc-400 md:text-6xl md:!leading-snug">
                            Your Community-Driven Programming Q&A Platform
                        </h1>
                        <p className="mt-6 text-center text-base text-gray-600 dark:text-zinc-400 md:text-lg">
                            Get help, share knowledge, and collaborate with developers worldwide.
                            Explore web development, mobile apps, algorithms, data structures, and more.
                        </p>
                        <div className="relative mt-8 flex w-full items-center justify-center md:mt-12">
                            <Link
                                href="#"
                                className="shadow-3xl flex w-max cursor-pointer select-none items-center justify-center gap-2 rounded-full border-t bg-gray-100/80 px-2 py-1 shadow-gray-200/40 backdrop-blur-lg dark:border-zinc-700 dark:bg-zinc-800/50 dark:shadow-zinc-900/40 md:gap-8 md:py-2"
                            >
                                <p className="px-4 text-center text-sm font-medium text-gray-800 dark:text-zinc-300 md:text-base lg:pr-0">
                                    ✨ {"  "} Join the DevExchange community today!
                                </p>
                                <button className="group relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-x-2 border-b-2 border-blue-700 bg-gradient-to-tr from-blue-600 to-violet-500 px-4 py-1 text-white shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:border-blue-600 active:shadow-none">
                                    <span className="absolute size-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:size-36"></span>
                                    <span className="relative flex items-center font-medium ">
                                        {" "}
                                        Get Started
                                        <ArrowRight className="ml-1 size-4" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative mt-16 w-full max-w-5xl">
                        <div
                            style={{
                                background:
                                    "conic-gradient(from 230.29deg at 51.63% 52.16%, #2400ff 0deg, #0087ff 67.5deg, #6c279d 198.75deg, #1826a3 251.25deg, 667c4 301.88deg, #691eff 1turn)",
                            }}
                            className="gradient absolute inset-0 -z-10 opacity-20 blur-[10rem]"
                        />
                        <div className="relative overflow-hidden rounded-xl p-2 ring-1 ring-inset ring-gray-200 backdrop-blur-3xl dark:ring-zinc-700 lg:rounded-2xl">
                            <Image
                                src="/assets/images/home.png"
                                alt="DevExchange platform preview"
                                width={1200}
                                height={675}
                                quality={100}
                                className="w-full rounded-md bg-gray-100 shadow-2xl ring-1 ring-gray-200 dark:bg-zinc-800/50 dark:ring-zinc-700 lg:rounded-xl"
                            />
                            <BorderBeam size={350} duration={12} delay={9} colorFrom="#4a00e0" colorTo="#8e2de2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

interface BorderBeamProps {
    className?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    anchor?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
}

const BorderBeam = ({
    className,
    size = 200,
    duration = 15,
    anchor = 90,
    borderWidth = 2,
    colorFrom = "#0000ff",
    colorTo = "#7800ff",
    delay = 0,
}: BorderBeamProps) => {
    return (
        <div
            style={
                {
                    "--size": size,
                    "--duration": duration,
                    "--anchor": anchor,
                    "--border-width": borderWidth,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                    "--delay": `-${delay}s`,
                } as React.CSSProperties
            }
            className={cn(
                "absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

                // mask styles
                "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

                // pseudo styles
                "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
                className,
            )}
        />
    );
};