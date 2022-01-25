import { useEffect, useState } from "react"
import css from "./Main.module.css"
import PizzaCard from '../../componets/pizzaCard/PizzaCard.jsx'
import Slider from '../../componets/slider/Slider.jsx'

export default function Main(props) {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("https://pizza-app-ulan.herokuapp.com/getall/pizza")
            .then((res) => res.json())
            .then((data) => {
                // Pizza Data 
                setPizzas(data.data.data)
            })
            .catch((error) => console.log(error))
    }, []);

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
                        setBasket={props.setBasket}
                    />)
                }
            </div>
        </div>
    )
}
