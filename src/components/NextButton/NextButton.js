// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  isDisabled: Boolean,
  handleClick: Function => void
};

const Wrapper = styled.button`
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
  padding: 0;

  svg {
    fill: #be0d00;
    stroke: #be0d00;
    vertical-align: middle;
  }

  &[disabled] {
    cursor: default;

    svg {
        fill: grey;
        opacity: 0.5;
        stroke: grey;
      }
  }
`

const NextButton = ({ isDisabled, handleClick }: Props) => (
  <Wrapper onClick={handleClick} disabled={isDisabled}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68" width="68">
      <path
        d="M1,34A33,33,0,1,0,34,1,33,33,0,0,0,1,34Z"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path d="M29.49,22.08a.89.89,0,0,0-1.23,0,.87.87,0,0,0-.25.62.88.88,0,0,0,.25.62L39.89,35,28.26,46.59a.87.87,0,0,0,0,1.23.86.86,0,0,0,.62.26.88.88,0,0,0,.62-.25L41.74,35.57A.87.87,0,0,0,42,35a.86.86,0,0,0-.26-.62Z"/>
    </svg>
  </Wrapper>
)

export default NextButton
