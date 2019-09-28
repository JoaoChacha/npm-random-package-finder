import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: end;
    height: 200px;
    background-color: #CC3534 !important;
`

const SecondPart = styled.div`
    height: 35px;
    width: 35px;
    background-color: white;
`
const ForthPart = styled.div`
    height: 200px;
    width: 35px;
    background-color: white;
    align-self: end;
`
export default () => (
    <Wrapper>
        <SecondPart/>
        <SecondPart/>
        <SecondPart/>
    </Wrapper>
)