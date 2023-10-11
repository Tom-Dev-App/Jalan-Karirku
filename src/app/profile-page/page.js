'user client'
import React from 'react'
import Image from 'next/image'
import Button from '../components/Btn'
import { Icon } from '@iconify/react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default function ProfilePage () {
    // function openTab(evt, tabName) {
    //     var i, tabContent, tabButtons;
        
    //     tabContent = document.getElementsByClassName("tab-content");
    //     for (i = 0; i < tabContent.length; i++) {
    //         tabContent[i].style.display = "none";
    //     }

    //     tabButtons = document.getElementsByClassName("tab-button");
    //     for (i = 0; i < tabButtons.length; i++) {
    //         tabButtons[i].classList.remove("active");
    //     }

    //     document.getElementById(tabName).style.display = "block";
    //     evt.currentTarget.classList.add("active");
    // }
    return (
    <>
    <Navbar/>
    <div className='font-roboto'>
        <div className="px-[128px] py-[64px] bg-primer4 flex justify-between items-center">
            <Image src={"/assets/img/Ellipse 2.png"} width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} alt={""} loading="eager"/>
            <a href=''>
            <Image src={"/assets/img/edit.png"} width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} className="absolute top-[300px] left-[360px]" alt={""} loading="eager"/>
            </a> 
            <div className="w-[640px] flex flex-col gap-[16px] items-start">
                <h1 className="text-[54px] font-bold">Brooklyn Simmons</h1>
                <div className="flex gap-[24px]">
                    <h6 className="text-[18px] font-bold">Student</h6>
                    <div className="flex gap-[8px] justify-start items-center">
                        <Icon icon="mdi:location" color="#0c356a" width="20" height="20" />
                        <h6 className="text-[18px] font-bold">Indonesia</h6>
                    </div>
                </div>
                <div>
                    <h6 className="text-[18px] font-bold">About Me</h6>
                    <p>Brooklyn Simmons is an enthusiastic student determined to ensure their career trajectory in the future. With unwavering determination and dedication, they are working diligently to achieve success in their chosen field. Brooklyn is highly eager to explore various opportunities and learning experiences that will aid in reaching their career aspirations. With a strong educational background and a passionate drive for continuous growth, Brooklyn Simmons is a promising future professional, ready to pursue their career dreams.</p>
                </div>
                <button href="" className="shadow-xl hover:bg-primer1 px-[24px] py-[8px] rounded-[8px] font-bold text-white0 bg-primer2 text-[16px]">Sign Out</button>
            </div>
        </div>

        <div className=" mx-[128px] my-[56px] flex flex-col gap-[40px]">
            <div className="tab-container flex gap-[48px] font-bold text-[32px]">
                <button onclick="openTab(event, 'tab1')" className="tab-button active:bg-blue-200 active:shadow-md active:shadow-lg active py-[16px] px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer4"><span>Academy</span></button>
                <button onclick="openTab(event, 'tab2')" className="tab-button active:bg-blue-200 active:shadow-md active:shadow-lg py-[16px] px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer4"><span>Webinar</span></button>
                <button onclick="openTab(event, 'tab3')" className="tab-button active:bg-blue-200 active:shadow-md active:shadow-lg py-[16px] px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer4"><span>Counseling</span></button>
            </div>
            <div id="tab1" className="tab-content">            
                <div className="flex flex-col gap-[32px]">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                            <Image src={"/assets\ilustration\Effective Communication Skills.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Effective Communication Skills</h4>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex gap-[8px] text-[14px] justify-between items-center">
                                        <div className="flex gap-[8px]">
                                            <Icon icon="material-symbols:library-books-rounded" className='text-primer1'/>
                                            <p>7 modules</p>
                                        </div>
                                        <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">Process</p>
                                    </div>
                                    <p className="text-[14px]">This training will help you grasp the fundamentals of effective communication, including active listening, clear speaking, and persuasive writing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                            <Image src={"/assets\ilustration\Stress Management and Resilience.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Stress Management and Resilience</h4>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex gap-[8px] text-[14px] justify-between items-center">
                                        <div className="flex gap-[8px]">
                                            <Icon icon="material-symbols:library-books-rounded" className='text-primer1'/>
                                            <p>7 modules</p>
                                        </div>
                                        <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">Passed</p>
                                    </div>
                                    <p className="text-[14px]">This training will help you manage stress and improve mental resilience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                            <Image src={"/assets\ilustration\Ethical Decision-Making.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Ethical Decision-Making</h4>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex gap-[8px] text-[14px] justify-between items-center">
                                        <div className="flex gap-[8px]">
                                            <Icon icon="material-symbols:library-books-rounded" className='text-primer1'/>
                                            <p>7 modules</p>
                                        </div>
                                        <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">Process</p>
                                    </div>
                                    <p className="text-[14px]">This training will help you understand ethics in decision-making and act ethically in the business world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                            <Image src={"/assets\ilustration\Problem-Solving and Decision-Making.svg"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]">
                                <h4 className="text-[24px] font-bold">Problem-Solving and Decision-Making</h4>
                                <div className="flex flex-col gap-[16px]">
                                    <div className="flex gap-[8px] text-[14px] justify-between items-center">
                                        <div className="flex gap-[8px]">
                                            <Icon icon="material-symbols:library-books-rounded" className='text-primer1'/>
                                            <p>7 modules</p>
                                        </div>
                                        <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">Passed</p>
                                    </div>
                                    <p className="text-[14px]">This training will sharpen your problem-solving and decision-making abilities. You'll learn techniques for analysis, identifying alternative solutions, and making sound decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tab2" className="tab-content hidden">
                <div className="flex flex-col gap-[32px]">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                            <Image src={"/assets\img\Effective Communication.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]  w-[100%]">
                                <h4 className="text-[24px] font-bold">Effective Communication</h4>
                                <div className="flex text-[14px] justify-between items-center">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="20" height="20" />
                                        <p>9/23/23 20:00</p>
                                    </div>
                                    <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">Paid Off</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                            <Image src={"/assets\img\Stay Productive.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]  w-[100%]">
                                <h4 className="text-[24px] font-bold">Stay Productive</h4>
                                <div className="flex text-[14px] justify-between items-center">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="20" height="20" />
                                        <p>4/4/23 20:00</p>
                                    </div>
                                    <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">Not Yet Paid</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                            <Image src={"/assets\img\Creativity and Innovation.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px] w-[100%]">
                                <h4 className="text-[24px] font-bold">Creativity and Innovation</h4>
                                <div className="flex text-[14px] justify-between items-center">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="20" height="20" />
                                        <p>11/7/23 20:00</p>
                                    </div>
                                    <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">Paid Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                            <Image src={"/assets\img\Presentation Public Speaking.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="px-[16px] pb-[16px]  w-[100%]">
                                <h4 className="text-[24px] font-bold">Presentation Public Speaking</h4>
                                <div className="flex text-[14px] justify-between items-center">
                                    <div className="flex gap-[8px]">
                                        <Icon icon="uiw:date" color="#0c356a" width="20" height="20" />
                                        <p>8/16/23 20:00</p>
                                    </div>
                                    <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">Paid Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tab3" className="tab-content hidden flex justify-between items-start">
                <div className="px-[24px] py-[16px] bg-primer4 rounded-[8px] flex gap-[48px] items-start shadow-xl w-[551px]">
                    <div className="flex flex-col gap-[24px] justify-start items-start w-[162px]">
                        <h4 className="text-[24px] font-bold">Career Counseling via Video Conference</h4>
                        <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">Paid Off</p>
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
        </div>

        <Footer/>
    </div>
    </>
  )
}
