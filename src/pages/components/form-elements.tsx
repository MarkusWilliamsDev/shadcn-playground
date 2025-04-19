import Link from "next/link";
import { ArrowLeft, Mail, Search, Eye, EyeOff, Calendar, Check } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function FormElementsShowcase() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="container mx-auto py-10 px-4">
        <div className="mb-8">
          <Link href="/" className="text-muted-foreground hover:text-foreground flex items-center gap-1 mb-6 transition-colors">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <h1 className="text-3xl font-bold mb-2">Form Elements</h1>
          <p className="text-muted-foreground mb-6">
            A showcase of various form components and their states.
          </p>
        </div>

        <div className="space-y-12 max-w-3xl">
          {/* Basic Input */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Input Field</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="default-input">Default Input</Label>
                <Input id="default-input" placeholder="Enter your text here" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="disabled-input">Disabled Input</Label>
                <Input id="disabled-input" placeholder="This input is disabled" disabled />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="with-icon">Input with Icon</Label>
                <div className="relative">
                  <Input id="with-icon" placeholder="Search..." className="pl-10" />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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
                    className="absolute right-3 top-1/2 -translate-y-1/2" 
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Select Component */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Select Component</h2>
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
            <h2 className="text-xl font-semibold mb-4">Checkbox Component</h2>
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
                <Label htmlFor="disabled" className="text-muted-foreground">Disabled checkbox (unchecked)</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled-checked" disabled defaultChecked />
                <Label htmlFor="disabled-checked" className="text-muted-foreground">Disabled checkbox (checked)</Label>
              </div>
            </div>
          </section>

          {/* Form Example */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Complete Form Example</h2>
            <div className="border rounded-xl p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter your username" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-address">Email Address</Label>
                  <div className="relative">
                    <Input id="email-address" type="email" placeholder="Enter your email" className="pl-10" />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">We'll never share your email with anyone else.</p>
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
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="form-subscribe" />
                  <Label htmlFor="form-subscribe">Subscribe to newsletter</Label>
                </div>
                
                <Button type="submit">Submit Form</Button>
              </form>
            </div>
          </section>

          {/* Form States */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Form Validation States</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="valid-input" className="text-success">Valid Input</Label>
                <div className="relative">
                  <Input 
                    id="valid-input" 
                    value="correct@example.com" 
                    className="border-success focus-visible:ring-success/20" 
                  />
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-success" />
                </div>
                <p className="text-xs text-success">This input is valid!</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="error-input" className="text-destructive">Error Input</Label>
                <Input 
                  id="error-input" 
                  value="invalid-email" 
                  className="border-destructive focus-visible:ring-destructive/20" 
                />
                <p className="text-xs text-destructive">Please enter a valid email address</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}