import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { MountainIcon ,SearchIcon} from "./utils/utils"

export function Dashboard(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen w-full bg-muted/40">
      <Header />
      <MainContent />
    </div>
  );
}

function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-30 flex items-center h-14 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <nav className="flex items-center justify-between w-full">
        <LogoAndMenu />
        <SearchBar />
        <UserMenu />
      </nav>
    </header>
  );
}

function LogoAndMenu(): JSX.Element {
  return (
    <div className="flex items-center gap-4">
      <LogoLink />
      <DesktopNavigation />
      {/*<MobileNavigation />*/}  {/*will work on mobile responsiveness later*/}
    </div>
  );
}

function LogoLink(): JSX.Element {
  return (
    <Link
      href="#"
      className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
      prefetch={false}
    >
      <MountainIcon className="h-5 w-5 transition-all group-hover:scale-110" />
      <span className="sr-only">Company Logo</span>
    </Link>
  );
}

function DesktopNavigation(): JSX.Element {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuLinkItem href="/dashboard" text="Dashboard" />
        <NavigationMenuLinkItem href="/connect" text="Brokers" />
        <NavigationMenuLinkItem href="/settings" text="Settings" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface NavigationMenuLinkItemProps {
  href: string;
  text: string;
}

function NavigationMenuLinkItem({ href, text }: NavigationMenuLinkItemProps): JSX.Element {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
        prefetch={false}
      >
        {text}
      </Link>
    </NavigationMenuLink>
  );
}




// function MobileNavigation(): JSX.Element {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button size="icon" variant="outline" className="lg:hidden">
//           <MenuIcon className="h-5 w-5" />
//           <span className="sr-only">Toggle Menu</span>
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="left" className="sm:max-w-xs">
//         <MobileNavLinks />
//       </SheetContent>
//     </Sheet>
//   );
// }

// function MobileNavLinks(): JSX.Element {
//   return (
//     <nav className="grid gap-6 text-lg font-medium">
//       <LogoLink />
//       <LinkItem href="/dashboard" text="Dashboard" icon={LayoutDashboardIcon} />
//       <LinkItem href="/connect" text="Brokers" icon={BriefcaseIcon} />
//       <LinkItem href="/settings" text="Settings" icon={SettingsIcon} />
//     </nav>
//   );
// }




function SearchBar(): JSX.Element {
  return (
    <div className="relative ml-auto flex-1 md:grow-0">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
    </div>
  );
}

function UserMenu(): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
          <img
            src="/placeholder.svg"
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
            style={{ aspectRatio: '36/36', objectFit: 'cover' }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Notifications</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


function MainContent() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle>My Portfolio</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Manage and track your investments in stocks, mutual funds, ETFs, and other asset classes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Stocks</CardDescription>
                      <CardTitle className="text-4xl">$45,231.89</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+20.1% from last month</div>
                    </CardContent>
                    <CardFooter>
                      <Link href="#" className="text-primary" prefetch={false}>
                        View Stocks
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Mutual Funds</CardDescription>
                      <CardTitle className="text-4xl">$25,329.00</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+10% from last month</div>
                    </CardContent>
                    <CardFooter>
                      <Link href="#" className="text-primary" prefetch={false}>
                        View Mutual Funds
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>ETFs</CardDescription>
                      <CardTitle className="text-4xl">$15,129.00</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+15% from last month</div>
                    </CardContent>
                    <CardFooter>
                      <Link href="#" className="text-primary" prefetch={false}>
                        View ETFs
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Other Investments</CardDescription>
                      <CardTitle className="text-4xl">$7,500.00</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+5% from last month</div>
                    </CardContent>
                    <CardFooter>
                      <Link href="#" className="text-primary" prefetch={false}>
                        View Other Investments
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-3">
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  View your recent investment transactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Shares</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Bought</TableCell>
                      <TableCell>AAPL</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>$120.00</TableCell>
                      <TableCell>June 1, 2024</TableCell>
                      <TableCell>$1,200.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sol</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
  );
}




