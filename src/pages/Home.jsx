import '../App.css';
import { useRef, useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import ImageCard from '../components/ImageCard';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis'

function Home() {

    const loader = useRef(null);
    const path = useRef(null);
    const initialCurve = 200;  
    const duration = 600;
    const paths = useRef([]);
    const container = useRef();
    let start;

    const [isFading, setIsFading] = useState(false);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });

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
    
    useEffect(() => {
        const imageTilts = document.querySelectorAll('.img-tilt');
        imageTilts.forEach(imageTilt => {
            imageTilt.addEventListener("mousemove", event => {
                const { top, bottom, left, right } = imageTilt.getBoundingClientRect();
                const middleX = (right + left) / 2;
                const middleY = (bottom + top) / 2;
    
                const clientX = event.clientX;
                const clientY = event.clientY;
    
                const offsetX = (clientX - middleX) / middleX;
                const offsetY = (middleY - clientY) / middleY;
    
                imageTilt.style.transform = `perspective(1000px) rotateY(${offsetX * 20}deg) rotateX(${offsetY * 10}deg) scale3d(1, 1, 1)`;
            });
        });

        return () => {
            imageTilts.forEach(imageTilt => {
                imageTilt.removeEventListener("mousemove", null);
            });
        };
    }, []);

    useEffect( () => {

        scrollYProgress.on("change", e => {
    
            paths.current.forEach( (path, i) => {
    
                path.setAttribute("startOffset", -60 + (i * 60) + (e * 60) + "%");
    
            })
    
        })
    
    }, []);

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, []);

    return (
        <div ref={container} className={`container ${isFading ? 'fading' : ''}`}>
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
                <img id="imgTilt" className='img-responsive story-image img-tilt' src="https://placehold.co/300x400" alt="our story"/>
                <div className='story-content'>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sagittis sodales. Phasellus ullamcorper neque nisl, vitae finibus neque tincidunt nec. Cras quis accumsan libero. Morbi feugiat dui quis odio fringilla ultricies. Fusce vulputate mollis magna eu lobortis. Praesent in porta orci. Integer suscipit, eros vel pellentesque rhoncus, lacus orci molestie enim, eu condimentum eros eros nec lectus. Donec purus nulla, semper rhoncus facilisis ac, varius nec purus. Nunc vestibulum eros vel eros mollis efficitur non nec nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras tempor luctus dignissim.</p>
                </div>
            </div>
            <div className='story-section section-two'>
                <div className='story-content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sagittis sodales. Phasellus ullamcorper neque nisl, vitae finibus neque tincidunt nec. Cras quis accumsan libero. Morbi feugiat dui quis odio fringilla ultricies. Fusce vulputate mollis magna eu lobortis. Praesent in porta orci. Integer suscipit, eros vel pellentesque rhoncus, lacus orci molestie enim, eu condimentum eros eros nec lectus. Donec purus nulla, semper rhoncus facilisis ac, varius nec purus. Nunc vestibulum eros vel eros mollis efficitur non nec nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras tempor luctus dignissim.</p>
                </div>
                <img id="imgTilt" className='img-responsive story-image img-tilt' src="https://placehold.co/300x400" alt="our story"/>
            </div>
            <div className='image-card-section'>
                <div className='image-card-container'>
                    <ImageCard imgSrc="https://placehold.co/200x200" imgAlt="Product details" description="Chestnut Latte"/>
                    <ImageCard imgSrc="https://placehold.co/200x200" imgAlt="Product details" description="Chestnut Latte"/>
                    <ImageCard imgSrc="https://placehold.co/200x200" imgAlt="Product details" description="Chestnut Latte"/>
                    <ImageCard imgSrc="https://placehold.co/200x200" imgAlt="Product details" description="Chestnut Latte"/>
                    <ImageCard imgSrc="https://placehold.co/200x200" imgAlt="Product details" description="Chestnut Latte"/>
                </div>
                <svg className="w-full mb-40" viewBox="0 0 250 90">

                    <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>

                    <text className="text-[6px] uppercase" style={{fill: "#3A4F13"}}>
                        {
                            [...Array(3)].map((_, i) => {
                                return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">The perfect cup of coffee</textPath>
                            })
                        }
                    </text>
                </svg>
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
