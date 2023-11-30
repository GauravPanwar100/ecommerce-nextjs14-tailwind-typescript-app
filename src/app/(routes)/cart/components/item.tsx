"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getCountInCart } from "@/lib/cart";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@/redux/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";

import { MinusIcon, PlusIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export const Item = ({ cartItem }: any) => {
  const cart = useSelector<RootState>((state: any) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  async function onIncreaseQuantityInCart() {
    try {
      // Dispatch an action
      dispatch(increaseQuantity(cartItem));
    } catch (error) {
      console.error({ error });
    }
  }

  async function onDecreaseQuantityInCart() {
    try {
      // Dispatch an action
      dispatch(decreaseQuantity(cartItem));
    } catch (error) {
      console.error({ error });
    }
  }

  async function onRemoveFromCart() {
    try {
      // Dispatch an action
      dispatch(removeItem(cartItem));
    } catch (error) {
      console.error({ error });
    }
  }

  function CartButton() {
    const count = getCountInCart({
      cartItems: cart?.items,
      productId: cartItem.id,
    });

    if (count > 0) {
      return (
        <>
          <Button variant="outline" size="icon">
            {count === 1 ? (
              <X className="h-4" onClick={onRemoveFromCart} />
            ) : (
              <MinusIcon className="h-4" onClick={onDecreaseQuantityInCart} />
            )}
          </Button>
          <Button disabled variant="ghost" size="icon">
            {count}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onIncreaseQuantityInCart}
          >
            <PlusIcon className="h-4" />
          </Button>
        </>
      );
    }
  }

  return (
    <Card className="my-6">
      <CardHeader className="p-0 md:hidden">
        <div className="relative h-32 w-full">
          <Link href={`/products/${cartItem?.id}`}>
            <Image
              className="rounded-t-lg"
              src={cartItem?.image}
              alt="product image"
              fill
              sizes="(min-width: 1000px) 30vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-6 gap-4 p-3">
        <div className="relative w-full col-span-2 hidden md:inline-flex">
          <Link href={`/products/${cartItem?.id}`}>
            <Image
              className="rounded-lg"
              src={cartItem?.image}
              alt="item image"
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="col-span-4 block space-y-2">
          <Link href={`/products/${cartItem?.id}`}>
            <h2>{cartItem?.title}</h2>
          </Link>
          <p className="text-xs text-muted-foreground text-justify">
            {cartItem?.description}
          </p>
          <h2>${cartItem?.price}</h2>
          <CartButton />
        </div>
      </CardContent>
    </Card>
  );
};
