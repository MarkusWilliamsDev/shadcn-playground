import Link from "next/link";
import { ArrowLeft, Settings, User, BarChart, Image } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function TabsShowcase() {
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
          <h1 className="text-3xl font-bold mb-2">Tabs Component</h1>
          <p className="text-muted-foreground mb-6">
            Tabs allow users to switch between different views within the same context.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Basic Tabs */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Basic Tabs</h2>
            <Tabs defaultValue="account" className="w-full max-w-3xl">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium mb-2">Account Settings</h3>
                <p>Configure your account preferences and personal information.</p>
              </TabsContent>
              <TabsContent value="password" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium mb-2">Password Settings</h3>
                <p>Update your password and security preferences.</p>
              </TabsContent>
              <TabsContent value="settings" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium mb-2">General Settings</h3>
                <p>Manage your application settings and preferences.</p>
              </TabsContent>
            </Tabs>
          </section>
          
          {/* Tabs with Icons */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Tabs with Icons</h2>
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
              <TabsContent value="profile" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium mb-2">Profile</h3>
                <p>View and edit your profile information.</p>
              </TabsContent>
              <TabsContent value="dashboard" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium mb-2">Dashboard</h3>
                <p>View your dashboard analytics and reports.</p>
              </TabsContent>
              <TabsContent value="settings" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium mb-2">Settings</h3>
                <p>Manage your application settings.</p>
              </TabsContent>
            </Tabs>
          </section>
          
          {/* Tabs with Cards */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Tabs with Cards</h2>
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
                      <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2,350</div>
                      <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+12,234</div>
                      <p className="text-xs text-muted-foreground">+19% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <p className="text-xs text-muted-foreground">+201 since last hour</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="p-4 border rounded-md">
                <h3 className="text-lg font-medium mb-2">Analytics</h3>
                <p>Detailed analytics data visualization would be displayed here.</p>
              </TabsContent>
              <TabsContent value="reports" className="p-4 border rounded-md">
                <h3 className="text-lg font-medium mb-2">Reports</h3>
                <p>Generated reports and downloadable data would be listed here.</p>
              </TabsContent>
              <TabsContent value="notifications" className="p-4 border rounded-md">
                <h3 className="text-lg font-medium mb-2">Notifications</h3>
                <p>System notifications and alerts would be displayed here.</p>
              </TabsContent>
            </Tabs>
          </section>
          
          {/* Full Width Tabs */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Full Width Tabs</h2>
            <Tabs defaultValue="photos" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="music">Music</TabsTrigger>
              </TabsList>
              <TabsContent value="photos" className="p-4 border rounded-md mt-2">
                <div className="flex items-center justify-center h-40 bg-muted rounded-md">
                  <Image className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Photo gallery would be displayed here</span>
                </div>
              </TabsContent>
              <TabsContent value="videos" className="p-4 border rounded-md mt-2">
                <div className="flex items-center justify-center h-40 bg-muted rounded-md">
                  <span className="text-muted-foreground">Video gallery would be displayed here</span>
                </div>
              </TabsContent>
              <TabsContent value="music" className="p-4 border rounded-md mt-2">
                <div className="flex items-center justify-center h-40 bg-muted rounded-md">
                  <span className="text-muted-foreground">Music player would be displayed here</span>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </div>
    </div>
  );
}