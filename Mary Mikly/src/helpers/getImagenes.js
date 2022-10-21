


const getImagenes = () => {

    let imgsArray = []
    
    for (let i = 1; i <= 9; i++) {
        imgsArray = [...imgsArray, {imagenNumero : `${i}` , src: `/img/foto${i}.webp`}]
    }
    return imgsArray
}


export const getImagenesServicios = () => {

    let imgsArray = []
    for (let i = 1; i <= 4; i++) {
        imgsArray = [...imgsArray, {imagenNumero : `${i}` , src: `/img/servicios${i}.png`}]
    }
    return imgsArray
}

export default getImagenes