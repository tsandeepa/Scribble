import bannerImage from "../assets/b1.png"
import Item from "../components/Item";
import useFetch from "../db/useFetch";
import { Banner } from "../styles/Banner.Styled";
import { HomeMain } from "../styles/Home.Styled";


const Home = () => {

    const {data} = useFetch()
    

    return ( 
        <HomeMain>
            <Banner>
                <img src={bannerImage} alt="" />
                <div className="banner_text">
                    <h1>Scribble</h1>
                    <p>The biggest designers <br/>community</p>
                </div>
            </Banner>
            <div className="filter__bar">
                <button>All</button>
                <button>Web Design</button>
                <button>Mobile App</button>
                <button>Illustrations</button>
                <button>Branding</button>
                <button>Typography</button>
            </div>
            <div className="item__grid">
                {
                    data &&
                    data.map((item,i)=>(
                        <Item item={item} key={i}/>
                    ))
                }
            </div>

        </HomeMain>
     );
}
 
export default Home;