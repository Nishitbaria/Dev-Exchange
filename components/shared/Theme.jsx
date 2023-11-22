"use client";

import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";

export default function Theme() {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="light"
              className="active-theme"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="dark"
              className="active-theme"
              width={20}
              height={20}
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => {
            return (
              <MenubarItem
                key={item.value}
                className="flex-col items-center gap-4 px-2.5 py-2 "
                onClick={() => {
                  setMode(item.value);
                  if (item.value !== "system") {
                    localStorage.themes = item.value;
                  } else {
                    localStorage.removeItem("themes");
                  }
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={16}
                  height={16}
                  className={`${mode === item.value && "active-theme"}`}
                />
                <p
                  className={`body-semibold text-light-500 ${
                    mode === item.value
                      ? "text-primary-500"
                      : "text-dark100_light900"
                  }`}
                >
                  {item.label}
                </p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
