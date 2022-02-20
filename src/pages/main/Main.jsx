import css from "./Main.module.css"
import PizzaCard from '../../componets/pizzaCard/PizzaCard.jsx'
import Slider from '../../componets/slider/Slider.jsx';
import { useSelector } from "react-redux";

export default function Main() {
    const pizzas = useSelector((state) => state.pizza.data || []);

    return (
        <div className='container'>
            <Slider />
            {/* Pizza */}
            <p className='title'>Пицца</p>
            <div className={css.pizzaWrapper}>
                {
                    pizzas.map((item) => <PizzaCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.info}
                        price={item.price}
                        image={item.file}
                    />)
                }
            </div>
        </div>
    )
}
