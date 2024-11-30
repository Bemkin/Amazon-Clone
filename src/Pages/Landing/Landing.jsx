import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Carousel from '../../Components/Carousel/Carousel';
import Categories from '../../Components/Categories/Categories';
import AllItems from '../../Components/SingleItem/AllItems';

function Landing() {
  return (
    <div>
        <Layout>
            <Carousel/>
            <Categories/>
            <AllItems/>
        </Layout>
    </div>
  )
}

export default Landing