import Head from "next/head";

export default function Hello() {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html" charSet="utf-8" />

        <link rel="stylesheet" href="css/index-style.css" />

        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />

        <title>Lina Hall - Streamer • Criadora de Conteúdo • Cosplayer</title>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <a
          target="_blank"
          className="navbar-brand"
          href="https://www.instagram.com/linahallstream/"
          style={{
            marginLeft: "20%",
          }}
        >
          <img src="img/icons/instagram.png" width="20px" />
        </a>
        <a
          target="_blank"
          className="navbar-brand"
          href="https://www.youtube.com/channel/UCDoreMXXAU0j4sdw664u0Jw"
        >
          <img src="img/icons/youtube.png" width="20px" />
        </a>
        <a
          target="_blank"
          className="navbar-brand"
          href="https://twitter.com/LinaHallStream"
        >
          <img src="img/icons/twitter.png" width="20px" />
        </a>
        <a
          target="_blank"
          className="navbar-brand"
          href="https://twitch.tv/linahall"
        >
          <img src="img/icons/twitch.png" width="20px" />
        </a>
        <a
          target="_blank"
          className="navbar-brand"
          href="https://discord.gg/NAY4paYM"
        >
          <img src="img/icons/discord.png" width="20px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#linahall">
                Página Inicial<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#sobrelina">
                Sobre<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#parallax2">
                Mídias<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#footer">
                Contato<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/parcerias">
                Parcerias<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        class="parallax-window"
        id="banner-pc"
        data-parallax="scroll"
        data-image-src="img/banner-pc.jpg"
      >
        <img class="hide-at-cel" id="linahall" src="img/linahall.png" />
        <h2 class="hide-at-cel" id="subtitle">
          streamer • criadora de conteúdo • cosplayer
        </h2>
      </div>

      <div
        class="parallax-window"
        id="banner-cel"
        data-parallax="scroll"
        data-image-src="img/banner-cel.jpg"
      >
        <img class="hide-at-pc" id="linahall" src="img/linahall.png" />
        <h2 class="hide-at-pc" id="subtitle">
          streamer • criadora de conteúdo • cosplayer
        </h2>
      </div>

      <div id="sobrelina">
        <img id="sobrelina-cel" src="img/sobrelina/sobrelina-cel.png" />
        <img id="sobrelina-pc" src="img/sobrelina/sobrelina-pc.png" />
        <button type="button" class="btn btn-dark" id="acessaratwitch">
          <a target="_blank" href="https://www.twitch.tv/linahall">
            Acessar a Twitch
          </a>
        </button>
      </div>

      <div
        class="parallax-window"
        id="parallax2"
        data-parallax="scroll"
        data-image-src="img/btns-background.jpg"
      >
        <div style={{ paddingTop: 150 }}></div>
        <div id="squarebtn">
          <h1 id="squarebtn-text">
            <a target="_blank" href="https://www.twitch.tv/linahall">
              Twitch
            </a>
          </h1>
        </div>
        <div style={{ paddingTop: 70 }}></div>
        <div id="squarebtn">
          <h1 id="squarebtn-text">
            <a target="_blank" href="https://www.instagram.com/linahallstream/">
              Instagram
            </a>
          </h1>
        </div>
        <div style={{ paddingTop: 70 }}></div>
        <div id="squarebtn">
          <h1 id="squarebtn-text">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCDoreMXXAU0j4sdw664u0Jw"
            >
              Youtube
            </a>
          </h1>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <img class="pic" src="img/pic/pic1.jpg" />
          <img class="pic" src="img/pic/pic2.jpg" />
          <img class="pic" src="img/pic/pic3.jpg" />
        </div>
        <div class="row">
          <img class="pic" src="img/pic/pic4.jpg" />
          <img class="pic" src="img/pic/pic5.jpg" />
          <img class="pic" src="img/pic/pic6.jpg" />
        </div>
      </div>

      <div class="container-fluid" id="footer">
        <div class="row">
          <h1 id="contato-title">CONTATO</h1>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div>
              <p id="textos-footer-left">Para envio de midia kit,</p>
              <p id="textos-footer-left">parcerias e afins contato</p>
              <a
                id="textos-footer-left"
                class="icon-bot"
                target="_blank"
                href="https://www.instagram.com/linahallstream/"
              >
                <img src="img/icons/instagram.png" width="20px" />
              </a>
              <a
                class="icon-bot"
                target="_blank"
                href="https://www.youtube.com/channel/UCDoreMXXAU0j4sdw664u0Jw"
              >
                <img src="img/icons/youtube.png" width="20px" />
              </a>
              <a
                class="icon-bot"
                target="_blank"
                href="https://twitter.com/LinaHallStream"
              >
                <img src="img/icons/twitter.png" width="20px" />
              </a>
              <a
                class="icon-bot"
                target="_blank"
                href="https://twitch.tv/linahall"
              >
                <img src="img/icons/twitch.png" width="20px" />
              </a>
              <a
                class="icon-bot"
                target="_blank"
                href="https://discord.gg/NAY4paYM"
              >
                <img src="img/icons/discord.png" width="20px" />
              </a>
            </div>
          </div>
          <div id="middle-column-footer" class="col-md-4">
            <p id="direct-contato">Direct instagram</p>
            <p id="direct-contato">contato.linahall@gmail.com</p>
            <img id="logo" src="img/logo/l-preto.png" />
          </div>
          <div class="col-md-4" id="contato-right">
            <p id="postal">
              Caixa Postal: 13025
              <br />
              CEP: 88010-975
              <br />
              Agência: AGF Rua Álvaro de Carvalho
              <br />
              Florianópolis - SC
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
