import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
`;

const PizzaStyles = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  h2,
  p {
    margin: 0;
  }
`;

const SinglePizza = ({ pizza }) => (
  <PizzaStyles>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
    </Link>
    <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
    <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
  </PizzaStyles>
);

const PizzaList = ({ pizzas }) => (
  <PizzaGridStyles>
    {pizzas.map((pizza) => (
      <SinglePizza key={pizza.id} pizza={pizza} />
    ))}
  </PizzaGridStyles>
);

export default PizzaList;
