import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";
import FavoriteButton from "./FavoriteButton";
import Signin from "./Signin";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between">
        {/* KIRI: Menu Mobile & Logo */}
        <div className="w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        {/* TENGAH: Menu Navigasi Utama */}
        <HeaderMenu />

        {/* KANAN: Pembungkus Fitur & Akun (Termasuk CartIcon) */}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />

          <ClerkLoaded>
            {user ? <UserButton afterSignOutUrl="/" /> : <Signin />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
