import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {

    const [visibility, setVisibility] = useState('')

    const onVisibilityChange = () => {
        if (visibility === 'hidden') {
            setVisibility('')
        } else {
            setVisibility('hidden')
        }
    }

    return (
        <>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to='/inicio' className="flex items-center">
                        <img width={200} src='\img\logo.png' alt="Logo" />
                    </Link>
                    <button onClick={onVisibilityChange} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${visibility} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li>
                                <NavLink
                                    to="/inicio"
                                    className={({ isActive }) => isActive ? 'text-indigo-400 block py-2 pr-4 pl-3 md:pl-0 md:pr-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0' : 'block py-2  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0'}
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/nosotros' className={({ isActive }) => isActive ? ' text-indigo-400 block py-2 pr-4 pl-3 md:pl-0 md:pr-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0' : 'block py-2  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0'} >Quienes Somos</NavLink>
                            </li>
                            <li>
                                <NavLink to='/servicios' className={({ isActive }) => isActive ? ' text-indigo-400 block py-2 pr-4 pl-3 md:pl-0 md:pr-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0' : 'block py-2  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0'} >Servicios</NavLink>
                            </li>
                            <li>
                                <NavLink to='/catalogos' className={({ isActive }) => isActive ? ' text-indigo-400 block py-2 pr-4 pl-3 md:pl-0 md:pr-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0' : 'block py-2  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0'} >Catálogos</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contactanos' className={({ isActive }) => isActive ? ' text-indigo-400 block py-2 pr-4 pl-3 md:pl-0 md:pr-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0' : 'block py-2  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0'} >Afíliate</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header