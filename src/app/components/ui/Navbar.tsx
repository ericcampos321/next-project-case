import logo from '@../../../public/assets/blocks_logo.png';
import Image from 'next/image';

const NavBar = () => {
   return (

      <>
         <div class="sticky w-full h-20 sm:px-12 lg:px-12 flex items-center justify-between border-b border-stone-400">
            <div class="flex items-center gap-2">
               <Image src={logo} alt="Logo" />
            </div>

            <nav class="flex gap-10 text-lg text-black-500 ">
               <a href="#" className='font-bold hover:text-gray-500 transition '>Home</a>
               <a href="#" className=' text-gray-500 hover:text-black transition '>Planos</a>
               <a href="#" className=' text-gray-500 hover:text-black transition '>Blog</a>
               <a href="#" className=' text-gray-500 hover:text-black transition '>Baixar plugin</a>
            </nav>


            <div class="flex items-center gap-4 text-sm">
               <button class="bg-black text-white px-4 py-2 rounded-md">
                  <a href="/sign-in">Login</a>
               </button>
               <button class="border border-gray-400 px-4 py-2 rounded-md">Cadastro</button>
               <span class="text-gray-500">|</span>
               <div class="flex items-center gap-1 cursor-pointer">
                  <span>PT</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
               </div>
            </div>
         </div>
      </>

   )
}

export default NavBar;
