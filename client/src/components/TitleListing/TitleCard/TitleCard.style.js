import styled from 'styled-components';

export const StyledTitleCard = styled.article`
    display: flex;
    align-items: center;
    padding: 80px 30px;
    border-bottom: 1px solid rgb(221,221,221);
    cursor: pointer;

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        object-position: center;
        border-radius: 3px;
        margin-right: 10px;
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