import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <main>
      <Nav />
      {children}
      {/* <Footer /> */}
    </main>
  )
}

export default Layout
