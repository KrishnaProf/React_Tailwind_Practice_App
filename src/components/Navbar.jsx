import Reactimg from '../assets/Reactimg.png';
import { GrLanguage} from 'react-icons/gr';
import {useState} from 'react';
import {FaBars, FaXMark} from 'react-icons/fa';

const Navbar = () => {
    const [IsMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!IsMenuOpen);
    }
    const navItems = [
        {link: 'Overview', path: 'Home'},
        {link:'Feature', path: 'feature'},
        {link:'About', path: 'about'},
        {link:'Pricing', path: 'pricing'}

    ]
    return (
        <>
                <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                <div className='flex space-x-14 items-center'>
                    <a href="/"className='text-2xl font-semibold flex items-enter space-x-3 text-primary'>
                    <img src={Reactimg} alt="" className='w-10 inline-block items-center'/><span>React</span>
                    </a>

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link,path}) => <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)
                        }
                    </ul>
                </div> 
                <div className='space-x-12 hidden md:flex items-center'>
                    <a href='/'><GrLanguage /> Language</a>
                    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign Up</button>
                </div>

                <div>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            IsMenuOpen ? (<FaXMark />): (<FaBars className='w-6 h-6 text-primary' />)
                        }
                    </button>
                </div>
            </div>
            
        </nav>

        <div className={'space-y-4 px-4 pt-5 pb-5 bg-secondary ${IsMenuOpen ? "block fixed top-0 right-0 left-00" : "hidden"}' }>
            {
                navItems.map(({link,path}) => <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)
            }

        </div>
        </>


            );

}

export default Navbar;