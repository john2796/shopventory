import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { map } from "lodash";
import YoutubeEmbed from "../youtube-embed/YoutubeEmbed";

function Header({ routes }) {
  return (
    <header className="header">
      <div className="header__logo-nav">
        <h1 className="header__logo-nav__logo">Dog App</h1>
        <nav className="header__logo-nav__nav">
          {map(routes, (route) => (
            <Link key={route.name} to={route.path}>
              {route.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="header__content">
        <div className="header__content__desc">
          <h2 className="header__content__desc__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Donec bibendum justo sem, a mattis ligula bibendum sed. Nunc et mi
            id dolor condimentum vehicula. Mauris eu laoreet nibh, ac cursus
            lectus. Morbi libero leo, tempus vel enim eu, semper tristique
            ipsum. Integer porta cursus dignissim. Maecenas vehicula pharetra
            est, ut molestie dui.
          </p>
        </div>

        <div className="header__content__video">
          <YoutubeEmbed embedId="s_uiya1WsQ0" />
        </div>
      </div>
    </header>
  );
}

export default Header;
