// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-qingyuan-yu",
    title: "Qingyuan Yu",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Exploring the world of coding, one repository at a time.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Education, research experience, internships, projects, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-completing-my-dna-sequence-classification-project",
      
        title: "Completing My DNA Sequence Classification Project",
      
      description: "Reflecting on my journey of building a deep learning model for DNA sequence classification.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/DNA-Sequence-Classification-project/";
        
      },
    },{id: "post-what-excites-me-about-ai-amp-computer-vision",
      
        title: "What Excites Me About AI &amp; Computer Vision",
      
      description: "Exploring my passion for AI and computer vision and why I find it so fascinating.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/find-research-lab/";
        
      },
    },{id: "post-building-my-first-personal-website",
      
        title: "Building My First Personal Website",
      
      description: "My journey in creating a personal website and what I learned along the way.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/bilding-own-web/";
        
      },
    },{id: "news-created-this-website",
          title: 'Created this website',
          description: "",
          section: "News",},{id: "news-looking-for-a-lab-about-ai-llm-computer-vision-computational-biology-and-so-on-sparkles-smile",
          title: 'Looking for a lab about AI, LLM, Computer Vision, Computational Biology and so...',
          description: "",
          section: "News",},{id: "news-complete-the-project-of-dna-sequence-classification",
          title: 'Complete the project of DNA Sequence Classification',
          description: "",
          section: "News",},{id: "news-started-as-a-machine-learning-intern-at-hikvision-research-institute-working-on-image-text-retrieval-and-training-data-pipelines",
          title: 'Started as a Machine Learning Intern at Hikvision Research Institute, working on image-text...',
          description: "",
          section: "News",},{id: "news-completed-my-machine-learning-internship-at-hikvision-research-institute-where-i-worked-on-clip-based-image-text-reranking-data-quality-filtering-and-model-error-diagnosis",
          title: 'Completed my Machine Learning internship at Hikvision Research Institute, where I worked on...',
          description: "",
          section: "News",},{id: "news-started-roam-ongoing-research-with-prof-xiaolong-wang-at-uc-san-diego-on-memory-driven-active-observation-for-open-vocabulary-object-retrieval",
          title: 'Started ROAM, ongoing research with Prof. Xiaolong Wang at UC San Diego on...',
          description: "",
          section: "News",},{id: "news-our-co-first-authored-paper-hug-corl-2026-is-now-available-on-arxiv",
          title: 'Our co-first-authored paper HuG (CoRL 2026) is now available on arXiv!',
          description: "",
          section: "News",},{id: "projects-dna-sequence-classification",
          title: 'DNA Sequence Classification',
          description: "Classifying coding and non-coding regions using CNN",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-rl-mario",
          title: 'RL Mario',
          description: "PPO agent on gym_super_mario_bros, clears World 1-1 and 1-2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_rl_mario/";
            },},{id: "projects-vision-based-autonomous-driving",
          title: 'Vision-Based Autonomous Driving',
          description: "OCR traffic-sign recognition and ROS2 vehicle control, with 95% recognition accuracy at 10 Hz",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_ocr_robocar/";
            },},{id: "projects-aria-mujoco-teleoperation",
          title: 'Aria MuJoCo Teleoperation',
          description: "Real-time teleoperation of a MuJoCo-simulated Franka Panda using Meta Aria hand tracking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_aria_mujoco_teleop/";
            },},{id: "projects-roam",
          title: 'ROAM',
          description: "Memory-driven active observation for open-vocabulary object retrieval on a wheeled humanoid",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_roam/";
            },},{id: "projects-fine-tuning-qwen3-4b-for-reasoning",
          title: 'Fine-Tuning Qwen3-4B for Reasoning',
          description: "Prompt engineering, LoRA SFT, and GRPO improved validation accuracy from 47% to 66.22%",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_qwen_reasoning/";
            },},{id: "projects-can-vlms-audit-reward-hacking",
          title: 'Can VLMs Audit Reward Hacking?',
          description: "A MuJoCo benchmark of 20 PPO policies for studying reward exploitation and VLM auditing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_vlm_reward_hacking/";
            },},{id: "projects-robot-state-estimation-and-slam",
          title: 'Robot State Estimation and SLAM',
          description: "Pose-graph SLAM, vectorized ICP, and an SE(3) EKF with a stereo vision front-end",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_robot_state_estimation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%71%69%79%30%30%35@%75%63%73%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/QingyuanYuu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/qingyuan-yu-6911b5331", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
