import styled from '@emotion/styled';

export const StyledCommonSection = styled.section`
    > div {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 100px 0;

        > h2 {
            font-size: 60px;
            font-weight: 700;
        }

        > p {
            padding: 20px 0 80px;
            font-size: 24px;
            font-weight: 300;
            color: #8e8e8e;
        }
    }

    @media screen and (max-width: 1400px) {
        > div {
            padding: 100px 16px;
        }
    }

    @media screen and (max-width: 1023px) {
        > div {
            padding: 80px 16px;

            > h2 {
                font-size: 36px;
            }

            > p {
                padding: 12px 0 40px;
                font-size: 16px;
            }
        }
    }
`;
