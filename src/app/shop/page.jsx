"use client"
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import React from "react";

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 299.99,
    image: "https://docs.material-tailwind.com/img/team-1.jpg"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 149.99,
    image: "https://docs.material-tailwind.com/img/team-2.jpg"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    image: "https://docs.material-tailwind.com/img/team-3.jpg"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 89.99,
    image: "https://docs.material-tailwind.com/img/team-4.jpg"
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 79.99,
    image: "https://docs.material-tailwind.com/img/team-5.jpg"
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "https://docs.material-tailwind.com/img/team-6.jpg"
  }
];

const ShopPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(carbon_background.png)`,
        backgroundPosition: "center",
      }}
      className="min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-32"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">

        <div className="self-center">
        <h1 className="text-6xl font-bold my-10">Our <span className="bg-radial-gradient bg-clip-text text-transparent">Products</span></h1>
        <div className="bg-foreground w-full h-1 lg:mt-8 "></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="bg-primary shadow-neutral-800 rounded-t-xl"
            >
              <CardHeader className="h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody className="text-center bg-gray-1000">
                <Typography variant="h4" className="mb-2 text-foreground">
                  {product.name}
                </Typography>
                <Typography className="font-medium text-zinc-500">
                  ${product.price}
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2 bg-gray-1000">
                <Button className="bg-foreground text-primary h-10 w-full hover:opacity-50 transition duration-200">
                  ADD TO CART
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;