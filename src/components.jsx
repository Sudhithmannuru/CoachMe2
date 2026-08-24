import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LINKS, NAV } from "./data";

export function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <div className="bg-mesh" />
      <nav className="site-nav">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" />
          CoachMe2
        </Link>
        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? "Close" : "Menu"}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <Link className="nav-cta" to="/donate">
          Donate
        </Link>
      </nav>
      {children}
      <p className="crisis">
        Coaching is not therapy or crisis care. If you are in immediate danger, call local emergency
        services. In the U.S., call or text <b>988</b>.
      </p>
      <footer>
        <div className="wrap foot">
          <div>
            <Link className="brand" to="/">
              CoachMe2.world
            </Link>
            <p className="muted">
              Thank you for supporting our ambitious coaching initiative. Coach Me 2, Inc. is a
              501(c)(3) nonprofit corporation.
            </p>
            <div className="socials">
              <a href={LINKS.instagram} target="_blank" rel="noreferrer">IG</a>
              <a href={LINKS.tiktok} target="_blank" rel="noreferrer">TT</a>
              <a href={LINKS.youtube} target="_blank" rel="noreferrer">YT</a>
              <a href={LINKS.facebook} target="_blank" rel="noreferrer">FB</a>
            </div>
          </div>
          <div>
            <b>Explore</b>
            <Link to="/about">Mission</Link>
            <Link to="/services">Services</Link>
            <Link to="/meet-our-coaches">Coaches</Link>
            <Link to="/team">Board</Link>
          </div>
          <div>
            <b>Get involved</b>
            <Link to="/volunteer">Volunteer</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/scheduling">Schedule a call</Link>
            <a href={LINKS.newsletter} target="_blank" rel="noreferrer">Newsletter</a>
          </div>
        </div>
        <div className="wrap tiny">Copyright © Coach Me 2, Inc. All rights reserved.</div>
      </footer>
    </div>
  );
}

export function PageHero({ kicker, title, children }) {
  return (
    <div className="page-hero wrap">
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export function PersonGrid({ people }) {
  return (
    <div className="people wrap" style={{ paddingBottom: 56, position: "relative", zIndex: 1 }}>
      {people.map((p) => (
        <article className="person" key={p.name + p.role}>
          <img src={p.photo} alt={p.name} />
          <div className="person-body">
            <h3>{p.name}</h3>
            <div className="role">{p.role}</div>
            <p>{p.blurb}</p>
            {p.email && (
              <p style={{ marginTop: 10 }}>
                <a href={`mailto:${p.email}`}>{p.email}</a>
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function Banner({ title, body, to, cta }) {
  return (
    <div className="wrap" style={{ position: "relative", zIndex: 1, paddingBottom: 56 }}>
      <div className="banner">
        <div>
          <h2>{title}</h2>
          <p className="muted">{body}</p>
        </div>
        <Link className="btn lg" to={to}>
          {cta}
        </Link>
      </div>
    </div>
  );
}
