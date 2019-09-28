import * as React from 'react'
import styled from 'styled-components'
import LetterE from './components/LetterE/LetterE'
import LetterH from './components/LetterH/LetterH'
import LetterP from './components/LetterP/LetterP'
import LetterY from './components/LetterY/LetterY'

const LogoWrapper = styled.div`
    display: flex;
    width: fit-content;
`;

const LetterWrapper = styled.div`
    height: ${(props: { height?: string}) =>( props.height || '200px')};
    background-color: #CC3534;
    border: 35px solid #CC3534;
    display: flex;
    align-items: center;
    margin-right: -35px;

    > * {
        background-color: white;
    }
`;

const LetterInitialPart = styled.div`
    width: 60px;
    height: 100%;
    background-color: white;
`

const Letter = ({ LetterRest, height }: {LetterRest: React.FunctionComponent, height?: string}) => (
    <LetterWrapper height={height}>
        <LetterInitialPart />
        <LetterRest />
    </LetterWrapper>
)

export default () => 
  <LogoWrapper>
    <Letter LetterRest={LetterH} />
    <Letter LetterRest={LetterY} />
    <Letter LetterRest={LetterP} height="235px" />
    <Letter LetterRest={LetterE} />
  </LogoWrapper>