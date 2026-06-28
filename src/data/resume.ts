export const profile = {
  name: "Matte Siva Sai Prakash",
  role: "Electronics & Communication Engineer",
  focus: "VLSI · Embedded Systems · IoT",
  location: "Bhimavaram, Andhra Pradesh",
  email: "saiprakashmatte@gmail.com",
  phone: "+91 93912 75232",
  linkedin: "https://linkedin.com/in/placeholder",
  github: "https://github.com/placeholder",
  objective:
    "Electronics and Communication Engineering student building reliable, real-time hardware systems — with a growing focus on VLSI design and embedded platforms that have to work the first time, every time.",
};

export const stats = [
  { label: "CGPA", value: "8.35", suffix: "/10" },
  { label: "Projects shipped", value: "4", suffix: "+" },
  { label: "Hackathon win", value: "1", suffix: "" },
  { label: "Certifications", value: "2", suffix: "+" },
];

export const education = [
  {
    school: "SRKR Engineering College",
    place: "Bhimavaram",
    period: "2023 – 2027",
    detail: "B.Tech, Electronics & Communication Engineering",
    metric: "CGPA 8.35 / 10",
  },
  {
    school: "KSN Junior College",
    place: "Samarlakota",
    period: "2021 – 2023",
    detail: "Intermediate (MPC)",
    metric: "923 / 1000",
  },
];

export const achievement = {
  title: "Smart India Hackathon 2025",
  subtitle: "Grand Finale Winner",
  points: [
    "Selected among the top national teams after a multi-stage evaluation process",
    "Judged by a panel of government, industry, and academic experts",
  ],
};

export const projects = [
  {
    id: "rooftop-solar",
    year: "2025",
    title: "Rooftop Solar Phase Balancing",
    subtitle: "Smart India Hackathon 2025",
    stack: ["IoT", "Power Systems", "Python", "OpenDSS"],
    description:
      "An IoT-based smart phase balancing system built for grid integration of 150+ MW of rooftop solar PV across Kerala.",
    bullets: [
      "Real-time voltage monitoring with automated load switching",
      "Reduced voltage deviation to within ±2%",
      "Improved grid stability and transformer utilization for distribution utilities and rooftop solar consumers",
    ],
    metrics: [
      { value: "150+", label: "MW integrated" },
      { value: "±2%", label: "voltage deviation" },
    ],
    image: "/projects/rooftop_solar.png",
  },
  {
    id: "der-monitoring",
    year: "2024",
    title: "Secure IoT-based DER Monitoring & Control",
    subtitle: "Independent project",
    stack: ["IoT", "Arduino", "MATLAB"],
    description:
      "A secure IoT platform for real-time monitoring and control of distributed energy resources (DERs).",
    bullets: [
      "Encrypted communication between field devices and control layer",
      "Role-based access control to prevent unauthorized grid operations",
      "Real-time alerting for anomalous DER behavior",
    ],
    metrics: [{ value: "RBAC", label: "access control" }, { value: "Live", label: "alerting" }],
    image: "/projects/der_monitoring.png",
  },
  {
    id: "adaptive-headlights",
    year: "2023",
    title: "Adaptive Vehicle Headlight Control",
    subtitle: "Sensor-driven embedded system",
    stack: ["Embedded Systems", "Sensors", "PWM"],
    description:
      "An embedded system that automatically adjusts vehicle headlight brightness using ambient light and proximity sensors.",
    bullets: [
      "PWM-based brightness control to cut glare in real time",
      "Improved night-driving visibility for drivers and pedestrians",
    ],
    metrics: [{ value: "PWM", label: "based control" }],
    image: "/projects/adaptive_headlights.png",
  },
  {
    id: "laser-safety",
    year: "2024",
    title: "Laser-Based Home Safety Device",
    subtitle: "CRUX Innovation Challenge",
    stack: ["Embedded Systems", "Arduino"],
    description:
      "A low-cost embedded intrusion detection system using laser and LDR sensors, built as a working hardware prototype.",
    bullets: [
      "Detects beam interruption and triggers instant buzzer alerts",
      "Affordable, simple security layer for residential use",
    ],
    metrics: [{ value: "Low-cost", label: "hardware" }],
    image: "/projects/laser_safety.png",
  },
];

export const skills = [
  {
    group: "Programming",
    items: ["C", "Python", "MATLAB"],
  },
  {
    group: "Embedded Systems",
    items: ["Arduino", "Microcontrollers", "Sensors", "Embedded C", "PWM", "IoT Fundamentals"],
  },
  {
    group: "VLSI & Digital",
    items: ["Digital Electronics", "Basic VLSI Concepts", "Intro RTL Design", "Verilog (Basic)"],
  },
  {
    group: "EDA & Simulation",
    items: ["Xilinx Vivado (Basics)", "Cadence (Basics)", "Multisim", "OpenDSS"],
  },
];

export const trajectory = {
  learning: ["Advanced VLSI", "Embedded Systems", "RTL Design", "Hardware Design"],
  goals: ["Chip Design", "FPGA", "ASIC", "Embedded AI"],
};

export const certifications = [
  { name: "VLSI Beginners Certification", org: "NIELIT" },
  { name: "SDP on Internet of Things", org: "Self-paced program" },
  { name: "Executive Body Member", org: "IETE Student Forum" },
  { name: "NSS Volunteer", org: "National Service Scheme" },
];

export const softSkills = [
  "Communication",
  "Leadership",
  "Financial Management",
  "Time Management",
  "Adaptability",
];
