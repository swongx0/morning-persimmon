import '../App.css';
import { useRef, useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
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
    
    const [loading, setLoading] = useState(true);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });


    useEffect(() => {
        setPath(initialCurve)
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 3000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
        } else {
            setLoading(false); // Hide loader after animation
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
                path.setAttribute("startOffset", -65 + (i * 64) + (e * 65) + "%");
            })
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div ref={container} className='container'>
            {loading && (
                <div ref={loader} className="loader">
                    <img className='loader-animation' src="/loading-animation.GIF" alt="coffee walking"/>
                    <h1 className='loader-text'>Loading...</h1>
                    <svg>
                        <path ref={path} fill="#007bff"></path>
                    </svg>
                </div>
            )}
            {/* {!loading && (
                <> */}
                    <Navbar />
                    <div className='hero-section'>
                        <h1>morning <br/> persimmon</h1>
                        <img className="hero-image" src="/logo-alt.svg" alt="persimmon-character" width="200px"/>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#BF5D30" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,144C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
                    <svg className='story-section-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><path fill="#BF5D30" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,90.7C840,107,960,117,1080,106.7C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    <div className='story-section box'>
                        <div id="imgTilt" className='img-responsive story-image img-tilt'></div>
                        <div className='story-content'>
                            <h2>Our Story</h2>
                            <p>Hi there, and welcome to our little home cafe! What started as a fun hobby for us—baking treats and making coffee—turned into our happy escape from the daily grind of the 9-5. It was our way to slow down, share some sweet moments, and make life just a bit cozier. It all began as a silly idea between two sisters, but it quickly grew into something special. We started baking and brewing for friends and family, and before we knew it, the smell of fresh pastries and coffee filled our home, and we thought, why not create a space where we can share that love with more people? This isn’t just a cafe; it’s a piece of our home. A warm, welcoming spot where you can enjoy homemade goodies, sip on coffee, and take a breather. Whether you’re here for a quick pick-me-up, a chat, or just something sweet, we’re so happy you stopped by and thank you for being a part of this journey with us. Make yourself at home, and let’s share a little bit of positivity and happiness together!</p>
                        </div>
                    </div>
                    <svg className='story-section-svg-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160"><path fill="#BF5D30" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,90.7C840,107,960,117,1080,106.7C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                    <svg className="w-full mb-40 morning-text" viewBox="0 0 250 90" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">

                        <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>

                        <text className="text-[6px] uppercase" style={{fill: "#3A4F13"}}>
                            {
                                [...Array(3)].map((_, i) => {
                                    return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={(i * 67 + 5) + "%"} href="#curve"> Your morning pick-me up · &nbsp;</textPath>
                                })
                            }
                        </text>
                    </svg>
                    <div className='location-section'>
                        <div className='location-title'>
                            <img className='location-title-alt' src="/location-image.PNG" alt="location and hours" width="700"/>
                        </div>
                        <div className='location-content'>
                            <h2>Location:</h2>
                            <p>Check RSVP</p>

                            <h2>Hours:</h2>
                            <p>Dec 21st @ 9am-1pm</p>
                        </div>
                    </div>
                {/* </>
            )} */}
            
        </div>
        );
    }

export default Home;
