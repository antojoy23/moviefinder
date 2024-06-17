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
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar,
        &::-webkit-scrollbar-thumb {
            overflow:visible;
            border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background: rgba(0,0,0,0.6);
        }

        .loading-container {
            padding: 30px 30px;
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