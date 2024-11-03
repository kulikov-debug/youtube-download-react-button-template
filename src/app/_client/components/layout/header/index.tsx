"use client"
import {Link} from '@/i18n/routing';
import { MenuIcon } from "../../svgs/icons/menu"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { HeaderNav } from "./nav"
import { motion } from "framer-motion"


export const Header = () =>{
  const [ isExpanded, setIsExpanded ] = useState(false)

  return (
    <header className="sticky top-0 z-20 lg:pt-9 lg:px-5 lg:bg-gray-100">
      <div className="bg-white p-5 shadow-sm flex justify-between items-center lg:rounded-3xl lg:px-10">
        <Link
          className="text-violet-600 font-bold text-base lg:text-[42px] lg:leading-normal" 
          href="/">
          VDA
        </Link>
        <button 
          className="lg:hidden"
          onClick={ () => setIsExpanded(true) }
          aria-expanded={ isExpanded }>
          <div>
            <MenuIcon />
          </div>
        </button>
        <AnimatePresence>
          { isExpanded && (
            <motion.div
              className="fixed top-0 left-0 min-h-screen w-screen"
              initial={{ 
                opacity: 0,
                x: 100
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{opacity: 0}}>
              <HeaderNav onClose={() => setIsExpanded(false)} />
            </motion.div>
          ) }
        </AnimatePresence>
        <div className="hidden lg:block">
          <HeaderNav />
        </div>
      </div>
    </header>
  )
}