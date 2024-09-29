"use client"
import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface AccordionItem {
    title: string;
    description: string;
}

interface AccordionProps {
    i: number;
    expanded: number | null;
    setExpanded: React.Dispatch<React.SetStateAction<number | null>>;
    title: string;
    description: string;
}

const accordionItems: AccordionItem[] = [
    {
        title: "What is DevExchange?",
        description:
            "DevExchange is a community-driven platform for asking and answering programming questions. It provides a space for developers to get help, share knowledge, and collaborate with other programmers from around the world.",
    },
    {
        title: "What topics can I explore on DevExchange?",
        description:
            "DevExchange covers a wide range of programming topics, including web development, mobile app development, algorithms, data structures, and more. Whether you're a beginner or an experienced developer, you'll find relevant discussions and resources.",
    },
    {
        title: "How can I contribute to DevExchange?",
        description:
            "You can contribute to DevExchange by asking questions, providing answers, sharing your knowledge, and engaging in discussions. The platform thrives on community participation, so your input is valuable regardless of your experience level.",
    },
    {
        title: "Is DevExchange free to use?",
        description:
            "Yes, DevExchange is free to use. You can access the platform, ask questions, and participate in discussions without any cost. The project is open-source and community-driven.",
    },
    {
        title: "How can I get started with DevExchange?",
        description:
            "To get started, visit the DevExchange website at https://devexchanges.vercel.app/. You can create an account, browse existing questions, or ask your own. The platform is designed to be user-friendly and intuitive for developers of all levels.",
    },
    {
        title: "Can I contribute to the development of DevExchange?",
        description:
            "Absolutely! DevExchange is an open-source project, and contributions are welcome. You can find the project on GitHub, where you can submit issues, propose new features, or contribute code following the project's contributing guidelines.",
    },
    {
        title: "What technologies does DevExchange use?",
        description:
            "DevExchange is built using modern web technologies, including Next.js, TypeScript, Tailwind CSS, MongoDB, and OpenAI. This tech stack ensures a robust, scalable, and user-friendly platform for developers.",
    },
];

const FAQ: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <div className="mx-auto max-w-2xl py-16 sm:px-4">
            <h1 className="mb-4 bg-gradient-to-b from-[#434343] to-[#494949] bg-clip-text text-center text-3xl font-bold text-[#F4FFFA00] dark:from-[#fafafa] dark:to-[#b4b4b4]">
                Frequently asked questions
            </h1>
            <p className="mb-10 text-center text-gray-600 dark:text-gray-400">
                Need help with something? Here are our most frequently asked questions.
            </p>

            <div className="space-y-4">
                {accordionItems.map((item, i) => (
                    <Accordion
                        key={i}
                        i={i}
                        expanded={expanded}
                        setExpanded={setExpanded}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

const Accordion: React.FC<AccordionProps> = ({
    i,
    expanded,
    setExpanded,
    title,
    description,
}) => {
    const isOpen = i === expanded;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
                delay: 0.2 * i,
                duration: 0.8,
            }}
            className="overflow-hidden rounded-lg border border-gray-300 dark:border-[#27272a]"
        >
            <motion.header
                initial={false}
                animate={{
                    backgroundColor: isOpen
                        ? "bg-gray-100 dark:bg-gray-800"
                        : "bg-white dark:bg-gray-900",
                }}
                onClick={() => setExpanded(isOpen ? null : i)}
                className="flex cursor-pointer items-center justify-between p-4"
            >
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {title}
                </h3>
                <div>
                    <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="size-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </motion.svg>
                </div>
            </motion.header>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="bg-gray-500/10 p-4 text-gray-700 dark:bg-neutral-500/10 dark:text-gray-300">
                            {description}
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FAQ;
