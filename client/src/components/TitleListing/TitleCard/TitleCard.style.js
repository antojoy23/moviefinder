import styled, { css } from 'styled-components';

export const StyledTitleCard = styled.article`
    display: flex;
    align-items: center;
    padding: 30px 30px;
    border-bottom: 1px solid rgb(221,221,221);
    position: relative;
    cursor: pointer;
    ${props => props.$isSelected && css`
        box-shadow: inset 1px 0 2px rgb(0, 0, 0, 0.02);
        background-color: rgba(0, 0, 0, 0.1);
    `}

    ${props => props.$forWatchlist && css`
        cursor: default;
        .title-meta {
            padding-right: 60px;
        }
    `}

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
        transition: all 300ms;

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            width: 50px;
            height: 50px;
            border-radius: 3px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            width: 60px;
            height: 60px;
            border-radius: 4px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            width: 80px;
            height: 80px;
            border-radius: 5px;
        }

        svg {
            color: rgba(0, 0, 0, 0.3);
        }

        .poster-image {
            width: 100%;
            height: 100%;
            border-radius: 3px;
            object-fit: cover;
            object-position: center;

            // For Laptops and small screens
            @media (769px <= width <= 1024px) {
                border-radius: 3px;
            }

            // For Desktops and large screens
            @media (1025px <= width <= 1200px) {
                border-radius: 4px;
            }

            // For Extra large screens
            @media (width >= 1201px) {
                border-radius: 5px;
            }
        }
    }

    .title {
        font-size: 14px;
        margin-bottom: 6px;
        line-height: 18px;
        color: rgb(58, 58, 58);
        transition: all 300ms;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 14px;
            margin-bottom: 6px;
            line-height: 18px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 16px;
            margin-bottom: 6px;
            line-height: 20px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 18px;
            margin-bottom: 8px;
            line-height: 20px;
        }
    }

    .year {
        font-size: 12px;
        color: rgb(117,117,117);
        transition: all 300ms;

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 12px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 14px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 16px;
        }
    }

    .watchlist-remove {
        display: flex;
        position: absolute;
        right: 10px;
        cursor: pointer;
        div {
            padding: 6px 10px;
            font-size: 12px;
            border: 1px solid #000;
            border-radius: 5px;
            transition: background-color 300ms, color 300ms, border-color 300ms;
            transition: padding 300ms, font-size 300ms;
            &:hover {
                color: white;
                background-color: rgb(201, 29, 18);
                border-color: rgb(201, 29, 18);
            }

            // For Laptops and small screens
            @media (769px <= width <= 1024px) {
                padding: 6px 10px;
                font-size: 12px;
            }

            // For Desktops and large screens
            @media (1025px <= width <= 1200px) {
                padding: 7px 11px;
                font-size: 14px;
            }

            // For Extra large screens
            @media (width >= 1201px) {
                padding: 8px 12px;
                font-size: 16px;
            }
        }

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            right: 10px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            right: 20px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            right: 30px;
        }
    }

`;