const Header = ({setShowShoppingCart, showShoppingCart}) => {
    return(
        <header>
            <h1>hewwoo</h1>
		    <button className="cartbutton" onClick={()=>setShowShoppingCart(!showShoppingCart)}> Shopping Cart</button> 
        </header>
    )
}

export default Header
