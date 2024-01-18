import { Heading, Stack } from '../../../../components';
import './About.css';

export const About = () => {
  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
        <Stack.Item
          className="about-left-column"
          vertical
          gap="2.25rem"
          basis="50%"
        >
          <Stack.Item vertical>
            <Heading>Little Lemon</Heading>
            <p>Chicago</p>
          </Stack.Item>

          <p>
          Welcome to Little Lemon, where the zest of life meets the passion for food.
          Nestled in the heart of the city, our cozy bistro offers a refreshing escape
          with its bright, citrus-themed decor and a menu that's as vibrant as our ambiance.
          At Little Lemon, we believe in the simple joy of eating: our dishes are crafted
          from the freshest ingredients, sourced locally to support our community and to deliver
          a burst of flavor in every bite. From our signature lemon-infused dishes to the classic
          favorites reimagined with a tangy twist, our culinary creations are designed to delight
          and surprise. Whether you're joining us for a leisurely brunch or a lively dinner with
          friends, Little Lemon is more than a restaurant—it's a slice of happiness, served with
          a side of sunshine. Join us for a meal, and let's celebrate the goodness of great food
          together!
          </p>
        </Stack.Item>

        <section className="about-right-column">
          <section id="about-images">
            <div id="about-first-image">
              <img
                src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-pastas_-BfcomSI5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674426273746"
                alt="Little Lemon - Burritos"
              />
            </div>
            <div id="about-second-image">
              <img
                src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-hero_szKmkAXsc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675005773288"
                alt="Little Lemon - Pastas"
              />
            </div>
          </section>
        </section>
      </Stack>
    </section>
  );
};
