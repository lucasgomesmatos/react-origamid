import React from 'react';

const Modal = () => {
  return (
    <div>
      <div className="modal" tabIndex="-1" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">React JS</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Esse é um exemplo de modal </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button type="button" className="btn btn-primary">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
