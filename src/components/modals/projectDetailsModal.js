import React, { useState, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { AppContext } from '../../store'
import { AppReducerContext } from '../../app'

const ProjectDetailsModal = () => {
  const [state, dispatch] = useContext(AppReducerContext)
  const { projects, pmOpen, pmId } = state

  const project = projects.find(p => p.id === pmId)
  const { title, color } = project ? project : {}

  // const { title, color } = project;
  const [colorInput, setColorInput] = useState(color)

  const close = () => dispatch({ type: 'CLOSE_PROJECT_MODAL' })

  return (
    <ModalWrapper show={pmOpen} onHide={close}>
      <ModalHeader closeButton>
        <Modal.Title>Edit Details</Modal.Title>
      </ModalHeader>
      <ModalBody>
        <h4>{title}</h4>
        <label>Color:</label>
        <StyledColorInput
          value={colorInput}
          style={{ color }}
          onChange={e => setColorInput(e.target.value)}
        />
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

export default ProjectDetailsModal

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

const StyledColorInput = styled.input`
  background: none;
  border: 0;
  outline: 0;
  margin-left: 1rem;
`
