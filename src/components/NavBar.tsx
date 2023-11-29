import Logo from '../assets/images/ably-logo.png'

interface NavType {
    name: string
    link: string
}




const NavBar = () => {
    const navLinks: NavType[] = [
        {
            name: 'products',
            link: '/'
        },
        {
            name: 'solutions',
            link: '/solutions'
        },
        {
            name: 'company',
            link: '/company'
        },
        {
            name: 'developers',
            link: '/developers'
        },

    ]
    return (
        <header
            className='w-full bg-slate-100  flex justify-center items-center '
        >
            <nav
                className=" w-full md:w-[70%]  flex  justify-between items-center  px-4 py-3"
            >
                <div>
                    <img src={Logo} alt="Ably Logo" className="w-32" />
                </div>
                <div className="flex gap-6 justify-center items-center">

                    {
                        navLinks.map((navLink: NavType) => (
                            <div
                                key={navLink.name}
                                className="text-md flex items-center justify-center gap-2 capitalize font-semibold text-slate-800 hover:text-slate-900 cursor-pointer"
                            >
                                {navLink.name}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </div>
                        ))
                    }
                </div>
                <div className="flex  gap-6 items-center">
                    <p
                        className='text-md capitalize font-semibold text-slate-900 hover:text-sky-600 transition-colors ease-in-out duration-300 cursor-pointer'
                    >
                        Contact Us
                    </p>
                    <p
                        className='text-md capitalize font-semibold text-slate-900 hover:text-sky-600 transition-colors ease-in-out duration-300 cursor-pointer'
                    >
                        Login
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-900 hover:text-sky-600 transition-colors ease-in-out duration-300 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <button
                        className='bg-primary text-white px-4 py-2.5 rounded-md hover:bg-orange-500 transition-colors ease-in-out duration-300'
                    >
                        Sign in for free
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar