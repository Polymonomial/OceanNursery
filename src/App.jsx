import { useState, useEffect } from 'react'
import logo from './assets/ocean_logo_exact_no_background_upscaled.png'
import logowhite from './assets/logowhite.png'
import slide1 from './assets/carasole/Image_20260624022222_153_10.jpg'
import slide2 from './assets/carasole/Image_20260624023151_166_10.jpg'
import slide3 from './assets/carasole/Image_20260624023228_168_10.jpg'
import slide4 from './assets/carasole/Image_20260624023342_171_10.jpg'
import slide5 from './assets/carasole/Image_20260624023504_175_10.jpg'
import slide6 from './assets/carasole/Image_20260624023546_180_10.jpg'
import slide7 from './assets/carasole/Image_20260624023801_190_10.jpg'
import slide8 from './assets/carasole/Image_20260624024047_198_10.jpg'
import slide9 from './assets/carasole/Image_20260624024421_205_10.jpg'
import slide10 from './assets/carasole/Image_20260624024526_211_10.jpg'
import './App.css'

const heroSlides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(i => (i + 1) % heroSlides.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-sans text-gray-800">

      {/* ── Navbar ── */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Ocean Nurseries & Landscaping Design Ltd." className="h-14 w-auto" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-green-700 transition-colors">About</a>
            <a href="#services" className="hover:text-green-700 transition-colors">Services</a>
            <a href="#clients" className="hover:text-green-700 transition-colors">Our Clients</a>
            <a href="#gallery" className="hover:text-green-700 transition-colors">Gallery</a>
            <a href="#footer" className="hover:text-green-700 transition-colors">Contact</a>
          </nav>

          

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-gray-600">
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-green-700">Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-green-700">About</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-green-700">Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-green-700">Contact</a>
            {/* <a href="#contact" className="bg-green-700 text-white text-center px-5 py-2 rounded-full hover:bg-green-800 transition-colors">Get a Quote</a> */}
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 px-4 text-center">
        {/* Carousel background */}
        {heroSlides.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: i === heroIndex ? 1 : 0,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-green-950/65" />
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-white font-semibold tracking-widest uppercase text-sm mb-4">
            Serving Macau Since 1979 &nbsp;·&nbsp; 自1979年服務澳門
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            Macau's Trusted Nursery &amp; Landscaping Experts
          </h1>
          <p className="text-white text-2xl md:text-3xl font-semibold mb-6">
            澳門信賴的苗圃及園景設計專家
          </p>
          <p className="text-white text-base md:text-lg mb-2 max-w-xl mx-auto">
            Over 40 years of plant supply, rental, maintenance, and professional landscape design — serving hotels, government departments, and public spaces across Macau.
          </p>
          <p className="text-white text-sm md:text-base mb-10 max-w-xl mx-auto">
            逾40年植物供應、租賃、維護及專業園景設計服務，為澳門各大酒店、赌场、政府部門、私人屋苑、公共場所提供優質綠化方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-green-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-500 transition-colors">
              Explore Services
            </a>
            <a href="#footer" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === heroIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      {/* <section className="bg-green-700 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Plant Species', zh: '植物品種' },
            { value: '40+', label: 'Years Experience', zh: '年豐富經驗' },
            { value: '100+', label: 'Major Clients', zh: '主要客戶' },
            { value: '70+', label: 'Expert Staff', zh: '專業員工' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-green-200 text-sm mt-1">{stat.label}</p>
              <p className="text-green-300 text-xs mt-0.5">{stat.zh}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── Services ── */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-600 font-semibold uppercase tracking-widest text-sm">What We Offer · 我們的服務範疇</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Services · 我們的服務</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🌱', title: 'Plant Sales', zh: '植物銷售', desc: 'Wide selection of indoor, outdoor, tropical, and seasonal plants for every space and budget.', zhDesc: '提供各類室內、室外、熱帶及季節性植物，適合各種空間及預算。' },
              { icon: '🏡', title: 'Landscaping', zh: '園景設計', desc: 'Professional landscape design and installation tailored to your property and vision.', zhDesc: '專業園景設計及施工服務，為您的物業度身打造理想園景。' },
              { icon: '✂️', title: 'Garden Maintenance', zh: '花園護理', desc: 'Regular pruning, fertilizing, and care to keep your garden thriving year-round.', zhDesc: '定期修剪、施肥及護理，讓您的花園四季常青。' },
              { icon: '🪴', title: 'Potting & Repotting', zh: '換盆服務', desc: 'Expert potting services using premium soil mixes for healthy root development.', zhDesc: '採用優質土壤配方，提供專業換盆服務，促進健康根系生長。' },
              { icon: '🚚', title: 'Delivery & Installation', zh: '送貨及安裝', desc: 'Same-week delivery and installation of plants and arrangements to your location.', zhDesc: '本週內完成植物及花藝陳設的送貨及安裝服務。' },
              { icon: '📋', title: 'Garden Consultation', zh: '花園諮詢', desc: 'One-on-one sessions with our horticulturists to plan your perfect green space.', zhDesc: '與我們的園藝師進行一對一諮詢，規劃您的理想綠色空間。' },
            ].map(service => (
              <div key={service.title} className="bg-green-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-green-900 mb-1">{service.title}</h3>
                <p className="text-green-700 text-sm font-medium mb-2">{service.zh}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-1">{service.desc}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{service.zhDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-center md:text-left">
            <p className="text-green-600 font-semibold uppercase tracking-widest text-sm">Our Story · 我們的故事</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Rooted in Passion, <br /> Growing with Purpose</h2>
            <p className="text-green-700 font-semibold text-xl md:text-2xl mb-6">根植熱情，茁壯成長</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in 1979 in Macau, Ocean Nurseries and Landscaping Design Ltd has been serving Macau with heart and professionalism for more than 40 years. 

Today, the company has expanded to grow a wide variety of top quality, hardy plants spread over 1,000 square meter of land in Macau with a strong support on nursery supply from 60 acres of land in Guangdong China. We have provided horticulture services to over 100 major hotels, government departments, schools and other public utilities since opening. Quality plant supply, rental and maintenance services are not our only strengths, but we also provide professional indoor and outdoor landscape designs.

We have a professional team of close to 70 experienced and knowledgeable, well-trained and most of all sincere staff who are ready to render assistance to you in addressing your specific needs in greenery, horticulture and landscaping design.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              海洋園藝有限公司於1979年在澳門創立，40多年來以誠心與專業服務澳門各界。

時至今日，公司已擴展至在澳門逾1,000平方米的土地上種植各類優質耐旱植物，並有廣東省60英畝的苗木生產基地支援。自創立以來，我們已為逾100間主要酒店、賭場、政府部門、學校、私人屋苑及其他公共機構提供園藝服務。優質植物供應、租賃及維護服務固然是我們的強項，我們同時亦提供專業的室內外園景設計。

我們擁有近70名經驗豐富、知識淵博、訓練有素且誠懇有禮的專業團隊，隨時為您解決綠化、園藝及園景設計方面的各類需求。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe every space deserves a touch of nature. Our team of certified horticulturists and landscapers work with homeowners, businesses, and communities to create beautiful, sustainable green environments.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              我們深信每一個空間都值得擁有一抹大自然的氣息。我們的認證園藝師及景觀設計師與業主、企業及社區攜手合作，共同打造美麗而可持續的綠色環境。
            </p>
            {/* <a href="#contact" className="bg-green-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-800 transition-colors">
              Meet Our Team · 認識我們的團隊
            </a> */}
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {['🌺', '🌵', '🍃', '🌸'].map((emoji, i) => (
              <div key={i} className="bg-white rounded-2xl h-36 flex items-center justify-center text-5xl shadow-sm">
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-600 font-semibold uppercase tracking-widest text-sm">Our Work · 我們的作品</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Garden Gallery · 花園相集</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['🌿', '🌹', '🌴', '🌻', '🪷', '🌾', '🍀', '🌲'].map((emoji, i) => (
              <div key={i} className="bg-green-50 rounded-2xl h-40 flex items-center justify-center text-5xl hover:bg-green-100 transition-colors cursor-pointer">
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section id="clients" className="py-20 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-black font-semibold uppercase tracking-widest text-sm">Trusted By · 信賴我們的客戶</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Clients · 我們的客戶</h2>
            <p className="text-black mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              We are proud to provide greenery, horticulture, and landscaping services to some of Macau's most prestigious hotels and resorts.
            </p>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-xs leading-relaxed">
              我們榮幸地為澳門多間頂級酒店及度假村提供綠化、園藝及園景設計服務。
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { zh: '澳門金沙', en: 'Sands Macao' },
              { zh: '澳門威尼斯人', en: 'The Venetian Macao' },
              { zh: '百利沙娛樂場', en: 'The Plaza Macao' },
              { zh: '喜來登金沙城中心大酒店', en: 'Sheraton Grand Macao' },
              { zh: '金沙城中心假日酒店', en: 'Holiday Inn Macao Cotai Central' },
              { zh: '澳門星際酒店', en: 'StarWorld Macau' },
              { zh: '新濠鋒酒店', en: 'Altira Macau' },
              { zh: '駿景酒店', en: 'Taipa Square Hotel' },
              { zh: '皇都酒店', en: 'Hotel Royal' },
              { zh: '財神酒店', en: 'Fortuna Hotel' },
              { zh: '總統酒店', en: 'President Hotel' },
              { zh: '聖地牙哥古堡酒店', en: 'Pousada de São Tiago' },
              { zh: '金皇冠中國大酒店', en: 'Golden Crown China Hotel' },
              { zh: '澳門國際機場', en: 'Macau International Airport' },
              { zh: '澳門市政廳', en: 'Provisional Municipal Council of Macau (IACM)' },
              { zh: '山頂醫院', en: 'Centro Hospitalar' },
              { zh: '新港澳碼頭前地', en: 'Outer Harbour Ferry Terminal' },
              { zh: '澳門博物館', en: 'Macau Museum' },
              { zh: '黑沙公園', en: 'Hac Sa Park' },
              { zh: '石排灣公園', en: 'Seac Pai Van Park' },
              { zh: '祐漢公園', en: 'Iao Hon Park' },
              { zh: '望廈山公園', en: 'Mong Ha Park' },
              { zh: '何賢公園', en: 'Ho Yin Park' },
            ].map(client => (
              <div key={client.en} className="bg-green-800 transition-colors rounded-2xl px-4 py-5 flex flex-col items-center text-center gap-1"> {/*hover:bg-green-600 transition-colors rounded-2xl px-4 py-5 flex flex-col items-center text-center gap-1*/}
                <p className="text-white font-semibold text-sm leading-snug">{client.zh}</p>
                <p className="text-green-300 text-xs leading-snug">{client.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      {/* <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-green-600 font-semibold uppercase tracking-widest text-sm">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Request a Quote</h2>
          <p className="text-gray-500 mt-4">Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>
        <form className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm" />
          <input type="email" placeholder="Email Address" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm" />
          <input type="tel" placeholder="Phone Number" className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm" />
          <select className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm text-gray-500">
            <option value="">Select a Service</option>
            <option>Plant Sales</option>
            <option>Landscaping</option>
            <option>Garden Maintenance</option>
            <option>Delivery & Installation</option>
            <option>Garden Consultation</option>
          </select>
          <textarea placeholder="Tell us about your project..." rows={4} className="sm:col-span-2 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm resize-none" />
          <button type="submit" className="sm:col-span-2 bg-green-700 text-white font-semibold py-3 rounded-full hover:bg-green-800 transition-colors">
            Send Message
          </button>
        </form>
      </section> */}

      {/* ── Footer ── */}
      <footer id="footer" className="bg-green-900 text-green-200 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-3">
              <img src={logowhite} alt="Ocean Nurseries & Landscaping Design Ltd."  />
            </div>
            <p className="text-sm leading-relaxed">Premium plants and landscaping services rooted in passion and grown with purpose.</p>
            <p className="text-xs leading-relaxed mt-1 text-green-400">優質植物及園景服務，根植熱情，茁壯成長。</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links · 快速連結</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Info · 聯絡資訊</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 澳門宋玉生廣場411-417號皇朝廣場18樓P</li>
              <li>📞 28514815</li>
              <li>✉️ ocean_nurseries@yahoo.com.hk</li>
              {/* <li>🕐 Mon–Sat: 8am – 6pm · 星期一至六：上午8時至下午6時</li> */}
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 pt-6 text-center text-xs text-green-400">
          © {new Date().getFullYear()} Ocean Nursery All rights reserved
        </div>
      </footer>

    </div>
  )
}

export default App

