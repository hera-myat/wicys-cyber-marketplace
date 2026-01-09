import { useRef, useState } from "react";
import Section from '../components/Section';
import eventOne from "../graphics/coldstone-event.png";
import eventTwo from "../graphics/diwali-event.png";
import eventThree from "../graphics/gathers-event.png";

export default function Events() {
  const scrollRef = useRef();
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.scrollWidth / 3; // 3 slides
    const index = Math.round(scrollLeft / width);
    setActiveDot(index);
  };

  return (
    <Section id="events" title="WICYS FUNDRAISING EVENTS">
      <div className="Scroll" ref={scrollRef} onScroll={handleScroll}>

        <div className="Photos">
          <img  src={eventOne} />
          <h1>JAN 3RD</h1>
        </div>

        <div className="Photos">
          <img src={eventTwo} />
          <h1>FEB 4TH</h1>
        </div>

        <div className="Photos">
          <img src={eventThree} className="upcomingPhoto" />
          <h1>COMING SOON</h1>
        </div>
      </div>

      {/* DOTS */}
      <div className="scrollDots">
        {[0,1,2].map(i => (
          <span key={i} className={i === activeDot ? 'dotActive' : 'dot'}></span>
        ))}
      </div>

      <div className="caption">
        <h2>SUPPORT WICYS FUNDRAISERS BY MENTIONING WICYS AT CHECKOUT!</h2>
        <h1>NO EXTRA PAY</h1>
      </div>
    </Section>
  );
}