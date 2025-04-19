import Link from "next/link";
import { ArrowLeft, Settings, User, BarChart, Image } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function TabsShowcase() {
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
          <h1 className="mb-2 text-3xl font-bold">Tabs Component</h1>
          <p className="text-muted-foreground mb-6">
            Tabs allow users to switch between different views within the same
            context.
          </p>
        </div>

        <div className="space-y-12">
          {/* Basic Tabs */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Basic Tabs</h2>
            <Tabs defaultValue="account" className="w-full max-w-3xl">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent
                value="account"
                className="mt-2 rounded-md border p-4"
              >
                <h3 className="mb-2 text-lg font-medium">Account Settings</h3>
                <p>
                  Configure your account preferences and personal information.
                </p>
              </TabsContent>
              <TabsContent
                value="password"
                className="mt-2 rounded-md border p-4"
              >
                <h3 className="mb-2 text-lg font-medium">Password Settings</h3>
                <p>Update your password and security preferences.</p>
              </TabsContent>
              <TabsContent
                value="settings"
                className="mt-2 rounded-md border p-4"
              >
                <h3 className="mb-2 text-lg font-medium">General Settings</h3>
                <p>Manage your application settings and preferences.</p>
              </TabsContent>
            </Tabs>
          </section>

          {/* Tabs with Icons */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Tabs with Icons</h2>
            <Tabs defaultValue="profile" className="w-full max-w-3xl">
              <TabsList>
                <TabsTrigger value="profile">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="dashboard">
                  <BarChart className="mr-2 h-4 w-4" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="profile"
                className="mt-2 rounded-md border p-4"
              >
                <h3 className="mb-2 text-lg font-medium">Profile</h3>
                <p>View and edit your profile information.</p>
              </TabsContent>
              <TabsContent
                value="dashboard"
                className="mt-2 rounded-md border p-4"
              >
                <h3 className="mb-2 text-lg font-medium">Dashboard</h3>
                <p>View your dashboard analytics and reports.</p>
              </TabsContent>
              <TabsContent
                value="settings"
                className="mt-2 rounded-md border p-4"
              >
                <h3 className="mb-2 text-lg font-medium">Settings</h3>
                <p>Manage your application settings.</p>
              </TabsContent>
            </Tabs>
          </section>

          {/* Tabs with Cards */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Tabs with Cards</h2>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Revenue
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <p className="text-muted-foreground text-xs">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Subscriptions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2,350</div>
                      <p className="text-muted-foreground text-xs">
                        +180.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Sales
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+12,234</div>
                      <p className="text-muted-foreground text-xs">
                        +19% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Active Users
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <p className="text-muted-foreground text-xs">
                        +201 since last hour
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="rounded-md border p-4">
                <h3 className="mb-2 text-lg font-medium">Analytics</h3>
                <p>
                  Detailed analytics data visualization would be displayed here.
                </p>
              </TabsContent>
              <TabsContent value="reports" className="rounded-md border p-4">
                <h3 className="mb-2 text-lg font-medium">Reports</h3>
                <p>
                  Generated reports and downloadable data would be listed here.
                </p>
              </TabsContent>
              <TabsContent
                value="notifications"
                className="rounded-md border p-4"
              >
                <h3 className="mb-2 text-lg font-medium">Notifications</h3>
                <p>System notifications and alerts would be displayed here.</p>
              </TabsContent>
            </Tabs>
          </section>

          {/* Full Width Tabs */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Full Width Tabs</h2>
            <Tabs defaultValue="photos" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="music">Music</TabsTrigger>
              </TabsList>
              <TabsContent
                value="photos"
                className="mt-2 rounded-md border p-4"
              >
                <div className="bg-muted flex h-40 items-center justify-center rounded-md">
                  <Image className="text-muted-foreground h-8 w-8" />
                  <span className="text-muted-foreground ml-2">
                    Photo gallery would be displayed here
                  </span>
                </div>
              </TabsContent>
              <TabsContent
                value="videos"
                className="mt-2 rounded-md border p-4"
              >
                <div className="bg-muted flex h-40 items-center justify-center rounded-md">
                  <span className="text-muted-foreground">
                    Video gallery would be displayed here
                  </span>
                </div>
              </TabsContent>
              <TabsContent value="music" className="mt-2 rounded-md border p-4">
                <div className="bg-muted flex h-40 items-center justify-center rounded-md">
                  <span className="text-muted-foreground">
                    Music player would be displayed here
                  </span>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </div>
    </div>
  );
}
