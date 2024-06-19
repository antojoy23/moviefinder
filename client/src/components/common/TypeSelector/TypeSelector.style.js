import styled, { css } from "styled-components";

import { FOR_COMPONENT } from "./TypeSelector";

const headerCss = css`
    flex: 1;

    .title-type-label {
        color: white;
        font-size: 12px;
        margin-bottom: 5px;
        transition: font-size 300ms;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 12px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 14px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 16px;
        }
    }

    .title-type-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        font-size: 12px;
        gap: 5px;
        transition: font-size 300ms, gap 300ms;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 12px;
            gap: 5px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 14px;
            gap: 8px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 16px;
            gap: 10px;
        }
        
        div {
            input {
                margin-right: 3px;
                width: 12px;
                transition: margin-right 300ms, width 300ms;
                // For Laptops and small screens
                @media (769px <= width <= 1024px) {
                    margin-right: 3px;
                    width: 12px;
                }

                // For Desktops and large screens
                @media (1025px <= width <= 1200px) {
                    margin-right: 4px;
                    width: 14px;
                }

                // For Extra large screens
                @media (width >= 1201px) {
                    margin-right: 5px;
                    width: 16px;
                }
            }
        }
    }

`;

const landingPageCss = css`
    margin-top: 20px;

    .title-type-options {
        display: flex;
        font-size: 14px;
        justify-content: center;
        align-items: center;
        gap: 20px;

        div {
            input {
                margin-right: 5px;
            }
        }
    }
`

export const StyledTypeSelector = styled.div`
    color: white;
    ${props => {
        if (props.$for === FOR_COMPONENT.HEADER) {
            //If for Header load the header css
            return headerCss;
        } else {
            //else load the landingpage css (default)
            return landingPageCss;
        }
    }}
    .title-type-options {
        div {
            display: flex;
            align-items: center;
            input, label {
                cursor: pointer;
            }
        }
    }
`;