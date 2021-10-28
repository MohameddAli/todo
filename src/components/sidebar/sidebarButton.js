import React from 'react'
// import ProjectIcon from './projectIcon'
import styled from 'styled-components'

const SidebarButton = ({ children, filterQuery, active }) => {
  const onClick = () => filterQuery()

  return (
    <StyledSidebarButton
      className={active() ? 'active' : ''}
      onClick={onClick}
      onContextMenu={e => e.preventDefault()}
    >
      {children}
    </StyledSidebarButton>
  )
}

export default SidebarButton

const StyledSidebarButton = styled.button`
  &,
  &:active,
  &:focus {
    background: none;
    border: 0;
    text-align: left;
    margin: 0;
    line-height: 2;
    border-radius: 3px;
    color: hsl(0, 0%, 80%);
    outline: none !important;
    box-shadow: none !important;
    transition: background 0.2s ease;
    width: 100%;
  }

  &:hover,
  &.active {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: white;
    font-weight: 500;
  }
`
