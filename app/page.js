import Image from "next/image";

﻿export default function HomePage() {
  const metrics = [
    { value: "6", label: "Signal domains" },
    { value: "2", label: "Core classes of intelligence" },
    { value: "∞", label: "Meaningful measurements" },
  ];

  const pillars = [
    { name: "Molecular", text: "Chemical and material behaviour captured through light-based interaction and spectral analysis." },
    { name: "Functional", text: "Physiology and organ response measured over time, not just static anatomy." },
    { name: "Physiological", text: "Chest wall motion, acoustic signatures, and micro-scale movement translated into data clinicians can act on." },
    { name: "Autonomic", text: "Signals that reveal how a system responds under load, stress, or changing conditions." },
    { name: "Structural", text: "Integrity, deformation, and change in machines, bridges, and monitored assets." },
    { name: "Computational", text: "Imaging, signal fusion, and machine learning models that turn raw data into decision support." },
  ];

  const technologies = [
    {
      id: "01",
      title: "SMI laser vibrometry and non-contact motion sensing",
      text: "Self-Mixing Interferometry uses optical feedback inside a laser cavity to detect movement with a sensitivity that can reveal subtle physiological or mechanical change without mechanical loading.",
    },
    {
      id: "02",
      title: "Computational imaging and anatomical modeling",
      text: "From CT segmentation and 3D reconstruction to vessel mapping and phase-to-phase comparison, we build measurement-aware visual tools for clinical review and decision support.",
    },
    {
      id: "03",
      title: "Ultrasound and biomechanical measurement",
      text: "We study tissue motion, image registration, optical ultrasound detection, and spatial reconstruction to separate real tissue response from artefacts and coupling noise.",
    },
    {
      id: "04",
      title: "Mid-infrared photonics and photoacoustic sensing",
      text: "We explore tunable optical source architectures, photoacoustic transduction, and detector systems for spectroscopy and breath-based applications such as a PAS Breathoscope.",
    },
    {
      id: "05",
      title: "Signal analysis, machine learning and digital twins",
      text: "Every system needs a pathway from measurement to interpretation. Our software spans acquisition, filtering, feature extraction, sensor fusion, anomaly detection and predictive modelling.",
    },
  ];

  const founders = [
    {
      name: "Dr. Varun Jeoti",
      role: "Director",
      email: "varun.jeoti@ayusense.co.in",
      image: "/image/varun-jeoti.jpg",
      summary:
        "Scientist and technology innovator with over 45 years of experience in photonics, laser sensing, biomedical instrumentation and non-invasive healthcare.",
      bio:
        "Dr. Jeoti holds a Ph.D. from IIT Delhi and has held academic and research leadership positions in India, Malaysia and Europe, including Professor at Universiti Teknologi PETRONAS and ERA Chair Holder at the University of Novi Sad. His work spans laser-based diagnostics, wearable biosensors, photoacoustic spectroscopy and biomedical instrumentation. At AyuSense, he leads scientific research and technology development.",
    },
    {
      name: "Anurag Jain",
      role: "Director",
      email: "anurag.jain@ayusense.co.in",
      image: "/image/anurag-jain.jpg",
      summary:
        "Fellow Chartered Accountant with over 17 years of experience in financial advisory, restructuring, taxation, compliance and strategic planning.",
      bio:
        "Anurag is a Fellow Member of the Institute of Chartered Accountants of India and a commerce graduate from DAVV University. His expertise includes business restructuring, management consultancy, corporate and NRI taxation, transfer pricing, auditing and corporate compliance. He advises startups and established businesses on practical financial strategies, efficiency and sustainable growth.",
    },
    {
      name: "Vidit Kumar",
      role: "Director",
      email: "vidit.kumar@ayusense.co.in",
      summary:
        "Technology entrepreneur with over 10 years of experience in AI, embedded systems, software, cybersecurity and deep-tech product development.",
      bio:
        "An Electronics and Communication Engineering graduate, Vidit has co-founded technology ventures including Bitance Labs and Innotechnotronics Solutions. His experience spans software development, cybersecurity, blockchain and AI-powered products. He has developed assistive technology for visually impaired people, received support through the Department of Science and Technology, and participated in the startup incubation ecosystem at IIM Bangalore. At AyuSense, he focuses on turning multidisciplinary ideas into scalable products.",
    },
  ];

  const productGroups = [
    {
      title: "Healthcare solutions",
      products: [
        {
          name: "LiverAI",
          focus: "Imaging and surgical planning",
          text: "Clinician-reviewed abdominal CT tools for liver and spleen segmentation, lesion and vessel mapping, volumetry and 3D visualization.",
        },
        {
          name: "MIMO Stethoscopy",
          focus: "Spatial physiological sensing",
          text: "Research into synchronized, multi-point chest-wall vibration and acoustic measurements of heart and lung activity.",
        },
        {
          name: "PAS Breathoscopy",
          focus: "Molecular signal intelligence",
          text: "Photoacoustic sensing and AI research to analyze molecular signatures in exhaled breath.",
        },
        {
          name: "PAI Tissuescopy",
          focus: "Functional tissue intelligence",
          text: "Photoacoustic imaging research exploring vascular networks, tissue perfusion, viability and physiological response.",
        },
        {
          name: "SonoQuest",
          focus: "Ultrasound intelligence and training",
          text: "Ultrasound guidance, anatomical reconstruction and interactive learning for spatial understanding during image acquisition.",
        },
        {
          name: "VibroSono",
          focus: "Mechanical tissue intelligence",
          text: "Ultrasound-related measurement and optical vibrometry research into tissue mechanics and response.",
        },
        {
          name: "PerfusionAI",
          focus: "Tissue and vascular assessment",
          text: "Research combining photoacoustic, optical and analytical methods to study perfusion, tissue viability and wound monitoring.",
        },
      ],
    },
    {
      title: "Industrial solutions",
      products: [
        {
          name: "VibroGuard",
          focus: "Equipment condition monitoring",
          text: "Optical vibration measurement and signal analysis to help investigate changes in motors, pumps, turbines and other assets.",
        },
        {
          name: "VibroTwin",
          focus: "Asset models over time",
          text: "A digital-twin concept combining vibration and operating data to support condition tracking and maintenance planning.",
        },
        {
          name: "PipeSense",
          focus: "Pipeline integrity",
          text: "Research into acoustic, vibrational and optical signals relevant to pipeline leaks, fatigue and structural change.",
        },
      ],
    },
    {
      title: "Infrastructure solutions",
      products: [
        {
          name: "InfraSense",
          focus: "Structures monitored over time",
          text: "Condition-monitoring concepts for buildings, bridges, dams, energy assets and other civil infrastructure.",
        },
        {
          name: "BridgeSense",
          focus: "Bridge monitoring",
          text: "Vibration signatures and structural response, interpreted in the context of loads, temperature and weather.",
        },
        {
          name: "RailSense",
          focus: "Rail corridor monitoring",
          text: "Vibration monitoring concepts for tracks, switches, crossings, rail corridors and rolling assets.",
        },
      ],
    },
    {
      title: "Defence and security solutions",
      products: [
        {
          name: "DroneSense",
          focus: "Acoustic signature research",
          text: "Research into identifying unmanned aerial system sound patterns against background noise and other equipment.",
        },
        {
          name: "VibroWatch",
          focus: "Site and asset monitoring",
          text: "A concept for monitoring selected sites and assets using sensing approaches suited to the environment.",
        },
        {
          name: "Acoustic Intelligence Platform",
          focus: "Distributed sound analysis",
          text: "Research into distributed acoustic measurement, signature analysis and event detection for situational awareness.",
        },
      ],
    },
    {
      title: "OEM components and technology integration",
      products: [
        {
          name: "AyuSense Components",
          focus: "Measurement modules and building blocks",
          text: "SMI laser vibrometer modules, optical ultrasound and photoacoustic detectors, tunable mid-infrared sources, embedded analysis software and digital-twin building blocks.",
        },
      ],
    },
  ];

  const domains = [
    { name: "Healthcare", text: "Imaging and physiological sensing" },
    { name: "Industrial equipment", text: "Condition monitoring and digital twins" },
    { name: "Artificial Intelligence", text: "Signal analysis and decision support" },
    { name: "Defence", text: "Acoustic intelligence and sensing research" },
  ];

  const featureCards = [
    "Sensitive to meaningful change",
    "Stable outside the lab",
    "Calibrated for real-world reliability",
    "Clear, explainable interpretation",
    "Built around physical measurement quality",
    "Designed for professional decision-making",
  ];

  return (
    <>
      <style>{`
        body {
          background: #f4f7fb;
        }

        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .section {
          padding: 96px 0;
        }

        .muted {
          color: #53657a;
        }

        .tech-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .tech-card:hover {
          transform: translateY(-4px);
          border-color: rgba(74, 214, 202, 0.4);
          box-shadow: 0 20px 35px rgba(6, 20, 31, 0.12);
        }

        .founder-card,
        .solution-card,
        .domain-card,
        .path-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .founder-card:hover,
        .solution-card:hover,
        .domain-card:hover,
        .path-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 38px rgba(6, 20, 31, 0.12);
          border-color: rgba(5, 208, 224, 0.42) !important;
        }

        .founder-card details summary {
          cursor: pointer;
          color: #016494;
          font-size: 13px;
          font-weight: 700;
          margin-top: 16px;
        }

        .founder-card details[open] summary {
          margin-bottom: 12px;
        }

        .founder-portrait {
          width: 76px;
          height: 76px;
          flex: 0 0 76px;
          overflow: hidden;
          border-radius: 20px;
          background: linear-gradient(135deg, #01406c, #05d0e0);
        }

        .hero-visual {
          position: relative;
          display: grid;
          min-height: 560px;
          place-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at center, rgba(5, 208, 224, 0.18), transparent 42%),
            linear-gradient(145deg, #0d2737, #06141f);
        }

        .hero-orbit {
          position: absolute;
          width: 76%;
          aspect-ratio: 1;
          border: 1px solid rgba(5, 208, 224, 0.18);
          border-radius: 50%;
          animation: orbit-pulse 5s ease-in-out infinite;
        }

        .hero-orbit:nth-child(2) {
          width: 58%;
          animation-delay: -2.5s;
        }

        @keyframes orbit-pulse {
          0%,
          100% {
            transform: scale(0.94);
            opacity: 0.45;
          }

          50% {
            transform: scale(1.04);
            opacity: 1;
          }
        }

        @media (max-width: 860px) {
          .hero-grid,
          .about-grid,
          .contact-grid,
          .values-grid {
            grid-template-columns: 1fr !important;
          }

          .founder-grid,
          .domain-grid,
          .path-grid,
          .research-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 768px) {
          .section {
            padding: 72px 0;
          }

          .founder-grid,
          .domain-grid,
          .path-grid,
          .research-grid,
          .feature-grid {
            grid-template-columns: 1fr !important;
          }

          .site-nav {
            justify-content: center;
            padding: 0 0 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div style={{ background: "#06141f", color: "#edf7f9" }}>
        <header style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 78, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0" }}>
              <Image
                src="/image/ayusense-mark.png"
                alt="AyuSense logo"
                width={42}
                height={42}
                style={{ borderRadius: 12, background: "#ffffff", objectFit: "contain" }}
              />
              <div>
                <div style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "#88e0d5", fontWeight: 700 }}>AyuSense</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)", letterSpacing: ".12em", textTransform: "uppercase" }}>Deeptech Private Limited</div>
              </div>
            </div>

            <nav className="site-nav" style={{ display: "flex", gap: 22, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#about" style={{ color: "rgba(255,255,255,.74)", fontSize: 13, fontWeight: 600 }}>About</a>
              <a href="#team" style={{ color: "rgba(255,255,255,.74)", fontSize: 13, fontWeight: 600 }}>Team</a>
              <a href="#technology" style={{ color: "rgba(255,255,255,.74)", fontSize: 13, fontWeight: 600 }}>Technology</a>
              <a href="#applications" style={{ color: "rgba(255,255,255,.74)", fontSize: 13, fontWeight: 600 }}>Solutions</a>
              <a href="#contact" style={{ color: "rgba(255,255,255,.74)", fontSize: 13, fontWeight: 600 }}>Get in touch</a>
              <a href="#contact" style={{ background: "linear-gradient(135deg, #01406c, #016494, #05d0e0)", color: "#ffffff", padding: "10px 18px", borderRadius: 999, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>
                Partner with us
              </a>
            </nav>
          </div>
        </header>

        <section style={{ position: "relative", overflow: "hidden", padding: "72px 0 26px" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 20%, rgba(74, 214, 202, 0.16), transparent 38%), radial-gradient(circle at 78% 20%, rgba(58, 164, 211, 0.2), transparent 32%)" }} />
          <div className="container hero-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 36, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(74,214,202,0.08)", border: "1px solid rgba(74,214,202,0.2)", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#8fe9de", fontWeight: 700 }}>
                Inspired by life. Powered by photonics. Amplified by AI.
              </div>

              <h1 style={{ margin: "24px 0 20px", fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1.02, letterSpacing: "-0.06em", maxWidth: 680 }}>
                Transforming photonic signals into
                <span style={{ display: "block", color: "#05d0e0" }}>strategic intelligence™</span>
              </h1>

              <p style={{ maxWidth: 620, margin: 0, color: "rgba(237,247,249,.78)", fontSize: 18, lineHeight: 1.8 }}>
                Light, sound and vibration carry more information than we usually notice. AyuSense turns those signals into useful measurements for healthcare, industrial equipment, infrastructure and defence.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 30 }}>
                <a href="#technology" style={{ background: "linear-gradient(135deg, #01406c, #016494, #05d0e0)", color: "#ffffff", padding: "15px 22px", borderRadius: 999, fontWeight: 800, letterSpacing: ".04em" }}>
                  Explore technology
                </a>
                <a href="#contact" style={{ border: "1px solid rgba(255,255,255,.18)", color: "#edf7f9", padding: "15px 22px", borderRadius: 999, fontWeight: 700 }}>
                  Talk to us
                </a>
              </div>

              <div style={{ display: "flex", gap: 26, flexWrap: "wrap", marginTop: 38 }}>
                {metrics.map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: "#05d0e0" }}>{stat.value}</div>
                    <div style={{ fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.48)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: "-24px 30px 38px -40px", background: "rgba(74,214,202,0.12)", filter: "blur(14px)", borderRadius: 28 }} />
              <div style={{ position: "relative", zIndex: 1, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 30, overflow: "hidden", boxShadow: "0 30px 80px rgba(3,13,20,0.48)" }}>
                <div className="hero-visual">
                  <div className="hero-orbit" aria-hidden="true" />
                  <div className="hero-orbit" aria-hidden="true" />
                  <Image
                    src="/image/ayusense-mark.png"
                    alt="AyuSense photonics and AI"
                    width={240}
                    height={240}
                    style={{ position: "relative", zIndex: 1, width: "min(48%, 240px)", height: "auto", filter: "drop-shadow(0 16px 36px rgba(5,208,224,.22))" }}
                  />
                </div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,20,31,0.08), rgba(6,20,31,0.75))" }} />

                <div style={{ position: "absolute", left: 20, right: 20, bottom: 22 }}>
                  <div style={{ background: "rgba(7,19,27,0.7)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, backdropFilter: "blur(8px)", padding: "16px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 12, background: "rgba(5,208,224,0.14)", display: "flex", alignItems: "center", justifyContent: "center", color: "#05d0e0", fontSize: 20, fontWeight: 800 }}>◌</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#edf7f9" }}>Signal-to-decision pipeline</div>
                      <div style={{ fontSize: 11, color: "rgba(237,247,249,.66)" }}>Measurement • analysis • interpretation</div>
                    </div>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#29d86d", boxShadow: "0 0 0 6px rgba(41,216,109,0.18)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="about" className="section" style={{ background: "#f3f7fa" }}>
        <div className="container">
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 32, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-block", background: "rgba(74,214,202,0.12)", color: "#0f3d4a", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>About AyuSense</div>
              <h2 style={{ margin: "18px 0 18px", fontSize: "clamp(2.1rem, 4vw, 3.4rem)", lineHeight: 1.08, letterSpacing: "-0.05em", color: "#0c1e2e" }}>
                We work where signals become useful measurements.
              </h2>
              <p style={{ fontSize: 18, color: "#425467", lineHeight: 1.85, margin: 0 }}>
                “Ayu” is a Sanskrit word associated with life, vitality, health and longevity. AyuSense was founded around a practical observation: useful signals are often already present, but the instruments and analysis needed to interpret them are missing or too difficult to use.
              </p>
              <p style={{ fontSize: 16, color: "#425467", lineHeight: 1.8, margin: "16px 0 0" }}>
                We work across healthcare and other critical systems, connecting thoughtful measurement with clear, evidence-led interpretation.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid #dfeaf2", borderRadius: 24, padding: 28, boxShadow: "0 20px 40px rgba(17,34,57,0.06)" }}>
              <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#016494", fontWeight: 800, marginBottom: 16 }}>Our direction</div>
              <p style={{ margin: "0 0 18px", color: "#425467", lineHeight: 1.8, fontSize: 16 }}>
                Our long-term aim is to develop reliable photonic sensing and AI-enabled tools that help people understand the condition of patients, machines, structures and other critical systems earlier and with better evidence.
              </p>
              <p style={{ margin: 0, color: "#11273f", fontWeight: 700, lineHeight: 1.7 }}>
                Good technology should make a decision easier, not make its limitations harder to see.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto 34px", textAlign: "center" }}>
            <div style={{ display: "inline-block", background: "rgba(5, 208, 224, 0.12)", color: "#01406c", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>Research, partners and people</div>
            <h2 style={{ margin: "18px 0 12px", fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.05em", color: "#071a2a" }}>Meet our founders</h2>
            <p style={{ margin: 0, color: "#53657a", lineHeight: 1.75 }}>
              Scientific, financial and entrepreneurial experience brought together to turn measurement challenges into useful technology.
            </p>
          </div>

          <div className="founder-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18, alignItems: "start" }}>
            {founders.map((founder) => (
              <article key={founder.email} className="founder-card" style={{ background: "#f8fbfc", border: "1px solid #dfeaf2", borderRadius: 22, padding: 22, boxShadow: "0 14px 32px rgba(17,34,57,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                  <div className="founder-portrait">
                    {founder.image ? (
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={76}
                        height={76}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <div style={{ height: "100%", display: "grid", placeItems: "center", color: "#ffffff", fontWeight: 800, fontSize: 23 }}>VK</div>
                    )}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: "#0b1d2d", fontSize: 21 }}>{founder.name}</h3>
                    <div style={{ marginTop: 5, color: "#016494", fontSize: 12, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" }}>{founder.role}</div>
                  </div>
                </div>
                <p style={{ margin: 0, color: "#4f6273", lineHeight: 1.72, fontSize: 14 }}>{founder.summary}</p>
                <a href={`mailto:${founder.email}`} style={{ display: "inline-block", marginTop: 16, color: "#01406c", fontWeight: 700, fontSize: 13, overflowWrap: "anywhere" }}>{founder.email}</a>
                <details>
                  <summary>Read full profile</summary>
                  <p style={{ margin: 0, color: "#4f6273", lineHeight: 1.72, fontSize: 14 }}>{founder.bio}</p>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#eaf6f8", padding: "96px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ display: "inline-block", background: "rgba(77, 179, 170, 0.12)", color: "#0d5b61", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>Layers of intelligence</div>
            <h2 style={{ margin: "18px auto 0", maxWidth: 740, fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.05em", color: "#071a2a" }}>
              Strategic intelligence across the systems that matter most
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
            {pillars.map((pillar) => (
              <div key={pillar.name} style={{ background: "#fff", border: "1px solid #dfeaf2", borderRadius: 22, padding: "24px 18px", boxShadow: "0 16px 30px rgba(17,34,57,0.03)" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg, rgba(74,214,202,0.18), rgba(58,164,211,0.16))", display: "flex", alignItems: "center", justifyContent: "center", color: "#0d5b61", fontWeight: 800, marginBottom: 16 }}>{pillar.name.slice(0, 1)}</div>
                <h3 style={{ margin: "0 0 10px", fontSize: 23, color: "#0b1d2d" }}>{pillar.name}</h3>
                <p style={{ margin: 0, color: "#4f6273", lineHeight: 1.72, fontSize: 14 }}>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="section" style={{ background: "#06141f", color: "#edf7f9" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ display: "inline-block", background: "rgba(74,214,202,0.08)", color: "#8fe9de", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>Our technology</div>
            <h2 style={{ margin: "18px auto 0", maxWidth: 760, fontSize: "clamp(2.1rem, 3vw, 3.2rem)", lineHeight: 1.08, letterSpacing: "-0.05em" }}>
              Sensing technologies built for the real world
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18 }}>
            {technologies.map((item) => (
              <div key={item.title} className="tech-card" style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "24px 22px 24px 22px", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#8fe9de", fontWeight: 800 }}>{item.id}</span>
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(74,214,202,0.55), rgba(74,214,202,0.02))" }} />
                </div>
                <h3 style={{ margin: "0 0 12px", fontSize: 22, lineHeight: 1.3, color: "#f1f9fa" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "rgba(237,247,249,.7)", lineHeight: 1.8, fontSize: 15 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="section" style={{ background: "#f7fafb" }}>
        <div className="container">
          <div style={{ marginBottom: 30 }}>
            <div style={{ display: "inline-block", background: "rgba(58,164,211,0.1)", color: "#0d5a7a", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>Application areas</div>
            <h2 style={{ margin: "18px 0 0", fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.05em", color: "#071a2a" }}>
              Turning insight into action in critical systems
            </h2>
          </div>

          <div className="domain-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 18, marginBottom: 52 }}>
            {domains.map((domain) => (
              <div key={domain.name} className="domain-card" style={{ border: "1px solid #dfeaf2", background: "#fff", padding: "22px 20px", borderRadius: 18, color: "#123252" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{domain.name}</h3>
                <p style={{ margin: 0, color: "#53657a", fontSize: 14, lineHeight: 1.6 }}>{domain.text}</p>
              </div>
            ))}
          </div>

          <div>
            {productGroups.map((group) => (
              <section key={group.title} style={{ marginBottom: 44 }}>
                <h3 style={{ margin: "0 0 18px", color: "#071a2a", fontSize: "clamp(1.45rem, 2.4vw, 2rem)", letterSpacing: "-0.03em" }}>{group.title}</h3>
                <div className="solution-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))", gap: 16 }}>
                  {group.products.map((product) => (
                    <article key={product.name} className="solution-card" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #dfeaf2", borderRadius: 20, padding: 22, boxShadow: "0 14px 30px rgba(17,34,57,0.04)" }}>
                      <div style={{ color: "#016494", fontSize: 11, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" }}>{product.focus}</div>
                      <h4 style={{ margin: "12px 0 10px", color: "#0e1f2e", fontSize: 22 }}>{product.name}</h4>
                      <p style={{ margin: "0 0 20px", color: "#52667d", lineHeight: 1.7, fontSize: 14 }}>{product.text}</p>
                      <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid #e8eff3", color: "#6b7b8d", fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>Research and development</div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p style={{ margin: "8px 0 0", color: "#6b7b8d", fontSize: 13, lineHeight: 1.65 }}>
            Product descriptions include research concepts and development directions. Availability, performance and clinical use depend on further validation.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 30 }}>
            <div style={{ display: "inline-block", background: "rgba(5, 208, 224, 0.12)", color: "#01406c", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>From research to deployment</div>
            <h2 style={{ margin: "18px 0 12px", color: "#071a2a", fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.05em" }}>How we move from research to deployment</h2>
            <p style={{ margin: 0, color: "#53657a", lineHeight: 1.75 }}>We start with a measurable question, test against a trusted reference and shape the system around the people who will use it.</p>
          </div>
          <div className="path-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16 }}>
            {[
              ["01", "Define the use case", "Agree on the measurement problem, baseline signal and the decision the result should support."],
              ["02", "Build and calibrate", "Develop a prototype with a documented measurement and calibration approach."],
              ["03", "Test with users", "Compare results with accepted references and evaluate the workflow with intended users."],
              ["04", "Prepare for deployment", "Address packaging, repeatability, safety, cybersecurity, regulatory needs and support."],
            ].map(([number, title, text]) => (
              <article key={number} className="path-card" style={{ background: "#f7fafb", border: "1px solid #dfeaf2", borderRadius: 20, padding: 22 }}>
                <div style={{ color: "#05a171", fontSize: 12, fontWeight: 800, letterSpacing: ".12em" }}>{number}</div>
                <h3 style={{ margin: "12px 0 8px", color: "#0e1f2e", fontSize: 18 }}>{title}</h3>
                <p style={{ margin: 0, color: "#53657a", fontSize: 14, lineHeight: 1.7 }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#eaf6f8", padding: "72px 0" }}>
        <div className="container research-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(5, 208, 224, 0.12)", color: "#01406c", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>Research, partners and people</div>
            <h2 style={{ margin: "18px 0 12px", color: "#071a2a", fontSize: "clamp(2rem, 3vw, 2.7rem)", lineHeight: 1.1, letterSpacing: "-0.05em" }}>Better measurements begin with collaboration.</h2>
            <p style={{ margin: 0, color: "#53657a", lineHeight: 1.8 }}>
              We welcome work with hospitals and imaging teams, universities, industrial operators, OEMs and research laboratories where there is a clear measurement challenge and a way to test the answer.
            </p>
          </div>
          <div style={{ background: "#ffffff", border: "1px solid #dfeaf2", borderRadius: 22, padding: 26 }}>
            <h3 style={{ margin: "0 0 12px", color: "#0e1f2e", fontSize: 20 }}>Research themes</h3>
            <p style={{ margin: 0, color: "#53657a", lineHeight: 1.8 }}>
              SMI and laser vibrometry, photoacoustics, optical ultrasound detection, computational imaging, signal processing, machine learning and digital twins.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#eaf6f8", padding: "96px 0" }}>
        <div className="container values-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(74,214,202,0.12)", color: "#0f3d4a", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>What matters to us</div>
            <h2 style={{ margin: "18px 0 18px", fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.05em", color: "#091b2d" }}>
              Sensitive enough to reveal change. Stable enough to work in practice.
            </h2>
            <p style={{ margin: 0, color: "#44566b", fontSize: 18, lineHeight: 1.8 }}>
              We care about calibration, repeatability, noise, data quality and the boundaries of what a model can reasonably conclude. The goal is not spectacle—it is reliable interpretation that helps a professional make a better decision.
            </p>
          </div>

          <div className="feature-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(180px, 1fr))", gap: 16 }}>
            {featureCards.map((item) => (
              <div key={item} style={{ background: "#fff", border: "1px solid #dfeaf2", borderRadius: 18, padding: "20px 18px", color: "#123252", fontWeight: 700, fontSize: 15, lineHeight: 1.5, minHeight: 96 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section" style={{ background: "#081b29", color: "#edf7f9" }}>
        <div className="container">
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "stretch" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 26, padding: "30px 28px" }}>
              <h2 style={{ margin: "18px 0 14px", fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.05em" }}>Let’s build better sensing together.</h2>
              <p style={{ margin: 0, color: "rgba(237,247,249,.7)", fontSize: 17, lineHeight: 1.8 }}>
                We collaborate with clinicians, researchers, OEM partners, operators and institutions working on health, industrial intelligence, artificial intelligence and sensing research.
              </p>
            </div>

            <div style={{ background: "#0d2737", border: "1px solid rgba(74,214,202,0.12)", borderRadius: 26, padding: "28px" }}>
              <div style={{ display: "grid", gap: 22 }}>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#8fe9de", fontWeight: 700, marginBottom: 10 }}>Email</div>
                  <div style={{ display: "grid", gap: 9 }}>
                    {founders.map((founder) => (
                      <a key={founder.email} href={`mailto:${founder.email}`} style={{ color: "#edf7f9", fontSize: 15, fontWeight: 700, overflowWrap: "anywhere" }}>{founder.name} · {founder.email}</a>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#8fe9de", fontWeight: 700, marginBottom: 8 }}>Address</div>
                  <div style={{ color: "rgba(237,247,249,.8)", lineHeight: 1.7, fontSize: 15 }}>
                    1401, Oriental Heights, Plot No. 158, Sector 44, Darave, Thane, Thane - 400706, Maharashtra
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
