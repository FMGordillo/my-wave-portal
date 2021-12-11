import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
  from {
    background-position: 25%;
  }
  50% {
    background-position: 50%;
  }
  to {
    background-position: 70%;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const Button = styled.button`
  background: white;
  border-radius: 25px;
  border: 2px solid hsl(233deg, 100%, 50%);
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;

  transition: all 250ms;

  &:hover {
    color: white;
    cursor: pointer;
    background: linear-gradient(
      to right,
      hsl(233deg, 50%, 50%),
      hsl(270deg, 50%, 50%)
    );
    animation: 4s ease 0s infinite normal none running ${backgroundAnimation};
  }
  &:active {
    color: black;
    background: hsl(233deg, 50%, 80%);
    border-color: hsl(233deg, 100%, 20%);
  }
  &:disabled {
    color: hsl(0deg, 0%, 90%);
    background: hsl(233deg, 0%, 70%);
    border-color: hsl(0deg, 0%, 50%);
  }
`;

export const HelloSection = styled.section`
  display: grid;
  text-align: center;
  justify-content: center;
`;
