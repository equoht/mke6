import s from './Search.module.css'
export default function Search({handleChange}){
    return(
        <input onChange={handleChange} type="text" placeholder="Поиск..." className={s.search} />
    )
}