import Header from "../Header/Header.jsx"

function Layout({children}) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default Layout
