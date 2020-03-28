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

  function openMenu() {
    console.log("asd")
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

          <div className="head-menu">
            <ul>
              {menus.map(item => (
                <li key={item.wordpress_id}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-trigger" onClick={openMenu}>
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
