// Project data. Every claim here comes from the resume / repo READMEs.
// cat: robot | vision | ai   ·   art: generated cover motif when no image is set
window.PROJECTS = [
  {
    id: "fold", cat: ["robot"], art: "fold", badge: "Lab · Ongoing",
    title: "Two-Arm Laundry Folding",
    sub: "Reproducing a prize-winning π0.5 VLA policy on a new dual-arm rig",
    tags: ["π0.5 VLA", "LeRobot", "Isaac Sim", "SO-101", "AWR + RECAP RL"],
    stats: [["6/8", "zero-shot real towel folds"], ["13/16", "unseen garments in sim"], ["0.68→0.28 s", "inference latency"]],
    body: [
      "At Northeastern's Physical Hardware Intelligence Lab I'm reproducing Ilia Larchenko's ICRA 2026 LeHome prize-winning folding policy, a π0.5 vision-language-action model post-trained with AWR and RECAP reinforcement learning, on a new two-arm SO-101 rig.",
      "The goal is an end-to-end basket-to-fold pipeline for kids' garments. So far the policy folds 6 of 8 towels zero-shot on the real robot and 13 of 16 unseen garments in Isaac Sim.",
      "I also cut policy inference latency by 59%, from 0.68 s to 0.28 s."
    ],
    links: [["GitHub", "https://github.com/NidaEsenn/learning-to-fold"]]
  },
  {
    id: "squint", cat: ["robot"], art: "sim2real", badge: "Lab",
    title: "Sim-to-Real Visual RL with Squint",
    sub: "Taking a sim-trained visual RL policy to real SO-101 arms",
    tags: ["ManiSkill3", "PyTorch", "Visual RL", "SO-101", "Sim-to-Real"],
    stats: [["5/9", "real PlaceCube successes"], ["15 Hz", "on CPU"], ["55", "sim-to-real gaps audited"]],
    body: [
      "Deployed Squint, a fast visual reinforcement-learning method trained in ManiSkill3, on a real SO-101 arm.",
      "The biggest gap was the camera: the simulated wrist camera's view overlapped the real one with an IoU of only 0.41, versus ≥0.66 during training. I aligned the simulated camera pose to the real mount and logged 55 distinct sim-to-real gaps.",
      "Result: 5 of 9 real PlaceCube successes (5/5 on close layouts), running at 15 Hz on a CPU."
    ],
    links: [["GitHub", "https://github.com/NidaEsenn/squint"], ["Squint paper site", "https://aalmuzairee.github.io/squint"]]
  },
  {
    id: "phi", cat: ["robot"], art: "data", badge: "Lab",
    title: "Phi Studio",
    sub: "One local app for the whole robot-learning loop",
    tags: ["LeRobot", "Teleoperation", "3D digital twin", "Dataset tooling", "Evaluation"],
    stats: [["120", "teleop episodes audited"], ["108 ms", "hidden leader–follower lag"], ["68", "idle starts found"]],
    body: [
      "Robot-learning work is usually spread across scripts: calibration, teleoperation, recording, training and evaluation. Phi Studio puts the whole loop in one local app: setup, teleoperation with a live 3D twin of the arm, LeRobot dataset recording, and blind evaluation.",
      "Auditing 120 teleoperated episodes with it surfaced a 108 ms leader–follower lag and 68 idle starts that were silently degrading our training data."
    ],
    links: []
  },
  {
    id: "marl", cat: ["robot"], art: "marl", badge: "Thesis · Ongoing",
    title: "Dose-Budgeted Multi-Agent RL",
    sub: "Robot teams that find a radioactive source without exceeding exposure limits",
    tags: ["MAPPO-Lagrangian", "PyTorch", "PettingZoo", "Numba", "MuJoCo", "SLURM"],
    stats: [["1 multiplier", "per robot (Lagrangian)"], ["5", "rule-based baselines"], ["1,000", "episode fixed test set"]],
    body: [
      "My thesis studies constrained multi-agent RL for radiation source search: a robot team must localize an unknown gamma source while every robot stays under its own cumulative dose budget.",
      "I implemented MAPPO and MAPPO-Lagrangian with one Lagrange multiplier per robot plus a posterior-based dose shield, a batched particle-filter source estimator with Numba-fused kernels, and five rule-based baselines.",
      "The simulator also has a MuJoCo 3D motion layer for sim-to-sim tests and Gazebo world export; 10-seed sweeps run as SLURM job arrays with Hydra configs and W&B logging."
    ],
    links: []
  },
  {
    id: "odin", cat: ["vision"], art: "tracking", badge: "Research · Ongoing",
    title: "Odin's Eye: Dense Crowd Tracking",
    sub: "Multi-object tracking on MOT20 with VLM scene narration",
    tags: ["ByteTrack", "DINOv2 ReID", "YOLO", "Qwen3-VL", "MOT20"],
    stats: [["~150", "pedestrians per frame"], ["71%", "baseline MOTA"], ["568", "ID switches to reduce"]],
    body: [
      "Extending a YOLO + ByteTrack + DINOv2 re-identification tracker and its Qwen3-VL scene-narration layer into a research project on dense crowds (MOT20, up to ~150 pedestrians per frame).",
      "The tracker and baseline results (≈71% MOTA) come from the original course team; my focus is cutting identity switches under heavy occlusion through occlusion-aware ReID and VLM-assisted association, and evaluating narration quality quantitatively."
    ],
    links: [["GitHub", "https://github.com/NidaEsenn/Odin-s-Eye"]]
  },
  {
    id: "roboscript", cat: ["robot", "ai"], art: "llm", badge: "Project · Ongoing",
    title: "RoboScript AI",
    sub: "Edge LLM that turns warehouse-robot telemetry into safe ROS 2 actions",
    tags: ["Hugging Face", "TRL (DPO)", "Pydantic", "ROS 2", "Synthetic data"],
    stats: [["12", "fault categories"], ["1", "schema-validated action per input"], ["80/10/10", "reproducible split"]],
    body: [
      "Building a domain-specific LLM that reads AMR telemetry (LiDAR range, YOLO detections, fault codes) and returns exactly one schema-validated ROS 2 action: halt, Nav2 reroute or dock, or fault log.",
      "The synthetic-data pipeline validates every example against Pydantic schemas (invalid ones are discarded, never patched), filters with an LLM-as-judge, and builds safe-vs-unsafe DPO pairs.",
      "Hard safety rules are enforced: emergency halts always command zero velocity, person or e-stop cases always halt, and any invalid output falls back to a halt."
    ],
    links: [["GitHub", "https://github.com/NidaEsenn/RoboScript-AI-Edge-AI-LLM-for-AMR-Fleet-Control-"]]
  },
  {
    id: "driving", cat: ["vision", "robot"], img: "assets/img/driving.jpg", badge: "Project",
    title: "Multi-Task Perception & Driving Policy",
    sub: "Detection, lane segmentation and an imitation-learned steering policy in one stack",
    tags: ["YOLOv8", "U-Net", "ConvLSTM", "OpenCV", "Imitation Learning"],
    stats: [["3", "models in one real-time overlay"], ["CI", "smoke-tested"]],
    body: [
      "A lightweight autonomous-driving stack: YOLOv8 vehicle detection, U-Net lane and drivable-area segmentation, and a ConvLSTM policy that predicts steering from frame sequences.",
      "A data-engine pipeline filters blurry, overexposed and low-information frames and mines edge cases by steering change, motion and brightness.",
      "Everything is composed into a real-time overlay demo with smoke tests in CI."
    ],
    gallery: ["assets/img/driving_arch.jpg"],
    links: [["GitHub", "https://github.com/NidaEsenn/Unified-Multi-Task-Perception-Driving-Policy-System"]]
  },
  {
    id: "crashgen", cat: ["vision"], art: "crash", badge: "Research",
    title: "CrashGen",
    sub: "Synthetic dashcam crash scenes for rare-case AV training data",
    tags: ["SDXL", "ControlNet", "Stable Video Diffusion", "LoRA", "CLIP", "YOLO"],
    stats: [["LoRA", "implemented from scratch"], ["2", "automatic quality checks"]],
    body: [
      "Turns written crash reports into synthetic dashcam images and videos to cover rare, safety-critical cases for autonomous-vehicle perception.",
      "An LLM parses each report into a structured scene; SDXL + ControlNet depth conditioning generates keyframes, and SVD-XT / Ctrl-Crash animate them into video.",
      "I implemented LoRA from scratch to fine-tune SDXL on dashcam images, and an evaluator that scores outputs with CLIP text–image alignment and YOLO object checks."
    ],
    links: [["Code", "https://github.com/NidaEsenn/synthetic-crash-generation"], ["Write-up", "https://github.com/NidaEsenn/rare-case-car-crash-scenario-generation"]]
  },
  {
    id: "visualmind", cat: ["ai", "vision"], img: "assets/img/visualmind.gif", badge: "Project",
    title: "VisualMind AI",
    sub: "Search UI screenshots in plain language",
    tags: ["OpenCLIP", "Qdrant", "FastAPI", "Gemini VLM", "React", "Docker"],
    stats: [["<500 ms", "search latency"], ["3", "retrieval modes"]],
    body: [
      "Zero-shot natural-language search over a library of UI screenshots, using OpenCLIP image/text embeddings in Qdrant behind a FastAPI backend.",
      "Gemini-generated tags (industry, layout, patterns) act as a keyword boost, which fixed cases where raw CLIP similarity ranked the wrong app first.",
      "Supports dense, similar-image and hybrid CLIP + BM25 retrieval with reciprocal rank fusion; containerized with Docker Compose."
    ],
    links: [["GitHub", "https://github.com/NidaEsenn/visualmind-ai"]]
  },
  {
    id: "autoops", cat: ["ai"], art: "agents", badge: "Project",
    title: "AutoOps",
    sub: "DevOps multi-agent system with a human in the loop",
    tags: ["LangGraph", "FastMCP", "A2A", "FastAPI", "AWS CloudWatch"],
    stats: [["4", "MCP tool servers"], ["0", "write actions without approval"]],
    body: [
      "A LangGraph supervisor routes natural-language ops requests to specialist agents for GitHub workflows, CloudWatch investigation, code review and service-health monitoring.",
      "Tools are exposed as four FastMCP servers, and a human approval step gates every write action. The code-review agent is also published as an agent-to-agent (A2A) service.",
    ],
    links: [["GitHub", "https://github.com/NidaEsenn/AutoOps---Production-DevOps-Multi-Agent-System-with-Human-in-the-Loop-A2A"]]
  },
  {
    id: "cinematch", cat: ["ai"], art: "movie", badge: "Live app",
    title: "CineMatch",
    sub: "Group movie recommender that keeps everyone happy",
    tags: ["Next.js", "FastAPI", "ChromaDB", "Sentence Transformers", "LLaMA 3.1"],
    stats: [["Live", "on Vercel"], ["Least-misery", "fair group scoring"]],
    body: [
      "Maps natural-language mood queries to movie embeddings, then merges each member's results with a fairness-aware score that blends the group average with the least-happy member's score.",
      "Learns from swipe feedback, detects whole-group and majority matches, and re-ranks with an LLM that explains each pick. Frontend on Vercel, API on Hugging Face Spaces, CI/CD with GitHub Actions."
    ],
    links: [["Live demo", "https://cine-match-omega.vercel.app"], ["GitHub", "https://github.com/NidaEsenn/CineMatch"]]
  },
  {
    id: "omnilearn", cat: ["ai"], art: "rag", badge: "Project",
    title: "OmniLearn",
    sub: "Study companion that answers questions across lecture PDFs with citations",
    tags: ["RAG", "Gemini", "BGE embeddings", "Tesseract OCR", "FastAPI"],
    stats: [["400", "pages across 4 PDFs"], ["4-axis", "answer scoring rubric"]],
    body: [
      "A RAG study assistant that answers across up to four lecture PDFs (400 pages) with page-level citations, using OCR to recover pseudocode embedded as images.",
      "Adds question-type-aware retrieval depth, personalized study plans that prioritize weak topics, and an automated 4-dimension evaluation (relevance, correctness, citations, detail)."
    ],
    links: [["GitHub", "https://github.com/NidaEsenn/OmniLearn"]]
  }
];
