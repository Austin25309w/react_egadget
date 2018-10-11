import React from 'react'
import { connect } from 'react-redux'

const sort = (items) => {
    return items.sort((a,b) => a.id < b.id)
}

// const total = (cart) => {
//     <h1>
//     Price:
//     {cart.reduce((sum, i) =>(
//         sum += i.count * i.price
//     ),0)}
//     </h1>
// }



function Cart (props) {
    console.log(props.cart)
    return <table>
        <thead>
            
        </thead>
        <tbody>
            {   
                
                sort(props.cart).map( (item, index) => 
                <tr key={index}>
                    <td>
                        <img 
                            height = { 100 }
                            title = {item.name}
                            src = {`/products/${item.image[0]}`}
                    />
                    </td>
                    
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    
                    <td>{item.quantity}</td>    
                    <td>
                        <button onClick={ (e) => props.addToCart(item)}>+</button>
                        
                        <button onClick={ (e) => props.removeFromCart(item)}>-</button>
                    </td>
                    <td>
                        <button 
                            onClick={ (e)=> props.removeAllFromCart(item)}
                            >Remove all from cart</button>
                        
                    </td>
                </tr>
                )
            }
            
            
        </tbody>
        
    </table>
}

function mapStateToProps(state){
    return {
        
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (item) => {
            dispatch( {
                type: 'ADD',
                payload: item
            })
        },
        removeFromCart: (item) => {
            dispatch({
                type: 'REMOVE',
                payload: item
            })
        },
        removeAllFromCart: (item) => {
            dispatch ({
                type: 'REMOVE_ALL',
                payload: item
            })
        }
    }
}
5103780010
export default connect(mapStateToProps,mapDispatchToProps)(Cart)