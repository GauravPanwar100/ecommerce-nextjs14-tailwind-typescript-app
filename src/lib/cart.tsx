import { ProductTypes } from "@/types/product";

export function getCountInCart({
  cartItems,
  productId,
}: {
  cartItems: Array<ProductTypes>;
  productId: Number;
}) {
  try {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i]?.id === productId) {
        return cartItems[i]?.quantity;
      }
    }

    return 0;
  } catch (error) {
    console.error({ error });
    return 0;
  }
}
