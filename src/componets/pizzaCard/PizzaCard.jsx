import css from "./PizzaCard.module.css"
import { useDispatch, useSelector } from "react-redux";
import { addPizzaAC } from "../../reudx/actions/basketActions.js";

export default function PizzaCard({ ...props }) { // props = { name: "", description: "", price: 1, id: 1 }
    const dispatch = useDispatch();
    const basketData = useSelector((state) => state.basket.data || [] );

    const onSelect = () => {
        let count = 0;
        basketData.forEach((item) => {
            if (item.id === props.id) {
                count++
            }
        })
        if (count === 0)  {
            dispatch(addPizzaAC(props));
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
