import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans`}>
      <main className="container mx-auto py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold mb-6">Shadcn UI Component Showcase</h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                A demonstration of various Shadcn UI components and their variants
              </p>
            </div>
            <div className="absolute top-6 right-6">
              <ThemeSwitcher />
            </div>
          </div>

          <div className="mb-12">
            <div className="bg-muted/60 rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-3">Theme Preview</h2>
              <p className="text-muted-foreground mb-4">
                Click on the theme switcher in the top-right corner to change the theme and see how components look in different color schemes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="h-10 w-full rounded-md bg-primary"></div>
                  <span className="text-xs text-muted-foreground">Primary</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-10 w-full rounded-md bg-secondary"></div>
                  <span className="text-xs text-muted-foreground">Secondary</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-10 w-full rounded-md bg-accent"></div>
                  <span className="text-xs text-muted-foreground">Accent</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-10 w-full rounded-md bg-destructive"></div>
                  <span className="text-xs text-muted-foreground">Destructive</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component) => (
              <Card key={component.path} className="shadow-md hover:shadow-lg transition-shadow">
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
