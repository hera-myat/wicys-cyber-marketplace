import Section from '../components/Section'
import sweater from '../graphics/wicys-merch-1.png'
import toteImg from '../graphics/wicys-merch-2.png'
import noteImg from '../graphics/wicys-merch-3.png'

export default function Marketplace() {
  return (
    <Section id="marketplace" title="WiCyS Marketplace">
      <div className="scrolling-headline">
  <div className="headline-content">
    BECOME A WICYS MEMBER TODAY TO RECEIVE YOUR FREE RANDOM MERCH BECOME A WICYS MEMBER TODAY TO RECEIVE YOUR FREE RANDOM MERCH
  </div>
</div>
<div className="merch-grid">
      <div className="merch-item">
        <div className="merch-box">
          <img src={sweater} alt="WiCyS Sweater" />
        </div>
        <p className="merch-label">WICYS SWEATER $20</p>
      </div>

      <div className="merch-item">
        <div className="merch-box">
          <img src={toteImg} alt="WiCyS Tote" />
        </div>
        <p className="merch-label">WICYS TOTE $10</p>
      </div>

      <div className="merch-item">
        <div className="merch-box">
          <img src={noteImg} alt="WiCyS Note" />
        </div>
        <p className="merch-label">WICYS NOTE $5</p>
      </div>

      <div className="merch-item">
        <div className="merch-box member-exclusive">
          <p>UNLOCK EXCLUSIVE REWARDS BY JOINING WICYS TODAY</p>
        </div>
        <p className="merch-label">MEMBER EXCLUSIVE</p>
      </div>
    </div>
    </Section>
  )
  

  


  

}
