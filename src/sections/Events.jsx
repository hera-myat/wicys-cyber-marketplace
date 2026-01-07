import Section from '../components/Section'

import coldstone from '../graphics/coldstone-event.png'
import dawali from '../graphics/diwali-event.png'
import gathers from '../graphics/gathers-event.png'

export default function Events() {
  return (
    <Section id="events" title="WICYS FUNDRAISING EVENTS">

      <div className="events-scroll">
        <div className="event-card">
          <img src={coldstone} alt="Coldstone Fundraiser" />
          <p className="event-date">JAN 3RD</p>
        </div>

        <div className="event-card">
          <img src={dawali} alt="Diwali Fundraiser" />
          <p className="event-date">FRD 4TH</p>
        </div>

        <div className="event-card">
          <img src={gathers} alt="Gathers Fundraiser" />
          <p className="event-date">COMING SOON</p>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      {/* SUPPORT MESSAGE */}
      <p className="support-text">
        SUPPORT WICYS FUNDRAISERS BY MENTIONING WICYS AT CHECKOUT! NO EXTRA PAY
      </p>

    </Section>
  )
}
