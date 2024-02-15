import React from 'react'
import Header from '../../../../Components/user/header/Header'
import Banner from '../../../../Components/user/Banner/Banner'
import Space from '../../../../Components/common/Space'
import Major from '../../../../Components/user/Major/Major'
import Footer from '../../../../Components/user/footer/Footer'

function Home() {
  return (
    <>
 <Header/>
 <Space/>
 <Banner/>
 <Space/>
 <Major/>
 <h2 className='font-pS text-center font-bold'> We keeps Your Trust</h2>
 <Footer/>
    </>
  )
}

export default Home