import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu as MenuIcon, ShoppingCart, User, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Stack } from '@mui/material';


const NavbarUser = () => {

   return (
     <>
       <motion.nav
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         className='bg-black/[0.96] flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10'
       >
         {/* Logo */}
         <Link to='/' className='flex items-center space-x-2'>
           <Bot className='w-8 h-8 text-purple-500' />
           <span className='text-white font-medium text-xl'>TheUniverse</span>
         </Link>

         {/* Barra de busca */}
         <input
           type='text'
           placeholder='Search...'
          className=' text-white hidden w-3xl mx- md:block border
           border-gray-300 rounded px-4 py-2 text-sm focus:outline-none
           focus:ring-purple-500 '
         />

        {/* Botões e menu mobile */}
        <Stack spacing={2} direction='row' className='flex gap-4'>
          <NavButton href='/categorias'>Categories</NavButton>
          <NavButton href='/produtos'>Products</NavButton>
          <NavButton href='/login'>Sair</NavButton>
          <User color="#ffffff" />
          <ShoppingCart color="#ffffff" />


    
          {/* TODO: 
                Botão do menu mobile */}
          {/* <Button
            variant='contained'
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen? <X className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}

          </Button> */}
        </Stack>
       </motion.nav>

     </>
   );
 };

 export default NavbarUser;

 function NavButton({ href, children }: { href: string; children: React.ReactNode }) {
   return (
     <Link to={href} className='text-gray-300 hover:text-white transition-colors relative group'>
       {children}
       <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full' />
     </Link>
  );
}
