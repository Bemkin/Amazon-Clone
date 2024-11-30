import React from 'react'
import Carousel from '../../Components/Carousel/Carousel';
import Categories from '../../Components/Categories/Categories';
import AllItems from '../../Components/SingleItem/AllItems';

function Landing() {
  return (
    <div>
            <Carousel/>
            <Categories/>
            <AllItems/>
    </div>
  )
}

export default Landing