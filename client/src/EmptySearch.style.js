import styled from "styled-components";

export const StyledEmptySearch = styled.div`
    width: 50%;
    text-align: center;
    margin: 50px auto 0 auto;

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        margin-top: 50px;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        margin-top: 80px;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        margin-top: 100px;
    }

    img {
        width: 50px;
        margin-bottom: 5px;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            width: 50px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            width: 80px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            width: 100px;
        }
    }
    h3 {
        margin-bottom: 10px;
        font-size: 18px;

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            margin-bottom: 10px;
            font-size: 18px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            margin-bottom: 12px;
            font-size: 20px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            margin-bottom: 14px;
            font-size: 24px;
        }

        span {
            text-transform: lowercase;
        }
    }

    p {
        font-size: 16px;

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
`;