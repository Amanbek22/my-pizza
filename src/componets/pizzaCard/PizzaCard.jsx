import css from "./PizzaCard.module.css"


export default function PizzaCard({ setBasket, ...props }) { // props = { name: "", description: "", price: 1, id: 1 }
    const onSelect = () => {
        const basket = JSON.parse(localStorage.getItem("basket")) || []
        basket.forEach((item, index) => {
            if (item.id === props.id) {
                return null
            }else if (index === basket.length - 1)  {
                basket.push(props)
                localStorage.setItem("basket", JSON.stringify(basket))
                setBasket(basket)
            }
        })
        if (basket.length === 0) {
            basket.push(props)
            localStorage.setItem("basket", JSON.stringify(basket))
            setBasket(basket)
        }
    }
    return (
        <div className={css.wrapper}>
            <div className={css.imgWrapper}>
                <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/1ee83fd7a0444e7c90bf593fdea61801_138x138.jpeg" alt="Pizza" />
            </div>
            <div className={css.name}>
                {props.name}
            </div>
            <div className={css.description}>
                {props.description}
            </div>
            <div className={css.footer}>
                <div className={css.price}>от {props.price} сом</div>
                <button onClick={onSelect}>Выбрать</button>
            </div>
        </div>
    )
}
