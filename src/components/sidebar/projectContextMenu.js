import React from 'react'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'
import styled from 'styled-components'

const StyledContextMenu = styled(ContextMenu)`
  background: white;
  padding: 0.2rem 1rem;
  color: black;
  opacity: 1;
  z-index: 1;
  font-weight: 400;
  cursor: pointer;
`

const ProjectContextMenu = ({
  children,
  projectId,
  handleEditProject,
  handleNewProject
}) => {
  return (
    <>
      <ContextMenuTrigger id={'context' + projectId} holdToDisplay={1000}>
        {children}
      </ContextMenuTrigger>
      <StyledContextMenu id={'context' + projectId}>
        <MenuItem
          onClick={e => {
            e.stopPropagation()
            handleEditProject()
          }}
        >
          Edit project
        </MenuItem>
        <MenuItem divider />
        <MenuItem
          onClick={e => {
            e.stopPropagation()
            handleNewProject()
          }}
        >
          Add new project
        </MenuItem>
      </StyledContextMenu>
    </>
  )
}

export default ProjectContextMenu
