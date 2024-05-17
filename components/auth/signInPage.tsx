"use client"
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "@/context/ThemeProvider";
export const SignInPage = () => {
const {mode} = useTheme()
  if (mode === "dark") {
    return (
      <div className="">
        <div
        className="fixed left-0 top-0 min-h-screen min-w-[100vw] bg-black">
        </div>
        <SignIn
          appearance={{
        baseTheme:[dark]
          }} />
      </div>
    );
  }
  return (
    <SignIn />
  );

}