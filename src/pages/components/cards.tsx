import Link from "next/link";
import { ArrowLeft, BarChart, BellRing, Calendar, CreditCard, Settings, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function CardsShowcase() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="container mx-auto py-10 px-4 relative">
        <div className="absolute top-6 right-6">
          <ThemeSwitcher />
        </div>
        
        <div className="mb-8">
          <Link href="/" className="text-muted-foreground hover:text-foreground flex items-center gap-1 mb-6 transition-colors">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <h1 className="text-3xl font-bold mb-2">Card Component</h1>
          <p className="text-muted-foreground mb-6">
            Cards are surfaces that display content and actions on a single topic.
          </p>
        </div>

        <div className="space-y-12">
          {/* Basic Card */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Basic Card</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card Example</CardTitle>
                  <CardDescription>A simple card with header and content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is a basic card example with just a header, description, and content.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Card with Footer */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Card with Footer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card with Footer</CardTitle>
                  <CardDescription>A card with header, content, and footer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card includes a footer with action buttons.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Card with Icon */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Cards with Icons</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BellRing className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Stay updated</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>You have 3 unread notifications.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View all</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Calendar</CardTitle>
                    <CardDescription>Schedule events</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>You have 2 events scheduled today.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View calendar</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Payments</CardTitle>
                    <CardDescription>Manage transactions</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Your last payment was $24.99.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View payments</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Dashboard Cards */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Dashboard Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Revenue</CardDescription>
                  <CardTitle className="text-2xl">$45,231.89</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Subscriptions</CardDescription>
                  <CardTitle className="text-2xl">+2,350</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Active Users</CardDescription>
                  <CardTitle className="text-2xl">+12,234</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="text-xs text-muted-foreground">
                    +19% from last month
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Active Sessions</CardDescription>
                  <CardTitle className="text-2xl">+573</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="text-xs text-muted-foreground">
                    +201 since last hour
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}