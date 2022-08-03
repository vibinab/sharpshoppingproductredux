import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';


const CartItem = (props) => {

  const dispatch=useDispatch();
  const { title, quantity, total, price,id } = props.item;
  
   const removeitemhandler=()=> {
    dispatch(cartActions.removeitemfromcart(id));

   }

   const additemhandler=()=> {
    dispatch(cartActions.additemcart({
      id:id,
      title:title,
      price:price,
    }))
   };


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeitemhandler}>-</button>
          <button onClick={additemhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
