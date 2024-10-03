import { Box, styled } from "@mui/material";
import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Slide } from "./Slide";
import { MidSlide } from "./MidSlide";
import { MidSection } from "./MidSection";

const Component = styled(Box)`
   padding: 10px 10px;
   background: #F2F2F2;
`;



export function Home() {

   const { products } = useSelector(state => state.getProducts)// this the state of reducer Hook in redux in store.js
   //const { products } = getProducts;// Object destructuring method or getProducts.products;
   //{ products: [{},{},{}] }
   //console.log(products);


   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProducts()); // getProducts() this the function of productActions
   }, [dispatch]);


   return (
      <>
         <NavBar />
         <Component>
            <Banner />
            <MidSlide products={products} title='Deal of the Day' timer={true} />
            <MidSection />
            <Slide products={products} title='Discounts for You' timer={false} />
            <Slide products={products} title='Suggesting Items' timer={false} />
            <Slide products={products} title='Top Selection' timer={false} />
            <Slide products={products} title='Recommended Items' timer={false} />
            <Slide products={products} title='Trending Offers' timer={false} />
            <Slide products={products} title="Season's top picks" timer={false} />
            <Slide products={products} title='Top Deals on Accessories' timer={false} />
         </Component>
      </>

   );
}