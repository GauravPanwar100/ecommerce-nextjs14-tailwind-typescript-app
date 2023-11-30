import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ProductTypes } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export const ProductGrid = ({ products }: { products: ProductTypes[] }) => {
  return (
    <div className="mb-4 mx-16 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export const Product = ({ product }: { product: ProductTypes }) => {
  return (
    <Link className="" href={`/products/${product.id}`}>
      <Card className="h-full">
        <CardHeader className="p-0">
          <div className="relative h-60 w-full">
            <Image
              className="rounded-t-lg"
              src={product?.image}
              alt="product image"
              fill
              sizes="(min-width: 1000px) 30vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </CardHeader>
        <CardContent className="grid gap-1 p-4">
          <Badge variant="outline" className="w-min text-neutral-500">
            {product?.category}
          </Badge>

          <h2 className="mt-2">{product.title}</h2>
          <p className="text-xs text-neutral-500 text-justify">
            {product.description}
          </p>
        </CardContent>
        <CardFooter>
          <h2>${product?.price}</h2>
        </CardFooter>
      </Card>
    </Link>
  );
};
