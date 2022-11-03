import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import FilterLink from "./FilterLink";
import {
  faBurger,
  faFish,
  faCow,
  faHatCowboySide,
  faCakeCandles,
  faMartiniGlassCitrus,
  faCarrot,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `);

  return (
    <header className="">
      <div className="flex flex-wrap items-center justify-center max-w-4xl p-4 mx-auto md:p-8">

        <Link to="/">
          <h1 className="flex items-center text-black no-underline">
            <svg
              className="w-8 h-8 mr-2 fill-current"
              height="54"
              viewBox="0 0 54 54"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <button
          className="items-center block px-3 py-2 text-black border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto wrap`}
        >
          {[
            {
              route: `/about`,
              title: `American`,
              icon: faBurger
            },
            {
              route: `/contact`,
              title: `Seafood`,
              icon: faFish
            },
            {
              route: "/cow",
              title: "Steak",
              icon: faCow
            },
            {
              route: "/bbq",
              title: "Barbecue",
              icon: faHatCowboySide
            },
            {
              route: "/cake",
              title: "Bakery",
              icon: faCakeCandles
            },
            {
              route: "/liqour",
              title: "Bar",
              icon: faMartiniGlassCitrus
            },
            {
              route: "/veggies",
              title: "Vegan",
              icon: faCarrot
            },
            {
              route: "/coffee",
              title: "Coffee",
              icon: faMugHot
            },
          ].map((link) => (
            <FilterLink key={link.title} route={link.route} title={link.title} icon={link.icon} />
          ))}
        </nav>
      </div>

    </header>
  );
}

export default Header;
