import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'

function App() {

  const [carousel1, setCarousel1] = useState('')
  const [carousel2, setCarousel2] = useState('hidden')
  const [carousel3, setCarousel3] = useState('hidden')

  setTimeout(() => {
    onNext()
  }, 7000);

  const onNext = () => {
    if (carousel1 === '') {
      setCarousel1('hidden')
      setCarousel2('')

    } if (carousel2 === '') {
      setCarousel2('hidden')
      setCarousel3('')
    } if (carousel3 === '') {
      setCarousel3('hidden')
      setCarousel1('')
    }
  }
  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal')
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
      console.log('add')

      if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add('active-scroll')

      }
      
    }
  }


  window.addEventListener('scroll', reveal);

  


  return (
    <>
      <Header></Header>
      <main className="mb-8 mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl ">
            <span className="block xl:inline">La luz que resplandece dentro de ti es única y refleja tu</span>
            <span className="block text-red-600 xl:inline"> belleza interior</span>
          </h1>
          <p className="mt-3 text-base text-center text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl">Mary Mikly te brinda la oportunidad de emprender tu negocio, te apoya y guía para que puedas crecer y ganar haciendo honor a nuestro lema generar prosperidad compartida.</p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Link to={'/catalogos'} className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 md:py-4 md:px-10 md:text-lg">Catálogos</Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link to={'/contactanos'} className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-400 px-8 py-3 text-base font-medium text-white hover:bg-red-300 md:py-4 md:px-10 md:text-lg">Afíliate</Link>
            </div>
          </div>
        </div>
      </main>

      <div className='imagen'></div>


      <div className="bg-white py-12">
        <div className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg font-semibold text-red-400">Nuestras Cualidades</h2>
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">La calidad de nuestros productos</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Ofrecemos prendas femeninas que se adaptan a tu estilo único y especial que te harán lucir y sentir cómoda.</p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Algodón</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Es una fibra natural. El algodón es un material transpirable, muy resistente al uso y a las rozaduras especial para mantener fresco el cuerpo.</dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Lycra</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Confiere a las prendas de vestir una eterna elasticidad, óptima adaptación a la forma del cuerpo y hace que sienten a la perfección. Especialmente suave, se adapta como una segunda piel. De fácil cuidado y secado rápido. La portadora de la prenda elaborada con este material se sentirá cómoda y relajada.</dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Microfibras</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Es un moderno tejido de alta tecnología compuesto de poliéster o poliamida. Las interminables fibras son trabajadas de una en una para formar hilos. Las piezas de microfibra dejan transpirar y son sumamente ligeras y suaves, al tiempo que resistentes.</dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Poliéster</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">El poliéster es un tejido completamente químico- sintético. Se produce en diferentes estructuras y densidades, y normalmente se mezcla con otras fibras. El poliéster es adecuado sobre todo para ropa de deporte, moda de baño, vestidos, y ropa íntima.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <section>
        <h1 className='text-center text-lg font-semibold mb-8'>Un Poco de Nuestros Productos Deportivos</h1>
        <div className='reveal lg:px-32 grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <div id="default-carousel" className="relative">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div className={`${carousel1} box-shadow`} >
                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                <img src="/img/carousel1.png" className="shadow imagen-carousel absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className={`${carousel2} `} >
                <img src="/img/carousel2.png" className="imagen-carousel absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className={`${carousel3} `} >
                <img src="/img/carousel3.png" className="imagen-carousel absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            </div>
          </div>
          <div><p className='mt-2 ml-4 mr-4 md:ml-0 md:mr-0 text-base text-gray-500'>Más allá del diseño o las tendencias, la ropa que utilizamos para activarnos físicamente debe adaptarse al tipo de ejercicio, al ambiente donde lo llevamos a cabo y sobre todo a nuestro tipo de cuerpo y necesidades personales. La tela por ejemplo, indica las propiedades específicas de la prenda en cuanto a elasticidad, absorción de líquidos o permeabilidad, características muy importantes a la hora de hacer ejercicio. Cuando se piensa en la ropa adecuada para esta actividad, de manera equívoca imaginamos que ésta debe ser cómoda y nada más; sin embargo, es necesario tener más consideración al elegir esta indumentaria. ¡Presta atención!</p></div>
        </div>
      </section>
      <section className="reveal bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium">"Mary Mikly es una empresa que quiere crecer junto con sus clientes. Velamos por la prosperidad compartida."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img className="w-6 h-6 rounded-full" src="/img/marymikly.png" alt="profile picture" />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO de Mary MikLy</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

    </>
  )
}

export default App
