import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>
                &nbsp;
            </span>
        </Link>
    )
}


const NavBar = () => {
    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between'
        >
            <nav className='flex gap-x-8'>
                <CustomLink title="Home" href="/" />
                <CustomLink title="About" href="/" />
                <CustomLink title="Projects" href="/" />
                <CustomLink title="Articles" href="/" />
            </nav>

            <nav>
                <CustomLink title="Twitter" href="/" target={"_blank"} />
                <CustomLink title="Twitter" href="/" target={"_blank"} />
                <CustomLink title="Twitter" href="/" target={"_blank"} />
                <CustomLink title="Twitter" href="/" target={"_blank"} />
                <CustomLink title="Twitter" href="/" target={"_blank"} />
            </nav>
            <div className=' absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar