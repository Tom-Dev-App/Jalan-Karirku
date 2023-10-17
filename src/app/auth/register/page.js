'use client';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Register() {
  return (
    <>
      <div className="relative flex justify-center items-center py-[24px] border-b-[1px] border-gray2">
        <Link href={'/'}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: 'auto', height: '83px' }}
            alt={'brand-icon'}
            loading="eager"
            src="/assets/img/main logo.png"
          />
        </Link>
      </div>

      <div className="flex items-center flex-col">
        <h1 className="font-bold text-[54px] mt-[40px] text-center">Sign Up</h1>
        <p className="p-4 roudned-2 mt-[24px] w-[640px] bg-primer4 inline-block text-center">
          Create your account Jalan Karirku and get first access to the very
          best of Jalan Karirku service
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm pb-24">
        <form className="space-y-6">
          <div>
            <label
              for="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nama
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                name="username"
                required
                pattern="[A-Z][a-zA-Z]*"
                title="Masukan Nama dengan awalan huruf kapital"
                autoComplete="name"
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                type="text"
                name="username"
                autoComplete="username"
                required
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2">
              <input
                id="phone"
                type="tel"
                name="phone"
                autoComplete="phone"
                required
                pattern="^08\d{10}$"
                title="Masukan nomor hp dengan benar ex(081302023738)"
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              E-mail
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="password"
                required
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="passwordconfir"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password Confirmation
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <input
                id="passwordconfir"
                type="password"
                name="passwordconfir"
                placeholder="input password confirmation account"
                autoComplete="password"
                required
                className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              id="infoDeclaration"
              name="infoDeclaration"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              for="infoDeclaration"
              className="ml-2 block text-sm text-gray-900"
            >
              I declare that the information I have entered is correct and am
              responsible for any errors in the information
            </label>
          </div>

          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              id="infoDeclaration"
              name="infoDeclaration"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              for="infoDeclaration"
              className="ml-2 block text-sm text-gray-900"
            >
              By creating an account, I agree to the Terms and Conditions, and
              Privacy Policy{' '}
              <a
                href="#"
                className="text-blue-500 font-semibold text-black-500 hover:animate-pulse"
              >
                Jalan Karirku
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center bg-blue-500 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 hover:shadow-lg  hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
            <p className="text-gray-500 mt-1 text-center">
              Already have an account?
              <a
                href="/auth/login"
                className="text-blue-500 font-semibold shadow-xl text-black-500 hover:animate-pulse inline-block ml-3"
              >
                Sign In
              </a>
            </p>
          </div>

          <div className="flex items-center">
            <div className="border-t border-gray-300 flex-grow mr-5"></div>
            <p className="text-gray-600">Log in using another account</p>
            <div className="border-t border-gray-300 flex-grow ml-5"></div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex w-full justify-center mb-5 ml-1 bg-primer4 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-black0 shadow-xl hover:scale-105 hover:shadow-lg  hover:bg-blue-500 hover:text-white0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  mb-3 width=120px;"
            >
              <span className="flex gap-3 items-center">
                <Icon icon="cib:google" /> Google
              </span>
            </button>
            <button
              type="submit"
              className="flex w-full justify-center mb-5 ml-5 bg-primer4 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-black0 shadow-xl hover:scale-105 hover:shadow-lg  hover:bg-blue-500 hover:text-white0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  width=120px;"
            >
              <span className="flex gap-3 items-center">
                <Icon icon="entypo-social:facebook-with-circle" /> Facebook
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
