import { Link, useParams } from 'react-router-dom';
import BlueBtn from '../../components/BlueBtn/BlueBtn';
import WhiteBtn from '../../components/WhiteBtn/WhiteBtn';
import { products } from '../../products';
import s from './ProductPage.module.css';

export default function ProductPage() {
    const {id} = useParams();
    const product = products.find(product => product.id == id);
    // console.log(product.imagePath)

    return(
        <>
            <div className={s.product_page}>
                <div className="container">
                    <Link to="/catalog">
                        <WhiteBtn text='<  На главную' />
                    </Link>
                    <div className={s.product}>
                        <div className={s.product_img}>
                            <img src={`/${product.imagePath}`} alt="#" />
                        </div>
                        <div className={s.product_about}>
                            <div className={s.product_title}>
                                <h2 className={s.product_name}>{product.name}</h2>
                                <p className={s.product_text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className={s.product_content}>
                                <p className={s.product_price}>{product.price} ₽</p>
                                <BlueBtn text='Добавить в корзину'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}