import styled from 'styled-components';

export const StyledHeader = styled.div`
    height: 80px;
    background-color: rgb(34,34,34);

    display: flex;
    align-items: center;
    padding: 0 10px;
    transition: all 300ms;

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        height: 80px;
        padding: 0 10px;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        height: 90px;
        padding: 0 15px;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        height: 100px;
        padding: 0 20px;
    }

    .filter-container {
        width: 460px;
        display: flex;
        gap: 15px;
        transition: all 300ms;

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            width: 460px;
            gap: 16px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            width: 500px;
            gap: 20px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            width: 600px;
            gap: 24px;
        }
    }
`;