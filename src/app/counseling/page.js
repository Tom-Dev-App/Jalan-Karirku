import React from 'react'
import Footer from '../components/footer'
import setTitle from '@/utils/setTitle'
import RootLayout from '../layout'

export default function Counseling() {
    return (
        <>
        <RootLayout>
            <title>Counseling - Jalankarirku</title>
        </RootLayout>
        
         <div className="w-1440 h-432 bg-blue-200 flex items-center justify-between p-1">
        {/* <!-- Gambar di sebelah kiri --> */}
        <div className="w-1/2 ml-32" >
            <svg width="10" height="10">
                {/* <img src="/public/assets/ilustration/Marriage counseling-amico.svg" alt="conseling"> */}
            </svg>         
        </div>        
        {/* <!-- Tulisan di sebelah kanan --> */}
        <div className="w-1/2 mr-80 text-blue-900">
          <h2 className="text-3xl font-semibold mb-4 font-roboto">Career Counseling</h2>
          <ul>
            <li className="mb-2">Career counseling is a personalized service that assists you in planning and achieving your career goals. Counselors work with you to identify your strengths, overcome obstacles, and develop concrete action plans. This provides personalized guidance that can lead you towards greater and more fulfilling career success.</li>
          </ul>
        </div>
    </div>

    <div className="container mx-auto py-8">
        <h1 className="text-blue-900 text-2xl font-semibold mb-10 text-center">Consumers can arrange video sessions according to their convenience, allowing <br/>them to receive career guidance without leaving their homes.</h1>
    </div>
       
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* <!-- Kotak kelas konseling 1 --> */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-md flex">
                <div className="p-4 rounded-lg flex flex-col justify-between">
                    <h2 className="text-2xl font-semibold mb-4">Career Counseling via Chat</h2>
                </div>
                <div className="mt-auto">
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga"> */}
                        <p className="text-lg font-semibold mb-4">Rp. 1.125.000</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl">Buy</button>
                </div>
                <ul className="list-disc ml-6">
                    <li className="mb-2">
                        Consumers can access career counseling anytime, even outside of working hours, providing greater flexibility in seeking assistance.
                    </li>
                    <li className="mb-2">
                        Chat sessions offer a high level of privacy, allowing consumers to feel comfortable discussing their career challenges without worry.
                    </li>
                    <li className="mb-2">
                        All chat conversations are recorded, so consumers can refer back to the advice and guidance provided by counselors whenever needed. 
                    </li>
                    <li className="mb-2">
                        Counselors can provide highly personalized and tailored guidance to consumers, helping them plan specific steps to achieve career goals.
                    </li>
                    <li className="mb-2">
                        Consumers can schedule counseling sessions according to their schedules, without disrupting work or other commitments.     
                    </li>
                    <li className="mb-2">
                        Counseling via chat helps consumers develop written communication skills, which can be beneficial in various aspects of their professional lives.
                    </li>
                </ul>
            </div>

            {/* <!-- Kotak kelas konseling 2 --> */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-md flex">
                <div className="p-4 rounded-lg flex flex-col justify-between">
                    <h2 className="text-2xl font-semibold">Career Counseling via Video Conference</h2>
                </div>
                <div className="mt-auto">
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga"> */}
                        <p className="text-lg font-semibold mb-2">Rp. 1.125.000</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl">Buy</button>
                </div>
                <ul className="list-disc ml-6">
                    <li className="mb-2">
                        Video conference sessions allow consumers to interact directly with counselors through video and audio, creating a more personal connection.
                    </li>
                    <li className="mb-2">
                        In video conference, consumers can see the counselor's facial expressions and body language, allowing for important non-verbal communication and understanding.
                    </li>
                    <li className="mb-2">
                        Due to real-time communication, consumers' questions and issues can be addressed more quickly in video sessions.
                    </li>
                    <li className="mb-2">
                        Video conference enables more interactive discussions and active information sharing, providing consumers with deeper insights into their careers.
                    </li>
                    <li className="mb-2">
                        Consumers can gain a deeper understanding of counselor advice and guidance through visual communication in video conference.
                    </li>
                    <li className="mb-2">
                        Consumers can arrange video sessions according to their convenience, allowing them to receive career guidance without leaving their homes.
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
