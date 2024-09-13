import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoAndMenu } from "./logoandmenu";
import { getUserName } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "../utils/utils";

interface UserMenuProps {
  searchParams: {
    username: string;
  };
}

export function Header(): JSX.Element {
  return (
    <header className="fixed p-2 top-0 z-30 flex items-center h-14 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <nav className="flex items-center w-full justify-between">
        <LogoAndMenu />
        <SearchBar />
        <UserMenu
          searchParams={{
            username: getUserName(),
          }}
        />
      </nav>
    </header>
  );
}

function SearchBar(): JSX.Element {
  return (
    <div className="relative items-center w-max">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[936px]"
      />
    </div>
  );
}

function UserMenu({ searchParams: { username } }: UserMenuProps): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Image
            src="/userplaceholder.svg"
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
            style={{ aspectRatio: "36/36", objectFit: "cover" }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/profile?user=${username}`}>
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </Link>
        <Link href={`/settings?user=${username}`}>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </Link>
        <Link href={`/notifications?user=${username}`}>
          <DropdownMenuItem>Notifications</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
