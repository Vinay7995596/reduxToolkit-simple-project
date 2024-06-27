import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'
import { deleteUser } from "../CartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const addingProducysCart = useSelector(state => state.addCart)
    const dispatch = useDispatch()
    const removeProduct = (id) => {
        dispatch(deleteUser(id))
    }
    return(
        <>
        <h2>Cart section</h2>
        <div className='main-products-to-display'>
                {
                    addingProducysCart.map((itemsEach) => (
                        <div className='each-container'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={itemsEach.image} className='images-sizes' />
                                <Card.Body>
                                    <Card.Title>{itemsEach.title}</Card.Title>
                                    <Card.Title>Rs.{itemsEach.price}</Card.Title>
                                    
                                    <Button variant="primary" onClick={() =>removeProduct(itemsEach.id)}>TRemove</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
                </div>
        </>
    )
}

export default Cart