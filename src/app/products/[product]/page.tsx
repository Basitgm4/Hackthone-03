import React from "react";
import Image from "next/image";
import Ceramics from "../../component/ceramics";
import Brand from "../../component/brand";
import Club from "../../component/club";

const Page = () => {
  return (
    <>
      {/* Main Product Section */}
      <div className="min-h-[70vh] w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={"/product.png"}
            alt="product"
            width={721}
            height={759}
            className="object-contain"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left px-4 sm:px-8 py-8">
          <h1 className="font-normal text-[28px] sm:text-[36px] text-[#2A254B]">
            The Dandy Chair
          </h1>
          <p className="font-normal text-[20px] sm:text-[24px] text-left">
            £250
          </p>
          <p className="text-[#2A254B] font-bold mt-4">Description</p>
          <p className="text-[#2A254B] mt-4">
            A timeless design, with premium materials features as one of our most
            popular and iconic pieces. The dandy chair is perfect for any stylish
            living space with beech legs and lambskin leather upholstery.
          </p>
          <div className="mt-4">
            <p className="text-[#2A254B]">Premium material</p>
            <p className="text-[#2A254B]">Handmade upholstery</p>
            <p className="text-[#2A254B]">Quality timeless classic</p>
          </div>

          {/* Dimensions Section */}
          <div className="mt-8">
            <p className="font-bold text-center">Dimensions</p>
            <div className="flex flex-wrap justify-start gap-4 mt-4 text-[#2A254B]">
              <div>
                <p>Height</p>
                <p className="font-semibold">110cm</p>
              </div>
              <div>
                <p>Width</p>
                <p className="font-semibold">75cm</p>
              </div>
              <div>
                <p>Depth</p>
                <p className="font-semibold">50cm</p>
              </div>
              <div>
                <p>Amount</p>
                <Image
                  src={"/Stepper.png"}
                  alt="stepper"
                  width={122}
                  height={46}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex justify-center md:justify-start mt-8">
            <button className="bg-[#2A254B] h-[56px] w-[143px] flex justify-center items-center text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <div className="mt-12">
        <Ceramics heading="You might also like" />
        <Brand />
        <Club />
      </div>
    </>
  );
};

export default Page;
