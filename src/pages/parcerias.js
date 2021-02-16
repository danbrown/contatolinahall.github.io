import Head from "next/head";

export default function Hello() {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html" charSet="utf-8" />

        <link rel="stylesheet" href="css/index-style.css" />

        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />

        <title>Parcerias - Lina Hall</title>
      </Head>

      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <a
          target="_blank"
          class="navbar-brand"
          href="https://www.instagram.com/linahallstream/"
          style={{ marginLeft: "20%" }}
        >
          <img src="img/icons/instagram.png" width="20px" />
        </a>
        <a
          target="_blank"
          class="navbar-brand"
          href="https://www.youtube.com/channel/UCDoreMXXAU0j4sdw664u0Jw"
        >
          <img src="img/icons/youtube.png" width="20px" />
        </a>
        <a
          target="_blank"
          class="navbar-brand"
          href="https://twitter.com/LinaHallStream"
        >
          <img src="img/icons/twitter.png" width="20px" />
        </a>
        <a
          target="_blank"
          class="navbar-brand"
          href="https://twitch.tv/linahall"
        >
          <img src="img/icons/twitch.png" width="20px" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/#linahall">
                Página Inicial<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/#sobrelina">
                Sobre<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/#parallax2">
                Mídias<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#footer">
                Contato<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/parcerias">
                Parcerias<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid parcerias">
        <p class="naotenhoparcerias">Ainda não temos parcerias.</p>
        <p class="naotenhoparcerias">Ficarei feliz em trabalhar com você.</p>
      </div>

      <div class="container-fluid" id="footer">
        <div class="row">
          <h1 id="contato-title">CONTATO</h1>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div id="contato-left">
              <p>Para envio de midia kit,</p>
              <p>parcerias e afins contato</p>
              <a
                target="_blank"
                class="navbar-brand"
                href="https://www.instagram.com/linahallstream/"
              >
                <img src="img/icons/instagram.png" width="20px" />
              </a>
              <a
                target="_blank"
                class="navbar-brand"
                href="https://www.youtube.com/channel/UCDoreMXXAU0j4sdw664u0Jw"
              >
                <img src="img/icons/youtube.png" width="20px" />
              </a>
              <a
                target="_blank"
                class="navbar-brand"
                href="https://twitter.com/LinaHallStream"
              >
                <img src="img/icons/twitter.png" width="20px" />
              </a>
              <a
                target="_blank"
                class="navbar-brand"
                href="https://twitch.tv/linahall"
              >
                <img src="img/icons/twitch.png" width="20px" />
              </a>
            </div>
          </div>
          <div class="col-sm-4" id="contato-left">
            <p>contato.linahall@gmail.com</p>
            <p>Direct instagram</p>
          </div>
          <div class="col-sm-4" id="contato-right">
            <img id="logo" src="img/logo/l-preto.png" />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
