import * as React from 'react'
import styled from 'styled-components'

const SecondPart = styled.div`
    height: 35px;
    width: 35px;
`
const ThirdPart = styled.div`
    height: 100%;
    width: 35px;
`
export default () => (
<React.Fragment>
 <SecondPart/>
 <ThirdPart/>
</React.Fragment>
)