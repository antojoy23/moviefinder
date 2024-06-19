import styled from "styled-components";

export const StyledMultiRangeSelector = styled.div`
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

        // MutiRangeSelector component related css overrides
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
`;