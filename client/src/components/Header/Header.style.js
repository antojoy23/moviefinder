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
        width: 250px;

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