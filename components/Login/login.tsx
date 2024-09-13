import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function Login() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-muted/40">
      <div className="mx-auto w-full max-w-md space-y-8 rounded-lg border bg-background p-8 shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">Login to Trading Book</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">Access your investment tracking dashboard.</p>
        </div>
        <form className="space-y-6" action="#" method="POST">
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
              autoComplete="current-password"
              required
              placeholder="Password"
            />
          </div>
          <div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember" name="remember" />
              <Label htmlFor="remember" className="ml-2 text-sm font-medium">
                Remember me
              </Label>
            </div>
            <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
              Forgot your password?
            </Link>
          </div>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Don`&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline" prefetch={false}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
