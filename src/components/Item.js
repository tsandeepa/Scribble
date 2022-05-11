import { ItemBox } from "../styles/Item.Styled";
import { AiFillHeart } from "react-icons/ai";

const Item = ({item}) => {
    return ( 
        <ItemBox>
            <img className="poster__img" src={item.Poster} alt="" />
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