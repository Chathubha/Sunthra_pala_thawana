import { useState, useEffect } from 'react'
import './App.css'
import logoImg from './assets/2.png'
import heroBg from './assets/3.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollTo('hero')}>
            <img src={logoImg} alt="logo" className="nav-logo-img" />
          </div>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollTo('hero')} className="nav-link">මුල් පිටුව</a>
            <a onClick={() => scrollTo('about')} className="nav-link">අප ගැන</a>
            <a onClick={() => scrollTo('products')} className="nav-link">නිෂ්පාදන</a>
            <a onClick={() => scrollTo('gallery')} className="nav-link">ගැලරිය</a>
            <a onClick={() => scrollTo('contact')} className="nav-link nav-cta">සම්බන්ධ වන්න</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-overlay-dark"></div>
        <div className="hero-content">
          <div className="hero-badge">🌱 ස්වභාවික පැළ තවාන</div>
          <h1 className="hero-title">
            සුනේත්‍රා<br />
            <span className="hero-title-accent">පැළ තවාන</span>
          </h1>
          <p className="hero-subtitle">
            ගුණාත්මක පැළ වර්ග ඔබ වෙතට... ස්වභාවයට ආදරය කරන සෑම කෙනෙකුටම අපගේ තවාන විවෘතයි.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('products')}>
              නිෂ්පාදන බලන්න
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              සම්බන්ධ වන්න
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">පැළ වර්ග</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">වසර අත්දැකීම්</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">100+</span>
              <span className="stat-label">සතුටු පාරිභෝගිකයින්</span>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="var(--bg-cream)"/>
          </svg>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">අප ගැන</span>
            <h2 className="section-title">අපගේ <span className="text-accent">කතාව</span></h2>
            <p className="section-desc">
              ස්වභාව ධර්මයට ආදරය කරන පිරිසක් ලෙස අප මෙම තවාන ආරම්භ කළෙමු.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon-wrap">
                <span className="about-icon">🌴</span>
              </div>
              <h3>අපගේ දැක්ම</h3>
              <p>
                ගුණාත්මක පැළ වර්ග බෝ කර ඒවා පරිසර හිතකාමී ලෙස වගා කරමින් සෑම නිවසකටම හරිත පරිසරයක් නිර්මාණය කිරීම අපගේ ඉලක්කයයි.
              </p>
              <div className="about-card-line"></div>
            </div>
            <div className="about-card">
              <div className="about-icon-wrap">
                <span className="about-icon">🌱</span>
              </div>
              <h3>අපගේ මෙහෙවර</h3>
              <p>
                නිරෝගී හා ශක්තිමත් පැළ වර්ග පාරිභෝගිකයන් වෙත ලබාදීමත්, පරිසර සංරක්ෂණයට දායක වීමත් අපගේ මූලික අරමුණයි.
              </p>
              <div className="about-card-line"></div>
            </div>
            <div className="about-card">
              <div className="about-icon-wrap">
                <span className="about-icon">🌺</span>
              </div>
              <h3>අපගේ සේවාව</h3>
              <p>
                පැළ වර්ග තෝරාගැනීම, වගා කිරීම හා නඩත්තු කිරීම පිළිබඳ නොමිලේ උපදෙස් ලබාදීමට අප සැමවිටම සූදානම්ය.
              </p>
              <div className="about-card-line"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">නිෂ්පාදන</span>
            <h2 className="section-title">අපගේ <span className="text-accent">පැළ වර්ග</span></h2>
            <p className="section-desc">
              අප තවානේ ඇති විශේෂ පැළ වර්ග කිහිපයක් පහතින් දක්වා ඇත.
            </p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-img">
                <img src="/images/dehi.webp" alt="දෙහි" />
                <div className="product-img-shine"></div>
              </div>
              <div className="product-body">
                <h3 className="product-name">දෙහි</h3>
                <p className="product-desc">
                  සුදුසුම ගුණාත්මක දෙහි පැළ, රුපියල් 100.
                </p>
                <span className="product-price">රු. 100</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src="/images/pepper.png" alt="ගම්මිරිස්" />
                <div className="product-img-shine"></div>
              </div>
              <div className="product-body">
                <h3 className="product-name">ගම්මිරිස්</h3>
                <p className="product-desc">
                  සුදුසුම ගුණාත්මක ගම්මිරිස් පැළ, රුපියල් 100.
                </p>
                <span className="product-price">රු. 100</span>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src="/images/puwak.png" alt="පුවක්" />
                <div className="product-img-shine"></div>
              </div>
              <div className="product-body">
                <h3 className="product-name">පුවක්</h3>
                <p className="product-desc">
                  සුදුසුම ගුණාත්මක පුවක් පැළ, රුපියල් 100.
                </p>
                <span className="product-price">රු. 100</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">ගැලරිය</span>
            <h2 className="section-title">අපගේ <span className="text-accent">තවාන</span></h2>
            <p className="section-desc">
              අපගේ තවානේ සැබෑ පෙනුම ඔබට මෙතැනින් දැක ගත හැකියි.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <img src="/images/dehi.webp" alt="දෙහි" />
                <div className="gallery-overlay">
                  <span className="gallery-label">දෙහි</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <img src="/images/pepper.png" alt="ගම්මිරිස්" />
                <div className="gallery-overlay">
                  <span className="gallery-label">ගම්මිරිස්</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <img src="/images/puwak.png" alt="පුවක්" />
                <div className="gallery-overlay">
                  <span className="gallery-label">පුවක්</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">සම්බන්ධ වන්න</span>
            <h2 className="section-title">අප හා <span className="text-accent">සම්බන්ධ වන්න</span></h2>
            <p className="section-desc">
              ඔබේ ප්‍රශ්න ඇසීමට හෝ ඇණවුමක් කිරීමට අප හා සම්බන්ධ වන්න.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon-wrap">
                  <span className="contact-icon">📍</span>
                </div>
                <div>
                  <h4>ලිපිනය</h4>
                  <p>සුනේත්‍රා පැළ තවාන , වැවකැලේ, කුඹල්ගමුව</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon-wrap">
                  <span className="contact-icon">📞</span>
                </div>
                <div>
                  <h4>දුරකථන</h4>
                  <p>077 558 6115</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon-wrap">
                  <span className="contact-icon">✉️</span>
                </div>
                <div>
                  <h4>ඊමේල්</h4>
                  <p>sunethrairangani70@gmail.com</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon-wrap">
                  <span className="contact-icon">🕐</span>
                </div>
                <div>
                  <h4>විවෘත වේලාව</h4>
                  <p>උදේ 8.00 - සවස 6.00</p>
                 
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="ඔබේ නම" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="ඊමේල් ලිපිනය" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="දුරකථන අංකය" />
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="ඔබේ පණිවිඩය" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                පණිවිඩය යවන්න
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="footer-logo">
                  <img src={logoImg} alt="logo" className="footer-logo-img" />
                </div>
                <p>ගුණාත්මක පැළ හා ගස් වර්ග ඔබ වෙතට... ස්වභාවයට ආදරය කරන සෑම කෙනෙකුටම අපගේ තවාන විවෘතයි.</p>
                <div className="footer-social">
                  <span className="social-icon">📘</span>
                  <span className="social-icon">📸</span>
                  <span className="social-icon">📱</span>
                  <span className="social-icon">▶️</span>
                </div>
              </div>
              <div className="footer-links">
                <h4>ඉක්මන් සබැඳි</h4>
                <a onClick={() => scrollTo('hero')}>මුල් පිටුව</a>
                <a onClick={() => scrollTo('about')}>අප ගැන</a>
                <a onClick={() => scrollTo('products')}>නිෂ්පාදන</a>
                <a onClick={() => scrollTo('gallery')}>ගැලරිය</a>
                <a onClick={() => scrollTo('contact')}>සම්බන්ධ වන්න</a>
              </div>
              <div className="footer-links">
                <h4>සේවා</h4>
                <a>පැළ ඇණවුම්</a>
                <a>උපදෙස්</a>
                <a>තවාන් සංචාරය</a>
                <a>තොග මිලදී ගැනීම්</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2026 සුනේත්‍රා පැළ තවාන. සියලුම හිමිකම් ඇවිරිණි.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
