import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PizzaCard from '../../componets/pizzaCard/PizzaCard.jsx';
import Api from '../../api/Api.js';

export default function Dashboard({ setIsAuth }) {
  const [pizzas, setPizzas] = useState([]);

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
          <Button onClick={() => setIsAuth(null)} variant="outlined" color="error">
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
