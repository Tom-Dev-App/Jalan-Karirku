'use client'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Image from 'next/image'
import Button from '../../components/Btn'
import { Icon } from '@iconify/react'

export default function Detail() {
  return (
    <>
    <Navbar/>
    <section style={{background: '#D5E5F2'}}>
      <div className='sm:cotainer md:container lg:container lg:py-14 lg:px-32'>
        <div className='flex flex-col'>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 flex justify-items-center items-center'>
            <Image src={"../assets/ilustration/Effective Communication Skills.svg"} width="0"
                height="0"
                sizes="100vw"
                style={{ width: 'auto', height: '320px' }}  alt={""} loading="eager"/>
            <div className='columns-1'>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-4xl sm:text-1xl" style={{color: '#0C356A'}}>Effective Communication Skills</h1>
                <div className='flex flex-wrap items-center px-4'>
                  <Icon icon="material-symbols:library-books-rounded" width={'24px'}  className='text-primer1'/>
                  <p className='px-4'>7 Modul</p>
                </div>
                <div className='flex flex-wrap items-center py-2 px-4'>
                  <Icon icon="bx:purchase-tag" width={'24px'} className='text-primer1'/>
                  <p className='px-4'>Rp. 100.000</p>
                </div>
                <div className='flex flex-wrap items-center py-4'>
                  <Button type="link" className="btn-primary-lg" href={"#"}>Buy</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='grid grid-cols-1 lg:py-14 lg:px-32 flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-extrabold'>About class</h1>
          <p className='text-1xl break-words'>The Effective Communication Assessment class is a component of effective communication skills training. This training will help you grasp the fundamentals of effective communication, including active listening, clear speaking, and persuasive writing. You'll learn how to communicate more efficiently with colleagues, superiors, and clients. It is an examination designed to gauge participants' understanding and abilities in communicating effectively. The assessment may encompass various types of questions and tasks,</p>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <h1 className='text-2xl font-extrabold'>Benefit</h1>
          <ul className='list-disc px-6'>
            <li>Deeper Understanding</li>
            <li>Improved Interpersonal Relationships</li>
            <li>Certificates and Recognition</li>
            <li>Identifying Areas for Improvement</li>
            <li>Measuring Abilities</li>
          </ul>
        </div>
          <Button type="link" className="btn-primary-lg text-center" href={"#"}>Buy</Button>
      </div>
    </section>
    <Footer/>
    </>
  )
}
