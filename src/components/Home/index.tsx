import React from 'react'
import { keyframes } from 'styled-components'
import { styled, Box, Heading } from 'reakit'

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

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  animation: ${pulse} infinite 10s;
  height: 100vh;
`

export default function Home() {
  return (
    <Container>
      <Heading color='white'>Take a break</Heading>
    </Container>
  )
}
