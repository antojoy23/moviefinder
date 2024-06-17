import styled from 'styled-components';

export const StyledHeader = styled.div`
    height: 80px;
    background-color: rgb(34,34,34);

    display: flex;
    align-items: center;
    padding: 0 10px;
    transition: all 300ms;

    // For Laptops and small screens
    @media (769px <= width <= 1024px) {
        height: 80px;
        padding: 0 10px;
    }

    // For Desktops and large screens
    @media (1025px <= width <= 1200px) {
        height: 90px;
        padding: 0 15px;
    }

    // For Extra large screens
    @media (width >= 1201px) {
        height: 100px;
        padding: 0 20px;
    }

    .title-search-bar {
        flex: 1;
        padding-right: 30px;
        position: relative;
        display: flex;
        align-items: center;

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active{
            -webkit-background-clip: text;
            -webkit-text-fill-color: white;
            caret-color: white;
            transition: background-color 1s ease-in-out 0s;
        }

        &:focus-within {
            .search-icon-container {
                right: 30px;
                cursor: pointer;
                pointer-events: auto;
            }

            input {
                padding-left: 0;
                padding-right: 30px;
            }
        }
        .search-icon-container {
            position: absolute;
            right: calc(100% - 20px);
            pointer-events: none;
            z-index: 20;
            transition: right 300ms;
            img {
                width: 14px;
                transition: width 300ms;
                // For Laptops and small screens
                @media (769px <= width <= 1024px) {
                    width: 14px;
                }

                // For Desktops and large screens
                @media (1025px <= width <= 1200px) {
                    width: 16px;
                }

                // For Extra large screens
                @media (width >= 1201px) {
                    width: 18px;
                }
            }
        }
        input {
            border: 0;
            width: 100%;
            border-bottom: 1px solid transparent;
            color: white;
            font-size: 14px;
            padding: 8px 0 8px 30px;
            outline: 0;
            background-color: transparent;
            transition: border-color 150ms, font-size 300ms;

            &::placeholder {
                color: rgb(223, 223, 223);
            }

            &:focus {
                border-color: white;
                &::placeholder {
                    color: transparent;
                }
            }

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
        }
    }

    .filter-container {
        width: 460px;
        display: flex;
        gap: 15px;
        transition: all 300ms;

        // For Laptops and small screens
        @media (769px <= width <= 1024px) {
            width: 460px;
            gap: 16px;
        }

        // For Desktops and large screens
        @media (1025px <= width <= 1200px) {
            width: 500px;
            gap: 20px;
        }

        // For Extra large screens
        @media (width >= 1201px) {
            width: 600px;
            gap: 24px;
        }

        .title-year-filter {
            flex: 1;

            .title-year-slider-label {
                color: white;
                font-size: 12px;
                margin-bottom: 2px;
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

            .title-year-slider-container {
                display: flex;
                align-items: center;

                .range-input {
                    border: 0;
                    width: 26px;
                    border-bottom: 1px solid transparent;
                    color: white;
                    font-size: 12px;
                    padding: 4px 0;
                    outline: 0;
                    background-color: transparent;
                    transition: border-color 150ms, font-size 300ms, width 300ms;

                    &::placeholder {
                        color: rgb(223, 223, 223);
                    }

                    &:focus {
                        border-color: white;
                        &::placeholder {
                            color: transparent;
                        }
                    }

                    // For Laptops and small screens
                    @media (769px <= width <= 1024px) {
                        width: 26px;
                        font-size: 12px;
                    }

                    // For Desktops and large screens
                    @media (1025px <= width <= 1200px) {
                        width: 32px;
                        font-size: 14px;
                    }

                    // For Extra large screens
                    @media (width >= 1201px) {
                        width: 36px;
                        font-size: 16px;
                    }
                }

                .multi-range-slider {
                    flex: 1;
                    border: none;
                    box-shadow: none;
                    margin: 0 6px;
                    padding: 5px 10px;
                    margin-bottom: 1px; // added here to match the height since there will be 1px border for the input text on both sides of the range slider
                    transition: padding 300ms;

                    .bar-left, .bar-right, .bar-inner {
                        padding: 2px 0;
                        box-shadow: none;
                        // For Laptops and small screens
                        @media (769px <= width <= 1024px) {
                            padding: 2px 0;
                        }

                        // For Desktops and large screens
                        @media (1025px <= width <= 1200px) {
                            padding: 3px 0;
                        }

                        // For Extra large screens
                        @media (width >= 1201px) {
                            padding: 4px 0;
                        }
                    }

                    .bar-inner {
                        border: none;
                        height: 4px;
                        box-shadow: none;
                        background-color: rgb(0, 120, 243);
                        transition: height 300ms;
                        // For Laptops and small screens
                        @media (769px <= width <= 1024px) {
                            height: 4px;
                        }

                        // For Desktops and large screens
                        @media (1025px <= width <= 1200px) {
                            height: 5px;
                        }

                        // For Extra large screens
                        @media (width >= 1201px) {
                            height: 6px;
                        }
                    }

                    .thumb {
                        &::before {
                            border-color: rgb(77, 77, 77);
                            box-shadow: none;
                            margin: -5px -8px;
                            width: 12px;
                            height: 12px;
                            transition: width 300ms, height 300ms;

                            // For Laptops and small screens
                            @media (769px <= width <= 1024px) {
                                width: 12px;
                                height: 12px;
                            }

                            // For Desktops and large screens
                            @media (1025px <= width <= 1200px) {
                                width: 14px;
                                height: 14px;
                            }

                            // For Extra large screens
                            @media (width >= 1201px) {
                                width: 16px;
                                height: 16px;
                            }
                        }

                        .caption {
                            display: none;
                        }
                    }
                }
            }
        }

        .title-type-group {
            flex: 1;
            .title-type-label {
                color: white;
                font-size: 12px;
                margin-bottom: 5px;
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

            .title-type-options {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: white;
                font-size: 12px;
                gap: 5px;
                transition: font-size 300ms, gap 300ms;

                // For Laptops and small screens
                @media (769px <= width <= 1024px) {
                    font-size: 12px;
                    gap: 5px;
                }

                // For Desktops and large screens
                @media (1025px <= width <= 1200px) {
                    font-size: 14px;
                    gap: 8px;
                }

                // For Extra large screens
                @media (width >= 1201px) {
                    font-size: 16px;
                    gap: 10px;
                }

                div {
                    display: flex;
                    align-items: center;
                    input {
                        margin-right: 3px;
                        width: 12px;
                        transition: margin-right 300ms, width 300ms;
                        // For Laptops and small screens
                        @media (769px <= width <= 1024px) {
                            margin-right: 3px;
                            width: 12px;
                        }

                        // For Desktops and large screens
                        @media (1025px <= width <= 1200px) {
                            margin-right: 4px;
                            width: 14px;
                        }

                        // For Extra large screens
                        @media (width >= 1201px) {
                            margin-right: 5px;
                            width: 16px;
                        }
                    }
                    input, label {
                        cursor: pointer;
                    }
                }
            }
        }

    }
`;