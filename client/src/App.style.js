import styled from "styled-components";

export const StyledMainContainer = styled.div`
    display: flex;
    height: calc(100vh - 80px);

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        height: calc(100vh - 80px);
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        height: calc(100vh - 90px);
    }

    // For Extra large screens
    @media (width >= 1201px) {
        height: calc(100vh - 100px);
    }
`;

export const StyledTitlesLoadingContainer = styled.div`
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

export const StyledEmptySearchContainer = styled.div`
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

export const StyledErrorContainer = styled(StyledEmptySearchContainer)`
    h2 {
        font-size: 20px;

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 20px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 24px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 28px;
        }
    }
`;