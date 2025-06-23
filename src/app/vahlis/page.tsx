"use client";

import Header from "@/components/Header";
import "../../styles/components/Vahlis.css";
import { useRef } from "react";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";

const TIMELINE = [
  {
    date: "1929",
    message:
      ' Santos Vahlis chegou ao Brasil e rapidamente se destacou como o "tubarão dos negócios imobiliários."',
  },
  {
    date: "1933",
    message:
      "Deu início à história de um império no setor de incorporação e venda de imóveis, inicialmente conhecido como Zatecas.",
  },
  {
    date: "1940",
    message:
      "Santos Vahlis casou-se com Dona Helena, que mais tarde tornou-se a fundadora da renomada marca suíça de relógios Swatch Swiss.",
  },
  {
    date: "1942",
    message:
      "Ganha notoriedade ao divulgar suas publicidades nos jornais da antiga capital.",
  },
  {
    date: "1950",
    message:
      "Santos Vahlis testemunhou um boom de vendas nos edifícios Itapemirim, Arosa e Sandy, consolidando sua reputação como um vendedor nato de apartamentos.",
  },
  {
    date: "1955",
    message:
      '"Contribuiu significativamente com o desenvolvimento da sociedade, realizando diversas doações para o acervo de obras do MASP, como o quadro “Francisco de Zurbarán” e “Menina com as Espigas”',
  },
  {
    date: "1979",
    message:
      "No dia 19 de janeiro de 1979, aos 74 anos, morre Santos Vahlis. Deixando uma das maiores fortunas do Brasil.",
  },
  {
    date: "1990",
    message:
      "Dona Helena Vahlis assume a liderança, e após seu falecimento parte da fortuna foi destinada a instituições de caridade e proteção aos animais, perpetuando seu legado de generosidade e amor pelos seres vivos.",
  },
  {
    date: "2002",
    message:
      "Daniel dos Santos Vahlis assume a Incorporadora, e decide perpetuar o legado deixado por seus pais, mas com um olhar visionário sobre o futuro da marca.",
  },
  {
    date: "2018",
    message:
      "Rebranding da marca, que inclui a alteração do nome da empresa familiar para Vahlis Incorporadora.",
  },
  {
    date: "2023",
    message:
      "Hoje o digital é parte essencial da nossa evolução. É o início de um novo capítulo em que trabalhamos com mais inovação, inteligência de mercado e excelência em cada projeto. Um movimento estratégico que reforça nossos 90 anos de história e projeta a Vahlis para o futuro.",
  },
];

export default function Vahlis() {
  const { width } = useWindowSize();
  const whoVideoRef = useRef<HTMLVideoElement>(null);
  const whoFallbackRef = useRef<HTMLDivElement>(null);
  const vahlisVideoRef = useRef<HTMLVideoElement>(null);
  const vahlisFallbackRef = useRef<HTMLDivElement>(null);

  const handleWhoVideoError = () => {
    if (whoVideoRef.current) whoVideoRef.current.style.display = "none";
    if (whoFallbackRef.current) whoFallbackRef.current.style.display = "block";
  };

  const handleVahlisVideoError = () => {
    if (vahlisVideoRef.current) vahlisVideoRef.current.style.display = "none";
    if (vahlisFallbackRef.current)
      vahlisFallbackRef.current.style.display = "block";
  };

  return (
    <div className="main-vahlis">
      <div className="wrapper-one-vahlis">
        <video
          ref={vahlisVideoRef}
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          onError={handleVahlisVideoError}
        >
          <source src="/videos/vahlis.mp4" type="video/mp4" />
        </video>

        <div ref={vahlisFallbackRef} className="bg-fallback" />
        <div className="overlay-top-vahlis">
          <Header />
          <div>
            <div>
              <p>Conhecendo a Vahlis</p>
              <p>Desde 1933, construindo um legado que </p>
              <p>atravessa gerações.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-history">
        <div>
          <img src="/images/image-history.jpg" alt="history" />
        </div>
        <div>
          <div>
            <p>Fundada por Santos Vahlis, um dos grandes visionários do</p>
            <p>
              setor imobiliário brasileiro, a Vahlis carrega
              <b> mais de 90 anos</b>
            </p>
            <p>
              <b>de tradição</b> em desenvolver <b>empreendimentos de alto</b>
            </p>
            <p>
              <p>
                <b>padrão</b> que moldam paisagens e transformam histórias.{" "}
              </p>
              Com <b>mais de 200 prédios entregues</b>, deixamos nossa marca
            </p>
            <p>não apenas em estruturas, mas na vida das pessoas.</p>
            <br />
            <p>Hoje, com o mesmo compromisso que nos trouxe até aqui,</p>
            <p>
              seguimos impulsionados por <b>inovação, excelência e um</b>{" "}
            </p>
            <p>
              <b>profundo respeito</b> pelo impacto que deixamos no tempo e
            </p>
            <p>na cidade.</p>
          </div>
        </div>
      </div>
      <div className="wrapper-who">
        <video
          ref={whoVideoRef}
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          onError={handleWhoVideoError}
        >
          <source src="/videos/who.mp4" type="video/mp4" />
        </video>

        <div ref={whoFallbackRef} className="bg-fallback" />
        <div className="overlay-who">
          <div>
            <div>
              <div>
                <Image
                  src="/icons/who.png"
                  alt="icon"
                  width={width >= 1336 ? 30 : 24}
                  height={width >= 1336 ? 30 : 24}
                />
                <p>Quem somos?</p>
              </div>
              <div>
                <p>Somos uma Incorporadora de</p>
                <p>alto padrão movida pela</p>
                <p>responsabilidade de perpetuar</p>
                <p>um legado e pelo desejo de</p>
                <p>impactar vidas.</p>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src="/icons/make.png"
                  alt="icon"
                  width={width >= 1336 ? 30 : 24}
                  height={width >= 1336 ? 30 : 24}
                />
                <p>O que fazemos?</p>
              </div>
              <div>
                <p>Projetamos empreendimentos de</p>
                <p>alto padrão para quem busca</p>
                <p>exclusividade. Cada detalhe é</p>
                <p>pensado para proporcionar</p>
                <p>sofisticação, conforto e identidade</p>
                <p>a quem escolhe viver em um Vahlis.</p>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src="/icons/why.png"
                  alt="icon"
                  width={width >= 1336 ? 30 : 24}
                  height={width >= 1336 ? 30 : 24}
                />
                <p>Por que fazemos?</p>
              </div>
              <div>
                <p>Nosso propósito é entregar mais</p>
                <p>do que imóveis. Queremos</p>
                <p>proporcionar realizações pessoais </p>
                <p>que durem uma vida inteira.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-mission">
        <div>
          <div>
            <div>
              <Image
                src="/icons/mission.png"
                alt="icon"
                width={width >= 1336 ? 30 : 24}
                height={width >= 1336 ? 30 : 24}
              />
              <p>Missão</p>
            </div>
            <p>Oferecer não só um</p>
            <p>empreendimento, mas sim</p>
            <p>uma nova experiência no </p>
            <p>ramo imobiliário.</p>
          </div>
          <div>
            <div>
              <Image
                src="/icons/vision.png"
                alt="icon"
                width={width >= 1336 ? 30 : 24}
                height={width >= 1336 ? 35 : 27}
              />
              <p>Visão</p>
            </div>
            <p>Tornar-se uma das maiores</p>
            <p>incorporadoras do Brasil,</p>
            <p>referência em qualidade e</p>
            <p>alto padrão.</p>
          </div>
          <div>
            <div>
              <Image
                src="/icons/values.png"
                alt="icon"
                width={width >= 1336 ? 30 : 24}
                height={width >= 1336 ? 30 : 24}
              />
              <p>Valores</p>
            </div>
            <p>Excelência, responsabilidade</p>
            <p>e ética guiam cada projeto e</p>
            <p>todas as nossas relações.</p>
          </div>
        </div>
        <div>
          <p>Nossa história</p>
        </div>
      </div>
      <div className="wrapper-timeline">
        <div className="mobile">
          {TIMELINE.slice(0, 4).map((line) => (
            <div key={line.message}>
              <p>{line.date}</p>
              <p>{line.message}</p>
            </div>
          ))}
          <img src="/images/image-timeline-one-mobile.jpg" alt="timeline" />
          {TIMELINE.slice(4, 8).map((line) => (
            <div key={line.message}>
              <p>{line.date}</p>
              <p>{line.message}</p>
            </div>
          ))}
          <img src="/images/image-timeline-two-mobile.jpg" alt="timeline" />
          {TIMELINE.slice(8).map((line) => (
            <div key={line.message}>
              <p>{line.date}</p>
              <p>{line.message}</p>
            </div>
          ))}
          <img src="/images/image-timeline-three-mobile.jpg" alt="timeline" />
        </div>
        <div className="desktop">
          <div>
            {TIMELINE.map((line) => (
              <div key={line.message}>
                <div>
                  <Image
                    src="/SVG/icons/pointTimeline.svg"
                    alt="icon"
                    width={width >= 1336 ? 20 : 16}
                    height={width >= 1336 ? 20 : 16}
                  />
                </div>
                <div>
                  <p>{line.date}</p>
                  <p>{line.message}</p>
                </div>
              </div>
            ))}
          </div>

          <img src="/images/image-timeline-one.jpg" alt="timeline" />
        </div>
      </div>
    </div>
  );
}
