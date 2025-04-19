import Link from "next/link";
import { ArrowLeft, ArrowRight, Plus, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonsShowcase() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="container mx-auto py-12 px-6">
        <div className="mb-10">
          <Link href="/" className="text-muted-foreground hover:text-foreground flex items-center gap-2 mb-8 transition-colors text-lg">
            <ArrowLeft className="size-5" /> Back to home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Button Component</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Buttons allow users to trigger actions or events with a single click.
          </p>
        </div>

        <div className="space-y-16">
          {/* Button Variants */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Button Variants</h2>
            <div className="flex flex-wrap gap-6 p-6 bg-muted/50 rounded-lg">
              <Button variant="default" className="text-lg py-6 px-8">Default</Button>
              <Button variant="destructive" className="text-lg py-6 px-8">Destructive</Button>
              <Button variant="outline" className="text-lg py-6 px-8">Outline</Button>
              <Button variant="secondary" className="text-lg py-6 px-8">Secondary</Button>
              <Button variant="ghost" className="text-lg py-6 px-8">Ghost</Button>
              <Button variant="link" className="text-lg py-6 px-8">Link</Button>
            </div>
          </section>

          {/* Button Sizes */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-6 p-6 bg-muted/50 rounded-lg">
              <Button size="default" className="text-lg">Default Size</Button>
              <Button size="sm" className="text-base">Small</Button>
              <Button size="lg" className="text-xl">Large</Button>
              <Button size="icon" className="text-xl">
                <Plus className="size-6" />
              </Button>
            </div>
          </section>

          {/* Buttons with Icons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Buttons with Icons</h2>
            <div className="flex flex-wrap gap-6 p-6 bg-muted/50 rounded-lg">
              <Button className="text-lg gap-2">
                <Plus className="size-5" /> Create New
              </Button>
              <Button variant="destructive" className="text-lg gap-2">
                <Trash className="size-5" /> Delete
              </Button>
              <Button variant="outline" className="text-lg gap-2">
                Continue <ArrowRight className="size-5" />
              </Button>
            </div>
          </section>

          {/* Disabled Buttons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Disabled State</h2>
            <div className="flex flex-wrap gap-6 p-6 bg-muted/50 rounded-lg">
              <Button disabled className="text-lg py-6 px-8">Disabled</Button>
              <Button variant="destructive" disabled className="text-lg py-6 px-8">Disabled</Button>
              <Button variant="outline" disabled className="text-lg py-6 px-8">Disabled</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}