import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Demo1 from './pages/Demo1'
import Demo2 from './pages/Demo2'
import Demo3 from './pages/Demo3'
import Demo4 from './pages/Demo4'
import Demo5 from './pages/Demo5'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'demo1':
        return <Demo1 />
      case 'demo2':
        return <Demo2 />
      case 'demo3':
        return <Demo3 />
      case 'demo4':
        return <Demo4 />
      case 'demo5':
        return <Demo5 />
      default:
        return <Home />
    }
  }

  return (
    <div>
      <nav
        style={{
          padding: '20px',
          borderBottom: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <button onClick={() => setCurrentPage('home')} style={{ margin: '0 10px' }}>
            Home
          </button>
          <button onClick={() => setCurrentPage('demo1')} style={{ margin: '0 10px' }}>
            Painting Canvas
          </button>
          <button onClick={() => setCurrentPage('demo2')} style={{ margin: '0 10px' }}>
            Contextual Toolbar
          </button>
          <button onClick={() => setCurrentPage('demo3')} style={{ margin: '0 10px' }}>
            Pixi.js Brush Demo
          </button>
          <button onClick={() => setCurrentPage('demo4')} style={{ margin: '0 10px' }}>
            Demo 4
          </button>
          <button onClick={() => setCurrentPage('demo5')} style={{ margin: '0 10px' }}>
            Demo 5
          </button>
        </div>
        <ThemeToggle />
      </nav>
      <main style={{ padding: '20px' }}>{renderPage()}</main>
    </div>
  )
}

export default App
