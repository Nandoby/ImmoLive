"use client";
import Loader from "@/components/loader/Loader";
import {  useState } from "react";
import useLoadData from "@/useStateCustom/useLoadData";
const propertyPage = () => {
  const [isload, setIsLoading] = useState(true);

  return <>{isload ? <Loader isLoading={isload} /> : <div></div>}</>;
};

export default propertyPage;
