import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import Body from './scenes'

const ResetCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
    }
    
    body {
        height: 100%;
        width: 100%;
    }
    
    #root {
        max-width: 1280px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const App = () => (
  <React.Fragment>
    <ResetCSS />
    <Body />
  </React.Fragment>
)

export default App
