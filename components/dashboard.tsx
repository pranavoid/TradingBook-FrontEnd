import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"


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
      <MobileNavigation />
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
        <NavigationMenuLinkItem href="#" text="Dashboard" />
       
        <NavigationMenuLinkItem href="#" text="Investments" />
        <BrokersDropdown />
        <NavigationMenuLinkItem href="#" text="Settings" />
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


interface LinkItem {
  href: string;
  title: string;
  description: string;
}



function BrokersDropdown(): JSX.Element {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Brokers</NavigationMenuTrigger>
      <NavigationMenuContent>
        <DropdownContent links={brokersLinks} />
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const brokersLinks: LinkItem[] = [
  { href: '#', title: 'Zerodha-Kite', description: 'Connect to Zerodha.' },
  { href: '#', title: 'Groww', description: 'Connect to Groww' },
  { href: '#', title: 'Angel One', description: 'Connect to Angel One.' },
  { href: '#', title: 'Dhan', description: 'Connect to Dhan.' },
];

interface DropdownContentProps {
  links: LinkItem[];
}

function DropdownContent({ links }: DropdownContentProps): JSX.Element {
  return (
    <div className="grid w-[400px] p-2">
      {links.map((link) => (
        <NavigationMenuLink asChild key={link.title}>
          <Link
            href={link.href}
            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
            prefetch={false}
          >
            <div className="text-sm font-medium leading-none group-hover:underline">{link.title}</div>
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {link.description}
            </div>
          </Link>
        </NavigationMenuLink>
      ))}
    </div>
  );
}

function MobileNavigation(): JSX.Element {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="lg:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <MobileNavLinks />
      </SheetContent>
    </Sheet>
  );
}

function MobileNavLinks(): JSX.Element {
  return (
    <nav className="grid gap-6 text-lg font-medium">
      <LogoLink />
      <LinkItem href="#" text="Dashboard" icon={LayoutDashboardIcon} />
      <LinkItem href="#" text="Portfolio" icon={WalletIcon} />
      <LinkItem href="#" text="Investments" icon={TrendingUpIcon} />
      <LinkItem href="#" text="Brokers" icon={BriefcaseIcon} />
      <LinkItem href="#" text="Settings" icon={SettingsIcon} />
    </nav>
  );
}

interface LinkItemProps {
  href: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

function LinkItem({ href, text, icon: Icon }: LinkItemProps): JSX.Element {
  return (
    <Link href={href} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
      <Icon className="h-5 w-5" />
      {text}
    </Link>
  );
}

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




function BriefcaseIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function LayoutDashboardIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}


function MenuIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function TrendingUpIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function WalletIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
