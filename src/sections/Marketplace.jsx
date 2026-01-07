import Section from '../components/Section'
import merch1 from '../graphics/wicys-merch-1.png'
import merch2 from '../graphics/wicys-merch-2.png'
import merch3 from '../graphics/wicys-merch-3.png'

export default function Marketplace() {
  return (
    <Section id="marketplace">

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          <span>
            BECOME A WICYS MEMBER TODAY TO RECEIVE A FREE RANDOM MERCH
          </span>
          <span>
            BECOME A WICYS MEMBER TODAY TO RECEIVE A FREE RANDOM MERCH
          </span>
        </div>
      </div>

      <div className="marketplace-grid">
        <div className="marketplace-card">
          <img src={merch1} alt="WiCyS Sweater" />
          <p>WICYS SWEATER — $20</p>
        </div>

        <div className="marketplace-card">
          <img src={merch2} alt="WiCyS Tote" />
          <p>WICYS TOTE — $10</p>
        </div>

        <div className="marketplace-card">
          <img src={merch3} alt="WiCyS Note" />
          <p>WICYS NOTE — $5</p>
        </div>

        <div className="marketplace-card locked">
          <p className="locked-text">
            UNLOCK EXCLUSIVE REWARDS BY JOINING WICYS TODAY
          </p>
        </div>
      </div>

    </Section>
  )
}
