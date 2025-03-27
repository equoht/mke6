import s from './BlueBtn.module.css'

export default function BlueBtn({text='Button'}){
    return(
        <button className={s.btn}>{text}</button>
    )
}