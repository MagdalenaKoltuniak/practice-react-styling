import styled from "styled-components";

const CardDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    width: ${({ $width }) => $width || 'auto'};
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 4px;
`

const CardImgItem = styled.img`
    vertical-align: middle;
    border-style: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`
const CardBodyDiv = styled.div`
    flex: 1 1 auto;
    min-height: 1px;
    padding: 20px;
`
const CardTitleHeading = styled.h5`
    margin-bottom: 12px;
    font-size: 20px;
`
const CardTextParagraph = styled.p`
    margin-top: 0;
    margin-bottom: 16px;
`

export {CardDiv, CardImgItem, CardBodyDiv, CardTitleHeading, CardTextParagraph}