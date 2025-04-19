import Link from "next/link";
import { ArrowLeft, ArrowRight, Plus, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function ButtonsShowcase() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <div className="relative container mx-auto px-6 py-12">
        <div className="absolute top-6 right-6">
          <ThemeSwitcher />
        </div>

        <div className="mb-10">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground mb-8 flex items-center gap-2 text-lg transition-colors"
          >
            <ArrowLeft className="size-5" /> Back to home
          </Link>
          <h1 className="mb-4 text-4xl font-bold">Button Component</h1>
          <p className="text-muted-foreground mb-8 text-xl">
            Buttons allow users to trigger actions or events with a single
            click.
          </p>
        </div>

        <div className="space-y-16">
          {/* Button Variants */}
          <section>
            <h2 className="mb-6 border-b pb-2 text-2xl font-semibold">
              Button Variants
            </h2>
            <div className="bg-muted/50 flex flex-wrap gap-6 rounded-lg p-6">
              <Button variant="default" className="px-8 py-6 text-lg">
                Default
              </Button>
              <Button variant="destructive" className="px-8 py-6 text-lg">
                Destructive
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Outline
              </Button>
              <Button variant="secondary" className="px-8 py-6 text-lg">
                Secondary
              </Button>
              <Button variant="ghost" className="px-8 py-6 text-lg">
                Ghost
              </Button>
              <Button variant="link" className="px-8 py-6 text-lg">
                Link
              </Button>
            </div>
          </section>

          {/* Button Sizes */}
          <section>
            <h2 className="mb-6 border-b pb-2 text-2xl font-semibold">
              Button Sizes
            </h2>
            <div className="bg-muted/50 flex flex-wrap items-center gap-6 rounded-lg p-6">
              <Button size="default" className="text-lg">
                Default Size
              </Button>
              <Button size="sm" className="text-base">
                Small
              </Button>
              <Button size="lg" className="text-xl">
                Large
              </Button>
              <Button size="icon" className="text-xl">
                <Plus className="size-6" />
              </Button>
            </div>
          </section>

          {/* Buttons with Icons */}
          <section>
            <h2 className="mb-6 border-b pb-2 text-2xl font-semibold">
              Buttons with Icons
            </h2>
            <div className="bg-muted/50 flex flex-wrap gap-6 rounded-lg p-6">
              <Button className="gap-2 text-lg">
                <Plus className="size-5" /> Create New
              </Button>
              <Button variant="destructive" className="gap-2 text-lg">
                <Trash className="size-5" /> Delete
              </Button>
              <Button variant="outline" className="gap-2 text-lg">
                Continue <ArrowRight className="size-5" />
              </Button>
            </div>
          </section>

          {/* Disabled Buttons */}
          <section>
            <h2 className="mb-6 border-b pb-2 text-2xl font-semibold">
              Disabled State
            </h2>
            <div className="bg-muted/50 flex flex-wrap gap-6 rounded-lg p-6">
              <Button disabled className="px-8 py-6 text-lg">
                Disabled
              </Button>
              <Button
                variant="destructive"
                disabled
                className="px-8 py-6 text-lg"
              >
                Disabled
              </Button>
              <Button variant="outline" disabled className="px-8 py-6 text-lg">
                Disabled
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
