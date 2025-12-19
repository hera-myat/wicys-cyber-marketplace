import logo from "../graphics/wicys-sample-logo.png"
export default function Intro() {
  return (
    <section className="intro">
      <h1>WICYS CYBER MARKETPLACE</h1>
      <p>EXPLORE WICYS FUNDRASING EVENTS & EXCLUSIVE MERCH & MORE</p>
      <img src={logo}
      className = "introLogo" />
    </section>
  )
}
