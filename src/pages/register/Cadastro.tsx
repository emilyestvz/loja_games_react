import { Bot } from 'lucide-react';
import { useState } from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { cn } from '../../lib/utils/cn';
import { Link } from 'react-router-dom';

export default function AuthPage() {
   const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login e cadastro

   const handleFormSubmit = (event) => {
     event.preventDefault();
     // Aqui você faria a lógica de envio do formulário,
     // seja para login ou cadastro, dependendo do valor de 'isLogin'.
     console.log(isLogin ? "Enviando formulário de login" : "Enviando formulário de cadastro");
    }


  return (
    <div className='grid min-h-svh lg:grid-cols-2'>

        {/* Background */}
        <div className='relative hidden bg-muted lg:block'>
            <img
            src='https://ik.imagekit.io/emy/Backgrounds/868b9828610fbeeef56d0fdb85c43bfb.jpg?updatedAt=1740168945633'
            alt='Image'
            className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.3] dark:grayscale'
            />
        </div>
        
      <div className='flex flex-col gap-4 p-6 md:p-10'>
        <div className='flex justify-between items-center'>
          <a href='/' className='flex items-center gap-2 font-medium'>
            
            <div className='flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground'>
              <Bot className='text-purple-500' />
            </div>
            CyberNexus
          </a>
        </div>

        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-xs'>

              <div className='flex flex-col items-center gap-2 text-center'>
                <h1 className='text-2xl font-bold'>
                  Create an account
                </h1>
                <p className='text-balance text-sm text-muted-foreground mb-2'>
                  Enter your information below to create your account
                </p>
              </div>

            {/* Form */}
            <form className={cn('flex flex-col gap-6')} onSubmit={handleFormSubmit}>
                <div className='grid gap-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' type='text' placeholder='Your Name' required />
                </div>
            
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input id='email' type='email' placeholder='emy@example.com' required />
                
                  <Label htmlFor='photo'>Photo</Label>
                  <Input id='photo' type='file' /> {/* Tipo 'file' para upload de imagem */}
               
                    <Label htmlFor='password'>Choose a password</Label>
                  <Input id='password' type='password' placeholder='********' required />
                
                <Button type='submit' className='w-full mb-5'>
                  Sign Up
                </Button>

                <div className='relative text-center text-sm after:absolute after:inset-0 after:items-center after:border-t pt-3.5'>
                  <span className='relative z-10 bg-background px-2 text-muted-foreground'>
                    Or continue with
                  </span>
                </div>
              </div>

              <div className='text-center text-sm'>
                Already have an account?
                <button
                  type="button" 
                  onClick={() => setIsLogin(!isLogin)}
                  className='underline underline-offset-4 mx-2'>
                 <Link to='/login'>
                 Sign in!
                 </Link>
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}
