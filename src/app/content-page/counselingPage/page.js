'use client'
import React from 'react'
import Image from 'next/image'
import Button from '../../components/Btn'
import TabView from '../../components/tabView'
import { Icon } from '@iconify/react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
export default function CounselingPage () {
    return (
    <>
    <Navbar/>
        <div className="w-1440 h-432 bg-primer4 flex items-center justify-between gap-6 px-[128px] py-[56px]">
            <Image src={"/assets/ilustration/Marriage counseling-amico.svg"} 
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: 'auto', height: '320px' }} alt={""} loading="eager"/>         
            
            <div className=" text-primer1 flex flex-col gap-4">
                <h2 className="text-[42px] font-bold font-roboto">Career Counseling</h2>
                <p className="text-[18px]">Career counseling is a personalized service that assists you in planning and achieving your career goals. Counselors work with you to identify your strengths, overcome obstacles, and develop concrete action plans. This provides personalized guidance that can lead you towards greater and more fulfilling career success.</p>
            </div>
        </div>

        <h1 className="text-primer1 text-[32px] font-bold text-center mx-[128px] mt-[56px]">Consumers can arrange video sessions according to their convenience, allowing them to receive career guidance without leaving their homes.</h1>

        <div className='px-[128px] py-[56px] flex justify-between'>
                <div className="px-[24px] py-[16px] bg-primer4 rounded-[8px] flex gap-[48px] items-between shadow-xl w-[551px]">
                    <div className="flex flex-col justify-between items-between w-[162px]">
                        <h4 className="text-[24px] font-bold">Career Counseling via Chat</h4>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                <span className='text-[14px] '>Rp.750.000</span>
                            </div>
                            <Button type="link" className="btn-primary-sm text-center" href={"#"}>Buy</Button>
                        </div>
                    </div>
                    <ul className="list-disc">
                        <li>Consumers can access career counseling anytime, even outside of working hours, providing greater flexibility in seeking assistance.</li>
                        <li>Chat sessions offer a high level of privacy, allowing consumers to feel comfortable discussing their career challenges without worry.</li>
                        <li>All chat conversations are recorded, so consumers can refer back to the advice and guidance provided by counselors whenever needed.</li>
                        <li>Counselors can provide highly personalized and tailored guidance to consumers, helping them plan specific steps to achieve career goals.</li>
                        <li>Consumers can schedule counseling sessions according to their schedules, without disrupting work or other commitments. </li>
                        <li>Counseling via chat helps consumers develop written communication skills, which can be beneficial in various aspects of their professional lives.</li>
                    </ul>
                </div>
                <div className="px-[24px] py-[16px] bg-primer4 rounded-[8px] flex gap-[48px] items-between shadow-xl w-[551px]">
                    <div className="flex flex-col justify-between items-between w-[162px]">
                        <h4 className="text-[24px] font-bold">Career Counseling via Video Conference</h4>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                <span className='text-[14px] '>Rp.1.125.000</span>
                            </div>
                            <Button type="link" className="btn-primary-sm text-center" href={"#"}>Buy</Button>
                        </div>
                    </div>
                    <ul className="list-disc">
                        <li>Video conference sessions allow consumers to interact directly with counselors through video and audio, creating a more personal connection.</li>
                        <li>In video conference, consumers can see the counselor's facial expressions and body language, allowing for important non-verbal communication and understanding.</li>
                        <li>Due to real-time communication, consumers' questions and issues can be addressed more quickly in video sessions.</li>
                        <li>Video conference enables more interactive discussions and active information sharing, providing consumers with deeper insights into their careers.</li>
                        <li>Consumers can gain a deeper understanding of counselor advice and guidance through visual communication in video conference.</li>
                        <li>Consumers can arrange video sessions according to their convenience, allowing them to receive career guidance without leaving their homes.</li>
                    </ul>
                </div>
        </div>


    <Footer/>
    </>
  )
}
