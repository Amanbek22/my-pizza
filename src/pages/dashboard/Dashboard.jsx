import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PizzaCard from '../../componets/pizzaCard/PizzaCard.jsx';
import Api from '../../api/Api.js';
import { useDispatch } from 'react-redux';

export default function Dashboard() {
  const [pizzas, setPizzas] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    Api.getAllPizzas()
      .then((res) => {
        // Pizza Data 
        setPizzas(res.data.data.data)
      })
      .catch((error) => console.log(error))
  }, []);
  return <Container>
    <Grid container spacing={2} >
      <Grid item xs={3}>
        <aside>
          <Button onClick={() => dispatch( { type: "logout auth" } )} variant="outlined" color="error">
            Logout
          </Button>
        </aside>
      </Grid>
      <Grid item xs={9}>
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
      </Grid>
    </Grid>
  </Container>;
}
