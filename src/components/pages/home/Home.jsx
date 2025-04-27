import React from 'react'
import Intro from '../../intro/Intro'
import Catalog from '../../catalog/Catalog'
import Discount from '../../discount/Discount'
import Popular from '../../popular/Popular'
import New from '../../new/New'
import All from '../../all/All'
import Order from '../../order/Order'

const Home = () => {
  return (
    <div>
    <Intro />
    <Catalog />
    <Discount />
    <Popular />
    <New /> 
    <All />   
    <Order /> 
    </div>
  )
}

export default Home
