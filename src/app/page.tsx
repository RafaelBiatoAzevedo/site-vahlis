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
import { useRef } from "react";
import useInView from "@/hooks/useInView";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import useInViewCounters from "@/hooks/useInViewCounters";

const messages = [
  {
    title: "Eduardo Arsufi",
    message:
      // eslint-disable-next-line react/no-unescaped-entities
      "Sou cliente da Vahlis desde outubro de 2023. Estou muito contente com os resultados que toda assessoria e atendimento têm me proporcionado. Por isso eu indico a Vahlis para todos.",
  },
  {
    title: "Daniel Pepe",
    message:
      // eslint-disable-next-line react/no-unescaped-entities
      "Sou investidor da Vahlis desde novembro de 2023. Acabei de renovar contrato por mais 12 meses! É um belo investimento e por isso eu recomendo para todo mundo!",
  },
  {
    title: "Grabriela Alves",
    message:
      // eslint-disable-next-line react/no-unescaped-entities
      "Sou cliente da Vahlis desde 2022 e minha experiência tem sido extremamente positiva. A empresa oferece um atendimento personalizado e acessível, sempre disposta a esclarecer dúvidas.",
  },
  {
    title: "Eduardo Arsufi",
    message:
      // eslint-disable-next-line react/no-unescaped-entities
      "Sou cliente da Vahlis desde outubro de 2023. Estou muito contente com os resultados que toda assessoria e atendimento têm me proporcionado. Por isso eu indico a Vahlis para todos.",
  },
  {
    title: "Daniel Pepe",
    message:
      // eslint-disable-next-line react/no-unescaped-entities
      "Sou investidor da Vahlis desde novembro de 2023. Acabei de renovar contrato por mais 12 meses! É um belo investimento e por isso eu recomendo para todo mundo!",
  },
  {
    title: "Grabriela Alves",
    message:
      // eslint-disable-next-line react/no-unescaped-entities
      "Sou cliente da Vahlis desde 2022 e minha experiência tem sido extremamente positiva. A empresa oferece um atendimento personalizado e acessível, sempre disposta a esclarecer dúvidas.",
  },
];

const enterprisesItems = [
  { iconPath: "/logos/globalPayLogo.png", label: "Texas" },
  { iconPath: "/logos/essenzaLogo.png", label: "Scae" },
  { iconPath: "/logos/santosVahlisLogo.svg", label: "Santos Vahlis" },
  { iconPath: "/logos/belaVistaLogo.png", label: "Cia Rodeo" },
  { iconPath: "/logos/texasLogo.svg", label: "Texas" },
  { iconPath: "/logos/scaeLogo.png", label: "Scae" },
  { iconPath: "/logos/ticketFireLogo.png", label: "Santos Vahlis" },
  { iconPath: "/logos/senddLogo.png", label: "Cia Rodeo" },
];

export default function HomePage() {
  const legacyFallbackRef = useRef<HTMLDivElement>(null);
  const legacyVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const mainFallbackRef = useRef<HTMLDivElement>(null);

  const handleMainVideoError = () => {
    if (mainVideoRef.current) mainVideoRef.current.style.display = "none";
    if (mainFallbackRef.current)
      mainFallbackRef.current.style.display = "block";
  };

  const handleLegacyVideoError: React.ReactEventHandler<
    HTMLVideoElement
  > = () => {
    if (legacyVideoRef.current) legacyVideoRef.current.style.display = "none";
    if (legacyFallbackRef.current)
      legacyFallbackRef.current.style.display = "block";
  };

  const { ref, hasAnimated } = useInViewCounters(0.2);
  const { ref: legacyRef, isVisible } = useInView(0.3, true);
  const projectRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(projectRef);

  return (
    <div className="main-home">
      <div className="wrapper-one">
        <video
          ref={mainVideoRef}
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          onError={handleMainVideoError}
        >
          <source src="/videos/home.mp4" type="video/mp4" />
        </video>

        <div ref={mainFallbackRef} className="bg-fallback" />

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
          <p>“</p>
          <p>Damos início a narrativas</p>
          <p>duradouras que</p>
          <p>transcendem gerações</p>
        </div>
      </div>
      <div className="wrapper-vector">
        <Image
          className="vector-image"
          src="/SVG/vector.svg"
          alt="Logo"
          width={800}
          height={400}
        />
      </div>
      <div className="wrapper-invest">
        <div className="overlay-invest">
          <p>Desenvolvemos espaços</p>
          <p>
            que valorizam quem <b>vive</b>
          </p>
          <p>
            e quem <b>investe.</b>
          </p>
        </div>
      </div>
      <div className="wrapper-legacy">
        <video
          ref={legacyVideoRef}
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          onError={handleLegacyVideoError}
        >
          <source src="/videos/legacy.mp4" type="video/mp4" />
        </video>

        <div ref={legacyFallbackRef} className="bg-fallback" />

        <div className="overlay">
          <div
            className={`overlay-content ${isVisible ? "animate-project" : ""}`}
            ref={legacyRef}
            style={{
              transform: isVisible ? "translateY(-50px)" : "translateY(0)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 1s ease-out, opacity 1s ease-out",
            }}
          >
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

      <div className="wrapper-quality" ref={projectRef}>
        <p
          style={{
            transform: `translateY(-${120 * progress}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          Nosso compromisso com
        </p>
        <p
          style={{
            transform: `translateY(-${120 * progress}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          padrões de qualidade
        </p>

        <div
          className="wrapper-project"
          style={{
            width: `${progress * 100}%`,
            height: `${progress * 160}%`,
            transform: `translate(-50%, -50%)`,
            transition: "width 0.2s ease-out, height 0.2s ease-out",
          }}
        >
          <p
            style={{
              fontSize: `${1 + 2.4 * progress}rem`, // 1rem → 3.4rem
              transform: `translateY(-${180 * progress}px)`, // sobe no máximo 40px
              transition: "font-size 0.15s ease-out, transform 0.15s ease-out",
            }}
          >
            Eleva cada projeto
          </p>
          <p
            style={{
              fontSize: `${1 + 2.4 * progress}rem`,
              transform: `translateY(-${180 * progress}px)`,
              transition: "font-size 0.15s ease-out, transform 0.15s ease-out",
            }}
          >
            a um novo patamar
          </p>
        </div>
      </div>
      <div className={`wrapper-data`} ref={ref}>
        <div className="image-wrapper-rect">
          <img
            src="/images/imageData.jpg"
            alt="entreprise"
            className="image-contain"
          />
        </div>

        <div>
          <p>{hasAnimated && <Counter end={90} duration={1000} />}+</p>
          <p>Anos de atuação</p>

          <p>{hasAnimated && <Counter end={100} duration={1000} />}%</p>
          <p>De satisfação</p>

          <p>{hasAnimated && <Counter end={200} duration={1000} />}+</p>
          <p>Prédios entregues</p>
        </div>
      </div>
      <div className="enterprise-vahlis">
        <p>Empresas do grupo Vahlis</p>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000 }}
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
