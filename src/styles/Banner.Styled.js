import styled from "styled-components";

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px;
    img{
        max-width: 600px;
    }
    .banner_text{
        
        h1{
            font-size: 70px;
            font-weight: 800;
        }
        p{
            color: #646464;
        }
    }

    @media only screen and (max-width: 930px) { 
        flex-direction: column;
        flex-direction: column-reverse;
        .banner_text{
            text-align: center;
        }
    }
    @media only screen and (max-width: 600px) { 
        img{
            max-width: 340px;
        }
    }
`