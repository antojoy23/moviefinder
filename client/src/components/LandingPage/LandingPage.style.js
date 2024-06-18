import styled, { css } from 'styled-components';

const withBgStyle = css`
    background-image: url(${props => props.$bgImage});
    background-color: rgba(0, 0, 0, 0.5);
`

export const StyledLandingPage = styled.main`
    background-image: none;
    background-color: rgba(0, 0, 0, 1);
    /* When the background image has been loaded add the styles */
    ${props => props.$isImageLoaded && withBgStyle}
    height: 100vh;
    background-blend-mode: overlay;
    background-size: cover;
    background-position: center;
    transition: background-color 300ms ease-in;

    display: flex;
    justify-content: center;
`;

export const StyledLandingSection = styled.section`

    width: 600px;
    margin: 10% 20px;
    .main-heading {
        color: white;
        text-align: center;
        margin-bottom: 20px;
        font-size: 48px;
        font-weight: 700;
    }
    .title-search-bar {
        display: flex;
        align-items: center;
        position: relative;
        border: 1px solid white;
        border-radius: 18px;
        /* Handling Input field autofill bg color */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active{
            -webkit-background-clip: text;
            -webkit-text-fill-color: white;
            caret-color: white;
            transition: background-color 1s ease-in-out;
        }
        .search-icon-container {
            display: flex;
            position: absolute;
            right: 10px;
            cursor: pointer;
            img {
                width: 18px;
            }
        }
        input {
            border: 0;
            flex: 1;
            border: none;
            color: white;
            font-size: 18px;
            padding: 10px 40px 10px 15px;
            outline: 0;
            background-color: transparent;

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

    .title-type-group {
        color: white;
        margin-top: 20px;

        .title-type-options {
            display: flex;
            font-size: 14px;
            justify-content: center;
            align-items: center;
            gap: 20px;

            div {
                display: flex;
                align-items: center;
            }

            input {
                margin-right: 5px;
            }
        }
    }
`;