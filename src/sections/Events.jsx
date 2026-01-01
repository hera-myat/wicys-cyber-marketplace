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
            <h1> Jan 3rd </h1>
          </div>

          <div className = "Photos"> 
            <img src={eventTwo} />
            <h1> Feb 4th </h1>
          </div>

          <div className = "Photos">
            <img src = {eventThree} className= 'upcomingPhoto'/>
            <h1> Coming Soon </h1>
            <h1> ... </h1>
          </div>

      </div>

      <div className='caption'>
        <h1> SUPPORT WICYS FUNDRAISERS BY MENTIONING WICYS AT CHECKOUT! </h1>
        <h1> NO EXTRA PAY </h1>
      </div>
      
        
    </Section>
  )
}
