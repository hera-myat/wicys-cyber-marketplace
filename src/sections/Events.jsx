import Section from '../components/Section'

import coldstone from '../graphics/coldstone-event.png'
import dawali from '../graphics/diwali-event.png'
import gathers from '../graphics/gathers-event.png'

export default function Events() {
  return (
    <Section id="events" title="WiCyS Fundraising Events">
      <div className="events-scroll">
        <div className="event-card">
          <img src={coldstone} alt="Coldstone Fundraiser" />
        </div>

        <div className="event-card">
          <img src={dawali} alt="Dawali Fundraiser" />
        </div>

        <div className="event-card">
          <img src={gathers} alt="Gathers Fundraiser" />
        </div>
      </div>
    </Section>
  )
}
