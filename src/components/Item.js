import { ItemBox } from "../styles/Item.Styled";
import { AiFillHeart } from "react-icons/ai";
import { motion } from 'framer-motion';


const Item = ({item}) => {
    return ( 
        <ItemBox>
            <motion.img 
                initial={{
                    borderRadius: '10%'
                  }}
                  whileHover={{
                    borderRadius: ["10%", "5%"],
                    scale: 0.95,
                    rotate: [0, 0, 2, -3, 0, 0],
                  }}
            className="poster__img" src={item.Poster} alt="" />
            <div className="poster_info">
                <div className="pi_user">
                    <img src={item.userImage} alt="" />
                    <p>{item.name}</p>
                    
                </div>
                <div className="pi_impressions">
                    <AiFillHeart/><span>{item.likes}</span>
                </div>
            </div>
        </ItemBox>
     );
}
 
export default Item;