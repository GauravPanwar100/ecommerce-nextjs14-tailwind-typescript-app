import { ProductGrid } from "@/components/native/product";
import { Heading } from "@/components/native/heading";
import axios from "axios";

export default async function Index() {
  let products = await axios.get("https://fakestoreapi.com/products");
  let newProductData = products?.data.map((product: Object) => {
    return { ...product, quantity: 1 };
  });
  return (
    <div className="flex flex-col border-neutral-200 dark:border-neutral-700">
      <Heading title="Products" description="Products List." />

      <ProductGrid products={newProductData} />
    </div>
  );
}
