import { Github, Linkedin } from 'lucide-react'
import styles from './Footer.module.css'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <nav
            className='bottom-0 w-full backdrop-blur-sm 
            border-t border-white/10 text-white z-10'>
                
                <div className='container mx-auto flex flex-col items-center py-4'>
                    <p className='text-xl font-medium'>
                        Todos os direitos reservados &copy; {data} |  Emily Cristiny Dias
                        </p>
                    <p className='text-lg font-light'>Para saber mais: </p>
                    <div className='flex gap-2'>
                        <a className={styles.postButton} href='https://github.com/emilyestvz' target='_blank' rel='noopener'>
                            <Github size={32} />
                        </a>
                        <a className={styles.postButton} href='https://www.linkedin.com/in/emilycristinydias/' target='_blank' rel='noopener'>
                            <Linkedin size={32} />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Footer;