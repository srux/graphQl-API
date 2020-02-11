import React from 'react';

const Modal = props => (
    <div className="modal">
        <header className="modal__header"><h1>{props.title}</h1></header>
        <section className="modal__content">
            {props.children}
        </section>
        <section className="modal__actions">
            {props.canCancel &&
            <div className="button" onClick={props.onCancel}>Cancel</div>}
            {props.canConfirm &&
            <div className="button" onClick={props.onConfirm}>Confirm</div>}
        </section>
    </div>
)

export default Modal;