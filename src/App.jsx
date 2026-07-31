import { useState, useEffect } from 'react'
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

  const navLinks = [
    { id: 'hero', label: 'මුල් පිටුව' },
    { id: 'about', label: 'අප ගැන' },
    { id: 'products', label: 'නිෂ්පාදන' },
    { id: 'gallery', label: 'ගැලරිය' },
  ]

  const products = [
    { img: '/images/dehi.webp', name: 'දෙහි', desc: 'සුදුසුම ගුණාත්මක දෙහි පැළ', price: 'රු. 100' },
    { img: '/images/pepper.png', name: 'ගම්මිරිස්', desc: 'සුදුසුම ගුණාත්මක ගම්මිරිස් පැළ', price: 'රු. 100' },
    { img: '/images/puwak.png', name: 'පුවක්', desc: 'සුදුසුම ගුණාත්මක පුවක් පැළ', price: 'රු. 100' },
  ]

  const aboutCards = [
    { icon: '🌴', title: 'අපගේ දැක්ම', text: 'ගුණාත්මක පැළ වර්ග බෝ කර ඒවා පරිසර හිතකාමී ලෙස වගා කරමින් සෑම නිවසකටම හරිත පරිසරයක් නිර්මාණය කිරීම අපගේ ඉලක්කයයි.' },
    { icon: '🌱', title: 'අපගේ මෙහෙවර', text: 'නිරෝගී හා ශක්තිමත් පැළ වර්ග පාරිභෝගිකයන් වෙත ලබාදීමත්, පරිසර සංරක්ෂණයට දායක වීමත් අපගේ මූලික අරමුණයි.' },
    { icon: '🌺', title: 'අපගේ සේවාව', text: 'පැළ වර්ග තෝරාගැනීම, වගා කිරීම හා නඩත්තු කිරීම පිළිබඳ නොමිලේ උපදෙස් ලබාදීමට අප සැමවිටම සූදානම්ය.' },
  ]

  const contactInfo = [
    { icon: '📍', title: 'ලිපිනය', value: 'සුනේත්‍රා පැළ තවාන , වැවකැලේ, කුඹල්ගමුව' },
    { icon: '📞', title: 'දුරකථන', value: '077 558 6115' },
    { icon: '✉️', title: 'ඊමේල්', value: 'sunethrairangani70@gmail.com' },
    { icon: '🕐', title: 'විවෘත වේලාව', value: 'උදේ 8.00 - සවස 6.00' },
  ]

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
          <button onClick={() => scrollTo('hero')} className="cursor-pointer" aria-label="ගෙදර">
            <img
              src={logoImg}
              alt="logo"
              className="h-14 w-14 rounded-full border-2 border-white object-cover shadow"
            />
          </button>

          <button
            className={`flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl lg:hidden ${
              scrolled ? 'bg-primary/10' : 'bg-white/15 backdrop-blur'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''} ${scrolled ? 'text-primary' : 'text-white'}`}></span>
            <span className={`h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? 'opacity-0' : ''} ${scrolled ? 'text-primary' : 'text-white'}`}></span>
            <span className={`h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''} ${scrolled ? 'text-primary' : 'text-white'}`}></span>
          </button>

          <div
            className={`absolute left-0 right-0 top-full overflow-hidden bg-white shadow-xl transition-all duration-300 lg:static lg:flex lg:items-center lg:bg-transparent lg:shadow-none ${
              menuOpen ? 'max-h-80' : 'max-h-0 lg:max-h-none'
            }`}
          >
            <div className="flex flex-col gap-1 px-5 py-4 lg:flex-row lg:items-center lg:gap-8 lg:px-0 lg:py-0">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`cursor-pointer py-2 text-sm font-semibold transition-colors lg:py-0 ${
                    scrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-accent-light'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="mt-2 cursor-pointer rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-primary-dark shadow-md transition hover:bg-accent-light lg:mt-0"
              >
                සම්බන්ධ වන්න
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 bg-primary-dark/80"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-32 text-center text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-accent-light backdrop-blur">
            🌱 ස්වභාවික පැළ තවාන
          </div>
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            සුනේත්‍රා<br />
            <span className="text-accent">පැළ තවාන</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            ගුණාත්මක පැළ වර්ග ඔබ වෙතට... ස්වභාවයට ආදරය කරන සෑම කෙනෙකුටම අපගේ තවාන විවෘතයි.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo('products')}
              className="group flex cursor-pointer items-center gap-3 rounded-full bg-accent px-9 py-4 text-base font-bold text-primary-dark shadow-xl transition hover:bg-accent-light"
            >
              නිෂ්පාදන බලන්න
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="cursor-pointer rounded-full border-2 border-white/60 px-9 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              සම්බන්ධ වන්න
            </button>
          </div>

          <div className="mx-auto mt-14 flex max-w-xl items-center justify-center divide-x divide-white/20 rounded-3xl border border-white/15 bg-white/10 px-6 py-6 backdrop-blur">
            <div className="flex-1 px-2">
              <p className="text-3xl font-extrabold text-accent-light md:text-4xl">10+</p>
              <p className="mt-1 text-sm text-white/80">පැළ වර්ග</p>
            </div>
            <div className="flex-1 px-2">
              <p className="text-3xl font-extrabold text-accent-light md:text-4xl">10+</p>
              <p className="mt-1 text-sm text-white/80">වසර අත්දැකීම්</p>
            </div>
            <div className="flex-1 px-2">
              <p className="text-3xl font-extrabold text-accent-light md:text-4xl">100+</p>
              <p className="mt-1 text-sm text-white/80">සතුටු පාරිභෝගිකයින්</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-16 w-full md:h-24">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#faf8f0" />
          </svg>
        </div>
      </section>

      <section id="about" className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              අප ගැන
            </span>
            <h2 className="text-4xl font-extrabold text-primary-dark md:text-5xl">
              අපගේ <span className="text-accent">කතාව</span>
            </h2>
            <p className="mt-4 text-gray-500">
              ස්වභාව ධර්මයට ආදරය කරන පිරිසක් ලෙස අප මෙම තවාන ආරම්භ කළෙමු.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl border border-primary/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 text-4xl transition-transform group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary-dark">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              නිෂ්පාදන
            </span>
            <h2 className="text-4xl font-extrabold text-primary-dark md:text-5xl">
              අපගේ <span className="text-accent">පැළ වර්ග</span>
            </h2>
            <p className="mt-4 text-gray-500">
              අප තවානේ ඇති විශේෂ පැළ වර්ග කිහිපයක් පහතින් දක්වා ඇත.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-80 items-center justify-center bg-gradient-to-b from-mist to-cream p-6">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="text-lg font-bold text-primary-dark">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent px-5 py-2 text-base font-bold text-primary-dark shadow">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              ගැලරිය
            </span>
            <h2 className="text-4xl font-extrabold text-primary-dark md:text-5xl">
              අපගේ <span className="text-accent">තවාන</span>
            </h2>
            <p className="mt-4 text-gray-500">
              අපගේ තවානේ සැබෑ පෙනුම ඔබට මෙතැනින් දැක ගත හැකියි.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div key={product.name} className="group relative h-72 overflow-hidden rounded-3xl shadow-md">
                <img
                  src={product.img}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-5 text-white">
                  <span className="text-lg font-bold">{product.name}</span>
                  <span className="rounded-full bg-accent px-4 py-1 text-sm font-bold text-primary-dark">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              සම්බන්ධ වන්න
            </span>
            <h2 className="text-4xl font-extrabold text-primary-dark md:text-5xl">
              අප හා <span className="text-accent">සම්බන්ධ වන්න</span>
            </h2>
            <p className="mt-4 text-gray-500">
              ඔබේ ප්‍රශ්න ඇසීමට හෝ ඇණවුමක් කිරීමට අප හා සම්බන්ධ වන්න.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-light to-primary-dark p-8 text-white shadow-xl md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10"></div>
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20"></div>

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-light backdrop-blur">
                  🌿 අප අමතන්න
                </span>
                <h3 className="mt-5 text-2xl font-extrabold md:text-3xl">අප හා <span className="text-accent-light">කතා කරන්න</span></h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  ඔබට ප්‍රශ්න ඇත්නම් හෝ පැළ ඇණවුමක් කිරීමට අවශ්‍ය නම්, පහත තොරතුරු ඔස්සේ අප හා සම්බන්ධ වන්න.
                </p>

                <div className="mt-8 space-y-4">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur transition hover:bg-white/20"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-xl shadow-md">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-accent-light">{item.title}</h4>
                        <p className="mt-0.5 text-sm break-words text-white/90">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4 rounded-2xl bg-accent p-4 text-primary-dark shadow-lg">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <p className="text-sm font-bold">දවසේ පැළ ඇණවුම්</p>
                    <p className="text-xs font-medium">සෑම දිනකම උදේ 8.00 - සවස 6.00</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 shadow-md md:p-10">
              <span className="absolute right-0 top-0 rounded-bl-3xl bg-primary/5 px-5 py-2 text-xs font-bold text-primary">
                📝 පණිවිඩයක් එවන්න
              </span>
              <div className="grid gap-5 pt-8">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-primary-dark">ඔබේ නම</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
                    <input
                      type="text"
                      placeholder="ඔබේ නම ඇතුළත් කරන්න"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-mist/60 py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-primary-dark">ඊමේල් ලිපිනය</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">✉️</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-mist/60 py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-primary-dark">දුරකථන අංකය</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📞</span>
                    <input
                      type="tel"
                      placeholder="07X XXX XXXX"
                      className="w-full rounded-xl border border-gray-200 bg-mist/60 py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-primary-dark">ඔබේ පණිවිඩය</label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-gray-400">💬</span>
                    <textarea
                      rows="4"
                      placeholder="ඔබේ පණිවිඩය මෙතැන ලියන්න..."
                      required
                      className="w-full resize-none rounded-xl border border-gray-200 bg-mist/60 py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary to-primary-light py-4 text-base font-bold text-white shadow-lg transition hover:shadow-xl"
                >
                  පණිවිඩය යවන්න
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary-dark text-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <img src={logoImg} alt="logo" className="mb-5 h-16 w-16 rounded-full border-2 border-white/30 object-cover" />
              <p className="text-sm leading-relaxed text-white/70">
                ගුණාත්මක පැළ හා ගස් වර්ග ඔබ වෙතට... ස්වභාවයට ආදරය කරන සෑම කෙනෙකුටම අපගේ තවාන විවෘතයි.
              </p>
              <div className="mt-6 flex gap-3">
                <span className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:bg-accent hover:text-primary-dark">📘</span>
                <span className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:bg-accent hover:text-primary-dark">📸</span>
                <span className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:bg-accent hover:text-primary-dark">📱</span>
                <span className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:bg-accent hover:text-primary-dark">▶️</span>
              </div>
            </div>
            <div>
              <h4 className="mb-5 text-lg font-bold text-accent-light">ඉක්මන් සබැඳි</h4>
              <ul className="space-y-3 text-sm text-white/70">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a onClick={() => scrollTo(link.id)} className="cursor-pointer transition hover:text-accent-light">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a onClick={() => scrollTo('contact')} className="cursor-pointer transition hover:text-accent-light">
                    සම්බන්ධ වන්න
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-lg font-bold text-accent-light">සේවා</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>පැළ ඇණවුම්</li>
                <li>උපදෙස්</li>
                <li>තවාන් සංචාරය</li>
                <li>තොග මිලදී ගැනීම්</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
          © 2026 සුනේත්‍රා පැළ තවාන. සියලුම හිමිකම් ඇවිරිණි.
        </div>
      </footer>
    </>
  )
}

export default App
