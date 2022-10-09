import styled from "styled-components";


const color = props => props.color || 'white';

export const ContainerStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: ${color};
`