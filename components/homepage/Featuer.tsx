"use client"
import { cn } from "@/lib/utils";
import {
    MessageSquare,
    Users,
    Globe,
    Code,
    Zap,
    BookOpen,
    Shield,
    Smartphone
} from "lucide-react";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Community-Driven Q&A",
            description:
                "Ask questions, share knowledge, and collaborate with developers from around the world.",
            icon: <MessageSquare className="w-6 h-6" />,
        },
        {
            title: "Diverse Topics",
            description:
                "Explore a wide range of programming topics including web development, mobile apps, algorithms, and data structures.",
            icon: <Code className="w-6 h-6" />,
        },
        {
            title: "Global Developer Network",
            description:
                "Connect with a diverse community of developers, fostering learning and collaboration across borders.",
            icon: <Globe className="w-6 h-6" />,
        },
        {
            title: "Rapid Problem Solving",
            description: "Get quick answers to your coding questions and overcome technical challenges efficiently.",
            icon: <Zap className="w-6 h-6" />,
        },
        {
            title: "Knowledge Sharing",
            description: "Contribute your expertise and learn from others in a supportive environment.",
            icon: <BookOpen className="w-6 h-6" />,
        },
        {
            title: "Secure Platform",
            description:
                "Enjoy a safe and respectful space for technical discussions and code sharing.",
            icon: <Shield className="w-6 h-6" />,
        },
        {
            title: "Mobile-Friendly",
            description:
                "Access DevExchange on-the-go with our responsive design, perfect for coding queries anywhere.",
            icon: <Smartphone className="w-6 h-6" />,
        },
        {
            title: "Growing Community",
            description: "Join a thriving ecosystem of developers, from beginners to experts, all passionate about coding.",
            icon: <Users className="w-6 h-6" />,
        },
    ];

    return (
        <div id="features" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Empowering Developers Worldwide
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        DevExchange provides all the tools and features you need to enhance your programming skills, solve complex problems, and connect with a global developer community.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
                    {features.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
