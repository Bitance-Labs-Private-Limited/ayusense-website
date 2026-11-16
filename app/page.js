export default function HomePage() {
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

  const products = [
    {
      title: "LiverAI",
      subtitle: "Imaging and surgical planning",
      text: "A platform for liver and spleen segmentation, lesion mapping, organ volumetry, 3D visualization and multi-phase CT review for consistent, clinician-led assessment.",
      image: "/image/pic4.jpeg",
    },
    {
      title: "MIMO Stethoscopy",
      subtitle: "Spatial physiological sensing",
      text: "Beyond a single listening point, MIMO Stethoscopy captures physiological motion and acoustic information across multiple points for richer diagnostics.",
      image: "/image/pic3.jpeg",
    },
    {
      title: "AyuSense Components",
      subtitle: "Measurement modules and building blocks",
      text: "Compact, well-documented sensing modules for SMI laser vibrometers, ultrasound detectors, photoacoustic detectors, tunable mid-infrared sources and digital-twin tooling.",
      image: "/image/fullstackplatform.jpg",
    },
  ];

  const domains = [
    "Healthcare",
    "Industrial equipment",
    "Infrastructure",
    "Defence",
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


        @media (max-width: 768px) {
          .section {
            padding: 72px 0;
          }
        }
      `}</style>

      <div style={{ background: "#06141f", color: "#edf7f9" }}>
        <header style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 78 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #4ad6ca, #7bc7d8)", color: "#04141d", fontWeight: 800, fontSize: 18 }}>
                A
              </div>
              <div>
                <div style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "#88e0d5", fontWeight: 700 }}>AyuSense</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.55)", letterSpacing: ".12em", textTransform: "uppercase" }}>Innovations</div>
              </div>
            </div>

            <nav style={{ display: "flex", gap: 22, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#about" style={{ color: "rgba(255,255,255,.74)", fontSize: 13, fontWeight: 600 }}>About</a>
              <a href="#technology" style={{ color: "rgba(255,255,255,.74)", fontSize: 13, fontWeight: 600 }}>Technology</a>
              <a href="#applications" style={{ color: "rgba(255,255,255,.74)", fontSize: 13, fontWeight: 600 }}>Solutions</a>
              <a href="#contact" style={{ color: "rgba(255,255,255,.74)", fontSize: 13, fontWeight: 600 }}>Contact</a>
              <a href="#contact" style={{ background: "linear-gradient(135deg, #4ad6ca, #3aa4d3)", color: "#06141f", padding: "10px 18px", borderRadius: 999, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>
                Partner with us
              </a>
            </nav>
          </div>
        </header>

        <section style={{ position: "relative", overflow: "hidden", padding: "72px 0 26px" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 20%, rgba(74, 214, 202, 0.16), transparent 38%), radial-gradient(circle at 78% 20%, rgba(58, 164, 211, 0.2), transparent 32%)" }} />
          <div className="container" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 36, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(74,214,202,0.08)", border: "1px solid rgba(74,214,202,0.2)", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#8fe9de", fontWeight: 700 }}>
                Inspired by life. Powered by photonics.
              </div>

              <h1 style={{ margin: "24px 0 20px", fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1.02, letterSpacing: "-0.06em", maxWidth: 680 }}>
                Transforming photonic signals into
                <span style={{ display: "block", color: "#4ad6ca" }}>strategic intelligence™</span>
              </h1>

              <p style={{ maxWidth: 620, margin: 0, color: "rgba(237,247,249,.78)", fontSize: 18, lineHeight: 1.8 }}>
                Light, sound and vibration carry more information than we usually notice. AyuSense turns those signals into useful measurements for healthcare, industrial equipment, infrastructure and defence.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 30 }}>
                <a href="#technology" style={{ background: "linear-gradient(135deg, #4ad6ca, #38a5d1)", color: "#06141f", padding: "15px 22px", borderRadius: 999, fontWeight: 800, letterSpacing: ".04em" }}>
                  Explore technology
                </a>
                <a href="#contact" style={{ border: "1px solid rgba(255,255,255,.18)", color: "#edf7f9", padding: "15px 22px", borderRadius: 999, fontWeight: 700 }}>
                  Talk to us
                </a>
              </div>

              <div style={{ display: "flex", gap: 26, flexWrap: "wrap", marginTop: 38 }}>
                {metrics.map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: "#4ad6ca" }}>{stat.value}</div>
                    <div style={{ fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.48)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: "-24px 30px 38px -40px", background: "rgba(74,214,202,0.12)", filter: "blur(14px)", borderRadius: 28 }} />
              <div style={{ position: "relative", zIndex: 1, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 30, overflow: "hidden", boxShadow: "0 30px 80px rgba(3,13,20,0.48)" }}>
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
                  alt="Medical and infrastructure imaging"
                  style={{ width: "100%", height: 560, objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,20,31,0.08), rgba(6,20,31,0.75))" }} />

                <div style={{ position: "absolute", left: 20, right: 20, bottom: 22 }}>
                  <div style={{ background: "rgba(7,19,27,0.7)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, backdropFilter: "blur(8px)", padding: "16px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 12, background: "rgba(74,214,202,0.14)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ad6ca", fontSize: 20, fontWeight: 800 }}>◌</div>
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
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 32, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-block", background: "rgba(74,214,202,0.12)", color: "#0f3d4a", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>About AyuSense</div>
              <h2 style={{ margin: "18px 0 18px", fontSize: "clamp(2.1rem, 4vw, 3.4rem)", lineHeight: 1.08, letterSpacing: "-0.05em", color: "#0c1e2e" }}>
                We work where signals become useful measurements.
              </h2>
              <p style={{ fontSize: 18, color: "#425467", lineHeight: 1.85, margin: 0 }}>
                AyuSense was founded around a practical observation: useful signals are often already present, but the instruments and analysis needed to interpret them are missing or too difficult to use. We are interested in closing that gap between raw observation and trusted decision support.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid #dfeaf2", borderRadius: 24, padding: 28, boxShadow: "0 20px 40px rgba(17,34,57,0.06)" }}>
              <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#3aa4d3", fontWeight: 800, marginBottom: 16 }}>Our direction</div>
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginBottom: 32 }}>
            {domains.map((domain) => (
              <div key={domain} style={{ border: "1px solid #dfeaf2", background: "#fff", padding: "24px 20px", borderRadius: 18, fontWeight: 700, color: "#123252", fontSize: 18 }}>
                {domain}
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {products.map((product) => (
              <div key={product.title} style={{ background: "#fff", border: "1px solid #dfeaf2", borderRadius: 24, overflow: "hidden", boxShadow: "0 18px 36px rgba(17,34,57,0.05)" }}>
                <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(9,25,36,0.10), rgba(9,25,36,0.28))" }} />
                </div>
                <div style={{ padding: 22 }}>
                  <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#46b0b7", fontWeight: 800 }}>{product.subtitle}</div>
                  <h3 style={{ margin: "12px 0 10px", fontSize: 28, color: "#0e1f2e" }}>{product.title}</h3>
                  <p style={{ margin: 0, color: "#52667d", lineHeight: 1.75 }}>{product.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#eaf6f8", padding: "96px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(74,214,202,0.12)", color: "#0f3d4a", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>What matters to us</div>
            <h2 style={{ margin: "18px 0 18px", fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.05em", color: "#091b2d" }}>
              Sensitive enough to reveal change. Stable enough to work in practice.
            </h2>
            <p style={{ margin: 0, color: "#44566b", fontSize: 18, lineHeight: 1.8 }}>
              We care about calibration, repeatability, noise, data quality and the boundaries of what a model can reasonably conclude. The goal is not spectacle—it is reliable interpretation that helps a professional make a better decision.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(180px, 1fr))", gap: 16 }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "stretch" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 26, padding: "30px 28px" }}>
              <div style={{ display: "inline-block", background: "rgba(74,214,202,0.08)", color: "#8fe9de", borderRadius: 999, padding: "8px 14px", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>Contact</div>
              <h2 style={{ margin: "18px 0 14px", fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.05em" }}>Let’s build better sensing together.</h2>
              <p style={{ margin: 0, color: "rgba(237,247,249,.7)", fontSize: 17, lineHeight: 1.8 }}>
                We collaborate with clinicians, researchers, OEM partners, operators and institutions working on health, industrial intelligence, infrastructure monitoring and defence-grade sensing.
              </p>
            </div>

            <div style={{ background: "#0d2737", border: "1px solid rgba(74,214,202,0.12)", borderRadius: 26, padding: "28px" }}>
              <div style={{ display: "grid", gap: 22 }}>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#8fe9de", fontWeight: 700, marginBottom: 8 }}>Email</div>
                  <a href="mailto:hello@ayusense.com" style={{ color: "#edf7f9", fontSize: 22, fontWeight: 700 }}>hello@ayusense.com</a>
                </div>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#8fe9de", fontWeight: 700, marginBottom: 8 }}>Focus</div>
                  <div style={{ color: "rgba(237,247,249,.8)", lineHeight: 1.7, fontSize: 16 }}>
                    Healthcare, industrial monitoring, infrastructure assessment and applied research.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#04141d", borderTop: "1px solid rgba(255,255,255,0.04)", color: "rgba(237,247,249,.7)", padding: "28px 0" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em", color: "#f1f9fa" }}>AyuSense Innovations</div>
          <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(237,247,249,.45)" }}>Transforming photonic signals into strategic intelligence™</div>
        </div>
      </footer>
    </>
  );
}
