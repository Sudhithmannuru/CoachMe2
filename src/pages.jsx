import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Banner, PageHero, PersonGrid } from "./components";
import {
  BOARD,
  COACHES,
  DESERVE,
  INNOVATORS,
  LINKS,
  TESTIMONIALS,
} from "./data";

export function Home() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState([]);
  const quote = TESTIMONIALS[i];
  const others = useMemo(
    () => TESTIMONIALS.filter((_, idx) => idx !== i).slice(0, 3),
    [i]
  );

  function toggle(item) {
    setPicked((list) =>
      list.includes(item) ? list.filter((x) => x !== item) : [...list, item]
    );
  }

  const portraits = COACHES.slice(0, 5);

  return (
    <>
      <header className="hero">
        <span className="kicker">We help teens get what they want</span>
        <h1>Everyone deserves a coach.</h1>
        <p className="lede">
          Personalized coaching for ages 14–19. Frictionless. Affordable. You call the shots —
          a dedicated coach walks with you from where you are to where you want to be.
        </p>
        <div className="hero-actions">
          <Link className="btn lg" to="/scheduling">
            Get a coach
          </Link>
          <Link className="ghost lg" to="/meet-our-coaches">
            Learn more ›
          </Link>
        </div>
        <div className="hero-stage">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="orb orb-c" />
          <div className="portrait-row">
            {portraits.map((p) => (
              <img key={p.name} src={p.photo} alt={p.name} />
            ))}
          </div>
        </div>
      </header>

      <div className="stats-strip">
        <div className="stat">
          <b>14–19</b>
          <span>the age we serve</span>
        </div>
        <div className="stat">
          <b>1:1</b>
          <span>plus groups & labs</span>
        </div>
        <div className="stat">
          <b>501(c)(3)</b>
          <span>nonprofit, worldwide</span>
        </div>
        <div className="stat">
          <b>You</b>
          <span>are the expert on you</span>
        </div>
      </div>

      <section>
        <div className="section-head narrow">
          <span className="kicker">Designed for real life</span>
          <h2>Three ways to grow.</h2>
        </div>
        <div className="bento three wrap">
          <article className="tile wide">
            <h3>1:1 Coaching</h3>
            <p>
              A quiet, dedicated space to think. Clarify what matters, navigate challenges, and
              turn personal, academic, and professional goals into action.
            </p>
            <Link to="/services">Explore services ›</Link>
          </article>
          <article className="tile">
            <h3>Group experiences</h3>
            <p>
              Ikigai, decisions, courage, and comfort with discomfort — in a cohort that takes
              the work seriously.
            </p>
            <Link to="/group-experiences">See groups ›</Link>
          </article>
          <article className="tile">
            <h3>EvolvED</h3>
            <p>
              A 12-week leadership lab. Lead yourself first. Then influence others — with a
              certificate you can actually use.
            </p>
            <Link to="/content">Discover EvolvED ›</Link>
          </article>
        </div>
      </section>

      <section>
        <div className="section-head narrow">
          <span className="kicker">From students</span>
          <h2>Heard. Challenged. Supported.</h2>
        </div>
        <div className="quotes wrap">
          <article className="quote-main">
            <p>“{quote.quote}”</p>
            <div className="role" style={{ marginTop: 18 }}>
              — {quote.name}
            </div>
            <div className="quote-dots">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  className={idx === i ? "on" : ""}
                  onClick={() => setI(idx)}
                  aria-label={`Quote ${idx + 1}`}
                />
              ))}
            </div>
          </article>
          <div className="side-quotes">
            {others.map((t) => (
              <article className="card" key={t.name + t.quote.slice(0, 12)}>
                “{t.quote.slice(0, 140)}…”
                <b>{t.name}</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-head narrow">
          <span className="kicker">You deserve a coach if</span>
          <h2>If any of this sounds familiar.</h2>
          <p className="muted">
            {picked.length
              ? `${picked.length} selected. That’s reason enough to start a conversation.`
              : "Select what feels true. No pressure."}
          </p>
        </div>
        <div className="checks wrap">
          {DESERVE.map((item, idx) => (
            <button
              key={item}
              className={`check ${picked.includes(item) ? "on" : ""}`}
              onClick={() => toggle(item)}
            >
              <strong>0{idx + 1}</strong>
              {item}
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="split wrap">
          <div>
            <span className="kicker">What coaching is</span>
            <h2>
              A relationship that builds motivation, capacity, and follow-through.
            </h2>
            <p className="muted">
              A coach helps you uncover why you want to begin — and the belief that you can.
              Coaching is focused on thriving: from where you are now to where you want to be.
            </p>
          </div>
          <div className="not-list">
            <div>
              <b>Not consulting</b>
              <span>Consultants tell you what to do. You remain the expert.</span>
            </div>
            <div>
              <b>Not teaching</b>
              <span>Teachers decide what you should know. We follow what matters to you.</span>
            </div>
            <div>
              <b>Not mentoring</b>
              <span>Mentors show their path. We help you design yours.</span>
            </div>
            <div>
              <b>Not therapy</b>
              <span>Therapists diagnose and treat. We help you thrive.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="module dark">
        <div className="narrow" style={{ textAlign: "center" }}>
          <span className="kicker">Impact</span>
          <h2>Someone who genuinely believed in me.</h2>
          <p className="lede">
            “Having Rebecca as my coach helped me feel supported during some of the most
            challenging situations in my life. I learned how to pause, reflect, and make
            decisions that were better for me instead of reacting in the moment.”
          </p>
          <p className="muted" style={{ marginTop: 16 }}>— S.S., age 17</p>
        </div>
      </section>

      <div style={{ height: 56 }} />
      <Banner
        title="Make your life different today."
        body="A 20-minute discovery call. Thoughtful, unhurried, and entirely about what you need."
        to="/scheduling"
        cta="Schedule a call"
      />
    </>
  );
}

export function About() {
  return (
    <>
      <PageHero kicker="Mission" title="Every teen deserves a real person in their corner.">
        <p>
          At CoachMe2.world, every teen needs the freedom to shape their own experience of the
          world. A nonjudgmental human helping you dream, discover where you want to go, why, and
          how. Our mission: frictionless, affordable coaching for 14–19 year-olds around the globe.
        </p>
      </PageHero>
      <section>
        <div className="split wrap">
          <article className="tile">
            <h3>You are the expert on you.</h3>
            <p>
              Tired of heavy-handed control from people trying to monetize your behavior, manage
              their own anxiety through you, or live vicariously because they came up short? You
              want to break free, explore passions, make your own decisions, set your own goals.
            </p>
          </article>
          <article className="tile">
            <h3>You call the shots.</h3>
            <p>
              This is a community that respects your autonomy and values your voice. A dedicated
              coach walks with you toward YOUR goals. Teens are facing unprecedented challenges —
              we’re taking action together for a healthier future.
            </p>
          </article>
        </div>
      </section>
      <Banner
        title="Ready to redefine success for you?"
        body="Join an elite group of forward-thinkers who are done waiting for permission."
        to="/scheduling"
        cta="Get a coach"
      />
      <div style={{ height: 48 }} />
    </>
  );
}

export function Donate() {
  const [amt, setAmt] = useState(50);
  const amounts = [25, 50, 100, 250];
  const mail = `mailto:rebecca@coachme2.world?subject=${encodeURIComponent(
    `Donation interest — $${amt}`
  )}&body=${encodeURIComponent(
    `I want to support Coach Me 2 with a gift of about $${amt}. Please send donation instructions.`
  )}`;

  return (
    <>
      <PageHero kicker="Donate now" title="Help more teens get a coach.">
        <p>
          We are a 501(c)(3) nonprofit. We are just getting started. Our mission is simple and
          powerful: frictionless, affordable coaching for teens 14–19 around the world. Build
          self-efficacy, competence, confidence, decision-making, resilience, and a community that
          knows teens are capable of so much more than we ask of them.
        </p>
      </PageHero>
      <section>
        <div className="wrap">
          <h2>Choose an amount</h2>
          <div className="donate-grid">
            {amounts.map((n) => (
              <button
                key={n}
                className={`amount ${amt === n ? "on" : ""}`}
                onClick={() => setAmt(n)}
              >
                ${n}
              </button>
            ))}
          </div>
          <a className="btn lg" href={mail}>
            Continue with ${amt}
          </a>
          <p className="muted" style={{ marginTop: 16 }}>
            All teens deserve physical and mental well-being. We want teens to thrive — not just
            survive. Thank you for supporting this work.
          </p>
        </div>
      </section>
    </>
  );
}

export function Coaches() {
  return (
    <>
      <PageHero kicker="Coaches" title="Meet our coaches.">
        <p>
          Trained, credentialed, and ready when you are. Find someone who feels like a fit, then
          book a session.
        </p>
      </PageHero>
      <PersonGrid people={COACHES} />
      <Banner
        title="Book a session directly."
        body="Use scheduling to grab time with the team."
        to="/scheduling"
        cta="Book now"
      />
      <div style={{ height: 48 }} />
    </>
  );
}

export function Innovators() {
  return (
    <>
      <PageHero kicker="Innovators" title="The people building what’s next.">
        <p>
          Curriculum, research, social, partnerships — including teens who are already in the
          work.
        </p>
      </PageHero>
      <PersonGrid people={INNOVATORS} />
    </>
  );
}

export function Team() {
  return (
    <>
      <PageHero kicker="Board" title="Meet our board.">
        <p>Governance with psychology, psychiatry, and inclusive talent leadership in the mix.</p>
      </PageHero>
      <PersonGrid people={BOARD} />
    </>
  );
}

export function Volunteer() {
  function send(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const kind = data.get("kind");
    const body = [...data.entries()]
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:rebecca@coachme2.world?subject=${encodeURIComponent(
      `Get involved — ${kind}`
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageHero kicker="Get involved" title="Find your lane. Then tell us.">
        <p>Teen looking for a coach? Pro coach? Future peer coach? Start here.</p>
      </PageHero>
      <section>
        <div className="form-grid wrap">
          <form className="form-card" onSubmit={send}>
            <h3>Find your coach</h3>
            <p className="muted">
              Ages 14–19: tell us who you are and what you want out of coaching. We’ll email to
              schedule a brief call.
            </p>
            <input type="hidden" name="kind" value="teen looking for a coach" />
            <label>
              Name
              <input name="name" required />
            </label>
            <label>
              Age
              <input name="age" type="number" min="14" max="19" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              What do you want to get out of coaching?
              <textarea name="goals" rows="4" required />
            </label>
            <button className="btn" type="submit">
              Send
            </button>
          </form>
          <form className="form-card" onSubmit={send}>
            <h3>Volunteer as a coach</h3>
            <p className="muted">
              Professional coaches: credentials, experience, and why teens. Peer coach training is
              coming — experience coaching first, then train.
            </p>
            <input type="hidden" name="kind" value="volunteer coach" />
            <label>
              Name
              <input name="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Certifications / credentials
              <input name="creds" required />
            </label>
            <label>
              Why teens, ages 14–19?
              <textarea name="why" rows="4" required />
            </label>
            <button className="btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export function Scheduling() {
  return (
    <>
      <PageHero kicker="Schedule a call" title="Your ideas. Real impact. Make life different today.">
        <p>
          Driven by curiosity, guided by empathy. 1:1 coaching, groups, EvolvED leadership, and
          enterprise programs for schools and youth orgs.
        </p>
      </PageHero>
      <section>
        <div className="bento wrap">
          <article className="tile">
            <h3>1:1 Coaching</h3>
            <p>Clarify what matters. Navigate challenges. Build habits. You stay in charge.</p>
            <Link to="/services">Services →</Link>
          </article>
          <article className="tile">
            <h3>Group coaching</h3>
            <p>Ikigai, decisions, courage, discomfort — with other teens in the room.</p>
            <Link to="/group-experiences">Groups →</Link>
          </article>
          <article className="tile">
            <h3>EvolvED Leaders</h3>
            <p>Lead yourself first. Then influence others. Certificate at the end.</p>
            <Link to="/content">EvolvED →</Link>
          </article>
        </div>
        <div className="wrap" style={{ marginTop: 28 }}>
          <h2 style={{ marginBottom: 12 }}>Curious? Let’s talk. 20 minutes.</h2>
          <p className="muted">
            “The biggest benefit of having a coach was knowing I had someone who genuinely believed
            in me.” — S.S., 17
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "16px 0 24px" }}>
            <a className="btn" href={LINKS.calendar} target="_blank" rel="noreferrer">
              Google calendar
            </a>
            <a className="ghost" href={LINKS.newsletter} target="_blank" rel="noreferrer">
              Newsletter
            </a>
          </div>
          <iframe className="embed" title="Book with CoachMe2" src={LINKS.healthie} />
        </div>
      </section>
    </>
  );
}

export function Services() {
  const blocks = [
    {
      title: "Mental well-being",
      body: "Stress, burnout, overwhelm, emotional resilience, mindfulness, school-life balance, relationships. We do not diagnose or treat mental health conditions. We help you take proactive steps toward a more balanced life.",
    },
    {
      title: "Life",
      body: "Education and career, leadership, purpose, time, decisions, hobbies and community. We don’t tell you what to do. We help you take control of your unique path.",
    },
    {
      title: "Health & wellness",
      body: "Nutrition, movement, medical follow-through, self-care, habits, sleep that works for a teen schedule. We don’t diagnose. We help you take control of energy and health.",
    },
  ];
  return (
    <>
      <PageHero kicker="Services" title="1:1 personalized coaching.">
        <p>Mental well-being. Life. Health. Same respect. Different focus.</p>
      </PageHero>
      <section>
        <div className="bento wrap">
          {blocks.map((b) => (
            <article className="tile" key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </article>
          ))}
        </div>
      </section>
      <Banner
        title="Get a coach"
        body="Schedule a discovery call to see if coaching is right for you."
        to="/scheduling"
        cta="Schedule a discovery call"
      />
      <div style={{ height: 48 }} />
    </>
  );
}

export function Groups() {
  return (
    <>
      <PageHero kicker="Now enrolling Fall 2026" title="Find your ikigai. With a crew.">
        <p>
          Ikigai (生き甲斐) is a Japanese idea of a reason for being: what you love, what you’re
          good at, what the world needs, what you can be paid for. $240 for the foundational
          experience — about $15 a session.
        </p>
      </PageHero>
      <section>
        <div className="split wrap">
          <article className="tile">
            <h3>What’s inside</h3>
            <p>
              12-week foundation, September–November: meaning, joy, energy, strengths, belonging,
              contribution. Design an intentional high school. Then monthly coaching January–April.
              Cohorts of 12–16. 90 minutes weekly. 20–30 minutes of experiments between sessions.
            </p>
          </article>
          <article className="tile">
            <h3>How it works</h3>
            <p>
              Sign up in 9th or 10th grade. We’ll place you by schedule and time zone — your
              school, your community, or an international mix. Alumni renewal, monthly follow-on,
              and a senior integration for students who stay the whole journey.
            </p>
          </article>
        </div>
        <div className="wrap" style={{ marginTop: 24 }}>
          <h2>The ikigai compass</h2>
          <div className="checks" style={{ marginTop: 16 }}>
            {[
              ["Joy", "Energy, curiosity, connection, enjoyment"],
              ["Meaning", "Values, relationships, ideas that matter"],
              ["Strengths", "What’s strong — and what you want to grow"],
              ["Belonging", "Where you feel known and able to contribute"],
              ["Contribution", "Who or what you care enough to support"],
              ["Possibility", "Majors, careers, paths worth exploring"],
            ].map(([t, d]) => (
              <div className="check" key={t}>
                <strong>{t}</strong>
                {d}
              </div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 24 }}>
            Decision-making series ($90, 6 weeks) coming soon — majors, extracurriculars, asking
            someone out, the whole messy menu.
          </p>
          <Link className="btn" to="/volunteer" style={{ display: "inline-block", marginTop: 12 }}>
            I want in
          </Link>
        </div>
      </section>
    </>
  );
}

export function Evolved() {
  return (
    <>
      <PageHero kicker="EvolvED Leadership" title="Ready for what comes next.">
        <p>
          A 12-week, research-informed leadership experience for high schoolers. You do not need a
          title. Before you lead a team, you learn to lead yourself.
        </p>
      </PageHero>
      <section>
        <div className="checks wrap">
          {[
            ["Lead yourself", "Values, strengths, who you want to become."],
            ["Stay curious", "Challenge assumptions. Treat setbacks as data."],
            ["Vision → action", "Goals and habits without shame-fuel."],
            ["Perform & recover", "Stress, rest, boundaries, sustainable drive."],
            ["Relational IQ", "Listen, trust, belonging, better rooms."],
            ["Courageous voice", "Disagreement, feedback, advocating for you and others."],
          ].map(([t, d]) => (
            <div className="check" key={t}>
              <strong>{t}</strong>
              {d}
            </div>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 32 }}>
          <h2>How it works</h2>
          <p className="muted">
            Weekly Leadership Lab, peer coaching, challenges, real-world experiments, a Personal
            Leadership Vision and three-goal plan. Completers earn the EvolvED Leadership
            Certificate — usable on college, scholarship, internship, and job apps.
          </p>
          <p className="muted">
            AI is changing learning and work. Leadership is still human. The Harvard Business
            Impact 2026 Global Leadership Study flags adaptability, inquiry, complexity thinking,
            and leading at the intersection of technology and culture.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
            <a className="btn" href={LINKS.newsletter} target="_blank" rel="noreferrer">
              Request a webinar invite
            </a>
            <Link className="ghost" to="/scheduling">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
