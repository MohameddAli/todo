import React, { useState, useEffect, useContext } from 'react'
import styles from './taskView.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import TaskListItem from './taskListItem'
import { AppReducerContext } from '../../app'

const TaskView = ({ filterState }) => {
  const [state, dispatch] = useContext(AppReducerContext)
  const { tasks, projects } = state

  const [activeFilter] = filterState

  // local state for handling the input
  const [taskName, setTaskName] = useState('')

  // based on current filter
  const [currentTasks, setCurrentTasks] = useState(tasks)

  // keeps the currentTasks updated with the activeFilter
  useEffect(() => {
    const filteredTasks = tasks.filter(
      task =>
        !activeFilter.projects.length ||
        activeFilter.projects.includes(task.project)
    )
    setCurrentTasks(filteredTasks)
  }, [activeFilter, tasks])

  /**
   * handleCompleteTask - dispatch(DELETE_TASK, taskId)
   * handleEnterKey - dispatch(CREATE_TASK, task)
   */
  const handleEnterKey = e => {
    if (e.keyCode === 13) {
      const newTask = {
        title: e.target.value,
        labels: [],
        project: 0
      }
      dispatch({ type: 'CREATE_TASK', payload: newTask })
      setTaskName('')
    }
  }

  const handleCompleteTask = remove => {
    dispatch({ type: 'DELETE_TASK', payload: remove.id })
  }

  return (
    <div className={styles.taskView + ' p-3'}>
      <div className="container">
        <TitleBox projectList={projects} activeFilter={activeFilter} />
        <ul className={styles.taskList}>
          {currentTasks &&
            currentTasks.map(task => (
              <TaskListItem
                key={task.id}
                task={task}
                complete={handleCompleteTask}
              />
            ))}
        </ul>

        <div className="input-group">
          <span className={styles.addon + ' input-group-text'}>+</span>
          <input
            type="text"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
            onKeyDown={handleEnterKey}
            className={styles.input + ' form-control'}
            placeholder="Add task"
          />
        </div>
      </div>
    </div>
  )
}

export default TaskView

const TitleBox = ({ projectList, activeFilter }) => {
  // util function for getting name of page based on active filter
  const getTitleFromFilter = () => {
    const title = projectList
      .filter(project => activeFilter.projects.includes(project.id))
      .map(project => project.title)
      .join(' ')
    return title
  }
  return (
    <div className={'d-flex justify-content-between ' + styles.titleBox}>
      <h4>{!activeFilter.projects.length ? 'All' : getTitleFromFilter()}</h4>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon={faComment} fixedWidth className="mr-3" />
        <FontAwesomeIcon icon={faEllipsisH} fixedWidth />
      </div>
    </div>
  )
}
