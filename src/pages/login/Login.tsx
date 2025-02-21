import { Bot, GalleryVerticalEnd } from 'lucide-react';
import { LoginForm } from '../../components/forms/login-form';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
    return (
      <div className='grid min-h-svh lg:grid-cols-2'>
        <div className='flex flex-col gap-4 p-6 md:p-10'>
          <div className='flex justify-center gap-2 md:justify-start'>
            <NavLink to='/' className='flex items-center gap-2 font-medium'>
                
              <div className='flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground'>
                <Bot className='text-purple-500'/>
              </div>
                CyberNexus
            </NavLink>
          </div>

          <div className='flex flex-1 items-center justify-center'>
            <div className='w-full max-w-xs'>
              <LoginForm />
            </div>
          </div>
        </div>
        <div className='relative hidden bg-muted lg:block'>
          <img
            src='https://ik.imagekit.io/emy/Backgrounds/game-boy-6932788_1280.jpg?updatedAt=1740164498512'
            alt='Image'
            className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.3] dark:grayscale'
          />
        </div>
      </div>
    )
  }