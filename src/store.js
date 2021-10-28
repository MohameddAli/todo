// import React, { useState } from 'react'

// import { testTasks, testProjects, testLabels } from './data'

// export const AppContext = React.createContext()

/**
 * NOT CURRENTLY IN USE
 */
const Store = ({ children }) => {
  return children
}

export default Store

// const appReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "CREATE_TASK": {
//       console.log(type);
//       /**
//        * payload: task
//        * access: taskState, setTaskState
//        *
//        * create the new object (new id)
//        * add to task state
//        */
//       const newTaskId =
//         Math.max.apply(null, taskList.map(task => task.id)) + 1;
//       const newTask = {
//         ...payload,
//         id: newTaskId
//       };

//       // idk about this part, what should state look like???
//       // return {
//       //   ...state,
//       //   taskList: [...taskList, newTask]
//       // };
//       setTaskList([...taskList, newTask]);
//       return state;
//     }
//     case "VIEW_TASK": {
//       console.log(type);
//       /**
//        * payload: task id
//        * access: taskState, setTaskModalId, setIsTaskModalOpen
//        *
//        * set the task for the modal
//        * set task modal to open
//        */
//       return state;
//     }
//     case "SAVE_TASK": {
//       console.log(type);
//       /**
//        * payload: task
//        * access: taskState, setTaskState, setIsTaskModalOpen
//        *
//        * replace task in state
//        * close task modal
//        */
//       return state;
//     }
//     case "DELETE_TASK": {
//       console.log(type);
//       /**
//        * payload: task id
//        * access: taskState, setTaskState
//        *
//        * remove task from state
//        */
//       return state;
//     }
//     case "SET_FILTER": {
//       console.log(type);
//       return state;
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export const TaskContext = React.createContext()
// export const ProjectContext = React.createContext()
// export const LabelContext = React.createContext()

// const taskReducer = (state, action) => {
//   const { type, payload } = action
//   switch (type) {
//     case 'add': {
//       return [...state, { ...payload, id: Date.now() }]
//     }
//     case 'edit': {
//       console.log(`Editing ${payload.title}`)
//       return state
//     }
//     default: {
//       return state
//     }
//   }
// }

// const projectReducer = (state, action) => {
//   const { type, payload } = action
//   switch (type) {
//     case 'add': {
//       return {
//         ...state,
//         projects: [...state.projects, { ...payload, id: Date.now() }]
//       }
//     }
//     case 'edit': {
//       console.log(`Editing ${payload.title}`)
//       return {
//         ...state,
//         activeProject: payload
//       }
//     }
//     default: {
//       return state
//     }
//   }
// }

// const labelReducer = (state, action) => {
//   const { type, payload } = action
//   switch (type) {
//     case 'add': {
//       return [...state, { ...payload, id: Date.now() }]
//     }
//     case 'edit': {
//       console.log(`Editing ${payload.title}`)
//       return state
//     }
//     default: {
//       return state
//     }
//   }
// }

// // refactor into a custom hook, maybe "useMemoReducer"

// const TaskStore = ({ children }) => {
//   const [taskState, taskDispatch] = useReducer(taskReducer, testTasks)
//   const taskMemo = useMemo(() => {
//     return [taskState, taskDispatch]
//   }, [taskState, taskDispatch])

//   return children
//   // return (
//   //   <TaskContext.Provider value={taskMemo}>{children}</TaskContext.Provider>
//   // )
// }

// const ProjectStore = ({ children }) => {
//   const initState = {
//     projects: testProjects,
//     activeProject: ''
//   }
//   const [projectState, projectDispatch] = useReducer(projectReducer, initState)
//   const projectMemo = useMemo(() => {
//     return [projectState, projectDispatch]
//   }, [projectState, projectDispatch])

//   return children
//   // return (
//   //   <ProjectContext.Provider value={projectMemo}>
//   //     {children}
//   //   </ProjectContext.Provider>
//   // )
// }

// const LabelStore = ({ children }) => {
//   const [labelState, labelDispatch] = useReducer(labelReducer, testLabels)
//   const labelMemo = useMemo(() => {
//     return [labelState, labelDispatch]
//   }, [labelState, labelDispatch])

//   return (
//     <LabelContext.Provider value={labelMemo}>{children}</LabelContext.Provider>
//   )
// }
