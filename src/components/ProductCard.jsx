const ProductCard = ({product,addToCart,removeFromCart}) => {
   
    return(
        <>
            <h1>{product.name}</h1>
            <img src={product.img} alt="rock" />
            <h2>{product.description}</h2>
            <p>{product.price}€</p>
            <button onClick={()=>addToCart(product.id)}>lIsää ostoskoriin</button>
            <button onClick={()=>removeFromCart(product.id)}>poista ostoskoriin</button>
        </>
    )
}

const ProductLoop = ({products, setProducts}) => {
    const addToCart = id =>{
        setProducts(products.map(f=>(id===f.id)?{...f, amount:f.amount+1}: f))
    }
    const removeFromCart = id =>{
        setProducts(products.map(f=>(id===f.id)?{...f, amount:Math.max(f.amount-1,0)}: f))
    }
    return(
        <div className="allProducts">
            {products.map((f)=><div className="productCard" key={f.id}><ProductCard product={f} addToCart={addToCart} removeFromCart={removeFromCart} /></div>)}
        </div>
    )
}

export default ProductLoop