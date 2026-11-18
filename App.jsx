import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, Gift, Sparkles, Star, CakeSlice, Mail, ChevronDown,
  PartyPopper, Music2, RotateCcw
} from "lucide-react";

const memories = [
  { date: "The beginning", title: "The day our story began", copy: "Some moments quietly become your favourite chapters. This is one of mine.", icon: "♡" },
  { date: "Little things", title: "Our ordinary magic", copy: "The laughs, the conversations, the silly moments — they mean more to me than you know.", icon: "✦" },
  { date: "Always", title: "More memories to make", copy: "I can't wait for all the places, dreams and tiny adventures still waiting for us.", icon: "∞" }
];

const reasons = [
  ["Your smile", "Because it can make an ordinary day feel a little brighter."],
  ["Your heart", "Because the way you care makes you so special to me."],
  ["Your dreams", "Because I love seeing you grow and cheering you on."],
  ["Your presence", "Because even the simplest moments feel lovely with you."]
];

function FloatingHearts() {
  return (
    <div className="floating-layer" aria-hidden="true">
      {Array.from({ length: 15 }, (_, i) => (
        <motion.span
          key={i}
          className="float-heart"
          style={{ left: `${(i * 37) % 100}%`, fontSize: `${12 + (i % 4) * 8}px` }}
          animate={{ y: ["105vh", "-15vh"], x: [0, (i % 2 ? 22 : -18), 0], opacity: [0, .65, 0], rotate: [0, 25, -15] }}
          transition={{ duration: 12 + (i % 5) * 2, repeat: Infinity, delay: i * .8, ease: "linear" }}
        >♥</motion.span>
      ))}
    </div>
  );
}

function GiftBox({ opened, onOpen }) {
  return (
    <button className={`gift-scene ${opened ? "is-open" : ""}`} onClick={onOpen} aria-label="Open your birthday gift">
      <motion.div className="gift-3d" animate={opened ? { rotateY: 12, y: 8, scale: 1.04 } : { rotateY: -12, y: [0, -8, 0] }} transition={opened ? { duration: .7 } : { duration: 3, repeat: Infinity }}>
        <div className="gift-lid"><span className="gift-bow">♡</span></div>
        <div className="gift-body"><span className="gift-ribbon-v" /><span className="gift-ribbon-h" /></div>
      </motion.div>
      <span className="gift-hint">{opened ? "Your surprise is waiting below ♥" : "Tap the gift to open it"}</span>
    </button>
  );
}

function Cake({ blown, onBlow }) {
  return (
    <div className="cake-wrap">
      <div className="cake-scene" aria-label="A pink birthday cake with candles">
        <div className="flames">
          {[0, 1, 2].map((n) => <motion.span key={n} className={`flame flame-${n}`} animate={blown ? { opacity: 0, scale: .1, y: -12 } : { opacity: [1, .75, 1], scaleY: [1, .8, 1.08] }} transition={{ duration: .55, repeat: blown ? 0 : Infinity, delay: n * .12 }}>♥</motion.span>)}
        </div>
        <div className="candles"><i /><i /><i /></div>
        <div className="cake-top" />
        <div className="cake-middle"><span>♥</span><span>♥</span><span>♥</span></div>
        <div className="cake-bottom" />
        <div className="cake-plate" />
      </div>
      <button className="primary-btn" onClick={onBlow}>
        <Sparkles size={17} /> {blown ? "Light the candles again" : "Make a wish & blow"}
      </button>
      {blown && <motion.p className="wish-note" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>May every beautiful wish find its way to you, Anku. ✨</motion.p>}
    </div>
  );
}

export default function App() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [flipped, setFlipped] = useState([]);
  const [letterOpen, setLetterOpen] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const toggleReason = (i) => setFlipped((old) => old.includes(i) ? old.filter(x => x !== i) : [...old, i]);
  const celebrate = () => {
    setShowConfetti(true);
    window.setTimeout(() => setShowConfetti(false), 2600);
  };

  return (
    <main>
      <FloatingHearts />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <nav className="topbar">
        <a href="#home" className="brand"><Heart size={17} fill="currentColor" /> made with love</a>
        <a href="#letter" className="nav-link">A little note for you ↓</a>
      </nav>

      <section id="home" className="hero section-shell">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <div className="eyebrow"><Sparkles size={14} /> TODAY IS ALL ABOUT YOU</div>
          <h1>Happy Birthday,<br /><em>Anku</em><span className="heart-dot">♥</span></h1>
          <p className="hero-sub">A surprise from the girl who loves you ❤️</p>
          <p className="hero-small">I made a little corner of the internet just for you. Take your time, explore, and know that every little detail comes with lots of love.</p>
          <a className="primary-btn hero-btn" href="#surprise">Explore your surprise <Heart size={16} fill="currentColor" /></a>
          <div className="tiny-note"><Star size={13} fill="currentColor" /> made especially for my favourite person</div>
        </motion.div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .2 }}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <motion.div className="heart-3d" animate={{ y: [0, -14, 0], rotate: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>♥</motion.div>
          <div className="sparkle s1">✦</div><div className="sparkle s2">✧</div><div className="sparkle s3">✦</div>
          <div className="art-caption">you are loved <span>♡</span></div>
        </motion.div>
        <a className="scroll-cue" href="#surprise"><ChevronDown size={18} /> scroll for your surprise</a>
      </section>

      <section id="surprise" className="section-shell surprise-section">
        <div className="section-heading">
          <span className="eyebrow">A LITTLE SOMETHING FOR YOU</span>
          <h2>First, open your <em>gift</em></h2>
          <p>Go on, birthday boy. It's all yours.</p>
        </div>
        <GiftBox opened={giftOpened} onOpen={() => { setGiftOpened(true); celebrate(); }} />
        <AnimatePresence>
          {giftOpened && <motion.div className="gift-reveal" initial={{ opacity: 0, y: 20, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }}>
            <Sparkles size={22} />
            <h3>Surprise, Anku!</h3>
            <p>If I could wrap up all the happiness you bring me, this little box would never be big enough.</p>
            <a href="#reasons" className="text-link">There's more below ↓</a>
          </motion.div>}
        </AnimatePresence>
      </section>

      <section className="section-shell memories-section">
        <div className="section-heading">
          <span className="eyebrow">OUR LITTLE UNIVERSE</span>
          <h2>Some moments, <em>some magic</em></h2>
          <p>A tiny reminder that the best stories are still being written.</p>
        </div>
        <div className="memory-grid">
          {memories.map((m, i) => <motion.article className="memory-card" key={m.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12 }}>
            <div className="memory-icon">{m.icon}</div><span className="memory-date">{m.date}</span><h3>{m.title}</h3><p>{m.copy}</p>
          </motion.article>)}
        </div>
        <p className="edit-tip">You can personalise these three cards with your own dates and memories in <code>src/App.jsx</code>.</p>
      </section>

      <section id="reasons" className="section-shell reasons-section">
        <div className="section-heading">
          <span className="eyebrow">A SECRET COLLECTION</span>
          <h2>Little reasons why I <em>love you</em></h2>
          <p>Tap each card to turn it over. There are no wrong answers. ♥</p>
        </div>
        <div className="reason-grid">
          {reasons.map(([title, copy], i) => <button className={`reason-card ${flipped.includes(i) ? "flipped" : ""}`} key={title} onClick={() => toggleReason(i)}>
            <span className="reason-front"><Heart size={24} fill="currentColor" /><strong>{title}</strong><small>tap to reveal</small></span>
            <span className="reason-back"><Sparkles size={20} /><strong>{copy}</strong><small>tap to turn back</small></span>
          </button>)}
        </div>
      </section>

      <section className="section-shell cake-section">
        <div className="section-heading">
          <span className="eyebrow">MAKE A WISH</span>
          <h2>One more birthday <em>moment</em></h2>
          <p>Close your eyes, make a wish, and tap the button.</p>
        </div>
        <Cake blown={candlesBlown} onBlow={() => { setCandlesBlown(!candlesBlown); if (!candlesBlown) celebrate(); }} />
      </section>

      <section id="letter" className="section-shell letter-section">
        <div className="letter-card">
          <div className="letter-decoration">♡</div>
          <span className="eyebrow">FROM MY HEART TO YOURS</span>
          <h2>A little letter <em>for you</em></h2>
          <p className="letter-teaser">Some things are too special to fit into a birthday wish...</p>
          <button className="primary-btn" onClick={() => setLetterOpen(!letterOpen)}><Mail size={17} /> {letterOpen ? "Close your letter" : "Open your letter"}</button>
          <AnimatePresence>
            {letterOpen && <motion.div className="love-letter" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              <p>My dearest Anku,</p>
              <p>Happy birthday, my love. I hope this new year of your life brings you peace, good health, courage and all the success your heart is working towards. I am so proud of you and I will always be cheering for your dreams.</p>
              <p>Thank you for being you. I hope you never forget how special you are and how much you are loved. May we make many more beautiful memories, laugh over little things and keep choosing happiness together.</p>
              <p>Today and always, I wish the very best for you.</p>
              <p className="signature">With all my love,<br />Your girl ❤️</p>
              <p className="edit-tip">Make this letter yours: edit the text in the <code>love-letter</code> section of <code>src/App.jsx</code>.</p>
            </motion.div>}
          </AnimatePresence>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-heart">♥</div>
        <p>Made with a little code and a whole lot of love.</p>
        <span>Happy Birthday, Anku ✨</span>
      </footer>

      <AnimatePresence>
        {showConfetti && <div className="confetti-layer" aria-hidden="true">
          {Array.from({ length: 45 }, (_, i) => <motion.i key={i} initial={{ opacity: 1, y: -30, x: `${(i * 19) % 100}vw`, rotate: 0 }} animate={{ opacity: 0, y: "105vh", rotate: 720, x: `${((i * 19) % 100) + (i % 2 ? 12 : -12)}vw` }} transition={{ duration: 2.2 + (i % 5) * .2, ease: "easeIn" }} />)}
        </div>}
      </AnimatePresence>
      <button className="celebrate-fab" onClick={celebrate} aria-label="Celebrate"><PartyPopper size={19} /></button>
    </main>
  );
}
