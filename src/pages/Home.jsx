import { FilteringProcess } from "../components/FilteringProcess";
import { FinalProduct } from "../components/FinalProduct";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { Product } from "../components/Product";
import { ProductGallery } from "../components/ProductGallery";
import { Technology } from "../components/Technology";

 

export const Home = () => {
  return (
    <>
      <Hero />
      <Problem />
      <ProductGallery />
      <Technology />
      <FilteringProcess />
      <Product />
      <FinalProduct />
    </>
  );
};


