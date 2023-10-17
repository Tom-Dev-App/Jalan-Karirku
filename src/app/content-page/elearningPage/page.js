'use client'
import React from 'react'
import Image from 'next/image'
import Card from '@/app/components/card'
import Button from '../../components/Btn'
import TabView from '../../components/tabView'
import { Icon } from '@iconify/react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
export default function ElearningPage () {
    return (
    <>
    <Navbar/>
        <div className="w-1440 h-432 bg-primer4 flex items-center justify-between gap-6 px-[128px] py-[56px]">
            <Image src={"/assets/ilustration/elearning spft skills.svg"} 
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: 'auto', height: '320px' }} alt={""} loading="eager"/>         
            
            <div className=" text-primer1 flex flex-col gap-4">
                <h2 className="text-[42px] font-bold font-roboto">Soft Skill Development</h2>
                <p className="text-[18px]">Soft skill development helps you acquire non-technical skills such as communication, leadership, and teamwork. It enhances your effectiveness in the workplace and aids in achieving career success. Soft skills also enable you to excel in overcoming challenges and collaborate effectively with colleagues.</p>
            </div>
        </div>

        <h1 className="text-primer1 text-[32px] font-bold text-center mx-[128px] mt-[56px]">Unlock your full potential and enhance your career prospects with our comprehensive Soft Skills Training Package. Invest in your personal and professional growth today!</h1>

        <div className='px-[128px] py-[56px] flex flex-col gap-10 justify-between'>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/ilustration/Effective Communication Skills.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Effective Communication Skills</h4>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex pt-2 gap-[8px] text-[14px] justify-between items-center">
                                        <div className="flex gap-[8px]">
                                            <Icon icon="material-symbols:library-books-rounded" className='text-primer1' style={{ fontSize: '24px' }}/>
                                            <p>7 modules</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                            <span className='text-[14px] '>Rp.100.000</span>
                                        </div>
                                    </div>
                                    <p className="text-[14px]">This training will help you grasp the fundamentals of effective communication, including active listening, clear speaking, and persuasive writing.</p>
                                </div>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] justify-between shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/ilustration/Time Management and Productivity.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="flex flex-col px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Time Management and Productivity</h4>
                                <div className="flex flex-col gap-[16px] pb-4">
                                    <div className="flex gap-[8px] pt-2 text-[14px]">
                                        <Icon icon="material-symbols:library-books-rounded" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <p>7 modules</p>
                                    </div>
                                    <p className="text-[14px]">This training will assist you in better time management, identifying priorities, and enhancing productivity. </p>
                                </div>
                                <Button type="link" className="btn-primary-sm text-center" href={"#"}>Start</Button>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/ilustration/Leadership and Teamwork.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Leadership and Teamwork</h4>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex pt-2 gap-[8px] text-[14px] justify-between items-center">
                                        <div className="flex gap-[8px]">
                                            <Icon icon="material-symbols:library-books-rounded" className='text-primer1' style={{ fontSize: '24px' }}/>
                                            <p>7 modules</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                            <span className='text-[14px] '>Rp.100.000</span>
                                        </div>
                                    </div>
                                    <p className="text-[14px]">This training will aid in developing leadership and teamwork skills. You'll learn how to lead effectively, motivate teams, and contribute positively to team projects.</p>
                                </div>
                            </div>
                </div>
            </div>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-[16px] justify-between shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/ilustration/Problem-Solving and Decision-Making.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="flex flex-col px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Problem-Solving and Decision-Making</h4>
                                <div className="flex flex-col gap-[16px] pb-4">
                                    <div className="flex gap-[8px] pt-2 text-[14px]">
                                        <Icon icon="material-symbols:library-books-rounded" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <p>7 modules</p>
                                    </div>
                                    <p className="text-[14px]">This training will sharpen your problem-solving and decision-making abilities. You'll learn techniques for analysis, identifying alternative solutions, and making sound decisions.</p>
                                </div>
                                <Button type="link" className="btn-primary-sm text-center" href={"#"}>Start</Button>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] justify-between shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/ilustration/Stress Management and Resilience.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="flex flex-col px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Stress Management and Resilience</h4>
                                <div className="flex flex-col gap-[16px] pb-4">
                                    <div className="flex gap-[8px] pt-2 text-[14px]">
                                        <Icon icon="material-symbols:library-books-rounded" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <p>7 modules</p>
                                    </div>
                                    <p className="text-[14px]">This training will help you manage stress and improve mental resilience.</p>
                                </div>
                                <Button type="link" className="btn-primary-sm text-center" href={"#"}>Start</Button>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/ilustration/Networking and Relationship Building.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Networking and Relationship Building</h4>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex pt-2 gap-[8px] text-[14px] justify-between items-center">
                                        <div className="flex gap-[8px]">
                                            <Icon icon="material-symbols:library-books-rounded" className='text-primer1' style={{ fontSize: '24px' }}/>
                                            <p>7 modules</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                            <span className='text-[14px] '>Rp.100.000</span>
                                        </div>
                                    </div>
                                    <p className="text-[14px]">This training will aid in building and maintaining strong professional relationships. You'll learn how to expand your network, interact with colleagues, and leverage connections for career opportunities.</p>
                                </div>
                            </div>
                </div>
            </div>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/ilustration/Emotional Intelligence.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Emotional Intelligence</h4>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex pt-2 gap-[8px] text-[14px] justify-between items-center">
                                        <div className="flex gap-[8px]">
                                            <Icon icon="material-symbols:library-books-rounded" className='text-primer1' style={{ fontSize: '24px' }}/>
                                            <p>7 modules</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <Icon icon="bx:purchase-tag" className='text-primer1' style={{ fontSize: '24px' }}/>
                                            <span className='text-[14px] '>Rp.100.000</span>
                                        </div>
                                    </div>
                                    <p className="text-[14px]">This training will develop your emotional intelligence, helping you understand and manage your own emotions and respond wisely to others' emotions.</p>
                                </div>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] justify-between shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/ilustration/Adaptability and Change Management.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="flex flex-col px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Adaptability and Change Management</h4>
                                <div className="flex flex-col gap-[16px] pb-4">
                                    <div className="flex gap-[8px] pt-2 text-[14px]">
                                        <Icon icon="material-symbols:library-books-rounded" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <p>7 modules</p>
                                    </div>
                                    <p className="text-[14px]">This training will help you navigate workplace changes more effectively. You'll learn how to adapt quickly, manage changes, and remain flexible in dynamic environments.</p>
                                </div>
                                <Button type="link" className="btn-primary-sm text-center" href={"#"}>Start</Button>
                            </div>
                </div>
                <div className="flex flex-col gap-[16px] justify-between shadow-xl w-[337px] rounded-[8px]">
                            <Image src={"/assets/ilustration/Ethical Decision-Making.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="flex flex-col px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Ethical Decision-Making</h4>
                                <div className="flex flex-col gap-[16px] pb-4">
                                    <div className="flex gap-[8px] pt-2 text-[14px]">
                                        <Icon icon="material-symbols:library-books-rounded" className='text-primer1' style={{ fontSize: '24px' }}/>
                                        <p>7 modules</p>
                                    </div>
                                    <p className="text-[14px]">This training will help you understand ethics in decision-making and act ethically in the business world.</p>
                                </div>
                                <Button type="link" className="btn-primary-sm text-center" href={"#"}>Start</Button>
                            </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}
