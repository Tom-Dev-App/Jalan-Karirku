'use client'
import React from 'react'
import Button from '../../components/Btn'
import { Icon } from '@iconify/react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
export default function CheckoutWebinar () {
    return (
    <>
    <Navbar/>
          <div className='flex justify-between gap-10 items-start px-[128px] py-[56px]'>
            <div className='flex flex-col gap-6 items-start w-[70%]'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-[42px] font-bold'>Effective Communication</h2>
                    <div className='flex gap-2'>
                        <Icon icon="bx:purchase-tag" className='text-black0' style={{ fontSize: '32px' }}/>
                        <span className='text-[24px] font-bold'>Rp 100.000</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-[24px] font-bold'>About webinar</h4>
                    <p>Our Effective Communication Webinar is a dynamic online event designed to equip participants with the skills and knowledge necessary for successful communication in various contexts. Led by seasoned communication experts, this webinar delves into the intricacies of effective communication, offering practical insights and strategies that can be applied immediately.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-[24px] font-bold'>Benefit</h4>
                    <ul className="list-disc">
                        <li>Gain a deep understanding of the principles and techniques behind effective communication, allowing you to convey your thoughts and ideas with clarity and confidence.</li>
                        <li>Learn how to navigate and resolve conflicts through effective communication, fostering harmonious relationships both personally and professionally.</li>
                        <li>Develop the ability to connect with others on a deeper level, building stronger, more meaningful relationships.</li>
                        <li>Effective communication is a key factor in career success. Mastering this skill can open doors to new opportunities and leadership roles.</li>
                        <li>Enhance your personal growth by becoming a more empathetic, persuasive, and influential communicator.</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col items-start gap-4  p-8 bg-primer4 rounded-lg'>
                <div className='flex flex-col gap-2 px-4 pb-4 border-b border-black0 w-full'>
                    <h6 className='text-[18px] font-bold'>Product summary</h6>
                    <p className='text-[18px]'>Effective Communication</p>
                    <div className='flex gap-2'>
                        <Icon icon="bx:purchase-tag" className='text-black0' style={{ fontSize: '24px' }}/>
                        <span className='text-[18px] font-bold'>Rp 100.000</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full px-4 pb-4 border-b border-black0'>
                    <div className='flex justify-between'>
                        <span className='text-[18px]'>Sub Total</span>
                        <span className='text-[18px]'>Rp 100.000</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-[18px]'>PPN (10%)</span>
                        <span className='text-[18px]'>Rp 10.000</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-[18px] font-bold'>Total</span>
                        <span className='text-[18px] font-bold'>Rp 110.000</span>
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