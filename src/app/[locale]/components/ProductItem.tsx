import { FC } from "react";
import Image from "next/image";

const ProductItem: FC<{
  product: {
    title: string;
    imageAddress: string;
  };
}> = ({ product }) => {
  return (
    <div className="productItem">
      <Image
        className="px-[0.5em]"
        src="/images/home.png"
        width={150}
        height={150}
        alt={product.title}
      />
      <div className="mt-3 w-full font-bold bg-mastred text-center text-white p-[.4em] text-[1.15em]">
        {product.title}
      </div>
    </div>
  );
};

export default ProductItem;
