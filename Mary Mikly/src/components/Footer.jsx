import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <>
            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
                <div className="md:flex sm:items-center sm:justify-between">
                    <div> <p>Siguenos en nuestras redes sociales:</p>
                        <a href="https://www.instagram.com/tiendamarymikly/?hl=es"> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg></a>


                    </div>

                    <ul className="flex flex-col text-center lg:p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <NavLink
                                to="/inicio"
                                className={({ isActive }) => isActive ? ' text-indigo-400 block py-2 pr-4 pl-3 md:pl-0 md:pr-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0' : 'block py-2  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0'}
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
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-4" />
                <span className="text-center block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} Mary Mikly. Todos Los Derechos Reservados.
                </span>
            </footer>

        </>
    )
}

export default Footer