import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/header.css"

const Header = () => {
  const wpdata = useStaticQuery(graphql`
    query WPMenus {
      wordpressWpApiMenusMenusItems {
        items {
          url
          order
          title
          wordpress_id
        }
      }
    }
  `)

  const menus = wpdata.wordpressWpApiMenusMenusItems.items

  const myRef = React.createRef()

  function toggleMenu() {
    if (myRef.current.style.display === "none") {
      myRef.current.style.display = "block"
    } else {
      myRef.current.style.display = "none"
    }
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-wrap">
            <a href="/">
              <img
                alt=""
                src="https://www.racingpost.com/cheltenham-festival/wp-content/themes/Cheltenham/images/logo.svg"
              />
            </a>
          </div>

          <div ref={myRef} className="head-menu">
            <ul>
              {menus.map(item => (
                <li key={item.wordpress_id}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-trigger" onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
