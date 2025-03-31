import styled from '@emotion/styled';
import { useState } from 'react';

export default function Fondue() {
    const [videoEnd, setVideoEnd] = useState(false);

    return (
        <StyledFondueWrapper>
            <video
                id="fondueVideo"
                src="/likebook-event/static/images/fondue1.mp4"
                autoPlay
                muted
                playsInline
                onEnded={() => setVideoEnd(true)}
            />
            {videoEnd && (
                <StyledButtonWrapper>
                    <button
                        type="button"
                        onClick={() => {
                            const video = document.getElementById(
                                'fondueVideo'
                            ) as HTMLVideoElement;
                            video?.play();
                            setVideoEnd(false);
                        }}
                    >
                        영상 다시보기
                    </button>
                    <a
                        href="https://www.instagram.com/lik3book"
                        target="_blank"
                    >
                        책 보러가기
                    </a>
                </StyledButtonWrapper>
            )}
        </StyledFondueWrapper>
    );
}

const StyledFondueWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-color: #000;
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    gap: 10px;
    position: absolute;
    bottom: 30px;
    left: 0;

    > button,
    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 10px;
        color: #fff;
    }
`;
