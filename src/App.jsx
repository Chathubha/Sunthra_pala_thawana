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

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const f = e.target
    const text =
      `හෙලෝ සුනේත්‍රා පැළ තවාන! 🌱\n\n` +
      `ඔබේ නම: ${f.name.value}\n` +
      `ඊමේල්: ${f.email.value}\n` +
      `දුරකථන: ${f.phone.value}\n\n` +
      `පණිවිඩය:\n${f.message.value}`
    window.open(`https://wa.me/94763285018?text=${encodeURIComponent(text)}`, '_blank')
    f.reset()
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

      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/40"></div>

        <span className="animate-float absolute left-[6%] top-[22%] z-10 text-4xl opacity-60 md:text-5xl">🌿</span>
        <span className="animate-float-delay absolute right-[10%] top-[18%] z-10 text-3xl opacity-50 md:text-4xl">🍃</span>
        <span className="animate-float-slow absolute bottom-[28%] left-[12%] z-10 text-3xl opacity-50 md:text-4xl">🌱</span>
        <span className="animate-float absolute right-[16%] bottom-[24%] z-10 text-4xl opacity-40 md:text-5xl">🌳</span>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-5 pb-24 pt-32 lg:grid-cols-2 lg:items-center">
          <div className="text-center text-white lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-accent-light backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
              </span>
              🌱 ස්වභාවික පැළ තවාන
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.15] md:text-7xl">
              සුනේත්‍රා<br />
              <span className="text-gradient">පැළ තවාන</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-white/85 md:text-xl lg:mx-0">
              ගුණාත්මක පැළ වර්ග ඔබ වෙතට... ස්වභාවයට ආදරය කරන සෑම කෙනෙකුටම අපගේ තවාන විවෘතයි.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={() => scrollTo('products')}
                className="group flex cursor-pointer items-center gap-3 rounded-full bg-accent px-9 py-4 text-base font-bold text-primary-dark shadow-xl transition hover:bg-accent-light hover:shadow-2xl"
              >
                නිෂ්පාදන බලන්න
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="cursor-pointer rounded-full border-2 border-white/60 px-9 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/10"
              >
                සම්බන්ධ වන්න
              </button>
            </div>

            <div className="mx-auto mt-12 grid max-w-xl grid-cols-3 divide-x divide-white/15 rounded-3xl border border-white/15 bg-white/10 px-4 py-6 backdrop-blur lg:mx-0">
              <div className="px-3">
                <p className="text-3xl font-extrabold text-accent-light md:text-4xl">10+</p>
                <p className="mt-1 text-sm text-white/80">පැළ වර්ග</p>
              </div>
              <div className="px-3">
                <p className="text-3xl font-extrabold text-accent-light md:text-4xl">10+</p>
                <p className="mt-1 text-sm text-white/80">වසර අත්දැකීම්</p>
              </div>
              <div className="px-3">
                <p className="text-3xl font-extrabold text-accent-light md:text-4xl">100+</p>
                <p className="mt-1 text-sm text-white/80">සතුටු පාරිභෝගිකයින්</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30"></div>
            <div className="animate-float-slow absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"></div>

            <div className="animate-float relative mx-auto w-72 overflow-hidden rounded-[2rem] border-4 border-white/20 bg-white/10 shadow-2xl backdrop-blur">
              <img src={logoImg} alt="සුනේත්‍රා පැළ තවාන" className="h-96 w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-5 pt-16 text-white">
                <p className="text-sm font-semibold text-accent-light">🌟 විශේෂ ඇණවුම්</p>
                <p className="text-lg font-extrabold">ඔබේ පැළ තෝරාගන්න</p>
              </div>
            </div>

            <div className="animate-float-delay absolute -left-8 top-6 rounded-2xl border border-white/20 bg-white/90 px-5 py-3 shadow-xl backdrop-blur">
              <p className="text-2xl">🌱</p>
              <p className="text-xs font-bold text-primary-dark">පැළ 100+</p>
              <p className="text-[10px] text-gray-400">දැන් තොගේ</p>
            </div>
            <div className="animate-float absolute -right-6 bottom-16 rounded-2xl border border-white/20 bg-white/90 px-5 py-3 shadow-xl backdrop-blur">
              <p className="text-2xl">💰</p>
              <p className="text-xs font-bold text-primary-dark">රු. 100 සිට</p>
              <p className="text-[10px] text-gray-400">දැරිය හැකි මිල</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-16 w-full md:h-24">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#faf8f0" />
          </svg>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-cream py-24">
        <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-primary/5"></div>
        <div className="pointer-events-none absolute -right-32 bottom-16 h-80 w-80 rounded-full bg-accent/10"></div>

        <div className="relative mx-auto max-w-6xl px-5">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full border-4 border-accent/30"></div>
              <div className="absolute -bottom-8 -right-4 h-44 w-44 rounded-full border border-primary/20"></div>

              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
                <img src={logoImg} alt="අපගේ තවාන" className="h-[26rem] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent"></div>
              </div>

              <div className="animate-float absolute -bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-2xl">
                <p className="text-3xl font-extrabold text-primary">10+</p>
                <p className="text-xs font-semibold text-gray-500">වසර අත්දැකීම්</p>
              </div>
            </div>

            <div>
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                අප ගැන
              </span>
              <h2 className="text-4xl font-extrabold text-primary-dark md:text-5xl">
                අපගේ <span className="text-accent">කතාව</span>
              </h2>
              <p className="mt-5 leading-relaxed text-gray-500">
                ස්වභාව ධර්මයට ආදරය කරන පිරිසක් ලෙස අප මෙම තවාන ආරම්භ කළෙමු. වසර ගණනාවක
                පුළුල් අත්දැකීම් මත පදනම්ව ගුණාත්මක පැළ වර්ග පාරිභෝගිකයන් වෙත
                ලබාදීම අපගේ ප්‍රධාන ඉලක්කයයි.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'සියලුම පැළ ගුණාත්මක බවින් තෝරා ගනු ලැබේ',
                  'වගා කිරීම පිළිබඳ නොමිලේ උපදෙස්',
                  'සාධාරණ හා තරඟකාරී මිල ගණන්',
                  'ඇණවුම් සඳහා නිවසටම බෙදාහැරීම',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                      ✓
                    </span>
                    <p className="text-sm font-medium text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {aboutCards.map((card, i) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 pt-12 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-primary-light to-accent opacity-60 transition-opacity group-hover:opacity-100"></div>
                <span className="absolute right-6 top-5 text-5xl font-extrabold text-primary/5 transition-colors group-hover:text-accent/20">
                  0{i + 1}
                </span>
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
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
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative flex h-80 items-center justify-center bg-gradient-to-b from-mist to-cream p-6">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur">
                    🌱 නවතම
                  </span>
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-accent px-4 py-1.5 text-sm font-extrabold text-primary-dark shadow-md">
                    {product.price}
                  </span>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-dark/0 transition-colors duration-300 group-hover:bg-primary-dark/5"></div>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-gray-100 p-6">
                  <div>
                    <h3 className="text-lg font-bold text-primary-dark">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                  </div>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="shrink-0 cursor-pointer rounded-full border-2 border-primary px-5 py-2 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lg"
                  >
                    ඇණවුම්
                  </button>
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
              <div
                key={product.name}
                className="group relative h-[26rem] overflow-hidden rounded-3xl bg-gradient-to-b from-mist to-cream shadow-md"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="absolute inset-0 m-auto h-full w-full object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                />
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

            <form onSubmit={handleWhatsAppSubmit} className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 shadow-md md:p-10">
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
                      name="name"
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
                      name="email"
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
                      name="phone"
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
                      name="message"
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

      <footer className="relative overflow-hidden bg-primary-dark text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10"></div>
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/5"></div>

        <div className="relative mx-auto max-w-6xl px-5 pt-16">
          <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <img src={logoImg} alt="logo" className="mb-5 h-16 w-16 rounded-full border-2 border-accent/40 object-cover shadow-lg" />
              <p className="max-w-md text-sm leading-relaxed text-white/70">
                ගුණාත්මක පැළ හා ගස් වර්ග ඔබ වෙතට... ස්වභාවයට ආදරය කරන සෑම කෙනෙකුටම අපගේ තවාන විවෘතයි.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-primary-dark"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/94763285018"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-primary-dark"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-primary-dark"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-primary-dark"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-lg font-bold text-accent-light">ඉක්මන් සබැඳි</h4>
              <ul className="space-y-3 text-sm text-white/70">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      onClick={() => scrollTo(link.id)}
                      className="group inline-flex cursor-pointer items-center gap-2 transition hover:text-accent-light"
                    >
                      <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    onClick={() => scrollTo('contact')}
                    className="group inline-flex cursor-pointer items-center gap-2 transition hover:text-accent-light"
                  >
                    <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
                    සම්බන්ධ වන්න
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-lg font-bold text-accent-light">සම්බන්ධතා</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <span>📍</span>
                  <span>සුනේත්‍රා පැළ තවාන , වැවකැලේ, කුඹල්ගමුව</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📞</span>
                  <span>077 558 6115</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>✉️</span>
                  <span className="break-all">sunethrairangani70@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🕐</span>
                  <span>උදේ 8.00 - සවස 6.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 py-6 text-center text-sm text-white/60">
          <p>© 2026 සුනේත්‍රා පැළ තවාන. සියලුම හිමිකම් ඇවිරිණි.</p>
        </div>
      </footer>
    </>
  )
}

export default App
