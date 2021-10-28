export const testTasks = [
  {
    id: 0,
    title: 'look into Gatsby',
    labels: ['computer'],
    dueDate: 'Yesterday',
    project: 0
  },
  {
    id: 1,
    title: 'brush teeth',
    labels: ['computer', 'phone'],
    dueDate: 'Saturday',
    project: 1
  },
  {
    id: 2,
    title: 'contentful stuff',
    labels: ['computer', 'phone'],
    dueDate: 'Saturday',
    project: 2
  },
  {
    id: 3,
    title: 'go to the store',
    labels: ['destination'],
    dueDate: 'Monday',
    project: 3
  }
]

export const testProjects = [
  { id: 0, title: 'Inbox', color: '#446' },
  { id: 1, title: 'Daily', color: '#3c3' },
  { id: 2, title: 'Pubwriter Contentful', color: '#cc3' },
  { id: 3, title: 'Errands', color: '#d53' }
]

export const testLabels = [{ id: 3, title: 'test', color: '#d53' }]

export const initState = {
  tasks: testTasks,
  projects: testProjects,
  labels: testLabels,
  tmOpen: false,
  tmId: 0,
  pmOpen: false,
  pmId: 0
}
