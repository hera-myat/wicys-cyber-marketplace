import Section from '../components/Section'
import eventOne from "../graphics/coldstone-event.png"
import eventTwo from "../graphics/diwali-event.png"
import eventThree from "../graphics/gathers-event.png"

export default function Events() {
  return (
    <Section id="events" title="WICYS FUNDRASING EVENTS">
      <div className="Scroll">
        
          <div className = "Photos">
            <img src={eventOne} />
          </div>

          <div className = "Photos"> 
            <img src={eventTwo} />
          </div>

          <div className = "Photos">
            <img src = {eventThree} />
          </div>
        </div>
        
    </Section>
  )
}
