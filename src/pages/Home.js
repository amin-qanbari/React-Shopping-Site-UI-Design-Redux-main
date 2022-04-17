import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import PopularProducts from '../components/PopularProducts'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Slider/>
        <Categories/>
        <PopularProducts/>
        <Newsletter/>
    </div>
  )
}

export default Home