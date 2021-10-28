import React from 'react'
import styled from 'styled-components'

const Title = styled.span`
  margin: 0 5px;
  font-size: ${props => (props.sm ? '0.75em' : '1em')};
`

const ColorDot = styled.div`
  min-height: 10px;
  min-width: 10px;
  background: none;
  border-radius: 50%;
`

const ProjectIcon = ({ flipped, color, title, sm }) => {
  // try using flex-direction instead of duplication
  return flipped ? (
    <div className="d-flex align-items-center">
      <ColorDot style={{ background: color }} />
      <Title sm={sm}>{title}</Title>
    </div>
  ) : (
    <div className="d-flex align-items-center">
      <Title sm={sm}>{title}</Title>
      <ColorDot style={{ background: color }} />
    </div>
  )
}

export default ProjectIcon
