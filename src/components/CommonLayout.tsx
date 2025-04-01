import styled from '@emotion/styled';
import { ReactNode } from 'react';

export default function CommonLayout(props: { children: ReactNode }) {
    const { children } = props;

    return (
        <StyledCommomWrapper>
            <div>{children}</div>
        </StyledCommomWrapper>
    );
}

const StyledCommomWrapper = styled.main`
    background-color: #ffe8ec;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 900px;
        min-height: 100vh;
        position: relative;
        margin: 0 auto;
        text-align: center;
    }
`;
