'user client'
import Image from 'next/image'
import Button from '../components/Btn'
import Footer from '../components/footer'
import Accordion from '../components/accordion'
export default function Dashboard() {

        // const carousel = document.getElementById('testimonial-carousel');
        // let currentIndex = 0;

        // function scrollCarousel() {
        //     currentIndex += 2;
        //     if (currentIndex >= carousel.children.length) {
        //         currentIndex = 0;
        //     }
        //     const translateX = -currentIndex * (carousel.offsetWidth / 2);
        //     carousel.style.transform = `translateX(${translateX}px)`;
        // }

        // setInterval(scrollCarousel, 3000); 

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
  return (
    <>
    <div className='text-primer1 font-roboto'>
        <div id="default-carousel" className="relative mx-[128px] my-[56px]" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={"/assets/img/fuywrq.png"} width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={"..."} loading="eager"/>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={"/assets/img/business-facebook-cover-.png"} width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={"..."} loading="eager"/>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={"/assets/img/business_facebook_cover_banner_18.png"} width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={"..."} loading="eager"/>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={"/assets/img/4995921.png"} width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={"..."} loading="eager"/>
                </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

        <div className="px-[128px] py-[56px] flex flex-col gap-[24px] items-center bg-primer4">
            <div className="flex flex-row justify-center items-center gap-[8px]">
                <h2 className="text-primer1 text-[42px] font-bold">Why Jalur Karirku</h2>
                <Image src={"/assets/img/logo light.png"} width="0"
                height="0"
                sizes="100vw"
                style={{ width: '60px', height: 'auto' }}  alt={""} loading="eager"/>
            </div>
            <div className="flex justify-between items-center gap-[40px]">
                <Image src={"/assets/ilustration/elearning spft skills.svg"} width="0"
                height="0"
                sizes="100vw"
                style={{ width: '320px', height: 'auto' }}  alt={""} loading="eager"/>
                <div className="flex flex-col justify-center items-start gap-[16px] w-[813px]">
                    <h3 className="text-[32px] font-bold">Soft Skill Development</h3>
                    <p className="text-[16px]">Soft skill development helps you acquire non-technical skills such as communication, leadership, and teamwork. It enhances your effectiveness in the workplace and aids in achieving career success. Soft skills also enable you to excel in overcoming challenges and collaborate effectively with colleagues.</p>
                    <Button type="link" className="btn-primary-sm text-center" href={"#"}>Explore In-Depth</Button>
                </div>
            </div>
            <div className="flex justify-between items-center gap-[40px]">
                <div className="flex flex-col justify-center items-start gap-[16px] w-[813px]">
                    <h3 className="text-[32px] font-bold">Career Webinars</h3>
                    <p className="text-[16px]">Career webinars provide you with access to insights and knowledge from experts in various fields. You can deepen your understanding of industry trends, job search strategies, and career development. Webinars offer the opportunity to learn from the best without leaving your home, making professional development more convenient.</p>
                    <Button type="link" className="btn-primary-sm text-center" href={"#"}>Explore In-Depth</Button>
                </div>
                <Image src={"/assets/ilustration/Webinar-amico.svg"} width="0"
                height="0"
                sizes="100vw"
                style={{ width: '320px', height: 'auto' }}  alt={""} loading="eager"/>
            </div>
            <div className="flex justify-between items-center gap-[40px]">
                <Image src={"/assets/ilustration/Marriage counseling-amico.svg"} width="0"
                height="0"
                sizes="100vw"
                style={{ width: '320px', height: 'auto' }}  alt={""} loading="eager"/>
                <div className="flex flex-col justify-center items-start gap-[16px] w-[813px]">
                    <h3 className="text-[32px] font-bold">Career Counseling</h3>
                    <p className="text-[16px]">Career counseling is a personalized service that assists you in planning and achieving your career goals. Counselors work with you to identify your strengths, overcome obstacles, and develop concrete action plans. This provides personalized guidance that can lead you towards greater and more fulfilling career success.</p>
                    <Button type="link" className="btn-primary-sm text-center" href={"#"}>Explore In-Depth</Button>
                </div>
            </div>
        </div>
        
        <div className="overflow-hidden mx-[128px] w-[1184px] my-[64px] flex flex-col justify-center items-center gap-[40px]">
            <div className="flex flex-col justify-center items-center gap-[8px]">
                <p>Testimonial</p>
                <h3 className="text-[32px] font-bold">Check what they say</h3>
            </div>
            <div className="caousel-container overflow-hidden relative max-w-full">
                <div id="testimonial-carousel" className="carousel flex">
                    <div className="testimonial last:mr-0 w-1/2 mx-4 px-[24px] py-[24px] h-[332px] shadow-xl flex justify-between items-start gap-[24px] bg-primer4 rounded-[16px]">
                        <div className="w-[200px] flex flex-col gap-[24px]">
                            <Image src={"/assets/img/testtimonial1.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="flex flex-col gap-[8px]">
                                <p className="font-bold">Darrell Steward</p>
                                <p>Engineering Student</p>
                            </div>
                        </div>
                        <p className="w-[290px]">"The soft skill development program has transformed the way I interact and work within teams. I've learned strong communication skills and leadership abilities that have made me more effective in my college projects. It's a crucial step towards my career success."</p>
                    </div>
                    <div className="testimonial last:mr-0 w-1/2 mx-4 px-[24px] py-[24px] h-[332px] shadow-xl flex justify-between items-start gap-[24px] bg-primer4 rounded-[16px]">
                        <div className="w-[200px] flex flex-col gap-[24px]">
                            <Image src={"/assets/img/testtimonial2.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="flex flex-col gap-[8px]">
                                <p className="font-bold">Arlene McCoy</p>
                                <p>High School Student</p>
                            </div>
                        </div>
                        <p className="w-[290px]">"As a high school student, I initially thought career development was something for college and beyond. However, participating in the soft skill development program and attending career webinars on this platform has opened my eyes to the importance of early career planning. I've gained valuable skills and insights that will undoubtedly benefit my future educational and professional journey."</p>
                    </div>
                    <div className="testimonial last:mr-0 w-1/2 mx-4 px-[24px] py-[24px] h-[332px] shadow-xl flex justify-between items-start gap-[24px] bg-primer4 rounded-[16px]">
                        <div className="w-[200px] flex flex-col gap-[24px]">
                            <Image src={"/assets/img/testtimonial3.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="flex flex-col gap-[8px]">
                                <p className="font-bold">Eleanor Pena</p>
                                <p>Project Manager</p>
                            </div>
                        </div>
                        <p className="w-[290px]">"The career counseling I received here has truly transformed my outlook on career development. I now have a clear plan and a better understanding of how to reach my long-term goals. My counselor was incredibly knowledgeable and helpful."</p>
                    </div>
                    <div className="testimonial last:mr-0 w-1/2 mx-4 px-[24px] py-[24px] h-[332px] shadow-xl flex justify-between items-start gap-[24px] bg-primer4 rounded-[16px]">
                        <div className="w-[200px] flex flex-col gap-[24px]">
                            <Image src={"/assets/img/testtimonial4.png"} width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}  alt={""} loading="eager"/>
                            <div className="flex flex-col gap-[8px]">
                                <p className="font-bold">Jane Cooper</p>
                                <p>College Student</p>
                            </div>
                        </div>
                        <p className="w-[290px]">"Being a college student can be overwhelming with academic pressures and future uncertainties. The career counseling I received through this platform has been a game-changer. It helped me align my academic path with my long-term career goals and gave me the confidence to pursue internships and opportunities that will shape my future. I'm incredibly grateful for the guidance I've received."</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="px-[128px] py-[56px] flex flex-col  gap-[40px]">
            <h3 className="text-[32px] font-bold text-center">Frequently Asked Questions</h3>
            <Accordion className="self-strecth" items={FAQ}/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

