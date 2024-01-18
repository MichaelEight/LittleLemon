import { Card, Heading, ReviewStar } from '../../../../components';
import './Testimonials.css';

export const Testimonials = ({ data }) => {
  return (
    <section id="testimonials" className="LL-Testimonials">
      <h1 style={{fontSize:'5rem'}} align="center">
        Testimonials
      </h1>
      <section className="LL-Testimonials-Carousel">
        {data.map(({ id, rating, name, review }) => (
          <div
            key={`testimonial-card-${name.trim()}-${id}`}
            title={`Testimonial by ${name}`}
          >
            <Heading tag="h3" size="base" className="LL-Testimonial-Name">
              {name}
            </Heading>
            <div className="LL-Testimonial-Rating flex">
              {Array.from(
                { length: Math.round(Math.abs(Number(rating))) },
                (v, i) => (
                  <ReviewStar key={`reviewstar-${name.trim()}-${i}`} />
                )
              )}
            </div>
            <p className="LL-Testimonial-Review">{review}</p>
          </div>
        ))}
      </section>
    </section>
  );
};
