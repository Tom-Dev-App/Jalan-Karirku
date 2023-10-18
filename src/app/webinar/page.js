import React from 'react'
import RootLayout from '../layout'

export default function Webinar() {

  return (
    <>  
        <RootLayout>
            <title>Webinar - Jalankarirku</title>
        </RootLayout>
         <div class="w-1440 h-432 bg-blue-200 flex items-center justify-between p-12">
        {/* <!-- Gambar di sebelah kiri --> */}
        <div class="w-1/2 ml-20">
            <svg width="10" height="10">
                {/* <img src="/public/assets/ilustration/Effective Communication Skills.svg" alt="conseling"> */}
            </svg> 
        </div>
        
        {/* <!-- Tulisan di sebelah kanan --> */}
        <div class="w-1/2 mr-72 text-blue-900">
          <h2 class="text-3xl font-semibold mb-4 font-roboto">Career Webinars</h2>
          <ul>
            <li class="mb-2">Career webinars provide you with access to insights and knowledge from experts in various fields. You can deepen your understanding of industry trends, job search strategies, and career development. Webinars offer the opportunity to learn from the best without leaving your home, making professional development more convenient.</li>
            {/* <!-- Tambahkan manfaat-manfaat lainnya --> */}
          </ul>
        </div>
    </div>
    <div class="container mx-auto py-8">
        <h1 class="text-blue-900 text-2xl font-semibold mb-10 text-center">Unlock your path to career success through our enriching Career Webinar package <br/>- your gateway to invaluable insights and professional growth.</h1>
        <div class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {/* <!-- Kotak kelas webinar 1 --> */}
                <div class="bg-white p-4 rounded-lg shadow-md w-337 h-346">
                    {/* <!-- Isi konten kotak webinar 1 --> */}
                    {/* <img src="/public/assets/img/detail webinar.png" alt="Webinar 1" class="w-full h-60 object-cover mb-4"> */}
                    <h2 class="text-lg font-semibold mb-4">Effective Communication</h2>
                    <div class="flex items-center mb-2">
                        {/* <img src="/public/assets/img/Tanggal.png" alt="tanggal" class="mr-3"> */}
                        <span class="text-gray-600"> 9/23/23 20:00</span>
                    </div>
                    <div class="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" class="mr-3"> */}
                        <span class="text-gray-600">Rp. 100.000</span>
                    </div>
                </div>    
                {/* <!-- Kotak kelas webinar 2 --> */}
                <div class="bg-white p-4 rounded-lg shadow-md w-337 h-346">
                    {/* <!-- Isi konten kotak webinar 2 --> */}
                    {/* <img src="/public/assets/img/Stay Productive.png" alt="Webinar 1" class="w-full h-60 object-cover mb-4"> */}
                    <h2 class="text-lg font-semibold mb-4">Stay Productive</h2>
                    <div class="flex items-center mb-2">
                        {/* <img src="/public/assets/img/Tanggal.png" alt="tanggal" class="mr-3"> */}
                        <span class="text-gray-600">9/23/23 20:00</span>
                    </div>
                    <div class="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" class="mr-3"> */}
                        <span class="text-gray-600">Rp. 100.000</span>
                    </div>
                </div>   
                {/* <!-- Kotak kelas webinar 3 --> */}
                <div class="bg-white p-4 rounded-lg shadow-md w-337 h-346">
                    {/* <!-- Isi konten kotak webinar 3 --> */}
                    {/* <img src="/public/assets/img/Emotional Intelligence (EQ).png" alt="Webinar 1" class="w-full h-60 object-cover mb-4"> */}
                    <h2 class="text-lg font-semibold mb-4">Emotional Intelligence (EQ)</h2>
                    <div class="flex items-center mb-2">
                        {/* <img src="/public/assets/img/Tanggal.png" alt="tanggal" class="mr-3"> */}
                        <span class="text-gray-600">9/23/23 20:00</span>
                    </div>
                    <div class="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" class="mr-3"> */}
                        <span class="text-gray-600">Rp. 100.000</span>
                    </div>
                </div>
            <div class="container mx-auto py-5">    
                {/* <!-- Kotak kelas webinar 4 (di sebelah kanan kotak 1) --> */}
                <div class="bg-white p-4 rounded-lg shadow-md w-337 h-346">
                    {/* <!-- Isi konten kotak webinar 4 --> */}
                    {/* <img src="/public/assets/img/Leadership and Influence.png" alt="Webinar 1" class="w-full h-60 object-cover mb-4"> */}
                    <h2 class="text-lg font-semibold mb-4">Leadership and Influence</h2>
                    <div class="flex items-center mb-2">
                        {/* <img src="/public/assets/img/Tanggal.png" alt="tanggal" class="mr-3"> */}
                        <span class="text-gray-600">9/23/23 20:00</span>
                    </div>
                    <div class="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" class="mr-3"> */}
                        <span class="text-gray-600">Rp. 100.000</span>
                    </div>
                </div>
            </div>
            <div class="container mx-auto py-5"> 
                {/* <!-- Kotak kelas webinar 5 (di sebelah kanan kotak 2) --> */}
                <div class="bg-white p-4 rounded-lg shadow-md w-337 h-346">
                    {/* <!-- Isi konten kotak webinar 5 --> */}
                    {/* <img src="/public/assets/img/Stress and Resilience.png" alt="Webinar 1" class="w-full h-60 object-cover mb-4"> */}
                    <h2 class="text-lg font-semibold mb-4">Stress and Resilience</h2>
                    <div class="flex items-center mb-2">
                        {/* <img src="/public/assets/img/Tanggal.png" alt="tanggal" class="mr-3"> */}
                        <span class="text-gray-600">9/23/23 20:00</span>
                    </div>
                    <div class="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" class="mr-3"> */}
                        <span class="text-gray-600">Rp. 100.000</span>
                    </div>
                </div>
            </div>
            <div class="container mx-auto py-5"> 
                {/* <!-- Kotak kelas webinar 6 (di sebelah kanan kotak 3) --> */}
                <div class="bg-white p-4 rounded-lg shadow-md w-337 h-346">
                    {/* <!-- Isi konten kotak webinar 6 --> */}
                    {/* <img src="/public/assets/img/Conflict Resolution at Work.png" alt="Webinar 1" class="w-full h-60 object-cover mb-4"> */}
                    <h2 class="text-lg font-semibold mb-4">Conflict Resolution at Work</h2>
                    <div class="flex items-center mb-2">
                        {/* <img src="/public/assets/img/Tanggal.png" alt="tanggal" class="mr-3"> */}
                        <span class="text-gray-600">9/23/23 20:00</span>
                    </div>
                    <div class="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" class="mr-3"> */}
                        <span class="text-gray-600">Rp. 100.000</span>
                    </div>
                </div>
            </div>
            <div class="container mx-auto py-3"> 
                {/* <!-- Kotak kelas webinar 7 (di sebelah kanan kotak 3) --> */}
                <div class="bg-white p-4 rounded-lg shadow-md w-337 h-346">
                    {/* <!-- Isi konten kotak webinar 7 --> */}
                    {/* <img src="/public/assets/img/Creativity and Innovation.png" alt="Webinar 1" class="w-full h-60 object-cover mb-4"> */}
                    <h2 class="text-lg font-semibold mb-4">Creativity and Innovation</h2>
                    <div class="flex items-center mb-2">
                        {/* <img src="/public/assets/img/Tanggal.png" alt="tanggal" class="mr-3"> */}
                        <span class="text-gray-600">9/23/23 20:00</span>
                    </div>
                    <div class="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" class="mr-3"> */}
                        <span class="text-gray-600">Rp. 100.000</span>
                    </div>
                </div>
            </div>
            <div class="container mx-auto py-3"> 
                {/* <!-- Kotak kelas webinar 8 (di sebelah kanan kotak 3) --> */}
                <div class="bg-white p-4 rounded-lg shadow-md w-337 h-346">
                    {/* <!-- Isi konten kotak webinar 8 --> */}
                    {/* <img src="/public/assets/img/Networking.png" alt="Webinar 1" class="w-full h-60 object-cover mb-4"> */}
                    <h2 class="text-lg font-semibold mb-4">Networking</h2>
                    <div class="flex items-center mb-2">
                        {/* <img src="/public/assets/img/Tanggal.png" alt="tanggal" class="mr-3"> */}
                        <span class="text-gray-600">9/23/23 20:00</span>
                    </div>
                    <div class="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" class="mr-3"> */}
                        <span class="text-gray-600">Rp. 100.000</span>
                    </div>
                </div>
            </div>
            <div class="container mx-auto py-3"> 
                {/* <!-- Kotak kelas webinar 9 (di sebelah kanan kotak 3) --> */}
                <div class="bg-white p-4 rounded-lg shadow-md w-337 h-346">
                    {/* <!-- Isi konten kotak webinar 9 --> */}
                    {/* <img src="/public/assets/img/Presentation Public Speaking.png" alt="Webinar 1" class="w-full h-60 object-cover mb-4"> */}
                    <h2 class="text-lg font-semibold mb-4">Presentation Public Speaking</h2>
                    <div class="flex items-center mb-2">
                        {/* <img src="/public/assets/img/Tanggal.png" alt="tanggal" class="mr-3"> */}
                        <span class="text-gray-600">9/23/23 20:00</span>
                    </div>
                    <div class="flex items-center">
                        {/* <img src="/public/assets/img/Harga.png" alt="harga" class="mr-3"> */}
                        <span class="text-gray-600">Rp. 100.000</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
