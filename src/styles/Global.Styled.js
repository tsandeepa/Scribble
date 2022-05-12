import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }
    body{
        &::-webkit-scrollbar {
        width: 6px;               /* width of the entire scrollbar */
        }
        &::-webkit-scrollbar-track {
        background: transparent;        /* color of the tracking area */
        }
        &::-webkit-scrollbar-thumb {
        background-color: #ccc;   /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        }
    }
    .flex-center{
        display: flex;
        align-items: center;
    }
    .justify-center{
        justify-content: center;
    }
    .flex-between{
        justify-content: space-between;
    }
    .img{
        max-width: 600px;
    }

    .btn{
        padding: 12px 35px;
        border-radius: 5px;
        cursor: pointer;
    }
    .btn-light{
        color: #8A2AD4;
        border: 1px solid #E8E8E8;
        background-color: #fff;
        &:hover{
            background-color: #f9f5ff;
        }
    }
`

export default GlobalStyles;
