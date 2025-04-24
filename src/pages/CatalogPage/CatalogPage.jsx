import Card from "./Card/Card"
import CatalogBtn from "./CatalogBtn/CatalogBtn"
import s from './CatalogPage.module.css'
import { products } from "../../products"
import { useState } from "react"
import Search from "../../components/Search/Search"

export default function CatalogPage({cart, setCart}){
    const[search, setSearch] = useState('');
    const[sorting, setSorting] = useState(0);
    const[category, setCategory] = useState('all');


    function sort(e){
        setSorting(e.target.value);
    }

    function handleChange(e){
        setSearch(e.target.value);
    }

    function sortProducts(sorting, products){
        switch(sorting){
            case 'asc':return [...products].sort((a,b) => a.price - b.price);
            case 'desc':return [...products].sort((a,b) => b.price - a.price);
            default: return products;

        }
    }

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())&&(product.categoryID == category || category=='all'));
    const sortAndFilteredProducts = sortProducts(sorting, filteredProducts);


    return(
        <>
            <section className={s.catalog}>
                <div className="container">
                    <div className={s.catalog_inner}>
                        <h2 className={s.title}>Каталог товаров</h2>
                        <Search handleChange={handleChange}/>
                        
                        <select value={sorting} onChange={sort}>
                            <option value= "0" >Сортировать</option>
                            <option value= "asc" >По возростанию цены</option>
                            <option value= "desc" >По убыванию цены</option>

                        </select>

                      
                        
                        <div className={s.nav}>
                            <p className={s.text}>Категории:</p>
                            <button onClick={()=> setCategory('all')}><CatalogBtn text="Все товары"/></button>
                            <button onClick={()=> setCategory(0)}><CatalogBtn text="Шины/колеса"/></button>
                            <button onClick={()=> setCategory(1)}><CatalogBtn text="Масла"/></button>
                            <button onClick={()=> setCategory(2)}><CatalogBtn text="Ароматизаторы"/></button>
                        </div>

                        <div className={s.cards}>
                            {
                                sortAndFilteredProducts.length
                                ?
                                sortAndFilteredProducts.map(product=><Card{...product}/>)
                                :
                                <p>По запросу "{search}" ничего не найдено</p>

                            }
                        </div>

                        <div className={s.catalog__row}>
                            {
                                sortAndFilteredProducts.length ?
                                sortAndFilteredProducts.map(product => <Card {...product} addTOCart = {() => setCart([...cart, product.id])}/>)
                                :
                                <p>По запросу "{search}" ничего не найдено</p>
                            }
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}