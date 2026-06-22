import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartIcon = () => {
  return (
    <Link href="/cart" className="group relative inline-block">
      {/* Icon Belanja */}
      <ShoppingBag className="w-5 h-5 hover:text-shop_light_green hoverEffect" />

      {/* Badge Jumlah Barang */}
      <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-3.5 w-3.5 rounded-full text-[10px] font-semibold flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default CartIcon;
