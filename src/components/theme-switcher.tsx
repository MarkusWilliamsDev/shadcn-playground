import { Moon, Sun, Palette, Check as CheckIcon } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative size-9">
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Palette className="absolute size-[1.2rem] rotate-90 scale-0 transition-all blue:rotate-0 blue:scale-100 purple:rotate-0 purple:scale-100 green:rotate-0 green:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="size-4 mr-2" />
          <span>Light</span>
          {theme === "light" && <CheckIcon className="size-4 ml-auto" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="size-4 mr-2" />
          <span>Dark</span>
          {theme === "dark" && <CheckIcon className="size-4 ml-auto" />}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("blue")}>
          <Palette className="size-4 mr-2 text-blue-500" />
          <span>Blue</span>
          {theme === "blue" && <CheckIcon className="size-4 ml-auto" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("purple")}>
          <Palette className="size-4 mr-2 text-purple-500" />
          <span>Purple</span>
          {theme === "purple" && <CheckIcon className="size-4 ml-auto" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("green")}>
          <Palette className="size-4 mr-2 text-green-500" />
          <span>Green</span>
          {theme === "green" && <CheckIcon className="size-4 ml-auto" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}