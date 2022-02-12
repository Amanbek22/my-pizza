import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PizzaCard from '../../componets/pizzaCard/PizzaCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {logoutAuth} from "../../reudx/actions/authActions"

export default function Dashboard() {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.data || []);
  

  return <Container>
    <Grid container spacing={2} >
      <Grid item xs={3}>
        <aside>
          <Button onClick={() => dispatch( logoutAuth() )} variant="outlined" color="error">
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
