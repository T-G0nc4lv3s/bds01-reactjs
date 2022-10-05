import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/Arrow.svg';
import { Link } from 'react-router-dom';
import ProductPrice from 'components/ProductPrice';

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="base-card card-container">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>Voltar</h2>
          </div>
        </Link>

        <div className="row">
          <div className="col-xl-6">
            <div className="image-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="imagem do produto"
              />
            </div>
            <div className="name-price-container">
              <h1>nome do produto</h1>
              <ProductPrice price={2345.67} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                velit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
