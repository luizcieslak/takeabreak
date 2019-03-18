import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const pulse = keyframes`
  0% {
    background-color: #001F3F;
  }
  50%{
    background-color: #FF665E;
  }
  100% {
    background-color: #001F3F;
  }
`

const fadeIn = keyframes`
  from { 
    opacity:0; 
  } 
  to { 
    opacity:1; 
  }
`

const fadeInOut = keyframes`
 0% {
    opacity:0;
  }
  50%{
    opacity:1;
  }
  100% {
    opacity:0;
  }
`

const fadeInOutLong = keyframes`
  0% {
    opacity:0;
  }
  25%{
    opacity:1;
  }
  50%{
    opacity: 0.5;
  }
  100% {
    opacity:0;
  }
`

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`

const StyledA = styled.a`
  color: #61dafb;
`

const Container = styled.div`
  text-align: center;
  animation: ${pulse} infinite 10s;
` 

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo src='./logo.svg' alt='logo' />
        <h1>Take a break</h1>
      </Header>
    </Container>
  )
}
