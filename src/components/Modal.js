import React from 'react'

const Modal = ({setIsOpen}) => {
    return (
        <>
        <div onClick={() =>setOpen(false)}>
        <div style={modalStyle}>
            <h3>Test Modal</h3>
            <button onClick={() => setIsOpen(false)}>Close</button>
        <p>This is a simple modal</p>
        </div>
        </div>
        </>
    )
}
const modalStyle = {
    
}
export default Modal