import styled from "styled-components";

export const StyledSearchLoading = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex: 1;

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        gap: 20px;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        gap: 22px;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        gap: 24px;
    }


    p {
        font-size: 18px;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 18px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 20px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 22px;
        }
        span {
            text-transform: lowercase;
        }
    }
`;