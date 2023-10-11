'use client'
import Image from 'next/image'
import Button from './components/btn'
import Card from './components/card'
import Footer from './components/footer'
import Accordion from './components/accordion'
import { Familjen_Grotesk } from 'next/font/google'
export default function Home() {

  const FAQ = [
    {
      title: "What is meant by soft skill development?",
      content: "Soft skill development involves enhancing non-technical abilities such as communication, leadership, teamwork, and interpersonal skills. It helps individuals become more effective in their work and enhances career prospects."
    },
    {
      title: "Why are soft skills important in the workplace?",
      content: "Soft skills are a key component of professional success. They enable individuals to interact better with colleagues, manage conflicts, and become effective leaders. This can impact job performance and career advancement."
    },
    {
      title: "How can career counseling benefit me?",
      content: "Career counseling provides personalized guidance and advice to help you plan and achieve your career goals. It helps you understand your potential, overcome obstacles, and take the right steps in your career development."
    },
    {
      title: "Is this program suitable for recent college graduates?",
      content: "Yes, the program is suitable for all levels of experience. We offer tailored solutions to individual needs, including beginners who are just entering the workforce."
    },
    {
      title: "How can I enroll in this program?",
      content: "How can I enroll in this program?"
    }

  ]

  function hello() {
    alert("hello")
  }
  return (
    <>
    {/* <div className='m-12 mb-8'>
        <Card header="Judul 1" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, asperiores! Reiciendis, minus." img={{src: "/assets/ilustration/Adaptability-and-Change-Management.svg",  alt: ""}} price={"100000"} modules={10} isPaid={false} isPass={false} inProcess={false} href="/"/>

        <Card header="Judul 1" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, asperiores! Reiciendis, minus." img={{src: "/assets/ilustration/Adaptability-and-Change-Management.svg",  alt: ""}} price={"100000"} modules={10} isPaid={true} isPass={false} inProcess={false} href="/"/>

        <Card header="Judul 1" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, asperiores! Reiciendis, minus." img={{src: "/assets/ilustration/Adaptability-and-Change-Management.svg",  alt: ""}} price={"100000"} modules={10} isPaid={true} isPass={false} inProcess={true} href="/"/>

        <Card header="Judul 1" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, asperiores! Reiciendis, minus." img={{src: "/assets/ilustration/Adaptability-and-Change-Management.svg",  alt: ""}} price={"100000"} modules={10} isPaid={true} isPass={true} inProcess={true} href="/"/>
    </div>

    <Accordion items={FAQ}/>
    <Footer/> */}

    <div className="relative w-[500px]">
      <Image src={"/assets/ilustration/Adaptability-and-Change-Management.svg"} width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}  alt={"hello"} loading="eager"/>
    </div>
    <Button className="btn-primary-sm" onClick={hello}>Hello World</Button>
    <Button className="btn-primary-sm" type="link" href="/about">About</Button>
    <Button className="btn-primary-sm" type="link" href="..">Back</Button>
    </>
  )
}
