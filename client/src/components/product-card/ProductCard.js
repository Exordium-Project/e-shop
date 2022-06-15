import './product-card.css';

const ProductCard = () => {

    return (
        <div className="card">
            <img src="https://via.placeholder.com/600" alt="Image" className='productImage' />
            <h1 className="name">Name of Product</h1>
            <div className="productInfo">
                <p>Sizes: 28, 39, 40, 44</p>
                <p>Small Description: </p>
                <p className="productPrice">40$</p>
            </div>
            <button className="button">
                +
            </button>
        </div>
    );
}

export default ProductCard;