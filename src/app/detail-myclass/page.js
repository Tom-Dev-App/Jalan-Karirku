'use client'
import React from 'react'
import Image from 'next/image'
import Button from '../components/Btn'
import { Icon } from '@iconify/react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default function DetailMyclass () {
  return (
    <>
    <Navbar/>
    <div className='font-roboto'>
        <div className="flex justify-start items-center px-[128px] py-[56px] bg-primer4 text-primer1">
            <Image src={"/assets/ilustration/Effective Communication Skills.svg"} width="0"
            height="0"
            sizes="100vw"
            style={{ width: '380px', height: 'auto' }}  alt={""} loading="eager"/>
            <div className="flex flex-col gap-4 items-start justify-center">
                <h2 className="text-[42px] font-bold">Effective Communication Skills</h2>
                <div className="flex gap-[8px]">
                    <Icon icon="material-symbols:library-books-rounded" className='text-primer1' style={{ fontSize: '24px' }}/>
                    <p className="text-[18px]">7 modul</p>
                </div>
                <Button type="link" className="btn-primary-lg text-center" href={"#"}>Start</Button>
            </div>
        </div>
        
        <div className="flex flex-col px-[128px] py-[56px] gap-[32px] text-black0 ">
            <div className="flex flex-col gap-[16px]">
                <h4 className="text-[24px] font-bold">About Class</h4>
                <p>The Effective Communication Assessment class is a component of effective communication skills training. This training will help you grasp the fundamentals of effective communication, including active listening, clear speaking, and persuasive writing. You'll learn how to communicate more efficiently with colleagues, superiors, and clients. It is an examination designed to gauge participants' understanding and abilities in communicating effectively. The assessment may encompass various types of questions and tasks,</p>
            </div>
            <div className="flex flex-col gap-[16px]">
                <h4 className="text-[24px] font-bold">Benefit</h4>
                <ul className="list-disc">
                    <li>Deeper Understanding</li>
                    <li>Improved Interpersonal Relationships</li>
                    <li>Career Advancement</li>
                    <li>Certificates and Recognition</li>
                    <li>Identifying Areas for Improvement</li>
                    <li>Measuring Abilities</li>
                </ul>
            </div>
            <Button type="link" className="btn-primary-lg text-center" href={"#"}>Start</Button>
        </div>

        <Footer/>
    </div>
    </>
  )
}
