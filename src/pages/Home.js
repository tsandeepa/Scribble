import bannerImage from "../assets/b1.png"
import Item from "../components/Item";
import useFetch from "../db/useFetch";
import { Banner } from "../styles/Banner.Styled";
import { HomeMain } from "../styles/Home.Styled";
import { motion } from 'framer-motion';



const Home = () => {

    const {data} = useFetch()


    const gridLoad = {
        hidden: { opacity: 0, scale:0.8},
        visible: i =>(
            { 
                opacity: 1,
                scale:1,
                transition:{
                    type: "easeIn",
                    delay: i * 0.08,
                } 
            }
        )
      }
    

    return ( 
        <HomeMain>
            <Banner>
                <motion.img 
                    animate={{
                        scale: [1, 1.01, 1.01, 1, 1],
                        rotate: [0, 0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                src={bannerImage} alt="" />
                <div className="banner_text">
                    <h1>Scribble</h1>
                    <p>The biggest designers <br/>community</p>
                </div>
            </Banner>
            <motion.div 
                drag="x" 
                dragConstraints={{ left: -300, right: 100 }}
                className="filter__bar">
                    <button className="active">All</button>
                    <button>Web Design</button>
                    <button>Mobile App</button>
                    <button>Illustrations</button>
                    <button>Branding</button>
                    <button>Typography</button>
            </motion.div>
            <div className="item__grid">
                {
                    data &&
                    data.map((item,i)=>(
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={gridLoad}
                        >
                            <Item item={item}/>
                        </motion.div>
                    ))
                }
            </div>
            <div className="flex-center justify-center">
                <button className="btn btn-light">Load More</button>
            </div>

        </HomeMain>
     );
}
 
export default Home;