import styled, { css } from 'styled-components';

const CommonStyles = css`
    flex: 1;
`;

export const StyledDetailsPanelEmpty = styled.main`
    ${CommonStyles}
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    transition: font-size 300ms;

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        font-size: 16px;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        font-size: 18px;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        font-size: 20px;
    }
`

export const StyledDetailsLoadingPanel = styled.article`
    ${CommonStyles}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    gap: 20px;
    transition: font-size 300ms, gap 300ms;

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        font-size: 16px;
        gap: 20px;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        font-size: 18px;
        gap: 22px;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        font-size: 20px;
        gap: 24px;
    }

`

export const StyledDetailsErrorPanel = styled.article`
    ${CommonStyles}
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: padding 300ms, gap 300ms;
    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        padding: 0 50px;
        gap: 5px;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        padding: 0 60px;
        gap: 8px;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        padding: 0 80px;
        gap: 10px;
    }

    h2 {
        margin-bottom: 10px;
        font-size: 24px;
        transition: font-size 300ms, margin-bottom 300ms;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            margin-bottom: 10px;
            font-size: 24px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            margin-bottom: 12px;
            font-size: 26px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            margin-bottom: 14px;
            font-size: 28px;
        }
    }

    h3 {
        font-size: 20px;
        transition: font-size 300ms;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 20px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 22px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 24px;
        }
    }

    p {
        text-align: center;
        font-size: 16px;
        transition: font-size 300ms;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            font-size: 14px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            font-size: 18px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            font-size: 20px;
        }
    }
    img {
        width: 50px;
        transition: width 300ms;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            width: 50px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            width: 60px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            width: 80px;
        }
    }
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
    transition: all 300ms;

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        margin-left: 25px;
        padding: 20px 0;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        margin-left: 25px;
        padding: 25px 0;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        margin-left: 30px;
        padding: 30px 0;
    }

    .watchlist-container {
        position: absolute;
        display: flex;
        align-items: center;
        right: 30px;
        padding: 10px 15px;
        border: 1px solid #000;
        border-radius: 5px;
        cursor: pointer;
        transition: all 300ms;
        ${props => props.$inWatchlist && css`
            background-color: rgb(0, 120, 243);
            color: white;
            border-color: rgb(0, 120, 243);
            svg {
                fill: white;
            }
        `};

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            right: 30px;
            padding: 10px 15px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            right: 35px;
            padding: 10px 20px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            right: 50px;
            padding: 15px 25px;
        }

        p {
            font-size: 14px;
            transition: font-size 300ms;

            // For Laptops and small screens
            @media (769px <= width <= 1024px) {
                font-size: 14px;
            }

            // For Desktops and large screens
            @media (1025px <= width <= 1200px) {
                font-size: 16px;
            }

            // For Extra large screens
            @media (width >= 1201px) {
                font-size: 18px;
            }
        }

        svg {
            width: 18px;
            height: 18px;
            margin-right: 8px;
            transition: all 300ms;

            // For Laptops and small screens
            @media (769px <= width <= 1024px) {
                width: 18px;
                height: 18px;
                margin-right: 8px;
            }

            // For Desktops and large screens
            @media (1025px <= width <= 1200px) {
                width: 20px;
                height: 20px;
                margin-right: 10px;
            }

            // For Extra large screens
            @media (width >= 1201px) {
                width: 22px;
                height: 22px;
                margin-right: 12px;
            }
        }
    }

    .details-image-container {
        width:160px;
        height: 240px;
        flex-shrink: 0;
        background: rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        transition: all 300ms;
        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            width:160px;
            height: 240px;
            border-radius: 3px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            width:180px;
            height: 280px;
            border-radius: 5px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            width:240px;
            height: 360px;
            border-radius: 5px;
        }

        svg {
            width: 60px;
            height: 60px;
            color: rgba(0, 0, 0, 0.3);
            transition: all 300ms;
            // For Laptops and small screens
            @media (769px <= width <= 1024px) {
                width: 60px;
                height: 60px;
            }

            // For Desktops and large screens
            @media (1025px <= width <= 1200px) {
                width: 80px;
                height: 80px;
            }

            // For Extra large screens
            @media (width >= 1201px) {
                width: 100px;
                height: 100px;
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 3px;
            transition: all 300ms;
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

    article {
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 2px 15px;
        gap: 10px;
        transition: all 300ms;

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            padding: 2px 15px;
            gap: 10px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            padding: 3px 18px;
            gap: 15px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            padding: 4px 20px;
            gap: 20px;
        }

        h2 {
            font-size: 26px;
            transition: all 300ms;

            // For Laptops and small screens
            @media (769px <= width <= 1024px) {
                font-size: 26px;
            }

            // For Desktops and large screens
            @media (1025px <= width <= 1200px) {
                font-size: 28px;
            }

            // For Extra large screens
            @media (width >= 1201px) {
                font-size: 36px;
            }
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
                transition: all 300ms;
                // For Laptops and small screens
                @media (769px <= width <= 1024px) {
                    font-size: 11px;
                    border-radius: 3px;
                    padding: 3px 6px;
                    margin-right: 10px;
                }

                // For Desktops and large screens
                @media (1025px <= width <= 1200px) {
                    font-size: 12px;
                    border-radius: 5px;
                    padding: 4px 8px;
                    margin-right: 10px;
                }

                // For Extra large screens
                @media (width >= 1201px) {
                    font-size: 16px;
                    border-radius: 5px;
                    padding: 4px 8px;
                    margin-right: 10px;
                }
            }
            p {
                color: rgb(78, 78, 78);
                font-size: 14px;
                transition: all 300ms;
                // For Laptops and small screens
                @media (769px <= width <= 1024px) {
                    font-size: 14px;
                }

                // For Desktops and large screens
                @media (1025px <= width <= 1200px) {
                    font-size: 16px;
                }

                // For Extra large screens
                @media (width >= 1201px) {
                    font-size: 18px;
                }
            }
            span {
                margin-left: 5px;
                margin-right: 5px;
                transition: all 300ms;
                // For Laptops and small screens
                @media (769px <= width <= 1024px) {
                    margin-left: 5px;
                    margin-right: 5px;
                }

                // For Desktops and large screens
                @media (1025px <= width <= 1200px) {
                    margin-left: 6px;
                    margin-right: 6px;
                }

                // For Extra large screens
                @media (width >= 1201px) {
                    margin-left: 8px;
                    margin-right: 8px;
                }
            }
        }

        .title-actors {
            font-size: 14px;
            transition: font-size 300ms;

            // For Laptops and small screens
            @media (769px <= width <= 1024px) {
            font-size: 14px;
            }

            // For Desktops and large screens
            @media (1025px <= width <= 1200px) {
                font-size: 16px;
            }

            // For Extra large screens
            @media (width >= 1201px) {
                font-size: 18px;
            }
        }
    }
`;

export const StyledPlotSection = styled.section`
    margin-left: 25px;
    padding: 15px 0;
    border-bottom: 1px solid rgb(221,221,221);
    transition: all 300ms;

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        margin-left: 25px;
        padding: 15px 0;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        margin-left: 25px;
        padding: 15px 0;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        margin-left: 30px;
        padding: 20px 0;
    }

    p {
        padding-right: 40px;
        font-size: 15px;
        line-height: 20px;
        transition: all 300ms;

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            padding-right: 40px;
            font-size: 15px;
            line-height: 20px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            padding-right: 60px;
            font-size: 18px;
            line-height: 26px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            padding-right: 80px;
            font-size: 20px;
            line-height: 30px;
        }
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
        transition: all 300ms;

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            padding: 0 45px;
            margin: 20px 0;
            gap: 10px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            padding: 0 50px;
            margin: 30px 0;
            gap: 12px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            padding: 0 60px;
            margin: 40px 0;
            gap: 15px;
        }

        .title-rating-value {
            font-size: 14px;
            transition: font-size 300ms;
            // For Laptops and small screens
            @media (769px <= width <= 1024px) {
                font-size: 14px;
            }

            // For Desktops and large screens
            @media (1025px <= width <= 1200px) {
                font-size: 18px;
            }

            // For Extra large screens
            @media (width >= 1201px) {
                font-size: 20px;
            }
        }

        .title-rating-source {
            font-size: 12px;
            transition: font-size 300ms;
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
    }

    div:nth-child(2) {
        border-left: 1px solid #000;
        border-right: 1px solid #000;
    }
`;
