'use client'
import Image from 'next/image'
import Button from './components/btn'
import Card from './components/card'
import Footer from './components/footer'
import Accordion from './components/accordion'
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
  return (
    <>

  {/* Page Login */}
  <div>

    <nav class="bg-white-500 border-b border-black py-4">
      <div class="container mx-auto flex items-center justify-center">
        <img src="../assets/img/main logo.png" alt="logo" class="w-20 h-auto" />
      </div>
    </nav>

    <div class="grid grid-cols-2 gap-8 min-h-full px-6 py-12 lg:px-8">
        <div class="col-span-1 w-full flex justify-center items-center">
              <img src="../assets/img/login.jpeg" alt="jalankarirku" class=" w-full max-w-sm max-auto" />
        </div>

        <div class="col-span-1">
          <div class="sm:mx-auto sm:w-full sm:max-wsm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In</h2>
          </div>
          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="username & email" class="block text-sm font-medium leading-6 text-gray-900">Username or Email</label>
              <div class="mt-2">
                <input id="username" type="text" name="username" placeholder='input username or email you'  autoComplete='username' required class="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div class="mt-2">
                <input id="password" type="text" name="password" placeholder='input password account you' autoComplete='password' required class="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
                <div class="text-sm">
                  < a href='#' class="font-semibold p-3 text-black text-indigo-600 hover:text-indigo-500 float-right text-right"> Forgot Password?</a>
                </div>
              </div>
            </div>

            <div>
              <button type='submit' class="flex w-full justify-center bg-blue-500 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 hover:shadow-lg  hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
              <p class="text-gray-500 mt-1 text-center">Don't have an account yet?<a href='#' class="text-blue-500 font-semibold text-black-500 hover:animate-pulse">Sign Up</a></p>
            </div>

            <div class="flex items-center">
              <div class="border-t border-gray-300 flex-grow mr-5"></div>
              <p class="text-gray-600">Login using another account</p>
              <div class="border-t border-gray-300 flex-grow ml-5"></div>
            </div>

            <div>
              <button type='submit' class="flex w-full justify-center bg-blue-500 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 hover:shadow-lg  hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  mb-3">
                <span class="flex items-center">
                  <i class="fab fa-google mr-2"></i>Google
                </span>
              </button>
              <button type='submit' class="flex w-full justify-center bg-blue-500 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 hover:shadow-lg  hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span class="flex items-center">
                  <i class="fab fa-google mr-2"></i>Facebook
                </span>
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
  </div>


{/* Page Register */}

{/* <div>
  <nav class="bg-white-500 border-b border-black py-4">
    <div class="container mx-auto flex items-center justify-center">
      <img src="../assets/img/main logo.png" alt="logo" class="w-20 h-auto" />
    </div>
  </nav>
    <div class=" max-w-4xl mx-auto p-6">
      <div class="sm:mx-auto sm:w-full sm:max-wsm">
        <h2 class="mt-10 text-center text-5xl mb-10 font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
        <p class="mt-2 text-center text-sm  text-hray-600 text-black-300">
          <span class="bg-gray-300 px-2 py-1.5 mt-1 rounded-md p-3">Create  your account Jalan Karirku and get first access to the very best of Jalan Karirku service</span></p>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nama</label>
          <div class="mt-2">
            <input id="name" type="text" name="username" placeholder='input name'  required pattern='[A-Z][a-zA-Z]*' title='Masukan Nama dengan awalan huruf kapital ' autoComplete='name' class="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
          </div>
        </div>

        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <input id="username" type="text" name="username" placeholder='input username or account you'  autoComplete='username' required class="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
          </div>
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
          <div class="mt-2">
            <input id="phone" type="number" name="phone" placeholder='input phone you'  autoComplete='phone' required pattern='^08\d{10}$' title='Masukan nomor hp dengan benar ex(081302023738)' class="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
          <div class="mt-2">
            <input id="email" type="text" name="email" placeholder='input email you'  autoComplete='email' required class="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input id="password" type="text" name="password" placeholder='input password or account you'  autoComplete='password' required class="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
            <div class="absolute inset-y-0 right-3 pr-0 flex items-center">
              <button type='button' id='togglePassword' class="text-gray-600 focus:outline-none">
                <i id='passwordIcon' class="far fa-eye-slash">look</i>
              </button>
            </div>
          </div>
        </div>

        <div>
          <label for="passwordconfir" class="block text-sm font-medium leading-6 text-gray-900">Password Confirmation</label>
          <div class="mt-2 relative rounded-md shadow-sm">
            <input id="passwordconfir" type="text" name="passwordconfir" placeholder='input password confirmation account'  autoComplete='password' required class="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
            <div class="absolute inset-y-0 right-3 pr-0 flex items-center">
              <button type='button' id='togglePassword' class="text-gray-600 focus:outline-none">
                <i id='passwordIcon' class="far fa-eye-slash">look</i>
              </button>
            </div>
          </div>
        </div>

    

        <div class="mt-2 flex items-center">
          <input type="checkbox" id='infoDeclaration' name='infoDeclaration' class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
          <label for="infoDeclaration" class="ml-2 block text-sm text-gray-900">I declare that the information I have entered is correct and am responsible for any errors in the information</label>
        </div>

        <div class="mt-2 flex items-center">
          <input type="checkbox" id='infoDeclaration' name='infoDeclaration' class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
          <label for="infoDeclaration" class="ml-2 block text-sm text-gray-900">By creating an account, I agree to the Terms and Conditions, and Privacy Policy <a href='#' class="text-blue-500 font-semibold text-black-500 hover:animate-pulse">Jalan Karirku</a></label>
        </div>

        <div>
          <button type='submit' class="flex w-full justify-center bg-blue-500 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 hover:shadow-lg  hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
          <p class="text-gray-500 mt-1 text-center">Already have an account?<a href='#' class="text-blue-500 font-semibold text-black-500 hover:animate-pulse">Sign In</a></p>
        </div>

        <div class="flex items-center">
          <div class="border-t border-gray-300 flex-grow mr-5"></div>
          <p class="text-gray-600">Log in using another account</p>
          <div class="border-t border-gray-300 flex-grow ml-5"></div>
        </div>

        <div class="flex justify-center">
          <button type='submit' class="flex w-full justify-center mb-5 ml-1 bg-blue-500 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 hover:shadow-lg  hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  mb-3 width=120px;">
            <span class="flex items-center">
              <i class="fab fa-google ml-2"></i>Google
            </span>
          </button>
          <button type='submit' class="flex w-full justify-center mb-5 ml-5 bg-blue-500 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 hover:shadow-lg  hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  width=120px;">
            <span class="flex items-center">
              <i class="fab fa-google ml-2"></i>Facebook
            </span>
          </button>
        </div>
      </form>
    </div>
    </div>
  </div> */}
    <Footer/>
    </>
  )
}
