import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

export const ModalWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 50%;
  /* background: white; */
  /* padding: 20px; */
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transform: translateY(-50%);
`;

export const CloseButton = styled(IoIosClose)`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
`;
