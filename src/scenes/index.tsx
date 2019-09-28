import * as React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo/Logo'
import Search from '../components/Search/Search'

const Page = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`

export default () => <Page>
    <Logo />
    <Search />
</Page>
