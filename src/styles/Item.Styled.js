import styled from "styled-components";

export const ItemBox = styled.div`
    .poster__img{
        width: 100%;
    }    
    .poster_info{
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        align-items: center;
        .pi_user{
            display: flex;
            align-items: center;
            gap: 12px;
            img{
                height:40px
            }
            p{
                font-weight: 500;
            }
        }
        .pi_impressions{
            display: flex;
            align-items: center;
            gap: 5px;
            svg{
                font-size: 20px;
                color: #E1D9E4;
            }
            span{
                padding-bottom: 4px;
                font-weight: 500;
            }
        }
    }

`