"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import logo from "@../../../public/assets/logo2.jpg";
import { useState } from "react";


export default function SignIn() {
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const isFilled = email.trim() !== "" && password.trim() !== "";



   return (
      <motion.div
         initial={{ opacity: 0, y: -400 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
      >
         <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className=" flex flex-col bg-white p-7 border border-gray-300 rounded-md shadow-lg w-full max-w-md">
               <div className="flex justify-center">
                  <Image src={logo} alt="Logo" className="w-40 flex justify-center  relative left-0" />
               </div>
               <div className="flex flex-col" >
                  <h1 className="text-lg font-bold">Log In</h1>
                  <p className="text-sm text-gray-700">Por favor informe seus dados</p>
                  <div className="w-8 h-1 bg-purple-500 rounded mt-1" />
               </div>

               <form className="flex flex-col">
                  <div className='block-center mt-3 flex flex-col w-full'>
                     <label className='text-sm text-black' htmlFor="email">Email</label>
                     <input
                        label="Email"
                        type="email"
                        value={email} D
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 p-1 rounded-lg outline-none focus:ring-2 focus:ring-neutral-800"
                     />
                  </div>

                  <div className="block-center mt-3 flex flex-col w-full">
                     <label className='text-sm text-black' htmlFor="password">Senha</label>
                     <input
                        label="Password"
                        type="password"
                        value={password}
                        placeholder="********"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 p-1 rounded-lg outline-none focus:ring-2 focus:ring-neutral-800"
                     />
                     <a href="https://www.blocksrvt.com/pt/esqueci-minha-senha" className="text-sm text-black underline mt-2">Esqueci minha senha </a>
                  </div>

                  <div className="flex flex-col">
                     <button
                        type="submit"
                        disabled={!isFilled}
                        className={`mt-2 h-9 px-4 border border-gray-500 rounded-lg transition flex items-center justify-center gap-2 text-sm font-medium ${isFilled
                           ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                           : "bg-gray-200 text-black cursor-not-allowed"
                           }`}
                     >
                        Log in
                        <GoArrowUpRight className="w-4 h-4" />
                     </button>
                  </div>
                  <a href="https://www.blocksrvt.com/pt/registrar" className="text-sm text-black underline mt-2">Não tem uma conta?<strong>Cadastre-se</strong> </a>
               </form>
            </div>
         </div>
      </motion.div>
   );
}
