import styled from '@emotion/styled';
import { ReactNode } from 'react';

export default function CommonLayout(props: { children: ReactNode }) {
    const { children } = props;

    return <StyledCommomWrapper>{children}</StyledCommomWrapper>;
}

const StyledCommomWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    width: 100%;
    text-align: center;
    background-color: #ffe8ec;
`;
