import styled from "styled-components";

export const StyledWatchlistPanel = styled.section`
    width: 400px;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: white;
    border-left: 1px solid rgb(221,221,221);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.20);
    z-index: 101;
    transform: translateX(100%);
    transition: width 300ms, transform 300ms ease;

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        width: 400px;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        width: 450px;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        width: 500px;
    }

    .watchlist-cards {
        height: calc(100% - 50px);
        overflow-y: auto;
    }

    .watchlist-header {
        font-size: 26px;
        height: 40px;
        color: rgb(38,38,38);
        font-weight: 700;
        padding: 10px;
        border-bottom: 1px solid rgb(221,221,221);
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: font-size 300ms, height 300ms;
        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
            cursor: pointer;
            box-shadow: 0 0 5px transparent;
            transition: box-shadow 300ms, width 300ms, height 300ms;
            &:hover {
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
            }

            // For Laptops and small screens
            @media (769px <= width <= 1024px) {
                width: 26px;
                height: 26px;
            }

            // For Desktops and large screens
            @media (1025px <= width <= 1200px) {
                width: 28px;
                height: 28px;
            }

            // For Extra large screens
            @media (width >= 1201px) {
                width: 30px;
                height: 30px;
            }
        }

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 26px;
            height: 40px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 28px;
            height: 45px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 30px;
            height: 50px;
        }
    }

    .empty-watchlist {
        margin-top: 10px;
        padding: 10px 30px;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        text-align: center;
        transition: font-size 300ms, padding 300ms;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 16px;
            padding: 10px 30px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 18px;
            padding: 10px 40px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 20px;
            padding: 10px 50px;
        }
    }

    .loading {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


export const StyledWatchlistPanelOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);;
    z-index: 100;
    opacity: 0;
    transition: opacity 300ms ease;
`;

export const StyledWatchlistPanelContainer = styled.div`
    // Watchlist panel transform transition
    &.watchlist-panel-enter ${StyledWatchlistPanel} {
        transform: translateX(100%);
    }
    &.watchlist-panel-enter-active ${StyledWatchlistPanel} {
        transform: translateX(0);
    }
    &.watchlist-panel-enter-done ${StyledWatchlistPanel} {
        transform: translateX(0);
    }
    &.watchlist-panel-exit ${StyledWatchlistPanel} {
        transform: translateX(0);
    }
    &.watchlist-panel-exit-active ${StyledWatchlistPanel} {
        transform: translateX(100%);
    }

    // Overlay opacity transition
    &.watchlist-panel-enter ${StyledWatchlistPanelOverlay} {
        opacity: 0;
    }
    &.watchlist-panel-enter-active ${StyledWatchlistPanelOverlay} {
        opacity: 1;
    }
    &.watchlist-panel-enter-done ${StyledWatchlistPanelOverlay} {
        opacity: 1;
    }
    &.watchlist-panel-exit ${StyledWatchlistPanelOverlay} {
        opacity: 1;
    }
    &.watchlist-panel-exit-active ${StyledWatchlistPanelOverlay} {
        opacity: 0;
    }
`;