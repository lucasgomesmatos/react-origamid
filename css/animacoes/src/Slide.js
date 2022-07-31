import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/slide.module.sass';

const Slide = ({ slides }) => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }
  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próxima</button>
      </nav>
    </section>
  );
};

export default Slide;
