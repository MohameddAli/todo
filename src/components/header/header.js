import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const StyledHeader = styled.div`
  background: hsl(0, 0%, 20%);
  display: flex;
  color: hsl(0, 0%, 80%);
  box-shadow: 0 2px 5px hsla(0, 0%, 0%, 30%);
`

const HeaderItem = styled.li`
  padding: 0.5rem 0.5rem;
  &:hover {
    background: hsl(0, 0%, 30%);
  }
`

const StyledContainer = styled(Container)`
  @media (min-width: 992px) {
    max-width: 900px !important;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <span>Todoist</span>
        <ul className="d-flex list-inline m-0">
          <HeaderItem>One</HeaderItem>
          <HeaderItem>Two</HeaderItem>
          <HeaderItem>Three</HeaderItem>
        </ul>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
