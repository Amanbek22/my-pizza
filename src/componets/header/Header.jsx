import css from "./Header.module.css"

export default function Header() {
    return (
        <div className={"container " + css.wrapper}>

            <img className={css.logo} src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Dodo_Logo.svg/640px-Dodo_Logo.svg.png" alt="DODO" />

            <div>
                <p>Доставка пиццы Бишкек</p>
                <p>40 мин 4,75</p>
            </div>

            <a href="tel:+996707629617">
                0 (707) 629-617
                <p>Звонок по телефону</p>
            </a>

        </div>
    )
}
