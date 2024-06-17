import styled from "styled-components";

export const StyledMainContainer = styled.div`
    display: flex;
    height: calc(100vh - 80px);
`;

export const StyledTitlesLoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex: 1;

    p {
        span {
            text-transform: lowercase;
        }
    }
`;

export const StyledEmptySearchContainer = styled.div`
    width: 50%;
    text-align: center;
    margin: 50px auto 0 auto;
    img {
        width: 50px;
        margin-bottom: 5px;
    }
    h3 {
        margin-bottom: 10px;
        span {
            text-transform: lowercase;
        }
    }
`;