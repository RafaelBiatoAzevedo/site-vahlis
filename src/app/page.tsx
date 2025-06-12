"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "../styles/components/Home.css";
import "swiper/css";
import "swiper/css/pagination";
import Counter from "@/components/Counter";
import Image from "next/image";
import Header from "@/components/Header";
import ArrowRightIcon from "@/components/ArrowRight";

const messages = [
  {
    title: "Gabriela Alves",
    message:
      "Sou cliente da Vahlis desde 2022 e minha experiência tem sido extremamente positiva. A empresa oferece um atendimento personalizado e acessível, sempre disposta a esclarecer dúvidas.",
  },
  {
    title: "Carlos Moreira",
    message:
      "Sou cliente da Vahlis desde 2022 e minha experiência tem sido extremamente positiva. A empresa oferece um atendimento personalizado e acessível, sempre disposta a esclarecer dúvidas.",
  },
  {
    title: "Juliana Freitas",
    message:
      "Sou cliente da Vahlis desde 2022 e minha experiência tem sido extremamente positiva. A empresa oferece um atendimento personalizado e acessível, sempre disposta a esclarecer dúvidas.",
  },
  {
    title: "Luciana Prado",
    message:
      "Sou cliente da Vahlis desde 2022 e minha experiência tem sido extremamente positiva. A empresa oferece um atendimento personalizado e acessível, sempre disposta a esclarecer dúvidas.",
  },
  {
    title: "Marcos Silva",
    message:
      "Sou cliente da Vahlis desde 2022 e minha experiência tem sido extremamente positiva. A empresa oferece um atendimento personalizado e acessível, sempre disposta a esclarecer dúvidas.",
  },
];

const enterprisesItems = [
  { iconPath: "/SVG/texasLogo.svg", label: "Texas" },
  { iconPath: "/SVG/scaeLogo.svg", label: "Scae" },
  { iconPath: "/SVG/santosVahlisLogo.svg", label: "Santos Vahlis" },
  { iconPath: "/SVG/ciaRodeioLogo.svg", label: "Cia Rodeo" },
];

export default function HomePage() {
  return (
    <div className="main-home">
      <div className="wrapper-one">
        <div className="overlay-top">
          <Header />
          <div>
            <p>Vahlis Incorporadora,</p>
            <p>Mais que empreendimentos.</p>
            <p>Nós construímos experiências.</p>
          </div>
        </div>
      </div>
      <div className="wrapper-two">
        <div>
          <p style={{ fontFamily: "var(--font-playfair)" }}>“</p>
          <p>Damos início a narrativas</p>
          <p>duradouras que</p>
          <p>transcendem gerações</p>
        </div>
        <Image
          className="vector-image"
          src="/SVG/vector.svg"
          alt="Logo"
          width={800}
          height={400}
        />
      </div>
      <div className="wrapper-invest">
        <p>Desenvolvemos espaços</p>
        <p>
          que valorizam quem <b>vive</b>
        </p>
        <p>
          e quem <b>investe.</b>
        </p>
      </div>
      <div className="wrapper-legacy">
        <div className="overlay">
          <div>
            <p>Um legado que inspira o futuro</p>
            <div>
              <p>Desde 1933, a Vahlis transforma lugares com</p>
              <p>elegância, visão e excelência. Fundada por Santos</p>
              <p>Vahlis, nossa trajetória é marcada por mais de 200</p>
              <p>empreendimentos que ajudaram a moldar o cenário</p>
              <p>urbano do país.</p>
            </div>
            <button>
              Conheça mais da Vahlis{" "}
              <ArrowRightIcon
                width={20}
                height={20}
                style={{ color: "white" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="wrapper-quality">
        <p>Nosso compromisso com</p>
        <p>padrões de qualidade</p>
      </div>
      <div className="wrapper-project">
        <p>Eleva cada projeto</p>
        <p>a um novo patamar</p>
      </div>
      <div className="wrapper-data">
        <div className="image-wrapper-rect">
          <img
            src="/images/imageData.jpg"
            alt="entreprise"
            className="image-contain"
          />
        </div>

        <div>
          <p>
            <Counter end={90} duration={1000} />+
          </p>
          <p>Anos de atuação</p>

          <p>
            <Counter end={100} duration={1000} />%
          </p>
          <p>De satisfação</p>

          <p>
            <Counter end={200} duration={1000} />+
          </p>
          <p>Prédios entregues</p>
        </div>
      </div>
      <div className="enterprise-vahlis">
        <p>Empresas do grupo Vahlis</p>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {enterprisesItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="enterprise-slide">
                <img
                  src={item.iconPath}
                  alt={item.label}
                  className="logo-img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="say-vahlis">
        <div className="divisor-solid"></div>

        <p>O que dizem da Vahlis</p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {messages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-slide">
                <p>{item.title}</p>
                <div className="divisor-line"></div>
                <p>{item.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
