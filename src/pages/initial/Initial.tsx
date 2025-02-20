import { SparklesCore } from '../../components/utils/sparkles';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material';
import { purple } from '@mui/material/colors';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { FloatingPaper } from '../../components/utils/floating-paper';
import { RoboAnimation } from '../../components/utils/robo-animation';

// Componente para Config de Button
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  borderColor: purple[800],
  fontWeight: 680,

  '&:focus': {
    backgroundColor: purple[600],
  },

  '&:hover': {
    backgroundColor: purple[800],
    transition: 'box-shadow 0.5s ease-in-out',
  },
}));

export default function Initial() {

  return (
    <>
      <main className='h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
        
        <div className='relative z-10'>
          <Navbar />
        </div>

        {/* Conteúdo principal com z-index maior que o fundo */}
        <div className='flex justify-center items-center h-[calc(100vh-80px)] relative z-10'>
          <div className='container text-white text-center'>
            <div className='flex flex-col gap-4 items-center justify-center'>

              <h2 className='text-5xl font-bold'>CyberNexus</h2>
              <p className='text-xl'>Where reality meets the game</p>
              
            </div>
          </div>
        </div>

        <div className='absolute inset-0 overflow-hidden'>
            <FloatingPaper count={6} />
        </div>

        {/* Ambiente com background de partículas se movendo */}
        <div className='h-full w-full absolute inset-0 z-0'>
          <SparklesCore
            id='tsparticlesfullpage'
            background='transparent'
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className='w-full h-full'
            particleColor='#FFFFFF'
          />
        </div>

        {/* Robô animado */}
      <div className='absolute bottom-0 right-0 w-280 h-140'>
        <RoboAnimation />
      </div>
    </main>
  </>
);
};

