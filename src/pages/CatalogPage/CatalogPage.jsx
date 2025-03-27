import Card from "./Card/Card"
import CatalogBtn from "./CatalogBtn/CatalogBtn"
import s from './CatalogPage.module.css'
import { products } from "../../products"

export default function CatalogPage(){
    return(
        <>
            <section className={s.catalog}>
                <div className="container">
                    <div className={s.catalog_inner}>
                        <h2 className={s.title}>Каталог товаров</h2>
                        <div className={s.nav}>
                            <p className={s.text}>Категории:</p>
                            <CatalogBtn text="Все товары"/>
                            <CatalogBtn text="Шины/колеса"/>
                            <CatalogBtn text="Масла"/>
                            <CatalogBtn text="Ароматизаторы"/>
                        </div>
                        <div className={s.cards}>
                            {
                                products.map(product=><Card {...product}/>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}