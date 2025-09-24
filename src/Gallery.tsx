import './gallery.css'
import img1 from './assets/meAndBro.jpeg'
import img2 from './assets/meAndBerra.jpeg'
import img3 from './assets/ceyhun.jpeg'
import img4 from './assets/selo.jpeg'
import img5 from './assets/bros.jpeg'
import img6 from './assets/app.jpeg'
import img7 from './assets/appa.jpeg'
interface frame  {
    src: string;
    alt: string;
}

const renderFrame = (frame: frame) => {
    return (
        <div className="frame">
            <img src={frame.src} alt="cool image"/>
            <p><i>{frame.alt}</i></p>

        </div>
    )
}

export const Gallery = () => {
    return (
        <div className="main">
            {frames.map(renderFrame)}
        </div>)
}

const frames: frame[] = [{src: img1, alt:'Me and brother in Berlin'},
                        {src: img2, alt:'Me and Berra in the Library'},
                        {src: img3, alt:'Ceyhun eats ice cream, Umut is displeased'},
                        {src: img4, alt:'Sİ dg, 22nd edition'},
                        {src: img5, alt:'Me and soon to be doctor bros'},
                        {src: img6, alt:'Screenshot from my soon to be released app, Wanderer'},
                        {src: img7, alt:'Appa'}]