"use client"
import Loader from "@/components/loader/Loader"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const propertyPage= () =>{
    const [isload,setIsLoading] = useState(true)
    const {slug}= useParams()
    console.log(isload)
    useEffect(()=>{
        const  fetchingData = async () => {
            const data = await fetch(`api/slug//${slug}`
               
            )
            if(!data.ok){
                     console.log(data,"nope")
                // redirect('/')
            }else{
                // setIsLoading(!isload) 
                console.log(data,"yes")
            }
        }
        fetchingData()
        return () =>{
           
            //clean pour clean les état indésirable et empêcher les fuites mémoires
        }
    
    },[])
return (
    <>
    {
        isload ? (<Loader isLoading={isload} />) : (
            <div>
                

            </div>
        )      
    }
    </>
)
}

export default propertyPage