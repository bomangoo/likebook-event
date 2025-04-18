import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CommonLayout from '@/components/CommonLayout';
import Link from 'next/link';
import html2canvas from 'html2canvas';

import { words } from '@/contents/words';

export default function Company() {
    const [randomWord, setRandomWord] = useState('');

    const handleDownloadWord = () => {
        const target = document.getElementById('content');
        if (!target) {
            return alert(
                '문장 저장에 실패했습니다. 라이크북 관계자에 문의해주세요!'
            );
        }
        html2canvas(target).then((canvas) => {
            const link = document.createElement('a');
            document.body.appendChild(link);
            link.href = canvas.toDataURL('image/png');
            link.download = 'result.png';
            link.click();
            document.body.removeChild(link);
        });
    };

    useEffect(() => {
        const getRandomWords = () => {
            const randomIndex = Math.floor(Math.random() * words.length);
            setRandomWord(words[randomIndex]);
        };

        getRandomWords();
    }, []);

    return (
        <CommonLayout>
            <StyledWrapper id="content">
                <h1>당신을 위한 한 줄 문장</h1>

                <StyledWordBox>
                    <img src="static/images/girl.png" alt="" />
                    {randomWord && <p>{randomWord}</p>}
                </StyledWordBox>
            </StyledWrapper>

            <StyledButtonWrapper>
                <button type="button" onClick={() => handleDownloadWord()}>
                    문장 저장하기
                </button>

                <Link href={'/fondue'}>퐁듀 맛보기</Link>
            </StyledButtonWrapper>
        </CommonLayout>
    );
}

const StyledWrapper = styled.div`
    padding: 20px 20px 30%;
    background-color: #ffe8ec;

    > h1 {
        padding: 20px 0;
        font-size: 28px;
        color: #555;
    }
`;

const StyledWordBox = styled.div`
    position: relative;
    width: 100%;
    padding: 85px 30px 80px;
    margin: 100px 0;
    background-color: #fff5f5;
    border: 1px solid #ffb2b2;
    border-radius: 10px;
    white-space: pre-wrap;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);

    > img {
        width: 176px;
        height: 188px;
        object-fit: contain;
        position: absolute;
        top: -110px;
        left: 0;
    }

    > p {
        font-family: 'Grandiflora One', cursive;
        color: #000;
        word-break: keep-all;
        font-weight: bold;
    }
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    position: absolute;
    bottom: 0px;
    padding: 20px;
    margin-bottom: 30px;

    > button,
    > a {
        display: block;
        padding: 10px;
        border: 1px solid #666;
        border-radius: 10px;
    }

    > button {
        background-color: #fff5f5;
    }

    > a {
        background-color: #a84141;
        color: #fff;
        border-color: #a84141;
    }
`;
