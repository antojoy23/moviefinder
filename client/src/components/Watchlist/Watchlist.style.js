import styled from "styled-components";

export const StyledWatchlist = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
    right: 30px;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover {
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
        color: rgb(0 63 129);
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;