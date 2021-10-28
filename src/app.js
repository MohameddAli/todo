import React, { useState, useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import TaskView from './components/taskview/taskView'

import { Container, Row, Col } from 'react-bootstrap'

import TaskDetailsModal from './components/modals/taskDetailsModal'
import ProjectDetailsModal from './components/modals/projectDetailsModal'
import styled from 'styled-components'
import { initState } from './data'

const StyledContainer = styled(Container)`
  @media (min-width: 992px) {
    max-width: 900px !important;
  }
`

const App = () => {
  const filterState = useState({
    projects: [],
    labels: []
  })

  const store = useReducer(appReducer, initState)

  return (
    <AppReducerContext.Provider value={store}>
      <Header />
      <StyledContainer style={{ height: 'calc(100% - 40px)' }}>
        <Row style={{ height: '100%' }} noGutters>
          <Col xs={3}>
            <Sidebar filterState={filterState} />
          </Col>
          <Col xs>
            <TaskView filterState={filterState} />
          </Col>
        </Row>
      </StyledContainer>
      <TaskDetailsModal />
      <ProjectDetailsModal />
    </AppReducerContext.Provider>
  )
}

export default App

// holy shit this can go in a separate file again!
// that's why it was becoming challening before
// if you are using useReducer(), you should NOT be using useState()

export const AppReducerContext = React.createContext()

// do i need to break this up? taskReducer, projectReducer, uiReducer
// if(taskReducer.types.contains(type))
const appReducer = (state, action) => {
  const { type, payload } = action
  console.log(type)

  switch (type) {
    case 'CREATE_TASK': {
      /**
       * payload: task
       */
      const { tasks } = state
      const payloadTask = payload
      const newTaskId = Math.max.apply(null, tasks.map(task => task.id)) + 1
      const newTask = {
        ...payloadTask,
        id: newTaskId
      }
      return {
        ...state,
        tasks: [...tasks, newTask]
      }
    }
    case 'VIEW_TASK': {
      /**
       * payload: task id
       */
      const taskId = payload
      return {
        ...state,
        tmId: taskId,
        tmOpen: true
      }
    }
    case 'EDIT_TASK': {
      /**
       * payload: task
       */
      const { tasks } = state
      const payloadTask = payload
      const newTaskList = tasks.map(t =>
        t.id === payloadTask.id ? payloadTask : t
      )
      return {
        ...state,
        tasks: newTaskList
      }
    }
    case 'DELETE_TASK': {
      /**
       * payload: task id
       */
      const { tasks } = state
      const removeId = payload
      const newTaskList = tasks.filter(t => t.id !== removeId)

      return {
        ...state,
        tasks: newTaskList
      }
    }
    case 'CLOSE_TASK_MODAL': {
      return {
        ...state,
        tmOpen: false
      }
    }
    case 'CREATE_PROJECT': {
      /**
       * payload: project
       */
      const { projects } = state
      const payloadProject = payload
      const newId = Math.max.apply(null, projects.map(p => p.id)) + 1
      const newProject = {
        ...payloadProject,
        id: newId
      }
      return {
        ...state,
        projects: [...projects, newProject]
      }
    }
    case 'VIEW_PROJECT': {
      /**
       * payload: project id
       */
      const projectId = payload
      return {
        ...state,
        pmId: projectId,
        pmOpen: true
      }
    }
    case 'EDIT_PROJECT': {
      /**
       * payload: project
       */
      const { projects } = state
      const payloadProject = payload
      const newTaskList = projects.map(p =>
        p.id === payloadProject.id ? payloadProject : p
      )
      return {
        ...state,
        projects: newTaskList
      }
    }
    case 'DELETE_PROJECT': {
      /**
       * payload: project id
       */
      const { projects } = state
      const removeId = payload
      const newList = projects.filter(p => p.id !== removeId)

      return {
        ...state,
        projects: newList
      }
    }
    case 'CLOSE_PROJECT_MODAL': {
      return {
        ...state,
        pmOpen: false
      }
    }
    case 'SET_FILTER': {
      return state
    }
    default: {
      return state
    }
  }
}
