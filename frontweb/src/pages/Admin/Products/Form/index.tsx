import './styles.css';

const Form = () => {
  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-card-form">
        <h1 className="product-crud-card-title">Dados do produto</h1>

        <form action="">
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left">
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div>
                <input type="text" className="form-control base-input" />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <textarea
                  name=""
                  rows={10}
                  className="form-control base-input h-auto"
                />
              </div>
            </div>
          </div>
          <div className="product-crud-buttons-container">
            <button className="btn btn-outline-danger product-crud-button">
              CANCELAR
            </button>
            <button className="btn btn-primary product-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
