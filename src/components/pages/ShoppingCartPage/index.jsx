import "./styles.css";
import PetsOrderContext from "../../../context/petsOrderContext";
import { OrderItem } from "../../OrderItem";
import { Button } from "../../Button";
import { useState, useContext, useEffect } from "react";
import { PetItem } from "../../PetItem";

import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { useHistory } from "react-router-dom";

export const ShoppingCartPage = () => {

  const [order, setOrder] = useState([]);

  const history = useHistory();

  const globalState = useContext(PetsOrderContext);

  useEffect(
    () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          history.push('/login');
        }
      })
    }, []
  );

  useEffect(
    () => {
      setOrder(globalState.order);
    }, [globalState]
  );

  return (
    <div className="pets-page">
      <h1 className = "pets-title">Shopping Cart Full of cute little critters</h1>
      <div className="order">
        {
          order.map((item) => <OrderItem image={item.image} id={item.id} 
          name={item.name} age={item.age}></OrderItem>)
        }
        {
          order.length === 0 && <p>No little critters yet</p>
        }
          
      </div>
    </div>
  );
};
