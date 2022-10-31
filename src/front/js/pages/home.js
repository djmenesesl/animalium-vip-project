import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
const { RangePicker } = DatePicker;
import moment from "moment";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [dates, setDates] = useState([]);
  console.log(dates);

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid bg-hero">
        <div
          className="container bg-transparent mb-5 text-light"
          id="buscador-tope"
        >
          <div className="row pt-5 bg-transparent">
            <div className="col-7 fs-1 fw-bold bg-transparent">
              ¡Tu mascota se sentirá tan feliz como en casa!
            </div>
            <div className="col-8 fs-4 bg-transparent">
              Contamos con la red de cuidadores más grande y confiable de toda
              Venezuela
            </div>
          </div>
        </div>
        <div className="container buscador border align-items-center justify-content-center align-middle pt-5">
          <div className="row">
            <div className="col-md-3">
              <label for="validationCustom04" className="form-label">
                <strong>Tipo de mascota</strong>
              </label>
              <select
                style={{ fontSize: "15px" }}
                className="form-select"
                id="validationDefault04"
                required
              >
                <option selected disabled value="">
                  Seleccionar...
                </option>
                <option value="1">Perro</option>
                <option value="2">Gato</option>
              </select>
            </div>
            <div className="col-md-3">
              <label for="validationCustom04" className="form-label">
                <strong>Cantidad</strong>
              </label>
              <select
                style={{ fontSize: "15px" }}
                className="form-select"
                id="validationDefault04"
                required
              >
                <option selected disabled value="">
                  Seleccionar...
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="col-md-6">
              <label for="validationCustom04" className="form-label">
                <strong>Fechas</strong>
              </label>
              <div className="calendar">
                <RangePicker
                  className="w-75"
                  style={{ fontSize: "27px", borderRadius: "0.25rem" }}
                  onChange={(values) => {
                    setDates(
                      values.map((item) => {
                        return moment(item).format("DD-MM-YYYY");
                      })
                    );
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <label for="validationCustom04" className="form-label">
                <strong>Ubicación</strong>
              </label>
              <select className="form-select" id="validationDefault04" required>
                <option selected disabled value="">
                  Seleccionar...
                </option>
                <option value="1">Caracas</option>
                <option value="2">Maturín</option>
              </select>
            </div>
            <div className="col-md-6 mt-1 pb-1">
              <button type="button" className="boton-cuidador w-75 p-2 mt-4">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "white", background: "transparent" }}
                ></i>{" "}
                Buscar cuidador
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="cardreserva" class="card bg-transparent bg-card-reserve mt-5">
        <div class="card-body bg-transparent">
          <h1 class="card-title bg-transparent" id="h1reserva">
            <strong>Reserva con cuidadores de confianza</strong>
          </h1>
          <div class="row bg-transparent">
            <img
              id="gifhuella"
              class="bg-transparent"
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106329/Animalium/huella_1_jdpozm.gif"
              alt=""
            />
            <p id="preserva" className="bg-transparent">
              Todos los cuidadores son aprobados por nuestro equipo de calidad.
            </p>
          </div>
          <div class="row bg-transparent">
            <img
              id="gifhuella1"
              class="bg-transparent"
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106329/Animalium/huella_1_jdpozm.gif"
              alt=""
            />
            <p id="preserva" className="bg-transparent">
              Tu mascota tendrá todas las comodidades de un hogar.
            </p>
          </div>
          <div className="bg-transparent" style={{ paddingLeft: "32px" }}>
            <button type="button" className="boton-cuidador w-25 p-2 mt-2">
              Buscar cuidador
            </button>
          </div>
        </div>
      </div>

      <div class="container bg-transparent">
        <div class="d-flex justify-content-center bg-transparent">
          <h1 id="h1" className="bg-transparent">
            <strong>Encuentra a los mejores cuidadores</strong>
          </h1>
        </div>
        <div class="d-flex justify-content-center bg-transparent">
          <p id="pcuidador1" className="bg-transparent">
            Nuestros cuidadores abren las puertas de sus hogares para darle a tu
            peludito todo el amor y cuidado mientras tú no estás.
          </p>
        </div>
      </div>
      <div className="container-fluid bg-mejores">
        <div class="row d-flex justify-content-center bg-transparent">
          <div id="cardcuidador" class="card bg-transparent">
            <img
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163838/Animalium/pexels-oleksandr-pidvalnyi-1174081_1_uo4xzu.png"
              id="imgcuidador"
              class="card-img-top bg-transparent"
              alt="..."
            />
            <img
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
              alt=""
              id="certificadohuella"
              class="position-absolute top-0 end-0 bg-transparent"
            />
            <div class="card-body">
              <h6 id="h6cuidador">
                <strong>Natalia Andrade</strong>
                <span id="span" class="fa fa-star checked"></span>
                <span id="prating">5.0</span>
              </h6>
              <p id="pcuidador" class="card-text">
                Tengo 22 años, actualmente soy estudiante de medicina
                Veterinaria. Desde pequeña me han gustado los animales...
              </p>
              <p id="pcuidadorlocation">
                <i id="locationcuidador" class="fa-solid fa-location-dot"></i>
                Caracas
              </p>
            </div>
          </div>
          <div id="cardcuidador" class="card bg-transparent">
            <img
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163831/Animalium/pexels-hikmet-9682588_2_nvxzrs.png"
              id="imgcuidador"
              class="card-img-top bg-transparent"
              alt="..."
            />
            <img
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
              alt=""
              id="certificadohuella"
              class="position-absolute top-0 end-0 bg-transparent"
            />
            <div class="card-body">
              <div class="row d-flex justify-content-center">
                <h6 id="h6cuidador">
                  <strong>Miguel Rodríguez</strong>
                  <span id="span" class="fa fa-star checked"></span>
                  <span id="prating">5.0</span>
                </h6>
              </div>
              <p id="pcuidador" class="card-text">
                Crecí con animales y he sido rescatista, trabajo desde mi casa y
                tengo el tiempo para darles cariño a las mascotas...
              </p>
              <p id="pcuidadorlocation">
                <i id="locationcuidador" class="fa-solid fa-location-dot"></i>
                Maturin
              </p>
            </div>
          </div>
          <div id="cardcuidador" class="card bg-transparent">
            <img
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667163832/Animalium/pexels-cottonbro-6318274_2_ug64zg.png"
              id="imgcuidador"
              class="card-img-top bg-transparent"
              alt="..."
            />
            <img
              src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667106569/Animalium/supercuidador-icon_pbxfpn.png"
              alt=""
              id="certificadohuella"
              class="position-absolute top-0 end-0 bg-transparent"
            />
            <div class="card-body">
              <h6 id="h6cuidador">
                <strong>Sandra Abreu</strong>
                <span id="span" class="fa fa-star checked"></span>
                <span id="prating">5.0</span>
              </h6>
              <p id="pcuidador" class="card-text">
                Me encantan las mascotas, estoy disponible para darles atención
                y cuidarlos❤️ Lo más importante es que ellos...
              </p>
              <p id="pcuidadorlocation">
                <i id="locationcuidador" class="fa-solid fa-location-dot"></i>
                Caracas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="d-flex justify-content-center bg-transparent pt-3">
          <h1 id="h1paso">
            <strong>Las mascotas son parte de nuestra familia</strong>
          </h1>
        </div>
        <div class="d-flex justify-content-center bg-transparent mb-0">
          <p id="ppaso1">
            Brindar una experiencia llena de amor y cuidados es nuestra promesa.
            Damos tranquilidad y felicidad tanto a mascotas como a sus dueños.
          </p>
        </div>
      </div>
      <div className="container-fluid bg-pasos">
        <div class="row d-flex justify-content-center bg-transparent">
          <div id="cardpaso" class="card bg-transparent">
            <div id="cardbodypaso" class="card-body ">
              <h5 id="h5paso" class="card-title">
                Encuentra un cuidador
              </h5>
              <div class="text-center">
                <img
                  src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109884/Animalium/buscar-icon_udxb4g.png"
                  id="imgpaso"
                  alt=""
                />
              </div>
              <p id="ppaso" class="card-text">
                Busca un cuidador que se ajuste a los días de tu viaje, lee las
                reseñas y selecciona el cuidado que mejor se adapte a las
                necesidades de tus mascotas.
              </p>
            </div>
          </div>
          <div id="cardpaso" class="card bg-transparent">
            <div id="cardbodypaso" class="card-body">
              <h5 id="h5paso" class="card-title">
                Reserva
              </h5>
              <div class="text-center">
                <img
                  src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109882/Animalium/calendar-icon_y5sf2z.png"
                  id="imgpaso"
                  alt=""
                />
              </div>
              <p id="ppaso" class="card-text">
                Reserva con el cuidador seleccionando con total confianza.
                Pensando en el bienestar de tu mascota, sólo encontrarás a los
                mejores cuidadores.
              </p>
            </div>
          </div>
          <div id="cardpaso" class="card bg-transparent">
            <div id="cardbodypaso" class="card-body">
              <h5 id="h5paso" class="card-title">
                ¡Y listo!
              </h5>
              <div class="text-center">
                <img
                  src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667109880/Animalium/heart-icon_mrr2jf.png"
                  id="imgpaso"
                  alt=""
                />
              </div>
              <p id="ppaso" class="card-text">
                Tu mascota está en las mejores manos. El cuidador te enviará
                fotos y videos de tu mascota para tu tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-patitas">
        <div class="container bg-transparent">
          <div class="d-flex justify-content-center bg-transparent">
            <h1 id="h1">
              <strong>Clientes Felices</strong>
            </h1>
          </div>
          <div class="d-flex justify-content-center bg-transparent">
            <p id="p">
              Conoce las historias de nuestros clientes y sus maravillosas
              mascotas
            </p>
          </div>
        </div>
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide bg-transparent"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner bg-transparent">
            <div
              class="carousel-item active bg-transparent"
              data-bs-interval="10000"
            >
              <div class="row d-flex justify-content-center bg-transparent">
                <div id="card" class="card d-block border-0">
                  <div class="card-body text-center ">
                    <div class="mediaobject">
                      <img
                        class="img1"
                        src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667171171/Animalium/Avatar_lyqorz.png"
                        alt=""
                      />
                    </div>
                    <h6 id="h6" class="card-title">
                      Cesar
                    </h6>
                    <div class="stars">
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                    </div>
                    <p id="p" class="card-text">
                      <strong>
                        "Me encantó el servicio!!! Cuidaron de mi Bolt de manera
                        maravillosa. Estoy muy contento. Súper recomendado!!"
                      </strong>
                    </p>
                  </div>
                </div>
                <div id="card" class="card d-block border-0">
                  <div class="card-body text-center">
                    <div class="mediaobject">
                      <img
                        class="img1"
                        src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667171287/Animalium/Avatar_hp69el.png"
                        alt=""
                      />
                    </div>
                    <h6 id="h6" class="card-title">
                      Daniel
                    </h6>
                    <div class="stars">
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                    </div>
                    <p id="p" class="card-text">
                      <strong>
                        "No había usado un servicio así antes y me generó mucha
                        confianza que el cuidador nos enviara fotos y videos de
                        nuestros perritos, fue muy tranquilizador. Contrataría
                        de nuevo."
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item bg-transparent" data-bs-interval="2000">
              <div class="row d-flex justify-content-center bg-transparent">
                <div id="card" class="card d-block border-0 bg-transparent">
                  <div class="card-body text-center bg-transparent">
                    <div class="mediaobject">
                      <img
                        class="img1"
                        src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667171159/Animalium/Avatar_dpmsza.png"
                        alt=""
                      />
                    </div>
                    <h6 id="h6" class="card-title">
                      Gabriela
                    </h6>
                    <div class="stars">
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                    </div>
                    <p id="p" class="card-text">
                      <strong>
                        "Animalium es una maravilla!!!! Quedé súper encantada
                        con el servicio. Tienen a los mejores cuidadores. Lo
                        recomiendo al 100%."
                      </strong>
                    </p>
                  </div>
                </div>
                <div id="card" class="card d-block border-0">
                  <div class="card-body text-center">
                    <div class="mediaobject">
                      <img
                        class="img1"
                        src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667171197/Animalium/Avatar_xzt0la.png"
                        alt=""
                      />
                    </div>
                    <h6 id="h6" class="card-title">
                      Joan
                    </h6>
                    <div class="stars">
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                    </div>
                    <p id="p" class="card-text">
                      <strong>
                        "Es genial que exista una solución como Animalium.
                        Dejamos a nuestros perros con Mariela y quedaron en
                        excelentes manos. Nos mantuvo informados de todo durante
                        nuestro viaje.."
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item bg-transparent" data-bs-interval="2000">
              <div class="row d-flex justify-content-center bg-transparent">
                <div id="card" class="card d-block border-0 bg-transparent">
                  <div class="card-body text-center bg-transparent">
                    <div class="mediaobject">
                      <img
                        class="img1"
                        src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667171650/Animalium/Avatar_koemhk.png"
                        alt=""
                      />
                    </div>
                    <h6 id="h6" class="card-title">
                      Pedro
                    </h6>
                    <div class="stars">
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                    </div>
                    <p id="p" class="card-text">
                      <strong>
                        "Primera vez que usamos Animalium y quedamos muy
                        satisfechos con el cuidado que le dieron a nuestros tres
                        perros. Súper agradecido."
                      </strong>
                    </p>
                  </div>
                </div>
                <div id="card" class="card d-block border-0">
                  <div class="card-body text-center">
                    <div class="mediaobject">
                      <img
                        class="img1"
                        src="https://res.cloudinary.com/dz8eyr7mb/image/upload/v1667171185/Animalium/Avatar_e89d7x.png"
                        alt=""
                      />
                    </div>
                    <h6 id="h6" class="card-title">
                      Ana
                    </h6>
                    <div class="stars">
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                      <span id="span" class="fa fa-star checked"></span>
                    </div>
                    <p id="p" class="card-text">
                      <strong>
                        “Como siempre, excelente. Me encanta la manera en que
                        Maribel cuida de nuestra Luna. Siempre es nuestra
                        primera opción.”
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-transparent"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-transparent"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden bg-transparent">Next</span>
          </button>
        </div>
      </div>

      <div
        className="container card justify-content-center align-items-center"
        style={{
          width: "1027px",
          height: "501px",
          backgroundColor: "#623CEA",
          borderRadius: "15px",
          marginTop: "100px",
          marginBottom: "80px",
        }}
      >
        <div className="row g-0" style={{ backgroundColor: "#623CEA" }}>
          <div
            className="col-md-7 text-center"
            style={{ backgroundColor: "#623CEA" }}
          >
            <div className="card-body" style={{ backgroundColor: "#623CEA" }}>
              <div
                className="card-title fw-bold"
                style={{
                  backgroundColor: "#623CEA",
                  color: "white",
                  fontSize: "48px",
                  width: "448px",
                }}
              >
                ¿Quieres ser cuidador?
              </div>
              <div
                className="card-title"
                style={{
                  backgroundColor: "#623CEA",
                  color: "#FAFAFA",
                  fontSize: "16px",
                  width: "448px",
                }}
              >
                Genera ingresos extras cuidando hermosas mascotas y forma parte
                del mundo Animalium.
              </div>
              <div
                className="card-title"
                style={{
                  backgroundColor: "#623CEA",
                  color: "#FAFAFA",
                  fontSize: "16px",
                  width: "448px",
                }}
              >
                <button type="button" className="boton-cuidador w-50 p-2 mt-4">
                  <Link
                    target={"_blank"}
                    to="/registrocuidador"
                    style={{ color: "white" }}
                  >
                    ¡Postularme!
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ backgroundColor: "#623CEA" }}>
            <img
              src="https://res.cloudinary.com/dpihypqmp/image/upload/v1667145307/samples/image_4_zq3p5o.png"
              className="img-fluid"
              alt="..."
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
