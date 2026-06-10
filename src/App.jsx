// src/App.jsx

import { useVisitorData } from '@fingerprint/react'
import Navbar  from './components/Navbar'
import Hero    from './components/Hero'
import About   from './components/About'
import Pillars from './components/Pillars'
import Band    from './components/Band'
import Operate from './components/Operate'
import Contact from './components/Contact'
import Footer  from './components/Footer'

function FingerprintDebug() {
  const { isLoading, error, data, getData } = useVisitorData({ immediate: true })
  return (
    <div style={{ background: '#111', color: '#0f0', fontFamily: 'monospace', fontSize: 12, padding: 16 }}>
      <button onClick={() => getData()} style={{ marginBottom: 8 }}>Reload Fingerprint Data</button>
      <p>VisitorId: {isLoading ? 'Loading...' : data?.visitor_id}</p>
      <pre>{error ? error.message : JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <Band />
      <Operate />
      <Contact />
      <Footer />
      <FingerprintDebug />
    </>
  )
}