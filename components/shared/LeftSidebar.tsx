"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { SignedOut, useAuth } from "@clerk/nextjs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const LeftSidebar = () => {
	const pathname = usePathname();
	const { userId } = useAuth();
	return (
		<section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
			<div className="flex flex-1 flex-col gap-6">
				{sidebarLinks.map((item) => {
					const isActive =
						(pathname.includes(item.route) &&
							item.route.length > 1) ||
						pathname === item.route;

					// TODO

					if (item.route === "/profile") {
						if (userId) {
							item.route = `${item.route}/${userId}`;
						} else {
							return null;
						}
					} else if (item.route === "/chat") {
						if (userId) {
							item.route = `${item.route}/${userId}`;
						} else {
							return null;
						}
					}

					return (
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<Link
										href={item.route}
										key={item.label}
										className={`${
											isActive
												? "primary-gradient text-light-900"
												: "text-dark300_light900 hover:bg-light-800 dark:hover:bg-dark-400"
										}  flex items-center justify-start gap-4 bg-transparent p-4 rounded-lg`}
									>
										<Image
											src={item.imgURL}
											alt={item.label}
											width={20}
											height={20}
											className={`${isActive ? "" : "invert-colors"}`}
										/>
										<p
											className={`${
												isActive
													? "base-bold"
													: "base-medium"
											} max-lg:hidden`}
										>
											{item.label}
										</p>
										<TooltipContent>
											<p>{item.label}</p>
										</TooltipContent>
									</Link>
								</TooltipTrigger>
							</Tooltip>
						</TooltipProvider>
					);
				})}
			</div>

			<SignedOut>
				<div className="flex flex-col gap-3">
					<Link href="/sign-in">
						<Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
							<Image
								src="/assets/icons/account.svg"
								alt="login"
								width={20}
								height={20}
								className="invert-colors lg:hidden"
							/>
							<span className="primary-text-gradient max-lg:hidden">
								Log In
							</span>
						</Button>
					</Link>

					<Link href="/sign-up">
						<Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
							<Image
								src="/assets/icons/sign-up.svg"
								alt="sign up"
								width={20}
								height={20}
								className="invert-colors lg:hidden"
							/>
							<span className="max-lg:hidden">Sign up</span>
						</Button>
					</Link>
				</div>
			</SignedOut>
		</section>
	);
};

export default LeftSidebar;
