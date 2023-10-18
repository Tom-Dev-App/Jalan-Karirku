'use client'
import React from 'react'
import Button from '../../components/Btn'
import { Icon } from '@iconify/react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
export default function CheckoutCounseling () {
    return (
    <>
    <Navbar/>
        <div className='flex justify-between gap-10 items-start px-[128px] py-[56px]'>
            <div className='flex flex-col gap-6 items-start w-[70%]'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-[42px] font-bold'>Career Counseling via Video Conference</h2>
                    <div className='flex gap-2'>
                        <Icon icon="bx:purchase-tag" className='text-black0' style={{ fontSize: '32px' }}/>
                        <span className='text-[24px] font-bold'>Rp.1.125.000</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-[24px] font-bold'>About package</h4>
                    <p>The Career Counseling via Video Conference Package is a service designed to assist individuals in planning and developing their careers with the guidance of experienced career counselors. In this service, counseling is conducted through video conference sessions that allow participants to interact directly with counselors, even if they are in different locations. These sessions encompass skills assessment, understanding career goals, guidance in choosing the right career path, and the development of strategies to achieve these goals.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-[24px] font-bold'>Benefit</h4>
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
            <div className='flex flex-col items-start gap-4  p-8 bg-primer4 rounded-lg'>
                <div className='flex flex-col gap-2 px-4 pb-4 border-b border-black0 w-full'>
                    <h6 className='text-[18px] font-bold'>Product summary</h6>
                    <p className='text-[18px]'>Career Counseling via Video Conference</p>
                    <div className='flex gap-2'>
                        <Icon icon="bx:purchase-tag" className='text-black0' style={{ fontSize: '24px' }}/>
                        <span className='text-[18px] font-bold'>Rp 1.125.000</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full px-4 pb-4 border-b border-black0'>
                    <div className='flex justify-between'>
                        <span className='text-[18px]'>Sub Total</span>
                        <span className='text-[18px]'>Rp 1.125.000</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-[18px]'>PPN (10%)</span>
                        <span className='text-[18px]'>Rp 112.500</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-[18px] font-bold'>Total</span>
                        <span className='text-[18px] font-bold'>Rp 1.237.500</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full px-4'>
                    <div className='flex flex-col gap-2 justify-between'>
                        <label for="whatsapp" className="block text-[18px]">WhatsApp Number</label>
                        <div className='flex gap-2'>
                            <input type="tel" name="whatsapp" id="whatsapp" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 py-2 sm:text-sm border-gray-900 rounded-lg" placeholder="+62 123-456-7890"/>
                            <div className="tooltip" data-tip="This number will be used as a communication channel for Jalan Karirku to you">  
                                <Icon icon="mingcute:information-line" width="32" className="cursor-pointer" aria-label="Information" />
                            </div>
                        </div>
                    </div>
                    <p className='text-[14px]'>Please fill in your WhatsApp number where you can be contacted.</p>
                    <Button type="link" className="btn-primary-sm text-center" href={"#"}>Proceed to Payment</Button>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}
