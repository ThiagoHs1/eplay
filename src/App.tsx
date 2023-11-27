import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCSS } from './styles'

function App() {
  return (
    <>
      <GlobalCSS />
      <div className="Container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
