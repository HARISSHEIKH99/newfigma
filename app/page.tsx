import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import { Product } from "./components/Product";
import { Delivery } from "./components/Delivery";
import { Product2 } from "./components/product2";
import Signup from "./components/signup";



export default function Home() {
  return (
    <div>

      <Header />
      <Hero />

      <Delivery />
      <Product />
      <Product2 />
      <Signup />
      <Footer />
    </div>
  );
}
