import styled from "styled-components";

export const FooterBottom = styled.div`
    background: #F9F9F9;
    margin-top: 40px;
    padding: 30px 40px;
    border-radius: 10px;
    margin-bottom: 30px;
    .foot--desc{
        p{
            font-size: 15px;
            color: #646464;
            margin-bottom: 14px;
            margin-top: 6px;
        }
        .foot--social{
            display: flex;
            gap: 10px;

        }
    }
    .foot--nav{
        display: flex;
        gap: 10px;
        margin-left: 30px;
        gap: 42px;
        a{  
            text-decoration: none;
            font-size: 14px;
            font-weight: 400;
            color: #000;
        }
    }
    .foot--copyright{
        display: flex;
        justify-content: center;
        border-top: 1px solid #DCDCDC;
        padding-top: 22px;
        margin-top: 22px;
        font-size: 13px;
        color: #686868;
    }

    @media only screen and (max-width: 782px) { 
        .flex-center.flex-between{
            flex-direction: column;
           

        }
        .foot--desc{
            display: flex;
            flex-direction: column;
            align-items: center;
            p{
                text-align: center;
            }

        }
        .foot--nav{
            flex-direction: column;
            margin-left: 0;
            align-items: center;
            gap: 20px;
            margin-top: 50px;
            margin-bottom: 20px;
        }
    }
`