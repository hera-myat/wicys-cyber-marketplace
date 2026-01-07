import logo from "../graphics/wicys-sample-logo.png"
import Typewritter from "../typewritter";

export default function Intro() {
  return (
    <section className="intro">
      <h1>WICYS CYBER MARKETPLACE</h1>
      {/* <h1> <Typewritter text="WICYS CYBER MARKETPLACE" delay={250} infinite/></h1> */}
      <p>EXPLORE WICYS FUNDRASING EVENTS & EXCLUSIVE MERCH & MORE</p>
      <img src={logo}
      className = "introLogo" />
    </section>
  )
}
