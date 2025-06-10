import React, { Component } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

class Modal extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isOpen !== prevState.isOpen) {
      if (this.state.isOpen) {
        document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
      } else {
        document.body.style.overflow = 'unset'; // Enable scrolling when modal is closed
      }
    }
  }

  render() {
    if (!this.state.isOpen) {
      return null;
    }

    return (
      <ModalOverlay onClick={this.closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={this.closeModal}>
            &times;
          </CloseButton>
          {this.props.children}
        </ModalContent>
      </ModalOverlay>
    );
  }
}

export default Modal; 