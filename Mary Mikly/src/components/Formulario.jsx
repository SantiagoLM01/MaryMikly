import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { useForm } from "../hooks/useForm";
import ModalForm from "./ModalForm";
import ModalDoc from "./ModalDoc";

const Formulario = () => {

    const [formError, setFormError] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [openModalDoc, setOpenModalDoc] = useState(false)


    const { formState, onInputChange, onResetForm, isFormValid, tipoDocumento,
        numeroDocumento,
        nombre,
        correo,
        telefono,
        fechaNacimiento,
        profesion,
        direccion,
        mensaje } = useForm({
            tipoDocumento: '',
            numeroDocumento: '',
            nombre: '',
            correo: '',
            telefono: '',
            fechaNacimiento: '',
            profesion: '',
            direccion: '',
            mensaje: '',
        });

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formState)
        if (isFormValid) {
            console.log('enviando')
            emailjs.sendForm('service_ybvawsm', 'template_8mryscg', e.target, 'W8O9-74KlBhHY3bxF')
                .then(response => console.log(response))
                .catch(error => console.log(error))
            Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'Correo Enviado Exitósamente!',
                showConfirmButton: false,
                timer: 1500
            })
            onResetForm()
        } else {
            console.log('todos los campos son obligatorios')
            setFormError(true)
            setTimeout(() => {
                setFormError(false)
            }, 5000);
        }

    }

    const handleModal = (e) => {
        e.preventDefault();
        setOpenModal(true)

    }
    const handleModalDoc = (e) => {
        e.preventDefault();
        setOpenModalDoc(true)
    }
    return (
        <>

            <form onSubmit={submitForm}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className="ml-2 md:ml-0">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Tipo de Documento</label>
                        <select defaultValue={'-- Selecciona --'} name="tipoDocumento" onChange={onInputChange} className="form-select form-select-sm block w-full px-2 py-1 text-sm font-normal  text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
                            <option disabled> -- Selecciona -- </option>
                            <option defaultValue="Cédula Extranjera">Cédula Extranjera</option>
                            <option defaultValue="Cédula Nacional">Cédula Nacional</option>
                        </select>
                    </div>
                    <div className="ml-2 md:ml-0">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900"># de Documento</label>
                        <input name="numeroDocumento" value={numeroDocumento} onChange={onInputChange} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="# Documento" />
                    </div>
                    <div className="ml-2 md:ml-0">
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Nombre Completo</label>
                        <input name="nombre" value={nombre} onChange={onInputChange} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Maria Mikly..." />
                    </div>
                    <div className="ml-2 md:ml-0">
                        <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900">Correo</label>
                        <input name="correo" value={correo} onChange={onInputChange} type="email" id="correo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="correo@hotmail.com" />
                    </div>
                    <div className="ml-2 md:ml-0">
                        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Telefono</label>
                        <input name="telefono" value={telefono} onChange={onInputChange} type="tel" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="0000-0000" />
                    </div>
                    <div className="ml-2 md:ml-0">
                        <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900">Fecha de Nacimiento</label>
                        <input name="fechaNacimiento" value={fechaNacimiento} onChange={onInputChange} type="date" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" />
                    </div>
                </div>
                <div className="mb-6 ml-2 md:ml-0">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Profesion</label>
                    <input name="profesion" value={profesion} onChange={onInputChange} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Profesion..." />
                </div>
                <div className="mb-6 ml-2 md:ml-0">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Direccion Exacta</label>
                    <input name="direccion" value={direccion} onChange={onInputChange} type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="San Jose, Curridabat, Calle Lagos..." />
                </div>
                <div className="mb-6 ml-2 md:ml-0">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Mensaje</label>
                    <textarea name="mensaje" value={mensaje} onChange={onInputChange} id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="..." />
                </div>
                <div className="ml-2 md:ml-0  flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3" required />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Acepto los <button onClick={handleModal} className="text-blue-600 hover:underline dark:text-blue-500"> Terminos y condiciones</button>.</label>
                </div>
                <div className="ml-2 md:ml-0 flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3" required />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Acepto los <button onClick={handleModalDoc} className="text-blue-600 hover:underline dark:text-blue-500"> Documentos </button>.</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                {formError && <div className="bg-red-100 border mt-4 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <p className="font-bold text-center">Todos los Campos Son Obligatorios</p>
                </div>}
            </form>
            <ModalForm openModal={openModal} setOpenModal={setOpenModal}></ModalForm>
            <ModalDoc openModal={openModalDoc} setOpenModal={setOpenModalDoc}></ModalDoc>

        </>
    )
}

export default Formulario