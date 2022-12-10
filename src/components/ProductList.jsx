import React from 'react';
import GridView from "./GridView";
import { useFilterContext } from "../context/filter_context";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

};


export default ProductList;