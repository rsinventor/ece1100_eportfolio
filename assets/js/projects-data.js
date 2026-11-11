/* ==========================================================================
   projects-data.js — the single list of projects shown on the site.

   To add a project, copy one object below and edit it. Newest first.
   Fields:
     id        short unique id
     title     project name
     year      year or range shown on the card
     summary   1–3 sentences
     tags      list of key tools/parts
     award     (optional) short award text, shown as a badge
     image     image URL (local path like "assets/img/x.jpg" or a full URL)
     alt       image description for screen readers
     link      (optional) where "Read more" goes
     linkLabel (optional) text for that link
     featured  true = also shown on the home page
   ========================================================================== */

const HACKSTER_IMG = (path) =>
  `https://hackster.imgix.net/uploads/attachments/${path}?auto=compress%2Cformat&w=800&h=600&fit=min`;

window.PROJECTS = [
  {
    id: "dukes-garden",
    title: "Duke's Garden",
    year: "2026",
    summary:
      "A full-stack Java 26 / Spring Boot web app for houseplant care. It identifies species, diagnoses disease, and gives care guidance through Spring AI, and Raspberry Pi sensors log care events over an authenticated REST API.",
    tags: ["Java 26", "Spring Boot", "Spring AI", "PostgreSQL", "Raspberry Pi"],
    award: "Oracle Grand Prize",
    image: HACKSTER_IMG("1987798/_GU0Zl12WRo.blob"),
    alt: "Duke's Garden plant-care app with a houseplant and sensor",
    link: "https://www.hackster.io/Raunak-Singh-Inventor/duke-s-garden-java-26-ai-backed-buddy-for-home-gardeners-046ed2",
    linkLabel: "Hackster write-up",
    featured: true,
  },
  {
    id: "rv32i-cpu",
    title: "RV32I processor, RTL to GDSII",
    year: "2026",
    summary:
      "With the Silicon Jackets digital design team, I designed a single-core RV32I-style processor in SystemVerilog (98% code coverage) and took it through synthesis and place-and-route, using clock gating and cell swapping to cut total negative slack by 40.8%.",
    tags: ["SystemVerilog", "Synopsys DC", "Cadence Innovus", "RISC-V"],
    image: null,
    alt: "Block diagram of the tools used: SystemVerilog, Synopsys DC, Cadence Innovus",
    featured: true,
  },
  {
    id: "crashboot",
    title: "CrASHBoot",
    year: "2024",
    summary:
      "A secure over-the-air firmware bootloader for automotive ECUs, written in embedded C for a TI TM4C microcontroller. It uses AES-256-GCM decryption, signature verification, and anti-rollback protection.",
    tags: ["Embedded C", "TI TM4C", "AES-GCM", "Security"],
    award: "MIT BeaverWorks award",
    image: null,
    alt: "Block diagram of the parts used: Embedded C, TI TM4C, AES-GCM",
  },
  {
    id: "macawed",
    title: "MACAWED: using ML to protect ML",
    year: "2024 – 2025",
    summary:
      "A reinforcement-learning defense that finds and removes malicious clients in privacy-preserving SplitFed learning. I tested it with ResNet-18 on HAM10000 medical images with 10–50 clients and 20% attackers.",
    tags: ["Python", "gRPC", "ResNet-18", "Reinforcement learning"],
    award: "NJAS 1st place",
    image: null,
    alt: "Block diagram of the tools used: Python, gRPC, ResNet-18",
  },
  {
    id: "little-free-library",
    title: "Tech-enabled Little Free Library",
    year: "2023",
    summary:
      "A solar-powered community library (charter #173631) with an autonomous lock, a touchscreen, and book-inventory tracking.",
    tags: ["Raspberry Pi 4", "Arduino", "Solar"],
    award: "Most over-engineered",
    image: HACKSTER_IMG("1643709/_xiQK3IdHNj.blob"),
    alt: "The Little Free Library build with its touchscreen",
    link: "https://www.hackster.io/Raunak-Singh-Inventor/tech-enabled-interactive-little-free-library-24ecd8",
    linkLabel: "Hackster write-up",
  },
  {
    id: "refound",
    title: "ReFound",
    year: "2023",
    summary:
      "A smart lost-and-found for schools that uses a HuskyLens AI camera and Arduino IoT Cloud to log found items so students can get them back.",
    tags: ["Arduino IoT Cloud", "HuskyLens", "DFRobot"],
    award: "Safety & Security award",
    image: HACKSTER_IMG("1602003/_FVjPeyxncP.blob"),
    alt: "ReFound lost-and-found device",
    link: "https://www.hackster.io/Raunak-Singh-Inventor/refound-16115b",
    linkLabel: "Hackster write-up",
  },
  {
    id: "monsand",
    title: "MonSand",
    year: "2022",
    summary:
      "A LoRa sensor node built on the Seeed Wio Terminal that watches riverbanks for illegal sand mining and logs data to the cloud. My most-viewed Hackster project.",
    tags: ["Wio Terminal", "LoRa", "SenseCAP K1100"],
    award: "Contest winner",
    image: HACKSTER_IMG("1512434/_w9vWgKkf4e.blob"),
    alt: "MonSand sensor kit deployed outdoors",
    link: "https://www.hackster.io/Raunak-Singh-Inventor/monsand-monitoring-illegal-sand-mining-561307",
    linkLabel: "Hackster write-up",
  },
  {
    id: "walruseye",
    title: "WalrusEye",
    year: "2022",
    summary:
      "Sony Spresense sensor boards paired with an object-detection model I trained to count walrus, so scientists can track how populations change.",
    tags: ["Sony Spresense", "Jetson Nano", "Object detection"],
    image: HACKSTER_IMG("1473616/_UzpbnCu4gn.blob"),
    alt: "WalrusEye camera hardware",
    link: "https://www.hackster.io/Raunak-Singh-Inventor/walruseye-helping-scientists-count-and-protect-walrus-cc0de9",
    linkLabel: "Hackster write-up",
  },
  {
    id: "bikewatch",
    title: "BikeWatch",
    year: "2021 – 2022",
    summary:
      "A bike-mounted edge-AI safety system. A RefineDet model runs on the Xilinx Kria KV260's deep-learning processing unit to spot pedestrians in real time and warn them with audio alerts.",
    tags: ["Kria KV260", "Vitis AI", "C++", "Python"],
    image: HACKSTER_IMG("1413306/_8qc8wFRqK8.blob"),
    alt: "BikeWatch camera and Kria board mounted on a bicycle",
    link: "https://www.hackster.io/Raunak-Singh-Inventor/bikewatch-protecting-pedestrians-with-xilinx-kria-kv260-3328c6",
    linkLabel: "Hackster write-up",
    featured: true,
  },
  {
    id: "park-it",
    title: "Park It!",
    year: "2021",
    summary:
      "A wearable built on the AWS IoT EduKit that streams galvanic skin response, audio, and gyroscope data to AWS to help track Parkinson's symptoms.",
    tags: ["AWS IoT", "ESP32", "GSR sensor"],
    award: "AWS finalist",
    image: HACKSTER_IMG("1918957/_tYBYeNnflG.blob"),
    alt: "Park It! wearable device",
    link: "https://www.hackster.io/Raunak-Singh-Inventor/park-it-helping-parkinson-s-patients-with-aws-iot-4bbc3d",
    linkLabel: "Hackster write-up",
  },
  {
    id: "bee",
    title: "Bee",
    year: null,
    summary:
      "An IoT patient-monitoring concept for hospitals, using the Microchip AVR-IoT and Arduino MKR WiFi 1010 with biometric sensors.",
    tags: ["AVR-IoT", "Arduino MKR", "IoT"],
    image: HACKSTER_IMG("1238031/_KTLMZj23XB.blob"),
    alt: "Bee medical IoT device",
    link: "https://www.hackster.io/Raunak-Singh-Inventor/bee-the-ultimate-medical-solution-ec74f7",
    linkLabel: "Hackster write-up",
  },
];
