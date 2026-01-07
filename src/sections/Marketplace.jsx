import Section from '../components/Section'
import merchOne from '../graphics/wicys-merch-1.png'
import merchTwo from '../graphics/wicys-merch-2.png'
import merchThree from '../graphics/wicys-merch-3.png'

export default function Marketplace() {
  return (
    <Section id="marketplace">
      <div className="Marketplace">

        <div className='scrollTitle'>
           <h1>BECOME A WICYS MEMBER TODAY TO RECIVE MERCH
            ▪ BECOME A WICYS MEMBER TODAY TO RECIVE MERCH
            ▪ BECOME A WICYS MEMBER TODAY TO RECIVE MERCH
            ▪ BECOME A WICYS MEMBER TODAY TO RECIVE MERCH
           </h1>
        </div>

        <div className='firstRow'>
          <div className='merch'>
            <img src={merchOne} />
            <h2> WICYS SWEATER $20 </h2>
          </div>

          <div className='merch'>
            <img src={merchTwo} />
            <h2> WICYS TOTE $10 </h2>
          </div>
        </div>

        <div className='secondRow'>
          <div className='merch'>
            <img src={merchThree} />
            <h2> WICYS SWEATER $20 </h2>
          </div>

          <div className='merch'>
            <h1> UNLOCK EXCLUSIVE REWARDS BY JOINING WICYS TODAY </h1>
            <h2> MEMBER EXCLUSIVE </h2>
          </div>
        </div>
        

      </div>
    </Section>
  )
}
