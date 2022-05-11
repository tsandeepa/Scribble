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
    .flex-between{
        justify-content: space-between;
    }
`

export default GlobalStyles;
