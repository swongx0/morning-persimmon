import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';
import '../App.css'

function About() {

  // const [openModal, setOpenModal] = useState(false)

  return (
    <div className={styles.about_container}>
        {/* {openModal && <Modal onClose={() => setOpenModal(false)} />} */}
        <Navbar />
        {/* <h2 className={styles.about_title}>Meet The <br />  Creators</h2> */}
        <div className={styles.about_us}>
          <div className={styles.about_winnie}></div>
          <div className={styles.about_content_barista}>
            <p>Hi! I’m Winnie, an interior designer who found a love for coffee. After years of perfecting floor plans, I needed a new creative outlet, so I started making coffee to unwind... Before long, my home smelled like a coffee shop, and I realized I wanted to share that warm, caffeinated joy with others. This café is the perfect blend of my two passions—design and coffee—a cozy space where you can relax, enjoy a good brew and feel right at home.</p>
          </div>
        </div>
        <div className={styles.about_us}>
          <div className={styles.about_content_baker}>
            <p>Hi, my name is Sharon! My passion for baking stems from the joy I get whenever I eat good food. I aim to bake treats that will make people smile—because who doesn’t want a bite of happiness? When I’m not in the kitchen, I am working as a frontend developer looking to build beautiful and functional web designs that will entice the end users. After all, a site without good design is like a cake without frosting—just not as sweet!</p>
          </div>
          <div className={styles.about_sharon}></div>
        </div>
    </div>
  );
}

export default About;
