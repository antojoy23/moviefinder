import styled, { css } from 'styled-components';

const CommonStyles = css`
    flex: 1;
`;

export const StyledDetailsPanelEmpty = styled.main`
    ${CommonStyles}
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledDetailsLoadingPanel = styled.article`
    ${CommonStyles}
`

export const StyledDetailsPanel = styled.article`
    ${CommonStyles}
`

export const StyledTitleSection = styled.section`
    display: flex;
    position: relative;
    margin-left: 25px;
    padding: 20px 0;
    border-bottom: 1px solid rgb(221,221,221);

    .watchlist-container {
        position: absolute;
        display: flex;
        right: 30px;
        padding: 10px 15px;
        border: 1px solid #000;
        border-radius: 5px;
        cursor: pointer;

        img {
            width: 16px;
            margin-right: 10px;
        }
    }

    .details-image-container {
        width:160px;
        height: 240px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 3px;
        }
    }

    article {
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 2px 15px;
        gap: 10px;

        h2 {
            font-size: 26px;
        }

        .title-meta {
            display: flex;
            align-items: center;
            div {
                flex-shrink: 0;
                font-size: 11px;
                font-weight: 500;
                border: 1px solid #000;
                border-radius: 3px;
                padding: 3px 6px;
                margin-right: 10px;
            }
            p {
                color: rgb(78, 78, 78);
                font-size: 14px;
            }
            span {
                margin-left: 5px;
                margin-right: 5px;
            }
        }

        .title-actors {
            font-size: 14px;
        }

    }
`;

export const StyledPlotSection = styled.section`
    margin-left: 25px;
    padding: 15px 0;
    border-bottom: 1px solid rgb(221,221,221);
    p {
        padding-right: 40px;
        font-size: 15px;
        line-height: 20px;
    }
`;

export const StyledRatingsSection = styled.section`
    display: flex;
    justify-content: center;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 45px;
        margin: 20px 0;
        gap: 10px;

        .title-rating-value {
            font-size: 14px
        }

        .title-rating-source {
            font-size: 11px;
        }
    }

    div:nth-child(2) {
        border-left: 1px solid #000;
        border-right: 1px solid #000;
    }
`;
