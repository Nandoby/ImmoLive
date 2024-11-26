import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const useLoadData = (apiPath: string) => {
  let path = `api/${apiPath}`;
  const [data, setData] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(path);
        if (!response.ok) {
          redirect("");
        }
      } catch (error: unknown) {
        redirect("");
      }
    };
    fetchingData();
    return () => {
      //clean pour clean les état indésirable et empêcher les fuites mémoires
    };
  }, []);
};

export default useLoadData;
