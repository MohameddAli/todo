import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { AppReducerContext } from '../../app'

const TaskDetailsModal = () => {
  const [state, dispatch] = useContext(AppReducerContext)
  const { tasks, tmId, tmOpen } = state

  const task = tasks.find(t => t.id === tmId)
  const { title, dueDate, project, labels } = task ? task : {}

  const close = () => dispatch({ type: 'CLOSE_TASK_MODAL' })

  return (
    <ModalWrapper show={tmOpen} onHide={close}>
      <ModalHeader closeButton>
        <Modal.Title>Edit Details</Modal.Title>
      </ModalHeader>
      <ModalBody>
        <h4>{title}</h4>
        <p>{dueDate}</p>
        <p>{project}</p>
        {labels && labels.map(label => <Label key={label}>{label}</Label>)}
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={close}>
          Save Changes
        </Button>
      </ModalFooter>
    </ModalWrapper>
  )
}

export default TaskDetailsModal

const ModalWrapper = styled(Modal)`
  .modal-content {
    background: none !important;
  }
`

const ModalHeader = styled(Modal.Header)`
  background: hsl(0, 0%, 20%) !important;
  border: none !important;
  border-bottom: 1px solid hsl(0, 0%, 10%) !important;
  color: white !important;
`

const ModalBody = styled(Modal.Body)`
  background: hsl(0, 0%, 20%) !important;
  color: hsl(0, 0%, 80%) !important;
`

const ModalFooter = styled(Modal.Footer)`
  background: hsl(0, 0%, 20%) !important;
  border: none !important;
  border-top: 1px solid hsl(0, 0%, 10%) !important;
`

const Label = styled.span`
  color: hsl(0, 0%, 80%) !important;
  border: 2px solid hsl(0, 0%, 50%) !important;
  border-radius: 3px !important;
  font-size: 0.85em !important;
  padding: 0.4em 0.6em !important;
  margin-right: 0.5em !important;
`
