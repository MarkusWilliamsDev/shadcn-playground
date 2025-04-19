import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const components = [
  { name: "Buttons", path: "/components/buttons" },
  { name: "Cards", path: "/components/cards" },
  { name: "Tabs", path: "/components/tabs" },
  { name: "Avatars", path: "/components/avatars" },
  { name: "Form Elements", path: "/components/form-elements" },
];

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen font-sans`}
    >
      <main className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex items-center justify-between">
            <div className="flex-1 text-center">
              <h1 className="mb-6 text-4xl font-bold">
                Shadcn UI Component Showcase
              </h1>
              <p className="text-muted-foreground mx-auto mb-4 max-w-3xl text-xl">
                A demonstration of various Shadcn UI components and their
                variants
              </p>
            </div>
            <div className="absolute top-6 right-6">
              <ThemeSwitcher />
            </div>
          </div>

          <div className="mb-12">
            <div className="bg-muted/60 rounded-lg border p-6">
              <h2 className="mb-3 text-2xl font-semibold">Theme Preview</h2>
              <p className="text-muted-foreground mb-4">
                Click on the theme switcher in the top-right corner to change
                the theme and see how components look in different color
                schemes.
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex flex-col gap-2">
                  <div className="bg-primary h-10 w-full rounded-md"></div>
                  <span className="text-muted-foreground text-xs">Primary</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-secondary h-10 w-full rounded-md"></div>
                  <span className="text-muted-foreground text-xs">
                    Secondary
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-accent h-10 w-full rounded-md"></div>
                  <span className="text-muted-foreground text-xs">Accent</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-destructive h-10 w-full rounded-md"></div>
                  <span className="text-muted-foreground text-xs">
                    Destructive
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {components.map((component) => (
              <Card
                key={component.path}
                className="shadow-md transition-shadow hover:shadow-lg"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl">{component.name}</CardTitle>
                  <CardDescription className="text-base">
                    View {component.name.toLowerCase()} examples
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-end pt-4">
                  <Button size="lg" className="font-medium" asChild>
                    <Link href={component.path}>View Components</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
