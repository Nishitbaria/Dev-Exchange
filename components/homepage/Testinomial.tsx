"use client";

import React from "react";

import { cn } from "@/lib/utils";

const Testimonial = () => {
    return (
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black py-16">
            <div className="mx-auto max-w-4xl p-4 text-center">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl font-spaceGrotesk">
                    Empowering Individuals
                    <br />
                    <span className="text-blue-600 dark:text-[#0095f1]">
                        and Businesses
                    </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl font-inter">
                    Discover why over 150,000 users choose our platform to streamline
                    their workflow and enhance their digital presence.
                </p>
            </div>

            <div className="w-full overflow-hidden">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.email} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.email} {...review} />
                    ))}
                </Marquee>
                <Marquee pauseOnHover className="[--duration:40s]">
                    {thirdRow.map((review) => (
                        <ReviewCard key={review.email} {...review} />
                    ))}
                </Marquee>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
        </div>
    );
};

export default Testimonial;

const ReviewCard = ({ img, name, email, description }: any) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4 mx-2",
                "bg-gray-100 hover:bg-gray-200 dark:bg-[#1c1c1e] dark:hover:bg-[#2c2c2e]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt={name}
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-gray-900 dark:text-white font-spaceGrotesk">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400 font-inter">{email}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-inter">{description}</blockquote>
        </figure>
    );
};

const testimonials = [
    {
        name: "John Doe",
        email: "johndoe23@gmail.com",
        description:
            "DevExchange has been a game-changer for me. I've solved complex coding issues in minutes thanks to the helpful community.",
        img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
        name: "Alex Johnson",
        email: "alexjohnson@gmail.com",
        description: "The diversity of topics on DevExchange is impressive. From web dev to algorithms, I always find what I need.",
        img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
        name: "Emily Davis",
        email: "emilydavis@gmail.com",
        description: "As a beginner programmer, DevExchange has been invaluable. The community is supportive and the answers are top-notch.",
        img: "https://img.freepik.com/free-photo/smiling-asian-woman_23-2147766303.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
        name: "Michael Brown",
        email: "michaelbrown@gmail.com",
        description: "I love how quickly I get responses on DevExchange. It's become my go-to platform for all coding questions.",
        img: "https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
        name: "Sarah Miller",
        email: "sarahmiller@gmail.com",
        description: "The mobile app is fantastic! I can now solve coding problems on-the-go. DevExchange is a must-have for developers.",
        img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
        name: "Laura White",
        email: "laurawhite@gmail.com",
        description: "DevExchange has helped me grow as a developer. The knowledge sharing here is unparalleled.",
        img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt-is-wearing-yellow-shirt_911060-133057.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    },
    {
        name: "David Lee",
        email: "davidlee@gmail.com",
        description: "The code snippets and explanations on DevExchange have saved me countless hours of debugging. Truly grateful!",
        img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    },
    {
        name: "Sophia Chen",
        email: "sophiachen@gmail.com",
        description: "As a senior developer, I'm impressed by the quality of discussions on DevExchange. It's a great place to learn and teach.",
        img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    },
    {
        name: "Ryan Taylor",
        email: "ryantaylor@gmail.com",
        description: "DevExchange's community is what sets it apart. The collaborative spirit here is truly inspiring.",
        img: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    },
];

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 3));
const secondRow = testimonials.slice(
    Math.ceil(testimonials.length / 3),
    2 * Math.ceil(testimonials.length / 3),
);
const thirdRow = testimonials.slice(2 * Math.ceil(testimonials.length / 3));

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    [key: string]: any;
}

function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className,
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                            "animate-marquee flex-row": !vertical,
                            "animate-marquee-vertical flex-col": vertical,
                            "group-hover:[animation-play-state:paused]": pauseOnHover,
                            "[animation-direction:reverse]": reverse,
                        })}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}
