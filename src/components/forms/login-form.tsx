
import { Github } from 'lucide-react';
import { cn } from '../../lib/utils/cn';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Link } from 'react-router-dom';


export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {

  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <div className='flex flex-col items-center gap-2 text-center'>
        <h1 className='text-2xl font-bold'>Login to your account</h1>
        <p className='text-balance text-sm text-muted-foreground'>
          Enter your email below to login to your account
        </p>
      </div>

      {/*  */}
      <div className='grid gap-6'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' placeholder='emy@example.com' required />
        </div>

        {/* Senha */}
        <div className='grid gap-2'>
          <div className='flex items-center'>
            <Label htmlFor='password'>Password</Label>
            <a
              href='#'
              className='ml-auto text-sm underline-offset-4 hover:underline'>
              {/* Forgot your password? */}
            </a>
          </div>
          <Input id='password' type='password' placeholder='********' required />
        </div>

        {/* Botões */}
        <Button type='submit' className='w-full'> Login</Button>

        <div className='relative text-center text-sm after:absolute after:inset-0 after:items-center after:border-t pt-3.5'>
          <span className='relative z-10 bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>

        <Button variant='outline' className='w-full'>
          <Github />
          Login with GitHub
        </Button>
      </div>
      <div className='text-center text-sm'>
        Don&apos;t have an account?{' '}
        <Link to='/register' className='underline underline-offset-4'>
          Register!
        </Link>
      </div>
    </form>
  )
}

