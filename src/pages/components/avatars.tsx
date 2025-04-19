import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarsShowcase() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="container mx-auto py-10 px-4">
        <div className="mb-8">
          <Link href="/" className="text-muted-foreground hover:text-foreground flex items-center gap-1 mb-6 transition-colors">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <h1 className="text-3xl font-bold mb-2">Avatar Component</h1>
          <p className="text-muted-foreground mb-6">
            Avatars are used to represent users with images or initials as a fallback.
          </p>
        </div>

        <div className="space-y-12">
          {/* Avatar Sizes */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Avatar Sizes</h2>
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Small</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Medium</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Large</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Extra Large</span>
              </div>
            </div>
          </section>

          {/* Avatar Fallbacks */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Avatar Fallbacks</h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">With Image</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">With Initials</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Primary Color</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback className="bg-secondary text-secondary-foreground">B</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Secondary Color</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback className="bg-destructive text-destructive-foreground">C</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Destructive Color</span>
              </div>
            </div>
          </section>

          {/* Avatar Shapes */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Avatar Shapes</h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Default (Rounded)</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="rounded-sm">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Slightly Rounded</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="rounded-none">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Square</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="rounded-xl">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Extra Rounded</span>
              </div>
            </div>
          </section>

          {/* Avatar Groups */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Avatar Groups</h2>
            <div className="space-y-4">
              <div className="flex -space-x-4">
                <Avatar className="border-2 border-background">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback>WS</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback>+3</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-sm text-muted-foreground">Overlapping avatars for group representation</p>
            </div>
          </section>

          {/* Avatar with Status */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Avatar with Status</h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                </div>
                <span className="text-sm text-muted-foreground">Online</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 border-2 border-background"></span>
                </div>
                <span className="text-sm text-muted-foreground">Away</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-background"></span>
                </div>
                <span className="text-sm text-muted-foreground">Busy</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-500 border-2 border-background"></span>
                </div>
                <span className="text-sm text-muted-foreground">Offline</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}