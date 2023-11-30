"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";

const CartSection = () => {
  let cartItems = useSelector((state: RootState) => state.cart.items);

  const router = useRouter();

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingCart size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cartItems?.length}
        </span>
      </Button>
    </div>
  );
};

export default CartSection;
