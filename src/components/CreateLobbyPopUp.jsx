import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: '#FFf',
  padding: '50px',
  zIndex: 1100,
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1100,
};

const CreateLobbyPopUp = ({ lobbyCreating, onClose, children }) => {
  if (!lobbyCreating) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close</button>

        {children}
      </div>
    </>,
    document.getElementById('create-lobby-portal')
  );
};

export default CreateLobbyPopUp;
