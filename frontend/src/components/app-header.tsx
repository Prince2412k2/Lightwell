"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { themeState } from "@/features/common/store/theme_toggle";
import { useAtom } from "jotai";

export const AppHeader = () => {
  const [isDark, setIsDark] = useAtom(themeState);
  const switchTheme = () => {
    if (!isDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  };

  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4 bg-background">
      <SidebarTrigger />
      <Button
        className="bg-transparent text-foreground hover:bg-transparent text-lg hover:text-xl"
        onClick={switchTheme}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </Button>
    </header>
  );
};
