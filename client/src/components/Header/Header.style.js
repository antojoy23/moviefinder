import styled from 'styled-components';

export const StyledHeader = styled.div`
    height: 80px;
    background-color: rgb(34,34,34);

    display: flex;
    align-items: center;
    padding: 0 20px;

    .title-search-bar {
        flex: 1;
        padding-right: 50px;
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
                right: 50px;
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
                width: 18px;
            }
        }
        input {
            border: 0;
            width: 100%;
            border-bottom: 1px solid transparent;
            color: white;
            font-size: 18px;
            padding: 8px 0 8px 30px;
            outline: 0;
            background-color: transparent;
            transition: border-color 150ms;

            &::placeholder {
                color: rgb(223, 223, 223);
            }

            &:focus {
                border-color: white;
                &::placeholder {
                    color: transparent;
                }
            }
        }
    }

    .filter-container {
        width: 500px;
        display: flex;

        .title-year-slider-container {
            width: 200px;
            display: flex;
            align-items: center;

            .range-input {
                border: 0;
                width: 26px;
                border-bottom: 1px solid transparent;
                color: white;
                font-size: 11px;
                padding: 8px 0;
                outline: 0;
                background-color: transparent;
                transition: border-color 150ms;

                &::placeholder {
                    color: rgb(223, 223, 223);
                }

                &:focus {
                    border-color: white;
                    &::placeholder {
                        color: transparent;
                    }
                }
            }

            .multi-range-slider {
                flex: 1;
                border: none;
                box-shadow: none;
                margin: 0 6px;

                .bar-left {
                    box-shadow: none;
                }

                .bar-right {
                    box-shadow: none;
                }

                .bar-inner {
                    border: none;
                    box-shadow: none;
                    background-color: rgb(0, 120, 243);
                }

                .thumb {
                    &::before {
                        border: none;
                        box-shadow: none;
                        margin: -6px -12px;
                    }

                    .caption {
                        display: none;
                    }
                }
            }
        }

        .title-type-label {
            color: white;
            font-size: 12px;
            margin-bottom: 5px;
        }

        .title-type-options {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;
            font-size: 12px;

            div {
                display: flex;
                align-items: center;
                input {
                    margin-right: 5px;
                }
                input, label {
                    cursor: pointer;
                }
            }
        }
    }
`;