'use client';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import SignOutButton from './ui/sign-out-button';

type NavbarUserMenuProps = {
  name: string;
  email: string;
};

export function NavbarUserMenu({ name, email }: NavbarUserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="lg">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div>
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </DropdownMenuLabel>
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
