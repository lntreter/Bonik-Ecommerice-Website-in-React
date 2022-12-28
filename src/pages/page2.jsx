import React from "react"
import Shop from "../components/shops/Shop"
import Wrapper from "../components/wrapper/Wrapper"

const Page2 = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
    </>
  )
}

export default Page2
