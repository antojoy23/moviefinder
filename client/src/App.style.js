import styled from "styled-components";

export const StyledApp = styled.div`
    height: 100vh;
`;

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