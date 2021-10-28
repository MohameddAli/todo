import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faInbox,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons'
import SidebarButton from './sidebarButton'
import ProjectContextMenu from './projectContextMenu'
import styled from 'styled-components'
import ProjectIcon from '../utils/projectIcon'
import { AppReducerContext } from '../../app'

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectInput = styled.input`
  background: hsl(0, 0%, 15%);
  outline: 0;
  border: 0;
  padding: 0rem 0.4rem;
  margin-left: 1rem;
  border-bottom: 1px solid white;
  color: hsl(0, 0%, 85%);
`

const Sidebar = ({ filterState }) => {
  const [state, dispatch] = useContext(AppReducerContext)
  const { projects, labels } = state

  const [activeFilter, setActiveFilter] = filterState

  // QUERIES
  const allQuery = () => {
    setActiveFilter(prev => {
      return { ...prev, projects: [] }
    })
  }

  const projectQuery = project => {
    setActiveFilter(prev => {
      return { ...prev, projects: [project.id] }
    })
  }

  const activeQuery = project => {
    return activeFilter.projects.includes(project.id)
  }

  const inboxProject = projects.find(project => project.title === 'Inbox')

  return (
    <StyledSidebar className={'pt-3'}>
      <SidebarButton
        filterQuery={() => projectQuery(inboxProject)}
        active={() => activeQuery(inboxProject)}
      >
        <FontAwesomeIcon icon={faInbox} fixedWidth /> Inbox
      </SidebarButton>
      <SidebarButton filterQuery={() => allQuery()} active={() => false}>
        <FontAwesomeIcon icon={faCalendar} fixedWidth /> Today
      </SidebarButton>
      <SidebarButton filterQuery={() => allQuery()} active={() => false}>
        <FontAwesomeIcon icon={faCalendarAlt} fixedWidth /> Next 7 days
      </SidebarButton>
      <br />
      <SidebarButton
        filterQuery={() => allQuery()}
        active={() => !activeFilter.projects.length}
      >
        All
      </SidebarButton>
      <br />
      <SidebarButton
        filterQuery={() =>
          dispatch({
            type: 'CREATE_PROJECT',
            payload: { title: 'Test', color: '#f0f' }
          })
        }
        active={() => false}
      >
        Click to add test project
      </SidebarButton>
      <br />
      <ProjectSection filterState={filterState} />
      <br />

      {labels &&
        labels.map(label => (
          <div
            key={label}
            style={{ color: label.color ? label.color : '#999' }}
          >
            {label.title}
          </div>
        ))}
    </StyledSidebar>
  )
}

export default Sidebar

const ProjectSection = ({ filterState }) => {
  const [state, dispatch] = useContext(AppReducerContext)
  const { projects } = state

  const [activeFilter, setActiveFilter] = filterState

  // local UI state
  const [showNewProject, setShowNewProject] = useState(false)
  const [newProject, setNewProject] = useState('')

  // FIX THIS CRAP
  const projectQuery = project => {
    setActiveFilter(prev => {
      return { ...prev, projects: [project.id] }
    })
  }

  const activeQuery = project => {
    return activeFilter.projects.includes(project.id)
  }

  const inboxProject = projects.find(project => project.title === 'Inbox')

  const handleKeyEvent = e => {
    if (e.keyCode === 13) {
      const newProject = {
        title: e.target.value,
        color: '#666'
      }
      dispatch({ type: 'CREATE_PROJECT', payload: newProject })
      setNewProject('')
    }
  }

  const handleEditProject = project => {
    dispatch({ type: 'VIEW_PROJECT', payload: project.id })
  }

  return (
    <>
      {projects &&
        projects
          .filter(project => project !== inboxProject)
          .map(project => (
            <ProjectContextMenu
              key={project.id}
              projectId={project.id}
              handleEditProject={() => handleEditProject(project)}
              handleNewProject={() => setShowNewProject(true)}
            >
              <SidebarButton
                filterQuery={() => projectQuery(project)}
                active={() => activeQuery(project)}
                project={project}
              >
                <ProjectIcon {...project} flipped />
              </SidebarButton>
            </ProjectContextMenu>
          ))}
      {showNewProject && (
        <ProjectInput
          autoFocus
          value={newProject}
          show={showNewProject}
          onChange={e => setNewProject(e.target.value)}
          onKeyDown={handleKeyEvent}
          onBlur={() => setShowNewProject(false)}
        />
      )}
    </>
  )
}
