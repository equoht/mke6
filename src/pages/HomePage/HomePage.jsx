import BlueBtn from "../../components/BlueBtn/BlueBtn";
import s from './HomePage.module.css'

export default function HomePage(){
    return(
        <>
            <section className={s.banner}>
                <BlueBtn text="О компании АвтоТорг" />
            </section>
        </>

    )
}