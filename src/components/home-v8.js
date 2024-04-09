import React from "react";
import Navbar from "./global-components/navbar-v2";
import Banner from "./section-components/banner";
import ProSlider from "./section-components/product-slider-v4";
import Featuresv1 from "./section-components/features-v1";
import UpComingProduct from "./section-components/upcoming-product-v1";
import Cateogory from "./section-components/category-v2";
import Testimonial from "./section-components/testimonial-v2";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import WalletContextProvider from "./WalletContextProvider";

const Home_V8 = () => {
  return (
    <WalletContextProvider>
      <div>
        <Navbar />
        <Banner />
        <ProSlider />
        <Featuresv1 customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
        <UpComingProduct />
        <Cateogory />
        <Testimonial />
        <CallToActionV1 />
        <Footer />
      </div>
    </WalletContextProvider>
  );
};

export default Home_V8;
