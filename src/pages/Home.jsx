import '../App.css';
import { useRef, useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import ImageCard from '../components/ImageCard';

function Home() {

    const loader = useRef(null);
    const path = useRef(null);
    const initialCurve = 200;  
    const duration = 600;
    let start;

    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        setPath(initialCurve)
        setTimeout( () => {
          requestAnimationFrame(animate)
        }, 500)
      }, [])

      const animate = (timestamp) => {
        if(start === undefined){
          start = timestamp
        }
    
        const elapsed = timestamp - start;
        loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

        const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration)
        setPath(newCurve);
        if(elapsed < duration){
          requestAnimationFrame(animate)
        }
      }
    
      const easeOutQuad = (time, start, end, duration) => {
        return -end * (time /= duration) * (time - 2) + start;
      }
    
      const loaderHeight = () => {
        const loaderBounds = loader.current.getBoundingClientRect();
        return loaderBounds.height;
      }
    
      const setPath = (curve) => {
        const width = window.innerWidth
        const height = loaderHeight();
        path.current.setAttributeNS(null, "d",
        `M0 0
        L${width} 0
        L${width} ${height}
        Q${width/2} ${height - curve} 0 ${height}
        L0 0`
        )
    }

    return (
        <div className={`container ${isFading ? 'fading' : ''}`}>
            <div ref={loader} className="loader">
                <svg>
                    <path ref={path}></path>
                </svg>
            </div>
            <Navbar setIsFading={setIsFading}/>
            <div className='hero-section'>
                <h1>morning <br/> persimmon</h1>
                <img className="hero-image" src="/logo-alt.svg" alt="persimmon-character" width="200px"/>
            </div>
            <div className='story-section'>
                <img className='img-responsive story-image' src="https://placehold.co/736x780" alt="our story"/>
                <div className='story-content'>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sagittis sodales. Phasellus ullamcorper neque nisl, vitae finibus neque tincidunt nec. Cras quis accumsan libero. Morbi feugiat dui quis odio fringilla ultricies. Fusce vulputate mollis magna eu lobortis. Praesent in porta orci. Integer suscipit, eros vel pellentesque rhoncus, lacus orci molestie enim, eu condimentum eros eros nec lectus. Donec purus nulla, semper rhoncus facilisis ac, varius nec purus. Nunc vestibulum eros vel eros mollis efficitur non nec nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras tempor luctus dignissim.</p>
                </div>
            </div>
            <div className='image-card-section'>
                <div className='image-card-container'>
                    <ImageCard imgSrc="https://placehold.co/200x200" imgAlt="Product details" description="Chestnut Latte"/>
                    <ImageCard imgSrc="https://placehold.co/200x200" imgAlt="Product details" description="Chestnut Latte"/>
                    <ImageCard imgSrc="https://placehold.co/200x200" imgAlt="Product details" description="Chestnut Latte"/>
                    <ImageCard imgSrc="https://placehold.co/200x200" imgAlt="Product details" description="Chestnut Latte"/>
                    <ImageCard imgSrc="https://placehold.co/200x200" imgAlt="Product details" description="Chestnut Latte"/>
                </div>
            </div>
            <div className='location-section'>
                <div className='location-title'>
                    <h2 className='location-title-alt'>Our Location <br/> and Hours</h2>
                </div>
                <div className='location-content'>
                    <h3>Location:</h3>
                    <p>Home Address</p>

                    <h3>Hours:</h3>
                    <p>Dec 21st @ 9am-1pm</p>
                </div>
            </div>
        </div>
        );
    }

export default Home;
