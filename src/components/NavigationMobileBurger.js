import React from 'react'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'

export default function NavigationMobileBurger({ toggleMenu, open }) {
  const pose = open ? 'open' : 'closed';
  return (
    <StyledWrapper onClick={toggleMenu} aria-label="Navigation">
      <PosedBurgerBarTop pose={pose} />
      <PosedBurgerBarCenter pose={pose} />
      <PosedBurgerBarBottom pose={pose} />
    </StyledWrapper>
  )
}
const StyledWrapper = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  border: none;
  transition: opacity 0.3s ease-in-out;
  &:focus,
  &:active {
    opacity: 0.75;
    outline: none;
  }
  span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: ${vars.styles.colors.neutral2};
    + span {
      margin-top: 5px;
    }
  }
`

const PosedBurgerBarTop = posed('span')({
  closed: {
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 10,
    }
  },
  open: {
    y: 8,
    rotate: 45,
    transition: {
      y: {
        delay: 50,
      },
      rotate: {
        delay: 250,
        type: 'spring',
        stiffness: 400,
        damping: 18,
      },
    },
  },
})

const PosedBurgerBarCenter = posed('span')({
  closed: {
    width: 30,
    delay: 200
  },
  open: {
    width: 0,
  },
})

const PosedBurgerBarBottom = posed('span')({
  closed: {
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 10,
    }

  },
  open: {
    y: -8,
    rotate: -45,
    transition: {
      y: {
        delay: 50,
      },
      rotate: {
        delay: 250,
        type: 'spring',
        stiffness: 400,
        damping: 18,
      },
    },
  },
})
