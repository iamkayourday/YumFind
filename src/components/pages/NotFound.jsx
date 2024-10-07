import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3500);
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen text-center dark:text-[#e5e7eb]">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="mb-4">The page you're looking for doesn't exist.</p>
        <p>You will be redirected to the home page shortly.</p>
      </div>
    </>
  );
};

export default NotFound;