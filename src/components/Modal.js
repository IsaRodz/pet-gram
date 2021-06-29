import { Fragment } from 'react';

export default function Modal({ children, active, onClose }) {
  if (!active) return null;

  return (
    <Fragment>
      <div className="modal_overlay" onClick={onClose}></div>
      <div className="modal_content">{children}</div>
    </Fragment>
  );
}
