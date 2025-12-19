import wicysLogo from '../graphics/wicys-sample-logo.png'

export default function Intro() {
  return (
    <section className="intro">
      <h1>WICYS CYBER MARKETPLACE</h1>
      <p>EXPLORE WICYS FUNDRAISING EVENTS & EXCLUSIVE MERCH & MORE</p>

      <img 
        src={wicysLogo} 
        alt="WiCyS Logo" 
        className="intro-logo"
      />
    </section>
  )
}
