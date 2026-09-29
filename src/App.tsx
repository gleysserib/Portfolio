import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Braces,
  Check,
  Cloud,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Menu,
  Server,
  X,
} from "lucide-react";
import { learning, profile, projects, skillGroups, studies } from "./data";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#estudos", label: "Estudos" },
  { href: "#contato", label: "Contato" },
];
const validUrl = (value: string) => /^https?:\/\//i.test(value);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  const socialLink = (url: string) => (validUrl(url) ? url : undefined);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark">{`{ }`}</span>
          <span>{profile.name}</span>
          <span className="brand-dot">.</span>
        </a>
        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Navegação principal"
        >
          {links.map((link, i) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              <span className="nav-index">0{i + 1}</span>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contato" onClick={closeMenu}>
            Vamos conversar <ArrowUpRight size={14} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="conteudo">
        <section id="inicio" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> PORTFÓLIO · TECNOLOGIA & CLOUD
            </div>
            <h1>
              Construindo o próximo
              <br />
              <span className="headline-muted">passo na</span>{" "}
              <span className="headline-accent">nuvem.</span>
            </h1>
            <p className="hero-intro">
              Olá, eu sou <strong>{profile.name}</strong>. Estudo tecnologia com
              foco em cloud computing, backend e Microsoft Azure. Gosto de
              aprender construindo projetos práticos e transformar conceitos em
              soluções reais.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Explorar projetos <ArrowDownRight size={17} />
              </a>
              <a
                className="button button-quiet"
                href={socialLink(profile.github) ?? "#contato"}
                target={socialLink(profile.github) ? "_blank" : undefined}
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
              <a
                className="button button-quiet"
                href={socialLink(profile.linkedin) ?? "#contato"}
                target={socialLink(profile.linkedin) ? "_blank" : undefined}
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" /> Em aprendizado contínuo, um projeto
              de cada vez.
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Ilustração abstrata de infraestrutura cloud"
            role="img"
          >
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-core">
              <Cloud size={37} strokeWidth={1.2} />
              <span>AZURE</span>
            </div>
            <div className="art-node node-top">
              <span className="node-symbol">
                <Braces size={17} />
              </span>
              <span>
                <b>API</b>
                <small>backend</small>
              </span>
              <i />
            </div>
            <div className="art-node node-left">
              <span className="node-symbol">
                <Server size={16} />
              </span>
              <span>
                <b>CONTAINER</b>
                <small>docker</small>
              </span>
              <i />
            </div>
            <div className="art-node node-right">
              <span className="node-symbol">
                <Code2 size={16} />
              </span>
              <span>
                <b>DEPLOY</b>
                <small>cloud</small>
              </span>
              <i />
            </div>
            <div className="art-caption">
              <span>FIG. 01</span>
              <span>IDEIAS EM MOVIMENTO</span>
            </div>
          </div>
          <a className="scroll-cue" href="#sobre">
            <span>ROLE PARA EXPLORAR</span>
            <ArrowDown size={14} />
          </a>
          <div className="hero-coordinate">23°33′ S&nbsp; / &nbsp;46°38′ W</div>
        </section>

        <section id="sobre" className="section container about-section">
          <div className="section-side reveal">
            <span className="section-number">01 / SOBRE</span>
            <span className="side-rule" />
            <span className="vertical-label">UM POUCO SOBRE MIM</span>
          </div>
          <div className="about-content reveal">
            <div className="section-kicker">
              PRAZER, SOU {profile.name.toUpperCase()}
            </div>
            <h2>
              Curiosidade que vira
              <br />
              <span>experiência prática.</span>
            </h2>
            <div className="about-columns">
              <p>
                Estou construindo minha trajetória em tecnologia por meio de
                estudo e prática. Tenho explorado Linux, desenvolvimento backend
                e bancos de dados, avançando para containers e computação em
                nuvem.
              </p>
              <p>
                Meu foco agora está em aprender Microsoft Azure, fortalecer
                minha base técnica e documentar o que construo. Busco
                oportunidades para continuar evoluindo e contribuir com projetos
                reais.
              </p>
            </div>
            <div className="about-tags">
              <span>01 — aprender fazendo</span>
              <span>02 — documentar a jornada</span>
              <span>03 — evoluir sempre</span>
            </div>
          </div>
        </section>

        <section id="habilidades" className="section container skills-section">
          <div className="section-heading reveal">
            <div>
              <span className="section-number">02 / TECNOLOGIAS</span>
              <h2>
                Ferramentas na
                <br />
                <span>minha bancada.</span>
              </h2>
            </div>
            <p>
              Conhecimentos e tecnologias que fazem parte dos meus estudos e
              projetos práticos.
            </p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group, i) => (
              <article
                className="skill-card reveal"
                key={group.title}
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                <div className="skill-card-top">
                  <span className="skill-icon">{group.icon}</span>
                  <span className="card-index">0{i + 1}</span>
                </div>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item}>
                      <i />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projetos" className="section projects-section">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="section-number">
                  03 / PROJETOS SELECIONADOS
                </span>
                <h2>
                  Aprender é bom.
                  <br />
                  <span>Construir é melhor.</span>
                </h2>
              </div>
              <p>
                Projetos de estudo e prática. Cada um representa uma
                oportunidade de transformar teoria em algo concreto.
              </p>
            </div>
            <div className="project-list">
              {projects.map((project, i) => (
                <article
                  className="project-card reveal"
                  key={project.number}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div
                    className={`project-visual visual-${project.visual}`}
                    aria-label={`Ilustração conceitual: ${project.title}`}
                    role="img"
                  >
                    <div className="visual-window">
                      <div className="window-bar">
                        <span />
                        <span />
                        <span />
                        <small>~/workspace/{project.visual}</small>
                      </div>
                      {project.visual === "calendar" ? (
                        <div className="calendar-ui">
                          <div className="calendar-title">
                            AGENDAMENTOS <b>+</b>
                          </div>
                          <div className="calendar-date">
                            OUTUBRO <span>2025</span>
                          </div>
                          <div className="calendar-grid">
                            {[
                              "S",
                              "T",
                              "Q",
                              "Q",
                              "S",
                              "S",
                              "D",
                              "06",
                              "07",
                              "08",
                              "09",
                              "10",
                              "11",
                              "12",
                              "13",
                              "14",
                              "15",
                              "16",
                              "17",
                              "18",
                              "19",
                            ].map((d, idx) => (
                              <span
                                key={idx}
                                className={idx === 10 ? "selected" : ""}
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                          <div className="calendar-event">
                            <i /> 10:30 &nbsp; novo agendamento
                          </div>
                        </div>
                      ) : project.visual === "containers" ? (
                        <div className="containers-ui">
                          <div className="terminal-line">
                            <b>$</b> docker compose up
                          </div>
                          <div className="container-row">
                            <span className="cube">▦</span>
                            <span>
                              <b>web-app</b>
                              <small>python · flask</small>
                            </span>
                            <em>● running</em>
                          </div>
                          <div className="container-row">
                            <span className="cube">▦</span>
                            <span>
                              <b>api-service</b>
                              <small>localhost:5000</small>
                            </span>
                            <em>● running</em>
                          </div>
                          <div className="terminal-foot">
                            2 CONTAINERS&nbsp; · &nbsp;0 ERROS
                          </div>
                        </div>
                      ) : (
                        <div className="cloud-ui">
                          <div className="cloud-label">AZURE / SANDBOX</div>
                          <div className="cloud-lines">
                            <span />
                            <span />
                            <span />
                          </div>
                          <div className="cloud-nodes">
                            <b>
                              <Cloud size={19} />
                            </b>
                            <i />
                            <b>
                              <Server size={17} />
                            </b>
                            <i />
                            <b>
                              <Braces size={17} />
                            </b>
                          </div>
                          <div className="cloud-region">
                            <span className="status-dot" /> LABORATÓRIO DE
                            ESTUDO
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="visual-foot">
                      <span>{project.category}</span>
                      <span>PRÉVIA CONCEITUAL</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-meta">
                      <span>
                        {project.number} <i>—</i> {project.category}
                      </span>
                      <ArrowUpRight size={17} />
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-details">
                      <div>
                        <span className="detail-label">O QUE EXPLORA</span>
                        <p>{project.problem}</p>
                      </div>

                      <div>
                        <span className="detail-label">APRENDIZADO</span>
                        <p>{project.learning}</p>
                      </div>
                    </div>

                    <div className="project-status">
                      <span className="detail-label">STATUS DO PROJETO</span>

                      <div className="status-list">
                        {project.status?.map((item) => (
                          <span
                            key={item.label}
                            className={
                              item.done
                                ? "status-item status-done"
                                : "status-item status-pending"
                            }
                          >
                            <i>{item.done ? "✓" : "○"}</i>
                            {item.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-bottom">
                      <div className="tech-tags">
                        {project.stack.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                      <a
                        className="project-link"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver projeto ${project.title} no GitHub`}
                      >
                        Ver projeto <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="projects-foot reveal">
              <span>PROJETOS E LABORATÓRIOS DE ESTUDO</span>
              <span>
                MAIS EM BREVE <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </section>

        <section id="estudos" className="section container studies-section">
          <div className="section-side reveal">
            <span className="section-number">04 / JORNADA</span>
            <span className="side-rule" />
            <span className="vertical-label">ESTUDO CONTÍNUO</span>
          </div>
          <div className="studies-content">
            <div className="section-heading reveal">
              <div>
                <span className="section-kicker">
                  A PRÓXIMA LINHA DE CÓDIGO
                </span>
                <h2>
                  Uma jornada
                  <br />
                  <span>em construção.</span>
                </h2>
              </div>
              <p>
                O caminho não é linear — cada etapa abre espaço para a próxima.
                Aqui compartilho os temas que estou explorando.
              </p>
            </div>
            <div className="timeline reveal">
              {learning.map((item, i) => (
                <div
                  className={`timeline-step ${i === learning.length - 1 ? "timeline-current" : ""}`}
                  key={item}
                >
                  <span className="timeline-count">0{i + 1}</span>
                  <span className="timeline-dot">
                    {i < learning.length - 1 ? <Check size={12} /> : <span />}
                  </span>
                  <span className="timeline-name">{item}</span>
                  {i < learning.length - 1 && (
                    <span className="timeline-connector" />
                  )}
                </div>
              ))}
            </div>
            <div className="study-block reveal">
              <div className="study-title">
                <span className="section-kicker">CERTIFICAÇÕES & ESTUDOS</span>
                <span className="study-note">
                  STATUS ATUALIZADO MANUALMENTE
                </span>
              </div>
              <div className="study-items">
                <div className="study-group-label">EM ANDAMENTO</div>

                {studies
                  .filter((study) => study.status === "EM ANDAMENTO")
                  .map((study, i) => (
                    <div className="study-item" key={study.title}>
                      <span className="study-status">
                        <i />
                        EM ANDAMENTO
                      </span>

                      <div>
                        <h3>{study.title}</h3>
                        <p>{study.detail}</p>
                      </div>

                      <span className="study-index">0{i + 1}</span>
                    </div>
                  ))}

                <div className="study-group-label completed-label">
                  CONCLUÍDO
                </div>

                {studies
                  .filter((study) => study.status === "CONCLUÍDO")
                  .map((study, i) => (
                    <div className="study-item" key={study.title}>
                      <span className="study-status done">
                        <i />
                        CONCLUÍDO
                      </span>

                      <div>
                        <h3>{study.title}</h3>
                        <p>{study.detail}</p>
                      </div>

                      <span className="study-index">0{i + 1}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className="github-band">
          <div className="container github-inner reveal">
            <div className="github-symbol">
              <Github size={27} strokeWidth={1.5} />
            </div>
            <div>
              <span className="section-kicker">
                CÓDIGO ABERTO, APRENDIZADO CONTÍNUO
              </span>
              <h2>
                O próximo projeto
                <br />
                <span>pode estar no GitHub.</span>
              </h2>
              <p>
                Repositórios, experimentos e projetos de estudo em um só lugar.
              </p>
            </div>
            <a
              className="button button-outline"
              href={socialLink(profile.github) ?? "#contato"}
              target={socialLink(profile.github) ? "_blank" : undefined}
              rel="noreferrer"
            >
              Explorar GitHub <ExternalLink size={15} />
            </a>
            <span className="github-watermark">&lt;/&gt;</span>
          </div>
        </section>

        <section id="contato" className="section container contact-section">
          <div className="contact-main reveal">
            <span className="section-number">05 / CONTATO</span>
            <div className="contact-layout">
              <div>
                <span className="section-kicker">
                  TEM UMA IDEIA OU OPORTUNIDADE?
                </span>
                <h2>
                  Vamos conversar
                  <br />
                  <span>sobre tecnologia.</span>
                </h2>
              </div>
              <p>
                Se você é recrutador, profissional de tecnologia ou está
                trabalhando em algo interessante, vou gostar de conhecer seu
                projeto.
              </p>
            </div>
            <a
              className="email-link"
              href={
                profile.email.includes("@")
                  ? `mailto:${profile.email}`
                  : "#contato"
              }
            >
              <span>{profile.email}</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="contact-links reveal">
            <a
              href={socialLink(profile.github) ?? "#contato"}
              target={socialLink(profile.github) ? "_blank" : undefined}
              rel="noreferrer"
            >
              <Github size={16} /> GitHub <ArrowUpRight size={13} />
            </a>
            <a
              href={socialLink(profile.linkedin) ?? "#contato"}
              target={socialLink(profile.linkedin) ? "_blank" : undefined}
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
            </a>
            <a
              href={
                profile.email.includes("@")
                  ? `mailto:${profile.email}`
                  : "#contato"
              }
            >
              <span className="mail-icon">@</span> Email{" "}
              <ArrowUpRight size={13} />
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">{`{ }`}</span>
            <span>{profile.name}</span>
            <span className="brand-dot">.</span>
          </a>
          <span>FEITO COM CURIOSIDADE &nbsp;·&nbsp; 2025</span>
          <a href="#inicio" className="back-top">
            VOLTAR AO TOPO <ArrowUp size={13} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
