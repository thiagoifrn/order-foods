import { Prisma } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../helpers/price";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className=" w-[150px] min-w-[150px] space-y-2">
      <div className="relative h-[150px] w-[150px]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className=" rounded-lg object-cover shadow-md"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-[2px] text-white">
            <span className=" flex gap-1 text-xs font-semibold">
              <ArrowDownIcon size={15} /> {product.discountPercentage}%
            </span>
          </div>
        )}
      </div>
      <div>
        <h2 className=" truncate text-sm">{product.name}</h2>
        <div className="flex items-center gap-1">
          <h3 className="font-semibold">
            {formatCurrency(calculateProductTotalPrice(product))}
          </h3>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {Number(product.price)}
            </span>
          )}
        </div>
        <span className="block truncate text-ellipsis p-0 text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
