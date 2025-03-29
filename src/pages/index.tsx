import styled from '@emotion/styled';
import CommonLayout from '@/components/CommonLayout';
import Image from 'next/image';
import Link from 'next/link';

import Girl from '@/static/images/girl.png';
import html2canvas from 'html2canvas';

export default function Company() {
    const handleDownloadWord = () => {
        const target = document.getElementById('content');
        if (!target) {
            return alert('결과 저장에 실패했습니다.');
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

    return (
        <CommonLayout>
            <StyledWrapper id="content">
                <h1>당신을 위한 한 줄 문장</h1>

                <StyledWordBox>
                    <Image src={Girl} alt="" />
                    <p>어두운 밤이 깊을수록 새벽은 가까워집니다</p>
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
    padding: 20px 20px 50px;
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
    padding: 90px 30px 80px;
    margin: 100px 0;
    border: 1px solid #ffb2b2;
    border-radius: 10px;
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
