'use client';
import { useEffect, useState } from 'react';

// ✏️ Change your clinic phone number here (one place only)
const PHONE = '+91 98765 43210';
const TEL = '+919876543210';
const WA = '919876543210';
const IMG = 'https://imgs.search.brave.com/yBdDB_87mBadIGtxqo9lxqK92qZ9_hVp0gwtg6xjSWA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcGlt/Zy50aXN0YXRpYy5j/b20vMDc5Nzk2MTkv/Yi80L0hpamFtYS1M/b29zZS1DdXAuanBn';

const links = [['home', 'Home'], ['about', 'About'], ['services', 'Therapies'], ['benefits', 'Benefits'], ['process', 'Process'], ['faq', 'FAQ'], ['contact', 'Contact']];

const services = [
  { icon: 'M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-4 3-7 1 1 2 2 3 1-1-2-1-4 0-6z', t: 'Fire cupping', d: 'A flame briefly warms the inside of a glass cup to create suction, then the cup is placed on the skin. Warming, deeply relaxing and quick.', tags: ['Muscle stiffness', 'Back and neck', 'Relaxation'] },
  { icon: 'M4 12a8 8 0 0 1 16 0l-2 7H6zM3 19h18', t: 'Dry cupping', d: 'Cups are placed on the skin with gentle suction and no incisions. A calm, non-invasive session to ease tension and support circulation.', tags: ['Tight muscles', 'Stress', 'Circulation'] },
  { icon: 'M12 3c4 5 7 8 7 12a7 7 0 0 1-14 0c0-4 3-7 7-12z', t: 'Wet cupping (Hijama)', d: 'The Sunnah method: light suction, tiny superficial skin incisions, then a second suction. Performed by trained hands with sterile single-use tools.', tags: ['Sunnah method', 'Headaches', 'Body heaviness'] },
];
const benefits = ['Relief from tight, stiff muscles', 'Neck, shoulder and back comfort', 'A feeling of deep relaxation', 'Support for healthy circulation', 'Ease from tension headaches', 'A traditional routine of self-care'];
const steps = [['Call and book', 'Phone us to choose a slot that suits you.'], ['Consultation', 'We listen to your concerns and confirm which cupping is right for you.'], ['Your session', 'Treatment in a clean, private and quiet room.'], ['Aftercare', 'Simple advice on rest, food and water afterwards.']];
const faqs = [
  ['Does cupping hurt?', 'Most people feel a pulling or tight sensation that settles quickly. We adjust the suction to your comfort.'],
  ['How long does a session take?', 'Usually 30 to 60 minutes including consultation, depending on the type of cupping.'],
  ['Will it leave marks?', 'Round marks are common and normally fade within a few days to a couple of weeks.'],
  ['Who should avoid cupping?', 'Please tell us if you are pregnant, take blood thinners, have a bleeding disorder, a skin infection or a serious illness. We may ask you to check with your doctor first.'],
  ['How do I book a slot?', `Call us on ${PHONE} or message us on WhatsApp. We confirm your time by phone.`],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dots, setDots] = useState([]);
  const [src, setSrc] = useState('/images/hijama-cups.jpg');
  const [noImg, setNoImg] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('js');
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    setDots(Array.from({ length: 26 }, () => {
      const s = 2 + Math.random() * 5;
      return { left: `${Math.random() * 100}%`, width: s, height: s, animationDuration: `${8 + Math.random() * 10}s`, animationDelay: `${-Math.random() * 14}s` };
    }));

    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.15 });
    document.querySelectorAll('.rev').forEach((el) => io.observe(el));

    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? ' sc' : ''}${open ? ' open' : ''}`}>
        <div className="wrap">
          <a href="#home" className="logo">DARUL<b>-</b>HIJAMA<small>Cupping Therapy Clinic</small></a>
          <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
          <ul className="menu">
            {links.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>)}
            <li><a className="btn" href={`tel:${TEL}`}>Call {PHONE}</a></li>
          </ul>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="particles" aria-hidden="true">{dots.map((d, i) => <i key={i} style={d} />)}</div>
        <div className="wrap hero-in">
          <div className="hero-txt">
            <p className="ar" lang="ar" dir="rtl">دار الحجامة</p>
            <h1>Traditional cupping therapy, practised with care</h1>
            <p className="lead">Fire, dry and wet cupping (Hijama) in a calm, hygienic clinic. Call us and reserve your slot today.</p>
            <div className="cta">
              <a className="btn" href={`tel:${TEL}`}>Call to book a slot</a>
              <a className="btn ghost" href="#services">Explore therapies</a>
            </div>
          </div>
          <div className={`hero-img${noImg ? ' noimg' : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="Set of Hijama cups" referrerPolicy="no-referrer" onError={() => (src.startsWith('/') ? setSrc(IMG) : setNoImg(true))} />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap center">
          <h2>A house of healing rooted in the Sunnah</h2>
          <p className="lead">Darul-Hijama means “the house of cupping”. We bring a centuries-old healing tradition into a modern, clean and welcoming space, where every session is unhurried and personal.</p>
          <ul className="ticks row">
            <li>Sterile, single-use tools for wet cupping</li>
            <li>A short consultation before every session</li>
            <li>Clear aftercare advice you can follow at home</li>
          </ul>
        </div>
      </section>

      <section id="services" className="dark">
        <div className="wrap center">
          <h2>Our therapies</h2>
          <p className="lead">Not sure which one suits you? Call us and we will guide you, with no obligation.</p>
          <div className="cards">
            {services.map((s, i) => (
              <article className="card rev" style={{ '--d': `${i * 0.15}s` }} key={s.t}>
                <svg viewBox="0 0 24 24"><path d={s.icon} /></svg>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <ul className="tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <a className="btn" href={`tel:${TEL}`}>Call to book</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits">
        <div className="wrap split">
          <div>
            <h2>Why people choose cupping</h2>
            <p className="lead">Many people turn to cupping for comfort and relaxation. It is a complementary therapy and results vary from person to person.</p>
          </div>
          <ul className="ticks two">{benefits.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>
      </section>

      <section id="process" className="white">
        <div className="wrap">
          <h2>How your visit works</h2>
          <ol className="steps">{steps.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}</ol>
        </div>
      </section>

      <section id="faq">
        <div className="wrap faq">
          <h2>Questions, answered</h2>
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>

      <section id="contact" className="dark">
        <div className="wrap center">
          <h2>Book your slot by phone</h2>
          <a className="phone" href={`tel:${TEL}`}>{PHONE}</a>
          <div className="cta" style={{ justifyContent: 'center' }}>
            <a className="btn" href={`tel:${TEL}`}>Call now</a>
            <a className="btn ghost" href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
          <div className="info">
            <div><b>Clinic hours</b>Mon – Sat, 10:00 am – 8:00 pm<br />Sunday by appointment</div>
            <div><b>Location</b>Your clinic address,<br />City, State, PIN</div>
            <div><b>Booking</b>Slots are confirmed by phone. Walk-ins depend on availability.</div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>© {new Date().getFullYear()} Darul-Hijama. All rights reserved.</p>
          <p>Cupping is a complementary therapy and not a substitute for medical care. Consult your doctor for medical conditions.</p>
        </div>
      </footer>

      <a className="fab" href={`tel:${TEL}`} aria-label="Call Darul-Hijama"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg></a>
    </>
  );
}
