import styled from "styled-components";

export const StyledSection = styled.section`
    width: 350px;
    border-right: 1px solid rgb(221,221,221);
    overflow-y: overlay;
    position: relative;
    &::-webkit-scrollbar {
        width: 5px;
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
`;