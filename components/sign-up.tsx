import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function SignUp() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-muted/40">
      <div className="mx-auto w-full max-w-md space-y-8 rounded-lg border bg-background p-8 shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign Up for Trading Book
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Create your account to access the investment tracking dashboard.
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label htmlFor="name" className="sr-only">
              Name
            </Label>
            <Input id="name" name="name" type="text" required placeholder="Full Name" />
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input id="email" name="email" type="email" autoComplete="email" required placeholder="Email address" />
          </div>
          <div>
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Password"
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="terms" name="terms" />
              <Label htmlFor="terms" className="ml-2 text-sm font-medium">
                I agree to the{" "}
                <Link href="#" className="text-primary hover:underline" prefetch={false}>
                  Terms of Service
                </Link>
              </Label>
            </div>
          </div>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline" prefetch={false}>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
