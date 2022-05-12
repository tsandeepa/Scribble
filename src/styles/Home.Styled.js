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
            white-space: nowrap;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            &:hover{
                color: #8A2AD4;
            }
        }
        .active{
            background: #F3F3F3;
            color: #8A2AD4;
            font-weight: 500;
        }
    }
    .item__grid{
        margin: 80px 0;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(344px,1fr));
        gap: 65px;
    }

    @media only screen and (max-width: 700px) { 
        .filter__bar{
            justify-content: flex-start;
        }
    }
`