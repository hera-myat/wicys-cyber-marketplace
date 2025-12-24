import Section from '../components/Section'
import coldstone from '../graphics/coldstone-event.png'
import Rasoi from '../graphics/diwali-event.png'
import Gathers from '../graphics/gathers-event.png'


export default function Events() {
  return (
    <Section id="events" title=" WICYS FUNDRAISING EVENTS">
      <div className="Scroll">
        <div className="Photos">
          <img src={coldstone} alt="Coldstone"/>
        </div>
        <div className="Photos">
          <img src={Rasoi} alt="Rasoi"/>
        </div>
        <div className="Photos">
          <img src={Gathers} alt="Gathers"/>
        </div>
      </div>
    </Section>
  )
}
