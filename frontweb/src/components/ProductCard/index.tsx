import './styles.css';
import ProductImg from 'assets/images/93860733_1SZ 2.png';

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={ProductImg} alt="nome do produto" />
        </div>
        <div className="card-bottom-container">
          <h6>Nome do produto</h6>
          <p>2456.87</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
