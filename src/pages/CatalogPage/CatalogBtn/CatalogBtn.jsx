import s from './CatalogBtn.module.css'

export default function CatalogBtn({text='Button'}){
    return(
        <button className={s.btn}>{text}</button>
    )
}