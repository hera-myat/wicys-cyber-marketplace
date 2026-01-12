import Section from '../components/Section'
import coldstone from '../graphics/coldstone-event.png'
import Rasoi from '../graphics/diwali-event.png'
import Gathers from '../graphics/gathers-event.png'


export default function Events() {
  return (
    <Section id="events" title=" WICYS FUNDRAISING EVENTS">
      <div className="Scroll">
        <div className="PO">
          <div className="Photos">
            <img src={coldstone} alt="Coldstone"/>
          </div>
              <p className="dates">
                JAN 3RD
              </p>
            </div>
       
        <div className="PO">
          <div className="Photos">
            <img src={Rasoi} alt="Rasoi"/>
          </div>
              <p className="dates">
                FEB 4TH
              </p>
        </div>


        <div className="PO">
         <div className="Photos">
            <img src={Gathers} alt="Gathers"/>
          </div>
              <p className="dates">
              COMING SOON
              </p>
        </div>
      </div>

      <div className="Caption">
      <h1> 
        SUPPORT WICYS FUNDRAISING BY MENTIONING WICYS AT CHECKOUT
      </h1>
      <h2>
      NO EXTRA PAY
      </h2>
      </div>
    </Section>
  )
  
}
