import React from "react";
import Link from "next/link";
import { CompanyLogo } from "../utils/utils";
import { DesktopNavigation } from "../navigation";

export function LogoAndMenu(): JSX.Element {
    return (
      <div className="flex items-center gap-4">
        <LogoLink />
        <DesktopNavigation />
        {/*<MobileNavigation />*/} {/*will work on mobile responsiveness later*/}
      </div>
    );
  }
  

  function LogoLink(): JSX.Element {
    return (
      <Link
        href="/dashboard"
        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        prefetch={false}
      >
        <CompanyLogo className="h-5 w-5 transition-all group-hover:scale-110" />
        <span className="sr-only">Company Logo</span>
      </Link>
    );
  }