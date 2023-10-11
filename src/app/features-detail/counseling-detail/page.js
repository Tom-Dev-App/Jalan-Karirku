'use client'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { Icon } from '@iconify/react'

export default function Detail() {
  return (
    <>
    <Navbar/>
    <section style={{background: '#D5E5F2'}}>
      <div className='sm:cotainer md:container lg:container lg:py-14 lg:px-32'>
        <div className='flex flex-col'>
          <div className='flex justify-items-center items-center gap-12'>
            <img className='pr-10' width="380px" height="auto" src="../assets/ilustration/Marriage counseling-amico.svg"></img>
            <div className='columns-1'>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-4xl sm:text-1xl" style={{color: '#0C356A'}}>Effective Communication Skills</h1>
                <div className='flex flex-wrap items-center py-2 px-4'>
                  <Icon icon="bx:purchase-tag" width={'24px'} className='text-primer1'/>
                  <p className='px-4'>Rp. 1.125.000</p>
                </div>
                <div className='flex flex-wrap items-center py-4'>
                    <button className='text-white rounded-lg py-2 px-12' style={{background:'#279EFF'}}>
                      Buy
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='grid grid-cols-1 lg:py-14 lg:px-32 flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-extrabold'>About Counseling</h1>
          <p className='text-1xl break-words'>The Career Counseling via Video Conference Package is a service designed to assist individuals in planning and developing their careers with the guidance of experienced career counselors. In this service, counseling is conducted through video conference sessions that allow participants to interact directly with counselors, even if they are in different locations. These sessions encompass skills assessment, understanding career goals, guidance in choosing the right career path, and the development of strategies to achieve these goals.</p>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <h1 className='text-2xl font-extrabold'>Benefit</h1>
          <ul className='list-disc px-6'>
            <li>Video conference sessions allow consumers to interact directly with counselors through video and audio, creating a more personal connection.</li>
            <li>In video conference, consumers can see the counselor's facial expressions and body language, allowing for important non-verbal communication and understanding.</li>
            <li>Due to real-time communication, consumers' questions and issues can be addressed more quickly in video sessions.</li>
            <li>Video conference enables more interactive discussions and active information sharing, providing consumers with deeper insights into their careers.</li>
            <li>Consumers can gain a deeper understanding of counselor advice and guidance through visual communication in video conference.</li>
            <li>Consumers can arrange video sessions according to their convenience, allowing them to receive career guidance without leaving their homes.</li>
          </ul>
        </div>
          <button className='text-white rounded-lg py-2 px-12 w-full' style={{background:'#279EFF'}}>
            Buy
          </button>
      </div>
    </section>
    <Footer/>
    </>
  )
}
