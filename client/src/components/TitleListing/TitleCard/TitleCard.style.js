import styled from 'styled-components';

export const StyledTitleCard = styled.article`
    display: flex;
    align-items: center;
    padding: 30px 30px;
    border-bottom: 1px solid rgb(221,221,221);
    cursor: pointer;

    .poster-image-container {
        width: 50px;
        height: 50px;
        border-radius: 3px;
        margin-right: 10px;
        flex-shrink: 0;
        background: rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: rgba(0, 0, 0, 0.3);
        }

        .poster-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .title {
        font-size: 14px;
        margin-bottom: 6px;
        line-height: 18px;
        color: rgb(58, 58, 58);
    }

    .year {
        font-size: 12px;
        color: rgb(153,141,141);
    }

`;