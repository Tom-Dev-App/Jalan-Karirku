import React from 'react'
import Footer from '../components/footer'
import RootLayout from '../layout'

export default function Academy() {

  return (
    <>
        <RootLayout>
            <title>E-Learning - Jalankarirku</title>
        </RootLayout>
         <div className="w-1440 h-432 bg-blue-200 flex items-center justify-between p-4">
        {/* <!-- Gambar di sebelah kiri --> */}
        <div className="w-1/2 ml-32">
            <svg width="10" height="10">
                {/* <img src="/public/assets/ilustration/elearning spft skills.svg" alt="e-lierning"> */}
            </svg>           
        </div>
        
        {/* <!-- Tulisan di sebelah kanan --> */}
        <div className="w-1/2 mr-80 text-blue-900">
          <h2 className="text-3xl font-semibold mb-4 font-roboto">Soft Skill Development</h2>
          <ul>
            <li className="mb-2">Soft skill development helps you acquire non-technical skills such as communication, leadership, and teamwork. It enhances your effectiveness in the workplace and aids in achieving career success. Soft skills also enable you to excel in overcoming challenges and collaborate effectively with colleagues.</li>
            {/* <!-- Tambahkan manfaat-manfaat lainnya --> */}
          </ul>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <h1 className="text-blue-900 text-2xl font-semibold mb-10 text-center">Unlock your full potential and enhance your career prospects with our <br/>comprehensive Soft Skills Training Package. Invest in your <br/>personal and professional growth today!</h1>
    
    <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* <!-- Kotak kelas e-learning 1 --> */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {/* <img src="/public/assets/ilustration/Effective Communication Skills.svg" alt="Kelas 1" className="w-full h-70 object-cover mb-4"> */}
                <h2 className="text-lg font-semibold mb-4">Effective Communication Skills</h2>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        {/* <img src="public/assets/img/Modul.png" alt="modul" className="mr-3"> */}
                        <span className="text-gray-600">7 Modul</span>
                    </div>
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" className="mr-3"> */}
                        <span className="text-lg font-semibold">Rp. 100.000</span>
                    </div>
                </div>
                <p className="text-gray-600">This training will help you grasp the fundamentals of effective communication, including active listening, clear speaking, and persuasive writing.</p>
            </div>

            {/* <!-- Kotak kelas e-learning 2 --> */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {/* <img src="/public/assets/ilustration/Time Management and Productivity.svg" alt="Kelas 2" className="w-full h-70 object-cover mb-4"> */}
                <h2 className="text-lg font-semibold mb-4">Time Management and Productivity</h2>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Modul.png" alt="modul" className="mr-3"> */}
                        <span className="text-gray-600">7 Modul</span>
                    </div>
                </div>
                <p className="text-gray-600">This training will assist you in better time management, identifying priorities, and enhancing productivity.</p>
                <button className="mt-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-2xl w-full">Start</button>
            </div>

            {/* <!-- Kotak kelas e-learning 3 --> */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {/* <img src="/public/assets/ilustration/Leadership and Teamwork.svg" alt="Kelas 3" className="w-full h-70 object-cover mb-4"> */}
                <h2 className="text-lg font-semibold mb-4">Leadership and Teamwork</h2>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Modul.png" alt="modul" className="mr-3"> */}
                        <span className="text-gray-600">7 Modul</span>
                    </div>
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" className="mr-3"> */}
                        <span className="text-lg font-semibold">Rp. 100.000</span>
                    </div>
                </div>
                <p className="text-gray-600">This training will aid in developing leadership and teamwork skills. You'll learn how to lead effectively, motivate teams, and contribute positively to team projects.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-2xl w-full">Start</button>
            </div>
        </div>
    </div>

    <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* <!-- Kotak kelas e-learning 4 --> */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {/* <img src="/public/assets/ilustration/Problem-Solving and Decision-Making.svg" alt="Kelas 4" className="w-full h-70 object-cover mb-4"> */}
                <h2 className="text-lg font-semibold mb-4">Problem-Solving and Decision-Making</h2>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Modul.png" alt="modul" className="mr-3"> */}
                        <span className="text-gray-600">7 Modul</span>
                    </div>
                </div>
                <p className="text-gray-600">This training will sharpen your problem-solving and decision-making abilities. You'll learn techniques for analysis, identifying alternative solutions, and making sound decisions.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-2xl w-full">Start</button>
            </div>

            {/* <!-- Kotak kelas e-learning 5 --> */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {/* <img src="/public/assets/ilustration/Stress Management and Resilience.svg" alt="Kelas 5" className="w-full h-70 object-cover mb-4"> */}
                <h2 className="text-lg font-semibold mb-4">Stress Management and Resilience</h2>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Modul.png" alt="modul" className="mr-3"> */}
                        <span className="text-gray-600">7 Modul</span>
                    </div>
                </div>
                <p className="text-gray-600">This training will help you manage stress and improve mental resilience.</p>
                <button className="mt-16 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-2xl w-full">Start</button>
            </div>

            {/* <!-- Kotak kelas e-learning 6 --> */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {/* <img src="/public/assets/ilustration/Networking and Relationship Building.svg" alt="Kelas 6" className="w-full h-70 object-cover mb-4"> */}
                <h2 className="text-lg font-semibold mb-4">Networking and Relationship Building</h2>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Modul.png" alt="modul" className="mr-3"> */}
                        <span className="text-gray-600">7 Modul</span>
                    </div>
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" className="mr-3"> */}
                        <span className="text-lg font-semibold">Rp. 100.000</span>
                    </div>
                </div>
                <p className="text-gray-600">This training will aid in building and maintaining strong professional relationships. You'll learn how to expand your network, interact with colleagues, and leverage connections for career opportunities.</p>
            </div>
        </div>
    </div>

    <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* <!-- Kotak kelas e-learning 7 --> */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {/* <img src="/public/assets/ilustration/Emotional Intelligence.svg" alt="Kelas 7" className="w-full h-70 object-cover mb-4"> */}
                <h2 className="text-lg font-semibold mb-4">Emotional Intelligence</h2>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Modul.png" alt="modul" className="mr-3"> */}
                        <span className="text-gray-600">7 Modul</span>
                    </div>
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" className="mr-3"> */}
                        <span className="text-lg font-semibold">Rp. 100.000</span>
                    </div>
                </div>
                <p className="text-gray-600">This training will develop your emotional intelligence, helping you understand and manage your own emotions and respond wisely to others' emotions.</p>
            </div>

            {/* <!-- Kotak kelas e-learning 8 --> */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {/* <img src="/public/assets/ilustration/Adaptability and Change Management.svg" alt="Kelas 8" className="w-full h-70 object-cover mb-4"> */}
                <h2 className="text-lg font-semibold mb-4">Adaptability and Change Management</h2>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Modul.png" alt="modul" className="mr-3"> */}
                        <span className="text-gray-600">7 Modul</span>
                    </div>
                </div>
                <p className="text-gray-600">This training will help you navigate workplace changes more effectively. You'll learn how to adapt quickly, manage changes, and remain flexible in dynamic environments.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-2xl w-full">Start</button>
            </div>

            {/* <!-- Kotak kelas e-learning 9 --> */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {/* <img src="/public/assets/ilustration/Ethical Decision-Making.svg" alt="Kelas 9" className="w-full h-70 object-cover mb-4"> */}
                <h2 className="text-lg font-semibold mb-4">Ethical Decision-Making</h2>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        {/* <img src="/public/assets/img/Modul.png" alt="modul" className="mr-3"> */}
                        <span className="text-gray-600">7 Modul</span>
                    </div>
                </div>
                <p className="text-gray-600">This training will help you understand ethics in decision-making and act ethically in the business world.</p>
                <button className="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-2xl w-full">Start</button>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
