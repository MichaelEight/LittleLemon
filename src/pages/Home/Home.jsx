import { About, Hero, Specials, Testimonials } from './components';
import { Main } from '../../components';
import { useState } from 'react';

import testimonials from '../../settings/cms/testimonials.json';

const specials = [
  {
    "id": 1,
    "title": "Roasted Butternut Squash Risotto",
    "image": "https://cdn.loveandlemons.com/wp-content/uploads/2021/10/butternut-squash-risotto.jpg",
    "price": 12.99,
    "description": "A creamy, slow-cooked risotto paired with the sweet and nutty flavors of roasted butternut squash. Infused with fresh sage and a hint of white wine, each bite is complemented by a generous sprinkle of aged Parmesan cheese."
  },
  {
    "id": 2,
    "title": "Lemon Dessert",
    "image": "https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-lemon-dessert_wVeHkjGSW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675005489800",
    "price": 4.99,
    "description": "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  },
  {
    "id": 3,
    "title": "Caramelized Onion and Goat Cheese Tart",
    "image": "https://juliascuisine.com/wp-content/uploads/2020/03/goatcheesetarts001_orig.jpg",
    "price": 7.49,
    "description": "This savory tart is a delicious harmony of sweet caramelized onions and tangy goat cheese, baked to perfection in a flaky, buttery crust. Topped with fresh thyme and a drizzle of honey, it's a delightful appetizer or a light meal."
  }
]

export const Home = () => {
  return (
    <Main>
      <Hero />
      <Specials data={specials} itemWidth="300px" />
      <Testimonials data={testimonials} />
      <About />
    </Main>
  );
};
