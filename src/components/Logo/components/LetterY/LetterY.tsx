import * as React from 'react'
import styled from 'styled-components'

const SecondPart = styled.div`
    height: 35px;
    width: 35px;
`
const ThirdPart = styled.div`
    height: 117.5px;
    width: 35px;
    align-self: end;
`
export default () => (
<React.Fragment>
 <SecondPart/>
 <ThirdPart/>
</React.Fragment>
)