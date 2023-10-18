'use client'
import React from 'react'
import Image from 'next/image'
import Button from '../components/Btn'
import TabView from '../components/tabView'
import { Icon } from '@iconify/react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SettingProfile from '../components/settingProfile'
export default function ProfileSetting () {
    return (
    <>
    <Navbar/>
    
    <SettingProfile/>

    <Footer/>
    </>
  )
}
