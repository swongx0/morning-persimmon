import '../App.css';
import ImageCard from '../components/ImageCard';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div className="container">
        <div className='hero-section'>
            <h1>morning <br/> persimmon</h1>
            <img className="hero-image" src="/logo-alt.svg" alt="persimmon-character" width="200px"/>
        </div>
        <div className='story-section'>
            <div className='story-image'>
                <img className='img-responsive' src="https://placehold.co/736x815" alt="our story"/>
            </div>
            <div className='story-content'>
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sagittis sodales. Phasellus ullamcorper neque nisl, vitae finibus neque tincidunt nec. Cras quis accumsan libero. Morbi feugiat dui quis odio fringilla ultricies. Fusce vulputate mollis magna eu lobortis. Praesent in porta orci. Integer suscipit, eros vel pellentesque rhoncus, lacus orci molestie enim, eu condimentum eros eros nec lectus. Donec purus nulla, semper rhoncus facilisis ac, varius nec purus. Nunc vestibulum eros vel eros mollis efficitur non nec nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras tempor luctus dignissim.</p>
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
        <div className='image-card-section'>
            <h2>Delicious Goods</h2>
            <div className='image-card-container'>
                <ImageCard imgSrc="https://placehold.co/200x260" imgAlt="Product details" description="Chestnut Latte"/>
                <ImageCard imgSrc="https://placehold.co/200x260" imgAlt="Product details" description="Chestnut Latte"/>
                <ImageCard imgSrc="https://placehold.co/200x260" imgAlt="Product details" description="Chestnut Latte"/>
            </div>
        </div>
    </div>
  );
}

export default Home;
