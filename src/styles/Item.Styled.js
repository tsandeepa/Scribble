import styled from "styled-components";

export const ItemBox = styled.div`
    .poster__img{
        width: 100%;
        min-height: 303px;
        background-color: #f3f3f3;
        cursor: pointer;
    }    
    .poster_info{
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        align-items: center;
        .pi_user{
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            img{
                height:40px
            }
            p{
                font-weight: 600;
            }
        }
        .pi_impressions{
            display: flex;
            align-items: center;
            gap: 5px;
            svg{
                font-size: 22px;
                color: #E1D9E4;
                cursor: pointer;
                &:hover{
                    color: #8A2AD4;
                }
            }
            span{
                font-weight: 500;
            }
        }
    }
    
`