import { Product } from "@/components/Entity/Product";

export const SearchProduct = (Products: Product[], text: string) => {
  const res = Products.filter((prod) =>
    prod.title.toUpperCase().includes(text.toUpperCase())
  );
  return res;
};
