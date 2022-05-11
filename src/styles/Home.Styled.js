import styled from "styled-components";

export const HomeMain = styled.div`
    .filter__bar{
        display: flex;
        gap: 35px;
        justify-content: center;
        button{
            border: none;
            background: none;
            font-size: 15px;
            color: #9F9F9F;
        }
    }
    .item__grid{
        margin: 80px 0;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(344px,1fr));
        gap: 65px;
    }
`