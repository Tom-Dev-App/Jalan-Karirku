'use client'
import React from 'react'
import Image from 'next/image'
import Button from '../../components/Btn'
import TabView from '../../components/tabView'
import { Icon } from '@iconify/react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
export default function WebinarPage () {
    return (
    <>
    <Navbar/>
        <div className="w-1440 h-432 bg-primer4 flex items-center justify-between gap-6 px-[128px] py-[56px]">
            <Image src={"/assets/ilustration/Webinar-amico.svg"} 
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: 'auto', height: '320px' }} alt={""} loading="eager"/>         
            
            <div className=" text-primer1 flex flex-col gap-4">
                <h2 className="text-[42px] font-bold font-roboto">Career Webinars</h2>
                <p className="text-[18px]">Career webinars provide you with access to insights and knowledge from experts in various fields. You can deepen your understanding of industry trends, job search strategies, and career development. Webinars offer the opportunity to learn from the best without leaving your home, making professional development more convenient.</p>
            </div>
        </div>

        <h1 className="text-primer1 text-[32px] font-bold text-center mx-[128px] mt-[56px]">Unlock your path to career success through our enriching Career Webinar package - your gateway to invaluable insights and professional growth.</h1>

        <div className='px-[128px] py-[56px] flex flex-col gap-10 justify-between'>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/img/Effective Communication.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Effective Communication</h4>
                                <div className="flex flex-col pt-2 gap-[8px] text-[14px] items-start">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="24" height="24" />
                                        <p>9/23/23 20:00</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <span className='text-[14px] '>Rp.100.000</span>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/img/Stay Productive.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Stay Productive</h4>
                                <div className="flex flex-col pt-2 gap-[8px] text-[14px] items-start">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="24" height="24" />
                                        <p>4/4/23 20:00</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <span className='text-[14px] '>Rp.100.000</span>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/img/Emotional Intelligence (EQ).png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Emotional Intelligence (EQ)</h4>
                                <div className="flex flex-col pt-2 gap-[8px] text-[14px] items-start">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="24" height="24" />
                                        <p>5/30/23 20:00</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <span className='text-[14px] '>Rp.100.000</span>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/img/Leadership and Influence.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Leadership and Influence</h4>
                                <div className="flex flex-col pt-2 gap-[8px] text-[14px] items-start">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="24" height="24" />
                                        <p>8/15/23 20:00</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <span className='text-[14px] '>Rp.100.000</span>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/img/Stress and Resilience.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Stress and Resilience</h4>
                                <div className="flex flex-col pt-2 gap-[8px] text-[14px] items-start">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="24" height="24" />
                                        <p>9/4/23 20:00</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <span className='text-[14px] '>Rp.100.000</span>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/img/Conflict Resolution at Work.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Conflict Resolution at Work</h4>
                                <div className="flex flex-col pt-2 gap-[8px] text-[14px] items-start">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="24" height="24" />
                                        <p>2/11/23 20:00</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <span className='text-[14px] '>Rp.100.000</span>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/img/Creativity and Innovation.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Creativity and Innovation</h4>
                                <div className="flex flex-col pt-2 gap-[8px] text-[14px] items-start">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="24" height="24" />
                                        <p>11/7/23 20:00</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <span className='text-[14px] '>Rp.100.000</span>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/img/Networking.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Networking</h4>
                                <div className="flex flex-col pt-2 gap-[8px] text-[14px] items-start">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="24" height="24" />
                                        <p>10/6/23 20:00</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <span className='text-[14px] '>Rp.100.000</span>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/img/Presentation Public Speaking.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Presentation Public Speaking</h4>
                                <div className="flex flex-col pt-2 gap-[8px] text-[14px] items-start">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="24" height="24" />
                                        <p>8/16/23 20:00</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <span className='text-[14px] '>Rp.100.000</span>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>

    <Footer/>
    </>
  )
}
