import { connect } from 'react-redux'
import { IProduct } from '../store/products/types';

interface IProductProps{
    product?: IProduct
}

const product = ({product }: IProductProps) => {
    return (
        <>
        {product && (
        <div>        
        
             <h2>{product.title}</h2>
             <p>{product.value},00</p>
             <ul>
                {product.modules && product.modules.map(module => (
                    <li key = {module.id}> {module.title} </li>
                ))}
             </ul>                           
        </div>
        )}
        </>
        
    )
}
const mapStateToProps = (state : IProductState) => ({
    products: state.product.products
})

const mapStateToProps = dispatch => ({
    toggleProduct: (product) => dispatch(toggleProduct(product))
})
export default Product 