import React, { useContext } from 'react'
import styled from 'styled-components'
import ProjectIcon from '../utils/projectIcon'
import { AppReducerContext } from '../../app'

const StyledListItem = styled.li`
  border-bottom: 1px solid hsl(0, 0%, 20%);
  padding: 0.5rem 0;
  color: hsl(0, 0%, 80%);
`

const StyledCompleteButton = styled.button`
  height: 16px;
  border-radius: 50%;
  background: none;
  border: 2px solid gray;
  margin-right: 6px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
  }
`

const StyledTitle = styled.span`
  margin-right: 5px;
`

const StyledDueDate = styled.span`
  margin-right: 10px;
  font-size: 0.75em;
  color: gray;
`

const StyledLabelRow = styled.ul`
  padding-left: 22px;
  list-style: none;
`

const StyledLabel = styled.li`
  display: inline;
  margin-right: 5px;
  font-size: 0.65em;
  color: gray;
  &:first-child {
    color: #4073ff;
  }

  &:nth-child(2) {
    color: #6accbc;
  }
`

const TaskListItem = ({ task, complete, projectList, onClick2 }) => {
  const { title, dueDate, labels } = task ? task : {}
  const [reducerState, dispatch] = useContext(AppReducerContext)
  const { projects } = reducerState
  const project = projects.find(project => project.id === task.project)

  const onClick = () => dispatch({ type: 'VIEW_TASK', payload: task.id })

  return (
    <StyledListItem>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <StyledCompleteButton onClick={() => complete(task)} />
          <StyledTitle onClick={onClick}>{title}</StyledTitle>
        </div>
        <div className="d-flex align-items-center" onClick={onClick}>
          <StyledDueDate>{dueDate}</StyledDueDate>
          <ProjectIcon {...project} sm />
        </div>
      </div>
      <StyledLabelRow onClick={onClick}>
        {labels &&
          labels.map(label => <StyledLabel key={label}>{label}</StyledLabel>)}
      </StyledLabelRow>
    </StyledListItem>
  )
}

export default TaskListItem
