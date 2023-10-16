'use client'
import Button from '../../components/Btn'
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
          <div className='flex items-center gap-12'>
            <img className='flex flex-shrink-0' src="../assets/img/detail webinar.png"/>
            <div className='columns-1'>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-4xl sm:text-sm" style={{color: '#0C356A'}}>Effective Communication Skills</h1>
                <div className='flex flex-wrap items-center px-4'>
                  <Icon icon="uiw:date" width={'24px'}  className='text-primer1'/>
                  <p className='px-4'>9/23/23 20.00</p>
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
          <h1 className='text-2xl font-extrabold'>About Webinar</h1>
          <p className='text-1xl break-words'>Our Effective Communication Webinar is a dynamic online event designed to equip participants with the skills and knowledge necessary for successful communication in various contexts. Led by seasoned communication experts, this webinar delves into the intricacies of effective communication, offering practical insights and strategies that can be applied immediately.</p>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <h1 className='text-2xl font-extrabold'>Benefit</h1>
          <ul className='list-disc px-6'>
            <li>Gain a deep understanding of the principles and techniques behind effective communication, allowing you to convey your thoughts and ideas with clarity and confidence.</li>
            <li>Learn how to navigate and resolve conflicts through effective communication, fostering harmonious relationships both personally and professionally.</li>
            <li>Develop the ability to connect with others on a deeper level, building stronger, more meaningful relationships.</li>
            <li>Effective communication is a key factor in career success. Mastering this skill can open doors to new opportunities and leadership roles.</li>
            <li>Enhance your personal growth by becoming a more empathetic, persuasive, and influential communicator.</li>
          </ul>
        </div>
        <div className='flex flex-col items-start gap-4'>
          <h1 className='text-2xl font-extrabold'>Terms and Conditions</h1>
          <ul className='list-disc px-6'>
            <li>To participate in the webinar, you must complete the registration process, which may include providing your name, email address, and payment details, if applicable.</li>
            <li>Upon registration and payment, you will receive access to the webinar platform. Access details will be sent to the email address provided during registration.</li>
            <li>Active participation is encouraged during the webinar, including asking questions and engaging in discussions.</li>
            <li>The webinar may be recorded for future reference or distribution. By participating, you consent to being recorded.</li>
            <li>Any materials, handouts, or resources shared during the webinar are for personal use and may not be reproduced or distributed without permission.</li>
          </ul>
        </div>
          <Button type="link" className="btn-primary-lg text-center" href={"#"}>Buy</Button>
      </div>
    </section>
    <Footer/>
    </>
  )
}
