import styled from "styled-components";

export const HeaderTop = styled.div`
    background: #ccf;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    border-radius: 100px;
    padding: 7px 10px;
    background: #F9F9F9;
    .header--tile{
        display: flex;
        align-items: center;
        padding-left: 5px;
        img{

        }
        h2{
            color: #8A2AD4;
            padding-bottom: 4px;
        }
        .mobile--menu{
            display: none;
        }
    }
    .header--nav{
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
    .header--user{
        display: flex;
        text-align: right;
        gap: 15px;
        .header__user__info{
            h4{
                line-height: 1;
            }
            span{
                font-size: 14px;
                color: #9F9F9F;
            }
        }
        img{
            height: 43px;
        }
    }

    @media only screen and (max-width: 930px) { 
        .header--nav{
            display: none;
        }
        body{
            padding-bottom: 100px;
        }
        .header--tile{
            .mobile--menu{
                display: block !important;
                margin-right: 10px;
                button{
                    width: 35px;
                    height: 35px;
                    padding: 0;
                    border-radius: 50px;
                    border: none;
                    background: transparent;
                }
            }
            h2{
                display: none;
            }
        }
        
    }
`