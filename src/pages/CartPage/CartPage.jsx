import { products } from "../../products";

export default function CartPage({cart}){
    const cartProducts = cart.map(id => products.find(product=> product.id == id));
    const allPrice = cartProducts.reduce((sum, item) => sum + item.price, 0);

    return(
        <div className="container">
            <h2>Итого к оплате: {allPrice}</h2>
            <div className="cart__items">
                {
                    cartProducts.map(item =>{
                        return(
                            <div className="card" style={{marginTop: '20px',padding: '10px', border: '1px solid #e5e5e5'}}>
                                <img src={item.imagePath} alt="#" style = {{width:'100px', aspectRatio: 1}} className="card__img" />
                                <h2>{item.name}</h2>
                                <h2>{item.price } руб.</h2>

                            </div>
                        )

                    })




                }
            </div>
        </div>
    )

}