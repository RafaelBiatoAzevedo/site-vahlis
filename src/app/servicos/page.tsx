import Header from "@/components/Header";
import "../../styles/components/Services.css";
import { useRef } from "react";

export default function Servicos() {
  const legalizationFallbackRef = useRef<HTMLDivElement>(null);
  const legalizationVideoRef = useRef<HTMLVideoElement>(null);

  const handleLegalizationVideoError: React.ReactEventHandler<
    HTMLVideoElement
  > = () => {
    if (legalizationVideoRef.current)
      legalizationVideoRef.current.style.display = "none";
    if (legalizationFallbackRef.current)
      legalizationFallbackRef.current.style.display = "block";
  };
  return (
    <div className="main-services">
      <div className="wrapper-one-services">
        <div className="overlay-top-services">
          <Header />
          <div>
            <div>
              <p>Serviços</p>
              <p>Da escolha do terreno ao impacto urbano,</p>
              <p>conduzimos cada passo com propósito</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-organization">
        <div>
          <p>Originação de Área</p>
          <p>
            A Vahlis atua com foco na identificação estratégica de terrenos e no
            desenvolvimento de
          </p>
          <p>
            empreendimentos de alto padrão, criando valor para construtoras,
            investidores e para a
          </p>
          <p>
            cidade. Cada etapa é conduzida com rigor técnico, visão urbana e um
            olhar apurado para
          </p>
          <p>o potencial de cada região.</p>
        </div>
      </div>
      <div className="wrapper-howmake">
        <div>
          <p>Como fazemos</p>
        </div>
      </div>
      <div className="wrapper-analysis">
        <div>
          <p>Análise de região</p>
          <p>e viabilidade</p>
          <div>
            <p>Mapeamos áreas com alto potencial de valorização, </p>
            <p>avaliando o metro quadrado, infraestrutura e</p>
            <p>demanda local.</p>
          </div>
        </div>
        <img src="/SVG/imageAnalysis.svg" alt="architect" />
      </div>
      <div className="wrapper-acquisition">
        <div>
          <p>Aquisição e</p>
          <p>desenvolvimento do projeto</p>
          <div>
            <p>Realizamos a negociação do terreno e desenvolvemos </p>
            <p>plantas arquitetônicas alinhadas ao perfil da região e</p>
            <p>às exigências de mercado.</p>
          </div>
        </div>
        <img src="/SVG/imageAcquisition.svg" alt="project" />
      </div>
      <div className="wrapper-legalization">
        <video
          ref={legalizationVideoRef}
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          onError={handleLegalizationVideoError}
        >
          <source src="/videos/legalization-background.mp4" type="video/mp4" />
        </video>

        <div ref={legalizationFallbackRef} className="bg-fallback" />
        <div className="overlay-legalization">
          <div>
            <p>Legalização e estruturação</p>
            <div>
              <p>Cuidamos de todo o processo de preparação do </p>
              <p>terreno e regularização junto aos órgãos competentes.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-marketing">
        <div className="overlay-marketing">
          <div>
            <p>Comercialização com</p>
            <p>construtoras parceiras</p>
            <div>
              <p>O projeto final é apresentado a construtoras que</p>
              <p>compartilham nossos valores e padrão de excelência,</p>
              <p>dando continuidade à execução da obra.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
