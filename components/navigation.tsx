import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface NavigationMenuLinkItemProps {
  href: string;
  text: string;
}

export function DesktopNavigation(): JSX.Element {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuLinkItem href="/dashboard" text="Dashboard" />
        <NavigationMenuLinkItem href="/connect" text="Brokers" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavigationMenuLinkItem({
  href,
  text,
}: NavigationMenuLinkItemProps): JSX.Element {
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