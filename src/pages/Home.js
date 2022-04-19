import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import JumpToUp from '../components/JumpToUp'
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
        <JumpToUp/>
    </div>
  )
}

export default Home