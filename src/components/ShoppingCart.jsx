import { useState } from 'react'
const ShoppingCartCard = ({product, addToCart, removeFromCart}) =>{
    if(product.amount > 0){
        return(
            <div className="productCard">
                {product.id}
                {product.name}
                {product.description}
                {product.img}
                {product.price}
                {product.amount}
                <button onClick={() => addToCart(product.id)}>Lisää ostoskoriin</button>
                <button onClick={() => removeFromCart(product.id)}>Poista ostoskoriin</button>
            </div>
        )
    }
}

const ShoppingCartLoop = ({products, setProducts}) =>{
    const contactInfo = {name:"",street_address:"",postal_code:"",post_office_location:""}
    const [deliveryInfo, setDeliveryInfo] = useState(contactInfo)
    
    const updateContactInfo = (e, field) =>{
        setDeliveryInfo({...deliveryInfo,[field]:e.target.value})
    }

    const addToCart = id =>{
        setProducts(products.map(f=>(id===f.id)?{...f, amount:f.amount+1}: f))
    }
    const removeFromCart = id =>{
        setProducts(products.map(f=>(id===f.id)?{...f, amount:Math.max(f.amount-1,0)}: f))
    }
    const removeAllFromCart = products =>{
        setProducts(products.map(f=>{
            f={...f,amount:f.amount = 0}
            return f
        }))
    }

    const totalPrice = ()=>{
        const result = products.map(f => f.price*f.amount).reduce((a, b) => a + b, 0)
        return result
    } 

    const totalAmount = products.map(i=>i.amount).reduce((a,b)=>a+b,0)

    if(totalAmount>0){
        return(
            <div className="cartInfo">
                <button onClick={() => removeAllFromCart(products)}>Tyhjennä</button>
                <ul className="productsInCart">
                    {products.filter(i=>i.amount>0).map((f)=><li key={f.id}><ShoppingCartCard product={f} addToCart={addToCart} removeFromCart={removeFromCart}/></li>)}
                </ul>
                {totalPrice()}
                <form className='Info'>
                    <label htmlFor="name">name:</label>
                    <input onChange={e=>updateContactInfo(e, "name")} type="text" value={deliveryInfo.name} name='name' id='name' required/><br/>
                    <label htmlFor="street_address">street address:</label>
                    <input onChange={e=>updateContactInfo(e, "street_address")} type="text" value={deliveryInfo.street_address} name='street_address' id='street_address' required/><br/>
                    <label htmlFor="postal_code">postal code:</label>
                    <input onChange={e=>updateContactInfo(e, "postal_code")} type="text" value={deliveryInfo.postal_code} name='postal_code' id='postal_code' required/><br/>
                    <label htmlFor="post_office_location">post office location:</label>
                    <input onChange={e=>updateContactInfo(e, "post_office_location")} type="text" value={deliveryInfo.post_office_location} name='post_office_location' id='post_office_location' required/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Cart is empty</h1>
            </div>
        )

    }

    }

export default ShoppingCartLoop
