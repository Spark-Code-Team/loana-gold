'use client'
import ShopPage from "@/components/templates/ShopPage";
import { creditResult } from "@/service/finance";
import { useEffect } from "react";


const Shop  = () => {
  
    useEffect(()=>{
        const credit = async () => {
            const {response , error} = await creditResult()
            if (response) {
                console.log('successfull credit result',response)
            }else{
                console.log('unsuccessfull credit result', error)
            }
        }
        credit()
    },[])

    return(
        <ShopPage/>   
    )
}

export default Shop;