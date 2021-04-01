import { useEffect, useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { Button, Input, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Head from "next/head";

// + UTILS
import debounce from "../utils/debounce";
import fetch from "isomorphic-fetch";

// + STYLESHEETS
import linastyles from "../styles/Linahall.module.css";
import parallelstyles from "../styles/Parallel.module.css";
const buttonStyles = {
  margin: 0,
  marginTop: 10,
  marginBottom: 10,
  backgroundColor: "#85367eaa",
  padding: "25px 100px 25px 25px",
  fontSize: 16,
};

export default function Hello() {
  const Router = useRouter();

  // body
  useEffect(() => {
    document.querySelector("body").classList.add(parallelstyles.body);
  }, [true]);

  // width
  const [width, setWidth] = useState(0);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    window.addEventListener("DOMContentLoaded", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      window.removeEventListener("DOMContentLoaded", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange, width]);

  // scroll
  const [scrollE, setScrollE] = useState(0);
  const ignoredAnchors = ["anchor2", "anchor1", "test"];
  const handleScroll = debounce((e) => {
    if (width >= 1000) {
      console.log(e);
      let trusted = true;
      for (let i = 0; i < e.path.length; i++) {
        ignoredAnchors.forEach((anchor) => {
          if (e.path[i].id === anchor) {
            trusted = false;
          }
        });
        if (trusted === false) break;
      }
      if (trusted) {
        e.deltaY > 0
          ? sectionIndex < sectionNumber
            ? setSectionIndex(sectionIndex + 1)
            : setSectionIndex(1)
          : sectionIndex > 1
          ? setSectionIndex(sectionIndex - 1)
          : "";

        e.deltaY > 0 ? setScrollE(1) : setScrollE(-1);
        console.log(e.deltaY);
      }
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll, scrollE]);

  // section
  const [sectionIndex, setSectionIndex] = useState(1);
  const [sectionNumber, setSectionNumber] = useState(4);
  const insection = (num) => {
    return width >= 1000
      ? {
          zIndex: sectionIndex,
          // transform: `translateY(-${(sectionNumber - sectionIndex) * 100}%)`,
          transform: `translateY(${(sectionIndex - 1) * 100 * -1}%)`,
        }
      : {};
  };

  const tosection = (num) => {
    return width >= 1000
      ? {
          zIndex: sectionIndex,

          transform: `translateY(${
            2 * (num - 1) * 100 * -1 + (sectionIndex - 1) * 100
          }%)`,
        }
      : {};
  };

  // Hash fix
  useEffect(() => {
    if (window.location.hash !== "") {
      window.location = window.location.href.split("#")[0];
    }
  }, []);

  return (
    <section>
      <Head>
        <title>Lina Hall - Streamer • Criadora de Conteúdo • Cosplayer</title>
      </Head>
      <nav className={parallelstyles.navigator}>
        <div>index: {sectionIndex} &nbsp;| &nbsp;</div>
        <div>scroll: {scrollE}</div>
      </nav>

      <VideoBackground />

      <section id="intro-section" className={parallelstyles.section}>
        <div className={[parallelstyles.contentWrapper]} style={insection(1)}>
          <br />
          <br />
          <br />

          <WebsiteTitle />

          <br />

          <HomeNavigator width={width} setSection={setSectionIndex} />
          <br />
        </div>
        <div className={parallelstyles.contentWrapper} style={tosection(1)}>
          {width >= 1000 ? (
            <Image src="/img/sobremim2.png" layout="fill" objectFit="contain" />
          ) : (
            <div
              style={{
                minWidth: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: -100,
                overflow: "hidden",
              }}
            >
              <img
                src="/img/sobremim2.png"
                alt="Lina Hall"
                style={{ width: "100%", maxWidth: "500px" }}
              />
            </div>
          )}
        </div>
      </section>

      <section className={parallelstyles.section}>
        <div
          id={linastyles.gallery}
          className={parallelstyles.imageWrapper}
          style={insection(2)}
        >
          <div
            className={linastyles.column}
            style={{ justifyContent: "space-between", height: "100%" }}
          >
            <div className={linastyles.row_stretch}>
              <div className={linastyles.image_gallery_item_wrapper}>
                <div className={linastyles.image_gallery_item}>
                  <Image
                    src="/img/pic/pic1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={linastyles.image_gallery_item_wrapper}>
                <div className={linastyles.image_gallery_item}>
                  <Image
                    src="/img/pic/pic4.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={linastyles.image_gallery_item_wrapper}>
                <div className={linastyles.image_gallery_item}>
                  <Image
                    src="/img/pic/pic3.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>

            <div className={linastyles.row_stretch}>
              <div className={linastyles.image_gallery_item_wrapper}>
                <div className={linastyles.image_gallery_item}>
                  <Image
                    src="/img/pic/pic1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={linastyles.image_gallery_item_wrapper}>
                <div className={linastyles.image_gallery_item}>
                  <Image
                    src="/img/pic/pic4.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={linastyles.image_gallery_item_wrapper}>
                <div className={linastyles.image_gallery_item}>
                  <Image
                    src="/img/pic/pic3.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>

            <div className={linastyles.row_stretch}>
              <div className={linastyles.image_gallery_item_wrapper}>
                <div className={linastyles.image_gallery_item}>
                  <Image
                    src="/img/pic/pic1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={linastyles.image_gallery_item_wrapper}>
                <div className={linastyles.image_gallery_item}>
                  <Image
                    src="/img/pic/pic4.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={linastyles.image_gallery_item_wrapper}>
                <div className={linastyles.image_gallery_item}>
                  <Image
                    src="/img/pic/pic3.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="SOBRE"
          className={parallelstyles.contentWrapper}
          style={tosection(2)}
        >
          <div className={linastyles.column}>
            <h2 className={linastyles.default_title}>Sobre Mim</h2>
            <span className={linastyles.divider}></span>
            <p className={linastyles.default_text}>
              Me chamo <b>Lina Hall</b>, tenho 21 anos e moro em Florianópolis.
              Sou estudante de moda,{" "}
              <b>
                Cosplayer, Streamer, Influencer, criadora de conteúdo e Modelo
              </b>
              . Amo a vida em movimento. Games, teatro e dança são as minhas
              paixões. Assim como toda a minha <b>comunidade</b> que me
              incentiva a sempre reinventar.
            </p>
            <span className={linastyles.divider}></span>
            <br />
            <br />
            <iframe
              src="https://player.twitch.tv/?video=933809602&parent=linahall.tk&autoplay=false"
              height="400"
              width="100%"
              autoplay="false"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </section>

      <section className={parallelstyles.section}>
        <div
          id="CONTEUDO"
          className={parallelstyles.contentWrapper}
          style={insection(3)}
        >
          <div className={linastyles.column}>
            <h2 className={linastyles.default_title}>Conteúdo</h2>
            <span className={linastyles.divider}></span>
            <div className={linastyles.row}>
              <a
                class="btn btn-3 btn-3e icon-arrow-right"
                style={buttonStyles}
                href="https://www.twitch.tv/linahall/clips?filter=clips&range=7d"
                target="_blank"
              >
                Clipes
              </a>
              <a
                class="btn btn-3 btn-3e icon-arrow-right"
                style={buttonStyles}
                href="https://trello.com/b/ZoS7vvlX/nossa-coleção"
                target="_blank"
              >
                Games
              </a>
              <a
                class="btn btn-3 btn-3e icon-arrow-right"
                style={buttonStyles}
                href="https://www.instagram.com/linahallstream/"
                target="_blank"
              >
                Fotos
              </a>
            </div>
            <br />
            <br />

            <h2 className={linastyles.default_title}>Redes Sociais</h2>
            <span className={linastyles.divider}></span>
            <SocialBar />
          </div>
        </div>
        <div
          id="SOCIAL"
          className={parallelstyles.imageWrapper}
          style={tosection(3)}
        >
          {width >= 1000 ? (
            <Image src="/img/banner-cel.jpg" layout="fill" objectFit="cover" />
          ) : (
            <div
              style={{
                minWidth: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: -100,
                overflow: "hidden",
              }}
            >
              <img
                src="/img/banner-cel.jpg"
                alt="Lina Hall"
                style={{ width: "100%" }}
              />
            </div>
          )}
        </div>
      </section>

      <section className={parallelstyles.section}>
        <div className={parallelstyles.imageWrapper} style={insection(4)}>
          {width >= 1000 ? (
            <Image
              src="/img/lina-blacknwhite.jpg"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <div
              style={{
                minWidth: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: -100,
                overflow: "hidden",
              }}
            ></div>
          )}
        </div>
        <div
          id="CONTATO"
          className={parallelstyles.contentWrapper}
          style={tosection(4)}
        >
          <div className={linastyles.column}>
            <h2 className={linastyles.default_title}>Contato</h2>
            <span className={linastyles.divider}></span>
            <p className={linastyles.default_text_tiny}>
              <b>Email:</b>{" "}
              <a
                href="mailto:contato.linahall@gmail.com"
                className={linastyles.link}
              >
                contato.linahall@gmail.com
              </a>
            </p>

            <div className={linastyles.row}>
              <p className={linastyles.default_text_tiny}>
                Caixa Postal: 13025
                <br /> CEP: 88010-975
                <br />
                Agência: AGF
                <br />
                Rua Álvaro de Carvalho
                <br />
                Florianópolis - SC
              </p>
              <img src="/img/L.png" style={{ width: 100 }} alt="" />
            </div>
          </div>
          <ContactForm width={width} />
        </div>
      </section>
    </section>
  );
}

const VideoBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        overflow: "hidden",
        left: 0,
        minWidth: "100%",
        minHeight: "100%",
      }}
    >
      <Image src="/img/contato.jpg" layout="fill" objectFit="cover" />
      <video
        id="background-video"
        loop
        autoPlay
        muted
        style={{
          position: "absolute",
          opacity: 0.7,
          height: "150vh",
          left: 0,
          top: 0,
        }}
      >
        <source src="/video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const WebsiteTitle = () => {
  return (
    <div className={linastyles.title_container}>
      <a href="/">
        <img
          src="/img/banana-glow.png"
          className={linastyles.anim_banana_1}
          alt=""
        />
        <img
          src="/img/banana-glow.png"
          className={linastyles.anim_banana_2}
          alt=""
        />
        <img src="/img/linahall.png" style={{ maxWidth: "100%" }} alt="" />
        <h1 className={linastyles.subtitle}>
          streamer • criadora de conteúdo • cosplayer
        </h1>
      </a>
    </div>
  );
};

const HomeNavigator = (props) => {
  const { setSection, width } = props;

  const styles = {
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#85367eaa",
    padding: "25px 120px 25px 25px",
    fontSize: 20,
  };

  return (
    <div className={linastyles.home_navigator}>
      <a href={width <= 1000 ? "#SOBRE" : "#"}>
        <button
          className={linastyles.navbutton}
          onClick={() => {
            setSection(2);
          }}
        >
          Sobre Mim
        </button>
      </a>

      <a href={width <= 1000 ? "#CONTEUDO" : "#"}>
        <button
          className={linastyles.navbutton}
          onClick={() => {
            setSection(3);
          }}
        >
          Conteúdo
        </button>
      </a>

      <a href={width <= 1000 ? "#SOCIAL" : "#"}>
        <button
          className={linastyles.navbutton}
          onClick={() => {
            setSection(3);
          }}
        >
          Redes Sociais
        </button>
      </a>

      <a href={width <= 1000 ? "#CONTATO" : "#"}>
        <button
          className={linastyles.navbutton}
          onClick={() => {
            setSection(4);
          }}
        >
          Media Kit
        </button>
      </a>

      <a href={width <= 1000 ? "#CONTATO" : "#"}>
        <button
          className={linastyles.navbutton}
          onClick={() => {
            setSection(4);
          }}
        >
          Parcerias
        </button>
      </a>

      <a href={width <= 1000 ? "#CONTATO" : "#"}>
        <button
          class="btn btn-3 btn-3e icon-arrow-right"
          style={styles}
          onClick={() => {
            setSection(4);
          }}
        >
          Entre em Contato
        </button>
      </a>
    </div>
  );
};

function SocialBar(props) {
  const { color = "#7a007daa" } = props;

  return (
    <div className={linastyles.row}>
      <Button
        style={{
          borderRadius: 150,
          padding: "16px 20px",
          margin: 5,
          borderColor: color,
          borderWidth: 4,
        }}
        variant="outlined"
        component={"a"}
        href="https://www.instagram.com/linahallstream/"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" color={color} />
      </Button>
      <Button
        style={{
          borderRadius: 150,
          padding: "16px 20px",
          margin: 5,
          borderColor: color,
          borderWidth: 4,
        }}
        variant="outlined"
        component={"a"}
        href="https://twitch.tv/linahall"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "twitch"]} size="3x" color={color} />
      </Button>
      <Button
        style={{
          borderRadius: 150,
          padding: "16px 20px",
          margin: 5,
          borderColor: color,
          borderWidth: 4,
        }}
        variant="outlined"
        component={"a"}
        href="https://www.tiktok.com/@linahallstream?lang=pt-BR"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "tiktok"]} size="3x" color={color} />
      </Button>
      <Button
        style={{
          borderRadius: 150,
          padding: "16px 20px",
          margin: 5,
          borderColor: color,
          borderWidth: 4,
        }}
        variant="outlined"
        component={"a"}
        href="https://twitter.com/LinaHallStream"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" color={color} />
      </Button>
      <Button
        style={{
          borderRadius: 150,
          padding: "16px 20px",
          margin: 5,
          borderColor: color,
          borderWidth: 4,
        }}
        variant="outlined"
        component={"a"}
        href="https://www.youtube.com/channel/UCDoreMXXAU0j4sdw664u0Jw"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "youtube"]} size="3x" color={color} />
      </Button>
      <Button
        style={{
          borderRadius: 150,
          padding: "16px 20px",
          margin: 5,
          borderColor: color,
          borderWidth: 4,
        }}
        variant="outlined"
        component={"a"}
        href="https://discord.gg/NAY4paYM"
        target="_blank"
      >
        <FontAwesomeIcon icon={["fab", "discord"]} size="3x" color={color} />
      </Button>
    </div>
  );
}

function ContactForm({ width }) {
  const router = useRouter();
  const [sent, setSent] = useState(undefined);

  const handleEmail = async (values, config) => {
    setSent(undefined);

    await axios
      .post(`${window.location.origin}/api/contact`, { ...values })
      .then((response) => {
        console.log(response);
        setSent("Mensagem enviada com sucesso!");
        config.resetForm();
      })
      .catch((error) => {
        console.log(error);
        setSent("Erro ao enviar");
      });

    return;
  };

  return (
    <div className={linastyles.formWrapper}>
      <Formik
        initialValues={{
          email: "",
          subject: "",
          name: "",
          message: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Nome é obrigatório").max(255),
          subject: Yup.string().required("Assunto é obrigatório").max(255),
          email: Yup.string()
            .email("Deve ser um email válido")
            .max(255)
            .required("Mensagem é obrigatório"),
          message: Yup.string()
            .max(1024, "O máximo de caracteres é 1024")
            .required("Mensagem é obrigatória"),
        })}
        onSubmit={handleEmail}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <p className={linastyles.default_text}>
              Para envio de <b>midia kit, parcerias e afins</b>.
            </p>
            <div style={{}}>
              <TextField
                required
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
                label="Nome"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                type="name"
                value={values.name}
                variant="filled"
                style={{
                  minWidth: 100,
                  marginRight: width <= 1450 ? 0 : 15,
                  width: width <= 1450 ? "100%" : "auto",
                }}
              />
              <TextField
                required
                error={Boolean(touched.subject && errors.subject)}
                helperText={touched.subject && errors.subject}
                label="Assunto"
                name="subject"
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                value={values.subject}
                variant="filled"
                style={{
                  marginTop: width <= 1450 ? 18 : 0,
                  width: width <= 1450 ? "100%" : "auto",
                }}
              />
            </div>
            <br />
            <TextField
              required
              id="filled-required"
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              label="Email"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="filled"
              style={{ width: "100%" }}
            />
            <br />
            <TextField
              id="filled-multiline-flexible"
              error={Boolean(touched.message && errors.message)}
              helperText={touched.message && errors.message}
              label="Mensagem"
              margin="normal"
              name="message"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.message}
              multiline
              rows={4}
              variant="filled"
              style={{ width: "100%" }}
            />
            <br />
            <b style={{ marginTop: 5, marginBottom: 5 }}>{sent}</b>
            <Button
              style={{
                width: "100%",
              }}
              variant="contained"
              disabled={isSubmitting}
              type="submit"
              target="_blank"
              color="secondary"
            >
              Enviar
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

function ContentWrapper({ tosection }) {
  return (
    <div className={parallelstyles.contentWrapper} style={tosection(3)}>
      <div id="anchor1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos sunt
        natus a eum ipsum optio voluptatibus non aspernatur distinctio molestiae
        inventore voluptas porro quae deleniti dolorem, dicta necessitatibus
        quod. Asperiores distinctio fuga earum tenetur nemo animi voluptates
        doloribus ut eum quaerat exercitationem architecto rem nulla error
        perferendis, delectus quod laboriosam minima! Doloremque reprehenderit
        porro ab amet minima incidunt perspiciatis obcaecati a nobis laudantium
        est voluptate itaque, blanditiis ullam numquam quo officiis. Quod est
        vitae saepe, fuga eaque autem iure vero repellat expedita quaerat,
        quidem sed incidunt doloremque, impedit repellendus. Odit, esse
        repellendus doloremque ducimus asperiores repudiandae est iure dolores
        ex rerum blanditiis eius beatae reiciendis reprehenderit culpa mollitia
        sequi tenetur expedita dolorum provident, consequatur quidem totam
        placeat veniam! Deleniti quo consequatur repellat eius recusandae at
        numquam architecto quibusdam autem porro ex deserunt quod a aliquid eos,
        vel sunt odio molestiae? Pariatur similique aliquam quidem suscipit
        repudiandae odio voluptate ab aliquid esse atque eos eveniet rerum
        nesciunt, dolorum maxime officiis sequi optio necessitatibus nam tempora
        explicabo eum molestias dolore illo. Illo voluptatem, delectus tempore
        error aliquid corrupti, pariatur laboriosam cumque totam eius cupiditate
        culpa ea officiis magni similique ratione suscipit, velit voluptate
        distinctio dolores? Optio hic dicta numquam recusandae non possimus
        laboriosam nobis molestias, dolorem tempore, mollitia iusto quos in
        voluptates repudiandae vero. Beatae odio aspernatur ratione unde
        doloribus delectus illo iste inventore at eum necessitatibus cupiditate
        nihil repellat recusandae laudantium sed, facilis quaerat magnam error
        numquam nisi officia voluptas praesentium. Atque totam fugit aperiam eum
        iusto veritatis maiores itaque ullam sapiente modi eaque distinctio
        molestiae, expedita iure? Vitae quam totam, aliquid accusamus autem
        molestias aliquam iusto cumque repellendus assumenda inventore
        cupiditate nihil, mollitia provident fugiat repudiandae laborum pariatur
        ratione nam? Reprehenderit ducimus in distinctio expedita accusamus
        officia delectus sit voluptatibus repellendus doloremque, perspiciatis
        provident labore, laboriosam ipsa! Eaque pariatur sit asperiores
        temporibus assumenda ducimus sed quo voluptates quae qui distinctio
        voluptate impedit maiores, ad eligendi! Ab consequuntur ut enim harum
        architecto aliquid beatae laudantium obcaecati, porro iusto cumque quod
        voluptatibus officiis. Consequuntur eius enim sint! Vel autem rem,
        delectus quisquam atque excepturi odio numquam voluptatibus quae quasi.
        Ipsam maxime, ipsa beatae voluptates temporibus est, perferendis iure
        placeat eius, sapiente expedita amet eligendi laudantium accusantium
        culpa aspernatur eveniet odit voluptatibus totam iusto. Quam voluptatum
        asperiores voluptate ex magnam illum quod, ut est necessitatibus,
        veritatis neque. Animi dolorum, qui sunt corporis recusandae consectetur
        deserunt itaque officia veniam eveniet accusantium aspernatur libero
        facilis possimus, odit ratione. Perspiciatis asperiores cumque possimus
        dolor officiis molestias vitae ratione enim nihil veniam dicta dolorem
        pariatur cum accusantium, facere odit iusto, repellendus vero corrupti.
        Debitis quasi cum tenetur aliquid veritatis molestiae possimus, labore
        totam neque quas quidem. Quasi qui vitae earum pariatur quibusdam ut
        consectetur dolorum id eos? Enim nulla impedit error eaque, rem laborum
        perspiciatis doloribus accusamus rerum totam quam, aliquam libero neque
        voluptatum commodi amet hic voluptate repellendus itaque. Accusantium
        fugiat libero vitae sit ex illo architecto nisi deleniti harum at,
        laudantium, quasi debitis a soluta iure velit, cumque natus neque beatae
        earum esse modi placeat nostrum eos. Ad magni nulla ut atque corporis
        provident beatae voluptatum ipsa quas mollitia accusantium tempora,
        obcaecati veritatis consequuntur natus nesciunt repudiandae est
        quibusdam autem nostrum. Laboriosam at perspiciatis rerum maiores error
        impedit eligendi inventore nostrum assumenda dolor tenetur commodi eos
        nobis placeat consectetur ipsa illo, labore quis itaque! Maiores commodi
        ullam, aut repellat, odio optio quod consectetur quam autem omnis
        blanditiis magni, veritatis quidem a laboriosam impedit? Alias sint
        quasi quos, accusantium nemo, aut architecto officiis nobis cupiditate
        labore, veritatis praesentium esse magni tenetur cumque error
        necessitatibus dolores hic inventore eius eum sequi ipsam ad facilis.
        Ducimus quaerat quis tempore, fugit, asperiores voluptatem delectus
        magni ad fugiat eum culpa, facere iste maiores doloribus cum. Earum eius
        magnam tenetur nam quis non, dolore tempora dolor repellendus tempore!
        Quam adipisci nihil, modi id sapiente accusamus earum repellendus
        tempora deleniti neque ipsam ut commodi quod vel aliquid recusandae!
        Voluptatem iste, modi illum inventore dicta rem quaerat earum optio
        assumenda harum quidem. Fuga, aspernatur tenetur recusandae placeat
        voluptates autem iure saepe quibusdam commodi sint dicta, quia ex
        officia! Fugiat pariatur, quidem, ipsum totam voluptatum adipisci harum
        fuga quam commodi atque aliquid, sit non aspernatur debitis voluptas
        earum nulla error enim animi exercitationem! Quaerat possimus nam
        explicabo tempora quas dicta praesentium. Ut, a est. Quisquam quidem
        necessitatibus laudantium sunt rerum reprehenderit reiciendis! Et culpa
        minus error aut illum nihil at optio, magnam quas. Inventore tempora
        alias dolores a? Officia quae perspiciatis animi beatae voluptatum sequi
        ea nulla officiis maxime iste, iure ex quam? Eveniet, ipsam nobis
        pariatur deleniti at quae distinctio quis, maxime, facere sed vero
        facilis earum itaque totam! Amet, ipsam non blanditiis esse beatae
        sapiente itaque voluptatum, at illum unde neque vitae doloribus
        necessitatibus ullam eius. Architecto repellendus fuga omnis voluptatum
        ipsam tempore numquam cumque, repellat eveniet incidunt esse earum,
        neque perspiciatis quae eos! Exercitationem, quas! Voluptate laudantium
        quam dicta maxime neque quis architecto illum! Laudantium iste est unde
        quae corporis facere, incidunt assumenda id beatae perferendis repellat
        iusto! Porro maiores itaque tenetur quia optio minima quam voluptatibus
        et laudantium quibusdam corrupti vel, delectus dolore totam nesciunt
        mollitia ullam soluta? Provident ex culpa minima nostrum qui asperiores
        veniam voluptatem nesciunt accusantium nulla facere eaque natus
        quibusdam id iure corrupti soluta cumque porro, ducimus dolorum ad
        illum! Sed error consequatur obcaecati, nemo architecto quisquam illo ex
        minus tempora vitae officia neque eum necessitatibus dolorum repudiandae
        aspernatur laudantium fugiat at! Fugiat amet maiores et soluta doloribus
        repudiandae dicta nobis dolor! Praesentium eos, aperiam saepe iste quo
        incidunt aut ducimus nulla deserunt laudantium est maxime vitae dicta
        magnam blanditiis perferendis ratione molestias magni consequuntur sed
        id autem quas maiores! Nisi omnis facilis deleniti neque possimus
        asperiores, illo soluta aliquam delectus quaerat reprehenderit dolorum!
        Consequatur quos dolorum quidem repellendus eius corporis placeat veniam
        iusto perspiciatis animi quia laboriosam reiciendis non provident quam,
        quas id cupiditate aliquam veritatis excepturi commodi officiis? Cum
        esse libero nemo nisi harum porro fugit ipsum, sint beatae obcaecati
        quisquam iusto tenetur qui veritatis unde sunt repellendus eveniet non
        pariatur omnis iure.
      </div>
      <div id="anchor2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos sunt
        natus a eum ipsum optio voluptatibus non aspernatur distinctio molestiae
        inventore voluptas porro quae deleniti dolorem, dicta necessitatibus
        quod. Asperiores distinctio fuga earum tenetur nemo animi voluptates
        doloribus ut eum quaerat exercitationem architecto rem nulla error
        perferendis, delectus quod laboriosam minima! Doloremque reprehenderit
        porro ab amet minima incidunt perspiciatis obcaecati a nobis laudantium
        est voluptate itaque, blanditiis ullam numquam quo officiis. Quod est
        vitae saepe, fuga eaque autem iure vero repellat expedita quaerat,
        quidem sed incidunt doloremque, impedit repellendus. Odit, esse
        repellendus doloremque ducimus asperiores repudiandae est iure dolores
        ex rerum blanditiis eius beatae reiciendis reprehenderit culpa mollitia
        sequi tenetur expedita dolorum provident, consequatur quidem totam
        placeat veniam! Deleniti quo consequatur repellat eius recusandae at
        numquam architecto quibusdam autem porro ex deserunt quod a aliquid eos,
        vel sunt odio molestiae? Pariatur similique aliquam quidem suscipit
        repudiandae odio voluptate ab aliquid esse atque eos eveniet rerum
        nesciunt, dolorum maxime officiis sequi optio necessitatibus nam tempora
        explicabo eum molestias dolore illo. Illo voluptatem, delectus tempore
        error aliquid corrupti, pariatur laboriosam cumque totam eius cupiditate
        culpa ea officiis magni similique ratione suscipit, velit voluptate
        distinctio dolores? Optio hic dicta numquam recusandae non possimus
        laboriosam nobis molestias, dolorem tempore, mollitia iusto quos in
        voluptates repudiandae vero. Beatae odio aspernatur ratione unde
        doloribus delectus illo iste inventore at eum necessitatibus cupiditate
        nihil repellat recusandae laudantium sed, facilis quaerat magnam error
        numquam nisi officia voluptas praesentium. Atque totam fugit aperiam eum
        iusto veritatis maiores itaque ullam sapiente modi eaque distinctio
        molestiae, expedita iure? Vitae quam totam, aliquid accusamus autem
        molestias aliquam iusto cumque repellendus assumenda inventore
        cupiditate nihil, mollitia provident fugiat repudiandae laborum pariatur
        ratione nam? Reprehenderit ducimus in distinctio expedita accusamus
        officia delectus sit voluptatibus repellendus doloremque, perspiciatis
        provident labore, laboriosam ipsa! Eaque pariatur sit asperiores
        temporibus assumenda ducimus sed quo voluptates quae qui distinctio
        voluptate impedit maiores, ad eligendi! Ab consequuntur ut enim harum
        architecto aliquid beatae laudantium obcaecati, porro iusto cumque quod
        voluptatibus officiis. Consequuntur eius enim sint! Vel autem rem,
        delectus quisquam atque excepturi odio numquam voluptatibus quae quasi.
        Ipsam maxime, ipsa beatae voluptates temporibus est, perferendis iure
        placeat eius, sapiente expedita amet eligendi laudantium accusantium
        culpa aspernatur eveniet odit voluptatibus totam iusto. Quam voluptatum
        asperiores voluptate ex magnam illum quod, ut est necessitatibus,
        veritatis neque. Animi dolorum, qui sunt corporis recusandae consectetur
        deserunt itaque officia veniam eveniet accusantium aspernatur libero
        facilis possimus, odit ratione. Perspiciatis asperiores cumque possimus
        dolor officiis molestias vitae ratione enim nihil veniam dicta dolorem
        pariatur cum accusantium, facere odit iusto, repellendus vero corrupti.
        Debitis quasi cum tenetur aliquid veritatis molestiae possimus, labore
        totam neque quas quidem. Quasi qui vitae earum pariatur quibusdam ut
        consectetur dolorum id eos? Enim nulla impedit error eaque, rem laborum
        perspiciatis doloribus accusamus rerum totam quam, aliquam libero neque
        voluptatum commodi amet hic voluptate repellendus itaque. Accusantium
        fugiat libero vitae sit ex illo architecto nisi deleniti harum at,
        laudantium, quasi debitis a soluta iure velit, cumque natus neque beatae
        earum esse modi placeat nostrum eos. Ad magni nulla ut atque corporis
        provident beatae voluptatum ipsa quas mollitia accusantium tempora,
        obcaecati veritatis consequuntur natus nesciunt repudiandae est
        quibusdam autem nostrum. Laboriosam at perspiciatis rerum maiores error
        impedit eligendi inventore nostrum assumenda dolor tenetur commodi eos
        nobis placeat consectetur ipsa illo, labore quis itaque! Maiores commodi
        ullam, aut repellat, odio optio quod consectetur quam autem omnis
        blanditiis magni, veritatis quidem a laboriosam impedit? Alias sint
        quasi quos, accusantium nemo, aut architecto officiis nobis cupiditate
        labore, veritatis praesentium esse magni tenetur cumque error
        necessitatibus dolores hic inventore eius eum sequi ipsam ad facilis.
        Ducimus quaerat quis tempore, fugit, asperiores voluptatem delectus
        magni ad fugiat eum culpa, facere iste maiores doloribus cum. Earum eius
        magnam tenetur nam quis non, dolore tempora dolor repellendus tempore!
        Quam adipisci nihil, modi id sapiente accusamus earum repellendus
        tempora deleniti neque ipsam ut commodi quod vel aliquid recusandae!
        Voluptatem iste, modi illum inventore dicta rem quaerat earum optio
        assumenda harum quidem. Fuga, aspernatur tenetur recusandae placeat
        voluptates autem iure saepe quibusdam commodi sint dicta, quia ex
        officia! Fugiat pariatur, quidem, ipsum totam voluptatum adipisci harum
        fuga quam commodi atque aliquid, sit non aspernatur debitis voluptas
        earum nulla error enim animi exercitationem! Quaerat possimus nam
        explicabo tempora quas dicta praesentium. Ut, a est. Quisquam quidem
        necessitatibus laudantium sunt rerum reprehenderit reiciendis! Et culpa
        minus error aut illum nihil at optio, magnam quas. Inventore tempora
        alias dolores a? Officia quae perspiciatis animi beatae voluptatum sequi
        ea nulla officiis maxime iste, iure ex quam? Eveniet, ipsam nobis
        pariatur deleniti at quae distinctio quis, maxime, facere sed vero
        facilis earum itaque totam! Amet, ipsam non blanditiis esse beatae
        sapiente itaque voluptatum, at illum unde neque vitae doloribus
        necessitatibus ullam eius. Architecto repellendus fuga omnis voluptatum
        ipsam tempore numquam cumque, repellat eveniet incidunt esse earum,
        neque perspiciatis quae eos! Exercitationem, quas! Voluptate laudantium
        quam dicta maxime neque quis architecto illum! Laudantium iste est unde
        quae corporis facere, incidunt assumenda id beatae perferendis repellat
        iusto! Porro maiores itaque tenetur quia optio minima quam voluptatibus
        et laudantium quibusdam corrupti vel, delectus dolore totam nesciunt
        mollitia ullam soluta? Provident ex culpa minima nostrum qui asperiores
        veniam voluptatem nesciunt accusantium nulla facere eaque natus
        quibusdam id iure corrupti soluta cumque porro, ducimus dolorum ad
        illum! Sed error consequatur obcaecati, nemo architecto quisquam illo ex
        minus tempora vitae officia neque eum necessitatibus dolorum repudiandae
        aspernatur laudantium fugiat at! Fugiat amet maiores et soluta doloribus
        repudiandae dicta nobis dolor! Praesentium eos, aperiam saepe iste quo
        incidunt aut ducimus nulla deserunt laudantium est maxime vitae dicta
        magnam blanditiis perferendis ratione molestias magni consequuntur sed
        id autem quas maiores! Nisi omnis facilis deleniti neque possimus
        asperiores, illo soluta aliquam delectus quaerat reprehenderit dolorum!
        Consequatur quos dolorum quidem repellendus eius corporis placeat veniam
        iusto perspiciatis animi quia laboriosam reiciendis non provident quam,
        quas id cupiditate aliquam veritatis excepturi commodi officiis? Cum
        esse libero nemo nisi harum porro fugit ipsum, sint beatae obcaecati
        quisquam iusto tenetur qui veritatis unde sunt repellendus eveniet non
        pariatur omnis iure.
      </div>
    </div>
  );
}
