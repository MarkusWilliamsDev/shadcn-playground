import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Search,
  Eye,
  EyeOff,
  Calendar,
  Check,
} from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function FormElementsShowcase() {
  const [showPassword, setShowPassword] = useState(false);

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
          <h1 className="mb-2 text-3xl font-bold">Form Elements</h1>
          <p className="text-muted-foreground mb-6">
            A showcase of various form components and their states.
          </p>
        </div>

        <div className="max-w-3xl space-y-12">
          {/* Basic Input */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Input Field</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="default-input">Default Input</Label>
                <Input id="default-input" placeholder="Enter your text here" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="disabled-input">Disabled Input</Label>
                <Input
                  id="disabled-input"
                  placeholder="This input is disabled"
                  disabled
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="with-icon">Input with Icon</Label>
                <div className="relative">
                  <Input
                    id="with-icon"
                    placeholder="Search..."
                    className="pl-10"
                  />
                  <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password Input</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="text-muted-foreground h-4 w-4" />
                    ) : (
                      <Eye className="text-muted-foreground h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Select Component */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Select Component</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="basic-select">Basic Select</Label>
                <Select>
                  <SelectTrigger id="basic-select">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="grouped-select">Grouped Select</Label>
                <Select>
                  <SelectTrigger id="grouped-select">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Vegetables</SelectLabel>
                      <SelectItem value="carrot">Carrot</SelectItem>
                      <SelectItem value="broccoli">Broccoli</SelectItem>
                      <SelectItem value="spinach">Spinach</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="disabled-select">Disabled Select</Label>
                <Select disabled>
                  <SelectTrigger id="disabled-select">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Checkbox Component */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Checkbox Component</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="email" defaultChecked />
                <Label htmlFor="email">Email me about product updates</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled" className="text-muted-foreground">
                  Disabled checkbox (unchecked)
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="disabled-checked" disabled defaultChecked />
                <Label
                  htmlFor="disabled-checked"
                  className="text-muted-foreground"
                >
                  Disabled checkbox (checked)
                </Label>
              </div>
            </div>
          </section>

          {/* Form Example */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">
              Complete Form Example
            </h2>
            <div className="rounded-xl border p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter your username" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-address">Email Address</Label>
                  <div className="relative">
                    <Input
                      id="email-address"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                    <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    We'll never share your email with anyone else.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-select">Country</Label>
                  <Select>
                    <SelectTrigger id="form-select">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-date">Date of Birth</Label>
                  <div className="relative">
                    <Input id="form-date" type="date" className="pl-10" />
                    <Calendar className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="form-subscribe" />
                  <Label htmlFor="form-subscribe">
                    Subscribe to newsletter
                  </Label>
                </div>

                <Button type="submit">Submit Form</Button>
              </form>
            </div>
          </section>

          {/* Form States */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">
              Form Validation States
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="valid-input" className="text-success">
                  Valid Input
                </Label>
                <div className="relative">
                  <Input
                    id="valid-input"
                    value="correct@example.com"
                    className="border-success focus-visible:ring-success/20"
                  />
                  <Check className="text-success absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2" />
                </div>
                <p className="text-success text-xs">This input is valid!</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="error-input" className="text-destructive">
                  Error Input
                </Label>
                <Input
                  id="error-input"
                  value="invalid-email"
                  className="border-destructive focus-visible:ring-destructive/20"
                />
                <p className="text-destructive text-xs">
                  Please enter a valid email address
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
