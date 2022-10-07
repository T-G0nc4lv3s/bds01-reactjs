import './styles.css';
import axios from 'axios';
import { ReactComponent as ArrowIcon } from 'assets/images/Arrow.svg';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';
import ProductInfoLoader from './ProductInfoLoader';
import ProductDetailsLoader from './ProductDetailsLoader';

type UrlParams = {
  productId: string;
};

const ProductDetails = () => {
  const { productId } = useParams<UrlParams>();

  const [isLoading, setIsLoading] = useState(false);

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

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
            {isLoading ? (
              <ProductInfoLoader />
            ) : (
              <>
                <div className="image-container">
                  <img src={product?.imgUrl} alt={product?.name} />
                </div>
                <div className="name-price-container">
                  <h1>{product?.name}</h1>
                  {product && <ProductPrice price={product?.price} />}
                </div>
              </>
            )}
          </div>
          <div className="col-xl-6">
            {isLoading ? (
              <ProductDetailsLoader />
            ) : (
              <div className="description-container">
                <h2>Descrição do produto</h2>
                <p> {product?.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
