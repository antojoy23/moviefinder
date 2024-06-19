import styled, { css } from "styled-components";
import { SEARCH_COMPONENT_TYPE } from "./SearchInput";

const headerCss = css`
    flex: 1;
    padding-right: 30px;

    &:focus-within {
        .search-icon-container {
            right: 30px;
            cursor: pointer;
            pointer-events: auto;
        }

        input {
            padding-left: 0;
            padding-right: 30px;
        }
    }

    .search-icon-container {
        right: calc(100% - 20px);
        pointer-events: none;
        z-index: 20;
        transition: right 300ms;
    }

    input { 
        width: 100%;
        border-bottom: 1px solid transparent;
        padding: 8px 0 8px 30px;
    }
`;

const landingPageCss = css`
    border: 1px solid white;
    border-radius: 18px;
    
    .search-icon-container {
        right: 10px;
        cursor: pointer;
    }

    input { 
        flex: 1;
        border-bottom: none;
        padding: 10px 40px 10px 15px;
    }
`;

export const StyledSearchInput = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    /* Handling Input field autofill bg color */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active{
        -webkit-background-clip: text;
        -webkit-text-fill-color: white;
        caret-color: white;
        transition: background-color 1s ease-in-out;
    }

    .search-icon-container {
        position: absolute;
        img {
            width: 14px;
            transition: width 300ms;
            // For Laptops and small screens
            @media (769px <= width <= 1024px) {
                width: 14px;
            }

            // For Desktops and large screens
            @media (1025px <= width <= 1200px) {
                width: 16px;
            }

            // For Extra large screens
            @media (width >= 1201px) {
                width: 18px;
            }
        }
    }
    input {
        border: 0;
        color: white;
        font-size: 14px;
        outline: 0;
        background-color: transparent;
        transition: border-color 150ms, font-size 300ms;

        &::placeholder {
            color: rgb(223, 223, 223);
        }

        &:focus {
            border-color: white;
            &::placeholder {
                color: transparent;
            }
        }

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 16px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 18px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 20px;
        }
    }

    ${props => {
        if (props.$for === SEARCH_COMPONENT_TYPE.HEADER) {
            //If for Header, load the header specific css
            return headerCss;
        } else {
            //else load the landingpage specific css (default)
            return landingPageCss;
        }
    }}
`;