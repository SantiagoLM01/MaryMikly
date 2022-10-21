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

const ModalForm = ({openModal , setOpenModal}) => {

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
        <h2 className='text-center font-bold mb-4'>Terminos y condiciones</h2>
        <div>
          <h4 className='mb-4'>Nombre y apellidos iguales a su documento de identidad</h4>
          <h4>Mary Mikly asegura que tus datos serán confidenciales y no estarán disponibles para otras personas o entidades. Por lo tanto, no serán utilizados para ningún fin sin autorización.</h4>

          <h3 className='my-2 font-bold'>OBSERVACIONES GENERALES:</h3>
          <ul className='list-disc mx-2'>
            <li className='mb-4'>El afiliado no tiene injerencia alguna en las promociones o precios que publica la empresa ya que las diferentes estrategias comerciales y de marketing no acarrean responsabilidad alguna para el afiliado.</li>
            <li className='mb-4'>El afiliado se compromete a notificar cualquier cambio de domicilio o teléfono que efectúe, para mantener actualizada su información; procurando que ésta sea correcta, clara, veraz y lo más exacta posible.</li>
            <li className='mb-4'>El afiliado autoriza a Mary Mikly para que le sean enviados por cualquier medio digital (SMS, WhatsApp o Correo Electrónico) información de promociones, ofertas, liquidaciones, políticas y cualquier otro tipo de información conveniente para brindarle un mejor servicio y atención; que permita un acercamiento comercial continuo y actualizado</li>
            <li className='mb-4'>El precio, descripción, detalle e inventario del producto se encuentra sujeto a cambios sin previo aviso por parte de Mary Mikly. El color y la imagen del producto pueden variar dependiendo del equipo de cómputo y resolución que se esté utilizando.</li>
            <li className='mb-4'>El afiliado se compromete a pagar las facturas correspondientes derivadas de la actividad comercial con Mary Mikly, en los tiempos estipulados por la empresa.</li>
            <li className='mb-4'>El afiliado deberá pagar los gastos por el envío de los productos a su domicilio.</li>
            <li className='mb-4'>El afiliado acepta que al adquirir productos de Mary Mikly, el mismo está sujeto a la disponibilidad, modelo, color, talla o cantidad previamente establecido por el proveedor.</li>
            <li className='mb-4'>Por razones de higiene no aceptamos cambios o devoluciones de prendas íntimas como blomers, brasier, excepto cuando hayan sido identificados defectos de fábrica. El costo del envío hacia Mary Mikly es asumido por el consumidor. En el caso de un defecto de fábrica, nosotros te reembolsaremos el costo del envío.</li>
            <li className='mb-4'>En el caso de ropa deportiva o exterior se puede cambiar o devolver productos que no hayan sido usados hasta 30 días después de la compra. Estos artículos deben estar en perfectas condiciones, con las etiquetas aún puestas y en su empaque original</li>
          </ul>

          <strong>Declaro y acepto las condiciones descritas y así como responsabilidad total por los datos suministrados en este formulario; declarando que son verdaderos. Autorizo además para que los mismos sean verificados y utilizados en el momento y de la forma en que Mary Mikly lo considere conveniente y necesario.</strong>
        
        </div>
        
      </Modal>
    </>
    )
}

export default ModalForm