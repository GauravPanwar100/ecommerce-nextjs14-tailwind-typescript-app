"use client";

import { Separator } from "@/components/native/separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { isVariableValid } from "@/lib/utils";
import Link from "next/link";
import { useSelector } from "react-redux";

export function Receipt() {
  const cart = useSelector((state: any) => state.cart);

  function calculatePayableCost() {
    let totalAmount = 0,
      discountAmount = 0;

    if (isVariableValid(cart?.items)) {
      for (const item of cart?.items) {
        totalAmount += item?.quantity * item?.price;
        discountAmount += item?.quantity * item?.discount || 1;
      }
    }

    const afterDiscountAmount = totalAmount - discountAmount;
    const taxAmount = afterDiscountAmount * 0.09;
    const payableAmount = afterDiscountAmount + taxAmount;

    return {
      totalAmount: totalAmount.toFixed(2),
      discountAmount: discountAmount.toFixed(2),
      afterDiscountAmount: afterDiscountAmount.toFixed(2),
      taxAmount: taxAmount.toFixed(2),
      payableAmount: payableAmount.toFixed(2),
    };
  }

  return (
    <Card>
      <CardHeader className="p-4 pb-0">
        <h2 className="font-bold tracking-tight">Receipt</h2>
      </CardHeader>
      <CardContent className="p-4 text-sm">
        <div className="block space-y-[1vh]">
          <div className="flex justify-between">
            <p>Total Amount</p>
            <h3>${calculatePayableCost().totalAmount}</h3>
          </div>
          <div className="flex justify-between">
            <p>Discount Amount</p>
            <h3>${calculatePayableCost().discountAmount}</h3>
          </div>
          <div className="flex justify-between">
            <p>Tax Amount</p>
            <h3>${calculatePayableCost().taxAmount}</h3>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between">
          <p>Payable Amount</p>
          <h3>${calculatePayableCost().payableAmount}</h3>
        </div>
      </CardContent>
      <Separator />
      <CardFooter>
        <Link href={"/checkout"} className="w-full">
          <Button
            disabled={
              !isVariableValid(cart?.items) || cart["items"].length === 0
            }
            className="w-full items-center bg-black text-white px-4 py-2"
          >
            Checkout
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
