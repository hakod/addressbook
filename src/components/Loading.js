import React from "react";
import styled, { keyframes } from "styled-components";

const Load = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`{
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;
const Spin = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  animation: ${rotate} 0.7s linear infinite;
`;

const Loading = () => {
  return (
    <Load>
      <Spin />
    </Load>
  );
};

export default Loading;
