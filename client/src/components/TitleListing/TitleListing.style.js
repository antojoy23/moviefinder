import styled from "styled-components";

export const StyledSection = styled.section`
    width: 350px;
    border-right: 1px solid rgb(221,221,221);
    transition: width 300ms;

    .title-results-count {
        height: 50px;
        padding: 0 30px;
        display: flex;
        align-items: center;
        font-size: 18px;
    }

    .title-list-container {
        overflow-y: overlay;
        position: relative;
        height: calc(100% - 50px);

        .loading-container {
            padding: 30px 30px;
        }

        .titles-empty {
            padding: 0 40px;
            text-align: center;
            margin-top: 10px;
            h4 {
                font-size: 18px;
                margin-bottom: 5px;
            }
            p {
                font-size: 16px;
            }
        }
    }

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        width: 350px;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        width: 380px;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        width: 420px;
    }
`;