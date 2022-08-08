import './product-card.css';

const ProductCard = (props) => {
    

    return (
        <div className="card">
            <img src="http://www.foaminsulationni.com/images/placeholder/600x600.gif" alt="Image" className='productImage' />
            <h1 className="name">{props.name}</h1>
            <div className="productInfo">
                <p>Sizes: (TODO?)</p>
                <p>Small Description: </p>
                <p className="productPrice">{props.price}$</p>
            </div>
            <button className="button">
                +
            </button>
        </div>
    );
}

export default ProductCard;