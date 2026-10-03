import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, ArrowDown, Plus, Minus, X, Menu, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({ component: BualuangPage })

const navigation = ['About', 'Program', 'Works', 'News', 'Contact']
const programs = [
  { name: 'การปฐมนิเทศ', english: 'Meet. Connect. Begin.', date: '17—19 OCTOBER', description: 'ทำความรู้จักกับพื้นที่ เพื่อนร่วมโครงการ และแนวทางการสร้างสรรค์ เริ่มต้นจากการเปิดใจ แลกเปลี่ยนมุมมอง และเรียนรู้ไปด้วยกัน' },
  { name: 'การสร้างสรรค์ผลงาน', english: 'Explore your own perspective.', date: 'OCTOBER—NOVEMBER', description: 'ให้เวลากับการค้นคว้า ทดลองวัสดุ และพัฒนาความคิด ถ่ายทอดมุมมองของตัวเองผ่านกระบวนการสร้างสรรค์ผลงานศิลปะ' },
  { name: 'การแข่งขันและการตัดสิน', english: 'Share the thinking behind the work.', date: '09—15 NOVEMBER', description: 'นำเสนอผลงานและแนวคิดเบื้องหลังการสร้างสรรค์ เปิดรับมุมมองที่แตกต่าง และเรียนรู้จากกระบวนการพิจารณาผลงาน' },
  { name: 'การนำเสนอผลงาน', english: 'Let your ideas meet the world.', date: 'BUALUANG 101', description: 'แบ่งปันเรื่องราว กระบวนการ และผลงานที่เกิดขึ้นจากประสบการณ์ร่วมกัน ติดตามกำหนดการเพิ่มเติมผ่านช่องทางของโครงการ' },
]
const explorations = [
  { category: 'Art', name: 'A new way of seeing.', thai: 'มองสิ่งเดิม ด้วยมุมมองใหม่', type: 'VISUAL EXPLORATION', className: 'poster-art', letter: 'A', description: 'ลองสังเกตรูปทรง สี และพื้นที่รอบตัว เปลี่ยนสิ่งที่คุ้นเคยให้กลายเป็นจุดเริ่มต้นของงานศิลปะ ไม่มีมุมมองไหนเหมือนกัน และทุกมุมมองมีเรื่องราวของตัวเอง' },
  { category: 'Creativity', name: 'Make room for ideas.', thai: 'เปิดพื้นที่ให้กับทุกความคิด', type: 'IDEAS & EXPERIMENTS', className: 'poster-creativity', letter: 'C', description: 'เริ่มจากคำถามเล็ก ๆ ทดลองวิธีที่ยังไม่เคยทำ และให้โอกาสกับความเป็นไปได้ใหม่ ๆ ความคิดสร้างสรรค์เกิดขึ้นได้เมื่อเราไม่รีบตัดสินคำตอบ' },
  { category: 'People', name: 'Different, together.', thai: 'แตกต่าง แต่เติบโตไปด้วยกัน', type: 'PEOPLE & CULTURE', className: 'poster-people', letter: 'P', description: 'การพบกันของคนที่มีประสบการณ์ต่างกันทำให้เกิดการแลกเปลี่ยน ฟังเรื่องราวของกันและกัน และค้นพบสิ่งใหม่จากความแตกต่าง' },
]
const news = [
  { category: 'PROGRAM UPDATE', title: 'เตรียมพบกับกิจกรรมดาวเด่นบัวหลวง 101', date: 'OCT 2026', text: 'เริ่มต้นด้วยกิจกรรมปฐมนิเทศ วันที่ 17–19 ตุลาคม พบกับพื้นที่แห่งการเรียนรู้ การสร้างสรรค์ และประสบการณ์ร่วมกัน ติดตามรายละเอียดการเข้าร่วมผ่านช่องทางอย่างเป็นทางการ' },
  { category: 'CREATIVE JOURNEY', title: 'เปิดพื้นที่สำหรับการสร้างสรรค์ผลงาน', date: 'OCT 2026', text: 'ช่วงเดือนตุลาคมถึงพฤศจิกายนเป็นเวลาสำหรับการพัฒนาความคิด ทดลอง และสร้างสรรค์ผลงาน ติดตามเรื่องราวและความเคลื่อนไหวได้ทางโซเชียลมีเดียของโครงการ' },
  { category: 'WHAT’S NEXT', title: 'กิจกรรมการแข่งขันและการตัดสิน', date: 'NOV 2026', text: 'กำหนดช่วงการแข่งขันและการตัดสิน วันที่ 9–15 พฤศจิกายน รายละเอียดเพิ่มเติมและประกาศของโครงการสามารถติดตามได้จากช่องทางอย่างเป็นทางการ' },
]
const socials = [
  { name: 'Instagram', handle: '@101bualuang', url: 'https://www.instagram.com/101bualuang/' },
  { name: 'Facebook', handle: 'Bualuang101', url: 'https://www.facebook.com/Bualuang101' },
  { name: 'TikTok', handle: '@bualuang101', url: 'https://www.tiktok.com/@bualuang101' },
  { name: 'YouTube', handle: 'ดาวเด่นบัวหลวง101', url: 'https://www.youtube.com/@ดาวเด่นบัวหลวง101' },
]

function AmbientSound() {
  const [playing, setPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const contextRef = useRef<AudioContext | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  useEffect(() => () => { void contextRef.current?.close() }, [])
  async function toggleSound() {
    try {
      if (!contextRef.current) {
        const audioContext = new AudioContext()
        const volume = audioContext.createGain()
        volume.gain.value = 0
        volume.connect(audioContext.destination)
        ;[130.81, 164.81, 196, 261.63].forEach((frequency) => {
          const oscillator = audioContext.createOscillator()
          oscillator.type = 'sine'
          oscillator.frequency.value = frequency
          oscillator.connect(volume)
          oscillator.start()
        })
        contextRef.current = audioContext
        gainRef.current = volume
      }
      const audioContext = contextRef.current
      await audioContext.resume()
      gainRef.current?.gain.setTargetAtTime(playing ? 0 : 0.018, audioContext.currentTime, 0.3)
      setPlaying(!playing)
    } catch { setUnavailable(true) }
  }
  return <button className="ambient-control" type="button" onClick={toggleSound} aria-pressed={playing} disabled={unavailable} title="Original synthesized ambient tone — no autoplay">
    {playing ? <Volume2 size={15} /> : <VolumeX size={15} />}<span>{unavailable ? 'SOUND UNAVAILABLE' : playing ? 'AMBIENT ON' : 'AMBIENT OFF'}</span>
  </button>
}

function BualuangPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [filter, setFilter] = useState('All explorations')
  const [selectedWork, setSelectedWork] = useState<(typeof explorations)[number] | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id) })
    }, { rootMargin: '-15% 0px -55% 0px' })
    navigation.forEach((item) => { const section = document.getElementById(item.toLowerCase()); if (section) observer.observe(section) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>('a')
    links?.[0]?.focus()
    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
      if (event.key === 'Tab' && links?.length) {
        const first = menuButtonRef.current
        const last = links[links.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    document.addEventListener('keydown', handleKeyboard)
    function handleResize() { if (window.innerWidth > 800) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyboard)
      window.removeEventListener('resize', handleResize)
      menuButtonRef.current?.focus()
    }
  }, [menuOpen])

  useEffect(() => {
    if (selectedWork && dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal()
    if (!selectedWork && dialogRef.current?.open) dialogRef.current.close()
    if (!selectedWork) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [selectedWork])

  return <>
    <a href="#main" className="skip-link">ข้ามไปยังเนื้อหา / Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="BUALUANG 101 home"><span className="brand-mark">101<span>↗</span></span><span className="brand-name">BUALUANG<span>ดาวเด่นบัวหลวง</span></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={activeSection === item.toLowerCase() ? 'active' : ''}>{item}</a>)}</nav>
      <a className="header-contact" href="mailto:bualuang101.channel@gmail.com">LET’S CONNECT <ArrowUpRight size={16}/></a>
      <button ref={menuButtonRef} className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    <div ref={menuRef} id="mobile-navigation" className={`mobile-navigation ${menuOpen ? 'is-open' : ''}`} inert={!menuOpen} aria-hidden={!menuOpen}><nav aria-label="Mobile navigation">{navigation.map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item}<ArrowUpRight/></a>)}</nav><p>ART. PEOPLE. POSSIBILITIES.</p></div>

    <main id="main">
      <section id="home" className="hero">
        <div className="hero-grid" aria-hidden="true"/>
        <div className="hero-eyebrow"><span><i/> A NEW GENERATION OF CREATIVITY</span><span>CONTEMPORARY ART / THAILAND</span></div>
        <div className="hero-art" aria-hidden="true"><img src={`${import.meta.env.BASE_URL}assets/images/art-sculpture.svg`} alt="" fetchPriority="high" width="1000" height="1000"/><span className="art-coordinate">EXPLORATION NO. 101</span><span className="hero-star">✳</span></div>
        <div className="hero-content">
          <h1>BUALUANG<span className="outlined-number">101<span className="hero-thai">ดาวเด่น<br/>บัวหลวง</span></span></h1>
          <p className="hero-subtitle">A space to learn. A place to create.</p>
          <p className="hero-description">พื้นที่แห่งการเรียนรู้ การสร้างสรรค์ และการเติบโต<br className="desktop-break"/>ของคนรุ่นใหม่ ผ่านศิลปะและประสบการณ์ร่วมกัน</p>
          <div className="hero-actions"><a href="#program" className="button button-yellow">EXPLORE THE PROGRAM <ArrowUpRight size={18}/></a><a href="#about" className="text-link">GET TO KNOW 101 <ArrowDown size={15}/></a></div>
        </div>
        <div className="hero-bottom"><div><span className="status-dot"/> <span>OPEN MINDS. NEW POSSIBILITIES.</span></div><a href="#program"><span className="muted">ORIENTATION</span><strong>17—19 OCTOBER 2026</strong><ArrowUpRight size={18}/></a><a className="scroll-prompt" href="#about">SCROLL TO DISCOVER <ArrowDown size={15}/></a></div>
      </section>

      <div className="marquee" aria-label="Art, creativity, people, culture, Bualuang 101"><div className="marquee-track" aria-hidden="true">{Array.from({ length: 4 }, (_, index) => <div className="marquee-group" key={index}><span>ART</span><span className="ticker-star">✳</span><span>CREATIVITY</span><span className="ticker-star">✳</span><span>PEOPLE</span><span className="ticker-star">✳</span><span>CULTURE</span><span className="ticker-star">✳</span><span>BUALUANG 101</span><span className="ticker-star">✳</span></div>)}</div></div>

      <section id="about" className="section about-section">
        <div className="section-label"><span>01 / ABOUT US</span><span>EVERY IDEA STARTS SOMEWHERE.</span></div>
        <div className="about-layout"><h2>MORE<br/>THAN <span className="blue-text">101.</span><span className="heading-spark" aria-hidden="true">✳</span></h2><div className="about-copy"><span className="small-eyebrow">NOT JUST A PROGRAM. A STARTING POINT.</span><h3>พื้นที่เล็ก ๆ<br/>สำหรับความเป็นไปได้ที่ยิ่งใหญ่</h3><p>ดาวเด่นบัวหลวง 101 คือพื้นที่ที่เปิดโอกาสให้คนรุ่นใหม่ได้เรียนรู้ ทดลอง สร้างสรรค์ และนำเสนอความคิดของตัวเอง ผ่านศิลปะ กิจกรรม และประสบการณ์ร่วมกัน</p><p className="secondary-copy">เราเชื่อว่าการสร้างสรรค์เริ่มต้นจากความอยากรู้ และเติบโตจากการได้พบผู้คน มุมมอง และประสบการณ์ใหม่ ๆ</p><a href="#works" className="underlined-link">DISCOVER OUR CREATIVE WORLD <ArrowUpRight size={17}/></a></div></div>
        <div className="values-strip"><div><span>01</span><h4>LEARN.</h4><p>เปิดใจ เรียนรู้สิ่งใหม่</p></div><div><span>02</span><h4>CREATE.</h4><p>ทดลอง และเป็นตัวเอง</p></div><div><span>03</span><h4>GROW.</h4><p>เติบโตไปด้วยกัน</p></div><div className="values-note">Different perspectives.<br/>Shared possibilities.<ArrowUpRight size={28}/></div></div>
      </section>

      <section id="program" className="section program-section"><div className="section-label"><span>02 / THE PROGRAM</span><span>FROM FIRST HELLO TO WHAT’S NEXT.</span></div><div className="section-heading-row"><h2>YOUR NEXT<br/><span className="blue-text">CHAPTER.</span></h2><p className="section-intro">จากการพบกันครั้งแรก สู่การสร้างสรรค์ที่เป็นตัวคุณ<br/>สำรวจเส้นทางการเรียนรู้ของดาวเด่นบัวหลวง 101</p></div><div className="program-list">{programs.map((program, index) => <details className="program-item" key={program.name} open={index === 0}><summary><span className="row-index">0{index + 1}</span><div className="program-title"><h3>{program.name}</h3><span>{program.english}</span></div><span className="program-date">{program.date}</span><span className="expand-icon"><Plus size={18}/><Minus size={18}/></span></summary><div className="program-description"><p>{program.description}</p><a href="mailto:bualuang101.channel@gmail.com">สอบถามรายละเอียด <ArrowUpRight size={15}/></a></div></details>)}</div><div className="program-note"><span>THE JOURNEY · OCTOBER—NOVEMBER 2026</span><p>ติดตามรายละเอียดและประกาศเพิ่มเติมผ่านช่องทางอย่างเป็นทางการของโครงการ</p></div></section>

      <section id="works" className="section works-section"><div className="section-label"><span>03 / CREATIVE EXPLORATIONS</span><span>NO SINGLE RIGHT ANSWER.</span></div><div className="section-heading-row"><h2>MAKE<br/><span className="outline-text">SOMETHING.</span></h2><p className="section-intro">งานศิลปะไม่ได้มีคำตอบเดียว<br/>เปิดพื้นที่ให้ความคิด รูปแบบ และมุมมอง<br/>เกิดขึ้นได้อย่างอิสระ</p></div><div className="work-filters" role="group" aria-label="Filter creative explorations">{['All explorations', 'Art', 'Creativity', 'People'].map((category) => <button key={category} type="button" aria-pressed={filter === category} className={filter === category ? 'selected' : ''} onClick={() => setFilter(category)}>{category}{category === 'All explorations' && <span>03</span>}</button>)}</div><div className="work-grid">{explorations.filter((work) => filter === 'All explorations' || filter === work.category).map((work) => <button type="button" className="work-card" key={work.category} onClick={() => setSelectedWork(work)} aria-label={`Explore ${work.name}`}><div className={`work-poster ${work.className}`}><span className="poster-tag">BUALUANG 101 / {work.category.toUpperCase()}</span><div className="poster-shapes" aria-hidden="true"><span/><span/><span/></div><span className="poster-letter" aria-hidden="true">{work.letter}</span><span className="poster-caption">{work.category.toUpperCase()}<span>IS A POSSIBILITY.</span></span><span className="poster-arrow"><ArrowUpRight size={23}/></span></div><div className="work-card-caption"><span>{work.type}</span><h3>{work.name}</h3><p>{work.thai}</p></div></button>)}</div><div className="works-footnote"><span>A VISUAL MANIFESTO FOR THE NEXT GENERATION.</span><span>CONCEPT EXPLORATIONS / 01—03</span></div></section>

      <section className="statement-section"><span className="statement-spark" aria-hidden="true">✳</span><div><span className="small-eyebrow">KEEP ASKING. KEEP CREATING.</span><p>ART IS NOT <span>THE ANSWER.</span><br/>IT IS THE <span>QUESTION.</span></p><span className="statement-thai">เพราะคำถามที่ดี อาจพาเราไปได้ไกลกว่าคำตอบ</span></div><ArrowUpRight className="statement-arrow" size={70} strokeWidth={1}/></section>

      <section id="news" className="section news-section"><div className="section-label"><span>04 / NEWS & NOTES</span><span>STAY IN THE LOOP.</span></div><div className="section-heading-row"><h2>LATEST <span className="blue-text">NOTES.</span></h2><a href="https://www.facebook.com/Bualuang101" target="_blank" rel="noopener noreferrer" className="underlined-link">FOLLOW THE UPDATES <ArrowUpRight size={17}/></a></div><div className="news-list">{news.map((item, index) => <details className="news-item" key={item.title}><summary><span className="row-index">0{index + 1}</span><div className="news-copy"><span className="small-eyebrow">{item.category}</span><h3>{item.title}</h3></div><span className="news-date">{item.date}</span><span className="expand-icon"><Plus size={20}/><Minus size={20}/></span></summary><p className="news-description">{item.text}</p></details>)}</div></section>

      <section className="section faq-section"><div><div className="section-label"><span>GOOD TO KNOW</span></div><h2>A FEW<br/><span className="blue-text">QUESTIONS.</span></h2><p>มีคำถามเพิ่มเติม? เราพร้อมรับฟัง</p><a className="underlined-link" href="mailto:bualuang101.channel@gmail.com">SEND US A NOTE <ArrowUpRight size={17}/></a></div><div className="faq-list">{[
        ['ดาวเด่นบัวหลวง 101 คืออะไร?', 'พื้นที่สำหรับคนรุ่นใหม่ในการเรียนรู้ ทดลอง และสร้างสรรค์ผ่านศิลปะและกิจกรรมร่วมกัน ตั้งแต่การปฐมนิเทศไปจนถึงการนำเสนอผลงาน'],
        ['กิจกรรมจัดขึ้นเมื่อไหร่?', 'กิจกรรมปฐมนิเทศกำหนดวันที่ 17–19 ตุลาคม 2026 การสร้างสรรค์ผลงานอยู่ในช่วงตุลาคม–พฤศจิกายน และการแข่งขันและการตัดสินวันที่ 9–15 พฤศจิกายน ติดตามรายละเอียดเพิ่มเติมผ่านช่องทางอย่างเป็นทางการ'],
        ['จะเข้าร่วมหรือสอบถามรายละเอียดได้อย่างไร?', 'ติดต่อทีมงานได้ทางอีเมล bualuang101.channel@gmail.com หรือส่งข้อความผ่าน Facebook และ Instagram ของโครงการ เพื่อสอบถามคุณสมบัติ วิธีเข้าร่วม และรายละเอียดกิจกรรม'],
        ['ติดตามข่าวสารได้จากช่องทางไหน?', 'ติดตาม Bualuang101 บน Facebook, @101bualuang บน Instagram, @bualuang101 บน TikTok และดาวเด่นบัวหลวง101 บน YouTube ลิงก์ทั้งหมดอยู่ในส่วนติดต่อด้านล่าง'],
      ].map(([question, answer]) => <details key={question}><summary>{question}<span className="expand-icon"><Plus size={18}/><Minus size={18}/></span></summary><p>{answer}</p></details>)}</div></section>

      <section id="contact" className="contact-section"><div className="contact-main"><div><span className="small-eyebrow">THE NEXT CHAPTER STARTS WITH YOU.</span><h2>LET’S MAKE<br/><span>WHAT’S NEXT.</span></h2><p>เรียนรู้ สร้างสรรค์ และเติบโตไปด้วยกันกับดาวเด่นบัวหลวง 101</p></div><a className="contact-orbit" href="mailto:bualuang101.channel@gmail.com"><ArrowUpRight size={48} strokeWidth={1.4}/><span>GET IN TOUCH</span></a></div><div className="social-grid">{socials.map((social) => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"><span>{social.name}</span><div>{social.handle}<ArrowUpRight size={20}/></div></a>)}</div></section>
    </main>

    <footer className="site-footer"><div className="footer-top"><a href="#home" className="footer-brand">BUALUANG 101<span>ดาวเด่นบัวหลวง</span></a><div className="footer-email"><span>START A CONVERSATION</span><a href="mailto:bualuang101.channel@gmail.com">bualuang101.channel@gmail.com <ArrowUpRight size={15}/></a></div><a className="back-to-top" href="#home">BACK TO TOP <ArrowUpRight size={16}/></a></div><div className="footer-bottom"><span>© 2026 BUALUANG 101</span><span>ART / PEOPLE / CULTURE</span><a href="https://www.bualuangfoundation.com/" target="_blank" rel="noopener noreferrer">BUALUANG FOUNDATION <ArrowUpRight size={13}/></a><AmbientSound/></div></footer>

    <dialog ref={dialogRef} className="work-dialog" onClose={() => setSelectedWork(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelectedWork(null) }} aria-labelledby="work-dialog-title">{selectedWork && <><button type="button" className="dialog-close" onClick={() => setSelectedWork(null)} aria-label="Close exploration"><X size={22}/></button><span className="small-eyebrow">BUALUANG 101 / {selectedWork.category.toUpperCase()}</span><h2 id="work-dialog-title">{selectedWork.name}</h2><h3>{selectedWork.thai}</h3><p>{selectedWork.description}</p><a href="mailto:bualuang101.channel@gmail.com" className="button button-yellow">START A CONVERSATION <ArrowUpRight size={17}/></a><span className="dialog-note">A CONCEPT EXPLORATION — NOT A PARTICIPANT SUBMISSION</span></>}</dialog>
  </>
}

