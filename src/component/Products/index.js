import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../CartSlice';
import { gettingProductFromURl } from '../ProductsFetching';
const Products = () => {

    const dispatch = useDispatch()
    const {data : fetchingResponseData} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(gettingProductFromURl())
    }, [])

    const addToCart = (items) => {
        dispatch(addProducts(items))
    }

    return (
        <div>
            <div>
                <h2>Products Page</h2>
                <div className='main-products-to-display'>
                {
                    fetchingResponseData.map((items) => (
                        <div className='each-container'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={items.image} className='images-sizes' />
                                <Card.Body>
                                    <Card.Title>{items.title}</Card.Title>
                                    <Card.Title>Rs.{items.price}</Card.Title>
                                    
                                    <Button variant="primary" onClick={() =>addToCart(items)}>Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
export default Products;