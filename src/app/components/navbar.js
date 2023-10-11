'use client'
import React from 'react'
import { Icon } from '@iconify/react';

export default function Navbar() {
    return<>
        <nav class="bg-white">
        <div class=" flex flex-wrap items-center justify-between mx-auto xl:py-4 xl:px-32 p-4">
        <a href="#" class="flex items-center">
            <img width="145px" height="51px" src="../assets/img/main logo.png" />
        </a>

        <div class="flex flex-wrap items-center justify-between xl:gap-10 sm:gap-0 md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-10 focus:outline-none rounded-lg text-sm p-2.5 mr-1" >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-black-500" placeholder="Search..."/>
            </div>

            <button type="button" class="flex mr-3 text-sm" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span class="sr-only">Open user menu</span>
                <Icon icon="mdi:bell" width="35px" className='text-primer1'/>
            </button>


            {/*profile*/}
            <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span class="sr-only">Open user menu</span>
                <img class='w-8 h-8 rounded-full' src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1800&t=st=1696996222~exp=1696996822~hmac=213226fa3d94e2da0bd7c5896410d934ec73ea8a25ab9ca8704b4c34432039a4" alt="user photo"/>
            </button>
            <div class="z-50 hidden my-4 text-base list-none" id="user-dropdown">
                <span class="block text-sm text-gray-900 dark:text-white">Mr Bla</span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">MrBla@gmail.com</span>
            </div>
            

            <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-search" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
            <div class="flex flex-grow lg:pl-10 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm" placeholder="Search..."></input>
            </div>
            <ul class="flex flex-col items-center justify-center lg:gap-10 font-small md:flex-row">
                <li>
                <a href="#" class="text-1xl text-primer1" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" class="text-1xl text-primer1">E-Learning</a>
                </li>
                <li>
                <a href="#" class="text-1xl text-primer1">Webinar</a>
                </li>
                <li>
                <a href="#" class="text-1xl text-primer1">counseling</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>   
}

