import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        marginRight: '-30%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const ModalDoc = ({ openModal, setOpenModal }) => {

    function closeModal() {
        setOpenModal(false)
    }

    return (
        <>
            <Modal
                isOpen={openModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='text-center font-bold mb-4'>SOLICITUD DE CRÉDITO</h2>
                <div className='mb-4'>
                    <p>Yo, _________________, identificado (a) con cédula de identidad N°._____________, manifiesto por medio de la presente la solicitud de crédito que: PRIMERO: Conozco y acepto que Mary Mikly mantendrá a mi disposición la suma de crédito aprobada, la cual podrá ser utilizada total o parcialmente en el momento en que lo requiera y mientras se encuentre vigente en esta solicitud. Correlativamente tendré la obligación de restituir las sumas de dinero utilizadas. SEGUNDO: Conozco y acepto que soy deudor (a) de Mary Mikly por el valor de las facturas de mercancías emitidas en los pedidos y debidamente entregadas a entera satisfacción en la dirección proporcionada para tal efecto. Estas sumas están soportadas con las correspondientes facturas de electrónicas de venta el cual serán a título ejecutivo contra el comprador por la suma en descubierto de acuerdo con el Código de Comercio en su artículo 460. PARÁGRAFO. La cantidad máxima de crédito de que podré disponer no podrá ser superior al cupo de crédito aprobado. TERCERO: No podré modificar las condiciones del crédito sin el consentimiento de Mary Mikly PARÁGRAFO: Conozco y acepto que Mary Mikly se reserva el derecho de rechazar cualquier solicitud de crédito sin que requiera comunicar o exponer las razones de su decisión y sin que ello genere derecho alguno a indemnización o resarcimiento a favor del interesado. CUARTO: Mi obligación como deudor solo cesará una vez Mary Mikly A. reciba a satisfacción las sumas adeudadas, y me encuentre al día con los pagos a dicha sociedad por el total de facturas emitidas por mercancías entregadas a entera satisfacción. QUINTO: El presente documento y las facturas emitidas en virtud de la vinculación como compradora (or) o cliente del catálogo de Mary Mikly prestan mérito ejecutivo, para el cobro de las obligaciones en ellos contenidas. En señal de conformidad acepto los términos y condiciones comunicados por Mary Mikly en su portal de compradoras.</p>
                </div>
                <h2 className='text-center font-bold mb-4'>AUTORIZACIÓN DE CONSULTA EN CENTRALES DE RIESGOS INFORMACIÓN CREDITICIA
                </h2>
                <div>
                    <p>Yo _________________________ con cédula de identidad # _____________ Autorizo expresamente a Mary Mikly, con cedula 117000741433 para en cualquier momento consultar, tratar y reportar toda mi información crediticia y patrimonial. Asimismo, podrá solicitar mi información en Centrales de Información Crediticia (burós de crédito) con el fin de determinar mi capacidad de endeudamiento, riesgo crediticio y posibilidad de ser sujeto de créditos. Este consentimiento es obligatorio para poder obtener un financiamiento con Mary Mikly. Asimismo, los derechos de acceso, rectificación, supresión y/o revocación, los podré ejercer al correo info.marymikly@gmail.com Asimismo, esta información también podrá ser utilizada con fines de prospección comercial, como, por ejemplo, enviarme publicidad, correos electrónicos, así como fines similares. El tratamiento de la información también es aplicable a otras entidades, que puedan dar cuenta de mi comportamiento crediticio. Autorizo igualmente el reporte de mis hábitos de pago (positivos y negativos) y los datos de contacto que hayan sido recolectados a las Centrales de Información Crediticia. Declaro que he leído, entiendo y acepto las implicaciones de las autorizaciones dadas.

                        Firma:_________________ Cedula: _________________ Fecha:__________</p>
                        <p> Declaro que todos los datos suministrados en este formulario son veraces y verificables, además autorizo a Mary Mikly. para que realice la validación de los mismos.</p>
                </div>

            </Modal>
        </>
    )
}

export default ModalDoc