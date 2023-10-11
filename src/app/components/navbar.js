import React from 'react'

export default function Navbar() {
    // Saat di Home hanya ada navbar brand dan sign in/signup
    // Saat di halaman e-learning/counseling/webinar search active
    // saat sudah login navbar brand ditemani dengan nav-links sebelah kiri dan sebelah kanan diganti dengn search bar, notif, dan profile icon
    
  return (
    <>
        <nav className='flex items-center'>
            <div className='shrink-0 self-start inline-flex gap-[40px]'>
                <span>
                    Navbar Brand
                </span>
            </div>
            <div className='shrink-0 self-end'>

            </div>
        </nav>
    </>
  )
}
