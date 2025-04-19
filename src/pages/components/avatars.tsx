import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function AvatarsShowcase() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <div className="relative container mx-auto px-4 py-10">
        <div className="absolute top-6 right-6">
          <ThemeSwitcher />
        </div>

        <div className="mb-8">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground mb-6 flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <h1 className="mb-2 text-3xl font-bold">Avatar Component</h1>
          <p className="text-muted-foreground mb-6">
            Avatars are used to represent users with images or initials as a
            fallback.
          </p>
        </div>

        <div className="space-y-12">
          {/* Avatar Sizes */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Avatar Sizes</h2>
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">Small</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">Medium</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">Large</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">
                  Extra Large
                </span>
              </div>
            </div>
          </section>

          {/* Avatar Fallbacks */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Avatar Fallbacks</h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">
                  With Image
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">
                  With Initials
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    A
                  </AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">
                  Primary Color
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    B
                  </AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">
                  Secondary Color
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback className="bg-destructive text-destructive-foreground">
                    C
                  </AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">
                  Destructive Color
                </span>
              </div>
            </div>
          </section>

          {/* Avatar Shapes */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Avatar Shapes</h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">
                  Default (Rounded)
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="rounded-sm">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">
                  Slightly Rounded
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="rounded-none">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">Square</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Avatar className="rounded-xl">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">
                  Extra Rounded
                </span>
              </div>
            </div>
          </section>

          {/* Avatar Groups */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Avatar Groups</h2>
            <div className="space-y-4">
              <div className="flex -space-x-4">
                <Avatar className="border-background border-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-background border-2">
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-background border-2">
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback>WS</AvatarFallback>
                </Avatar>
                <Avatar className="border-background border-2">
                  <AvatarImage src="/invalid-image.jpg" alt="Invalid image" />
                  <AvatarFallback>+3</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-muted-foreground text-sm">
                Overlapping avatars for group representation
              </p>
            </div>
          </section>

          {/* Avatar with Status */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Avatar with Status</h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="border-background absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 bg-green-500"></span>
                </div>
                <span className="text-muted-foreground text-sm">Online</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="border-background absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 bg-yellow-500"></span>
                </div>
                <span className="text-muted-foreground text-sm">Away</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="border-background absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 bg-red-500"></span>
                </div>
                <span className="text-muted-foreground text-sm">Busy</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="border-background absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 bg-gray-500"></span>
                </div>
                <span className="text-muted-foreground text-sm">Offline</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
