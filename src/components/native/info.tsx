"use client";

import { useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ProductTypes } from "@/types/product";
import Currency from "@/components/ui/currency";
import { addItem } from "@/redux/cartSlice";
import { AppDispatch } from "@/redux/store";

interface InfoProps {
  data: ProductTypes;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  // const cart = useCart();
  const dispatch = useDispatch<AppDispatch>();

  const onAddToCart = () => {
    // cart.addItem(data);
    // Dispatch an action
    dispatch(addItem(data));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 ">{data.title}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black ">Rating:</h3>
          <div>{data?.rating?.rate}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black ">Category:</h3>
          <div>{data?.category}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black ">Description:</h3>
          <div>{data?.description}</div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
