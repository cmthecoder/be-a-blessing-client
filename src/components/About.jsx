import React from "react";
import history from "../assets/history.jpg";

const About = () => {
  return (
    <div className="border-t-4 border-blue-400">
      <h2 className="flex justify-center">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold">A Brief History</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            gravida nulla. In porta fermentum finibus. Suspendisse ut lectus
            ultricies, molestie massa vel, maximus orci.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img src={history} alt="" className="w-full" />
          Logo
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="order-2 md:order-2">
          <img src={history} alt="" className="w-full" />
          Logo
        </div>
        <div className="order-1 md:order-1">
          <h3 className="text-2xl font-bold">A Brief History</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            gravida nulla. In porta fermentum finibus. Suspendisse ut lectus
            ultricies, molestie massa vel, maximus orci.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold">A Brief History</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            gravida nulla. In porta fermentum finibus. Suspendisse ut lectus
            ultricies, molestie massa vel, maximus orci.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img src={history} alt="" className="w-full" />
          Logo
        </div>
      </div>
    </div>
  );
};

export default About;
