import React, { Component } from "react";
import { createPortal } from "react-dom";
import { ModalWrapper, CloseButton } from "./style";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

class ModalContainer extends Component {
  render() {
    return createPortal(
      this.props.children,
      document.getElementById("modal-container")
    );
  }
}

const ModalGlobal = styled(ModalContainer)`
  position: absolute;
  top: 0;
  right: 0;
  top: 50%;
  background: white;
`;

function Modal(props) {
  return (
    <ModalGlobal>
      <ModalWrapper>
        {props.children}
        <CloseButton onClick={props.handleClick} />
      </ModalWrapper>
    </ModalGlobal>
  );
}

export default Modal;
