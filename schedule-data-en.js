/*
  Dates, time slots, and course assignments follow the timetable image supplied
  by the user on October 30, 2026. October 11 is a Sunday despite the image's
  Saturday label. The December 12 morning cultural product session follows the
  user's later correction. Course names retain the latest user-approved wording.
  Focus topics for Ma Yikai's course and the five literature sessions follow
  plans supplied by the user. Other topics retain the website's suggested outline.
  Instructor deliverables are supporting descriptions; instructors' notices
  take precedence.
*/

window.courseCatalog = {
  "agent": {
    "order": 5,
    "shortName": "AI Principles and Practice",
    "fullName": "AI Principles and Practice",
    "teacher": "Zhang Yuchen"
  },
  "literature": {
    "order": 1,
    "shortName": "Research & Analysis",
    "fullName": "AIGC Literature Research and Intelligent Analysis",
    "teacher": "Prof. Vincenzo De Masi"
  },
  "heritage": {
    "order": 2,
    "shortName": "3D Digital Heritage",
    "fullName": "AI + IP Design, Scene and Prop Design, and 3D Digital Heritage Applications",
    "teacher": "Ma Yikai"
  },
  "video": {
    "order": 3,
    "shortName": "AI Video Generation",
    "fullName": "AI Video Generation",
    "teacher": "Yuan Min"
  },
  "music": {
    "order": 4,
    "shortName": "Music Visualization",
    "fullName": "AI Music Visualization and Creation",
    "teacher": "Wu Mengjiao"
  }
};

window.courseSchedule = [
  {
    "date": "2026-10-11",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "agent",
        "focus": "Vibe Coding and AI Agent fundamentals; development environment setup",
        "teacherDelivery": "Course brief, environment setup checklist, and a classroom demo project."
      },
      {
        "time": "14:00–17:00",
        "course": "agent",
        "focus": "Personal website information architecture and first page prototype",
        "teacherDelivery": "Website structure template, homepage example, and initial prototype feedback."
      }
    ]
  },
  {
    "date": "2026-10-17",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "literature",
        "focus": "Lesson 1 – Storytelling in the Age of AI",
        "studentDescription": "This session introduces the fundamentals of storytelling and the role of artificial intelligence in creative production. Students explore narrative structure, story development, conflict, and the relationship between storytelling and digital media. Practical exercises demonstrate how AI can support creative thinking and the development of original ideas.",
        "teacherDelivery": "Storytelling fundamentals, narrative structure, conflict, and AI-supported creative exercises."
      },
      {
        "time": "14:00–17:00",
        "course": "literature",
        "focus": "Lesson 2 – Worldbuilding and IP Development",
        "studentDescription": "This session focuses on creating fictional worlds and developing original intellectual properties (IP). Students learn how to design narrative environments, establish the rules and atmosphere of a story, and develop concepts that can expand into films, animation, video games, and XR experiences.",
        "teacherDelivery": "Fictional worldbuilding, story rules and atmosphere, and cross-media IP concepts."
      }
    ]
  },
  {
    "date": "2026-10-24",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "literature",
        "focus": "Lesson 3 – Character, Emotion, and Visual Storytelling",
        "studentDescription": "Students explore character development, emotional engagement, and narrative voice. Through examples from cinema and animation, the session examines how characters, visual composition, movement, sound, and atmosphere contribute to effective storytelling and audience engagement.",
        "teacherDelivery": "Cinema and animation examples covering characters, composition, movement, sound, and atmosphere."
      },
      {
        "time": "14:00–17:00",
        "course": "literature",
        "focus": "Lesson 4 – Scriptwriting for Video, Animation, and XR",
        "studentDescription": "This session introduces the principles of screenwriting for audiovisual and immersive media. Students learn how to transform narrative concepts into structured scripts, organize scenes, develop conflicts, and integrate dialogue, visual storytelling, and sound. AI tools are introduced as creative assistants during the writing process.",
        "teacherDelivery": "Screenwriting principles for audiovisual and immersive media, with AI-assisted writing practice."
      }
    ]
  },
  {
    "date": "2026-10-31",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "literature",
        "focus": "Lesson 5 – Screenplay Development and Finalization",
        "studentDescription": "The final session is a practical workshop dedicated to developing and refining an original screenplay. Students analyze examples of short films, improve narrative structure, characters, dialogue, and emotional progression, and finalize a screenplay for a 2–5 minute short film or animation, preparing the project for storyboarding and production.",
        "teacherDelivery": "Short-film analysis and a screenplay workshop leading to a finalized 2–5 minute film or animation script."
      },
      {
        "time": "14:00–17:00",
        "course": "heritage",
        "focus": "Course overview and principles of IP design",
        "studentDescription": "See how the course moves from IP concepts to cultural products, 3D, and websites. Study the character traits, visual language, and uses of established IPs, then choose your creative direction.",
        "teacherDelivery": "Course framework, essential IP design concepts, and the semester project brief."
      }
    ]
  },
  {
    "date": "2026-11-07",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "heritage",
        "focus": "Designing an IP character with AI",
        "studentDescription": "Start with character positioning and keywords. Use AI to explore form, color, and expressions, then select and refine a visually consistent IP character concept.",
        "teacherDelivery": "IP character design methods, AI tool demonstrations, and feedback on classroom concepts."
      },
      {
        "time": "14:00–17:00",
        "course": "video",
        "focus": "AI video workflow and tool introduction",
        "teacherDelivery": "Video workflow and tool demonstration, with a generation settings log."
      }
    ]
  },
  {
    "date": "2026-11-14",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "heritage",
        "focus": "Designing scenes and props with AI",
        "studentDescription": "Place the character in a specific story situation. Use AI to develop the scene structure, materials, lighting, and key props so the visual elements work together.",
        "teacherDelivery": "Scene and prop design methods, visual consistency checks, and exercise feedback."
      },
      {
        "time": "14:00–17:00",
        "course": "video",
        "focus": "Visual consistency and shot testing",
        "teacherDelivery": "Visual consistency checks and a shot test template based on generation settings."
      }
    ]
  },
  {
    "date": "2026-11-21",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "video",
        "focus": "Storyboarding, camera language, and scene blocking",
        "teacherDelivery": "Storyboard template, shot list, and milestone review notes."
      },
      {
        "time": "14:00–17:00",
        "course": "music",
        "focus": "Introduction to AI audio-visual creation",
        "studentDescription": "Explore film and animation examples and the full workflow for music visualization, voice acting, sound effects, and scoring. Get to know tools such as Gemini, MiniMax, and Suno, along with the final project requirements.",
        "studentTask": "Collect one or two music visualization or animation dubbing examples you like and note your impressions.",
        "teacherDelivery": "Tool overview, course assignments, and case study discussion."
      }
    ]
  },
  {
    "date": "2026-11-28",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "music",
        "focus": "Music visualization with Gemini: festival style",
        "studentDescription": "Learn about frequency, amplitude, spectra, and prompt structure. Use Gemini to make a festival-style webpage with audio upload, particle effects, and interactive controls.",
        "studentTask": "Submit an HTML file, a screen recording, and a short creative statement.",
        "teacherDelivery": "Festival-style webpage demo, prompt templates, and debugging tips."
      },
      {
        "time": "14:00–17:00",
        "course": "heritage",
        "focus": "Project critique",
        "studentDescription": "Present your work in progress. Discuss clarity of theme, visual consistency, and possible applications, then leave with an actionable revision list.",
        "teacherDelivery": "Interim project critique, issue review, and revision suggestions."
      }
    ]
  },
  {
    "date": "2026-12-05",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "agent",
        "focus": "Integrating script, visuals, and media assets into a project website",
        "teacherDelivery": "Media integration components, project page template, and website milestone feedback."
      },
      {
        "time": "14:00–17:00",
        "course": "video",
        "focus": "Character and scene motion tests; continuity adjustments",
        "teacherDelivery": "Motion test feedback, continuity checklist, and suggested settings."
      }
    ]
  },
  {
    "date": "2026-12-12",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "heritage",
        "focus": "Cultural product design",
        "studentDescription": "Turn the IP visual system into a poster, package, or cultural product. Consider the audience, context of use, and production materials to create a presentable product concept.",
        "teacherDelivery": "Cultural product examples, application suggestions, and concept feedback."
      },
      {
        "time": "14:00–17:00",
        "course": "video",
        "focus": "Editing structure, pacing, and assembly of a rough cut",
        "teacherDelivery": "Rough-cut submission guidelines, editing feedback, and next-round revision list."
      }
    ]
  },
  {
    "date": "2026-12-19",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "music",
        "focus": "Music visualization with Gemini: cultural heritage storytelling",
        "studentDescription": "Bring artifact forms, Chinese-inspired colors, and traditional music rhythms into particle animation. Build a cultural heritage webpage and practice troubleshooting audio, performance, and interaction issues.",
        "studentTask": "Submit an HTML file, screen recording, creative statement, and issue log.",
        "teacherDelivery": "Cultural heritage webpage demo, troubleshooting, and export guidelines."
      },
      {
        "time": "14:00–17:00",
        "course": "music",
        "focus": "AI voice acting and environmental sound effects",
        "studentDescription": "Use MiniMax, ElevenLabs, or Jimeng to create character dialogue and narration, then adjust tone and pacing. Generate environmental and action sounds such as footsteps and rain.",
        "studentTask": "Choose an animation script excerpt and produce voice tracks with matching sound effects.",
        "teacherDelivery": "Voice and sound effect tool demos, naturalness adjustments, and asset organization tips."
      }
    ]
  },
  {
    "date": "2026-12-26",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "agent",
        "focus": "Agent features, interactive experience, testing, and deployment",
        "teacherDelivery": "Deployment checklist, functional test sheet, and live debugging feedback."
      },
      {
        "time": "14:00–17:00",
        "course": "video",
        "focus": "Rough-cut review, sound integration, and final revisions",
        "teacherDelivery": "Rough-cut review notes, sound cue sheet, and final-cut revision list."
      }
    ]
  },
  {
    "date": "2027-01-02",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "video",
        "focus": "Final cut, subtitles, image polish, and video export",
        "teacherDelivery": "Final-cut review, export guidelines, and screening version approval."
      },
      {
        "time": "14:00–17:00",
        "course": "heritage",
        "focus": "AI-assisted 3D applications and production",
        "studentDescription": "Use AI to assist with Blender modeling, lighting, and animation. Turn existing designs into 3D scenes and explore their use in trailers, game assets, or short creative videos.",
        "teacherDelivery": "AI-assisted 3D workflow, model and scene demos, and milestone exercise feedback."
      }
    ]
  },
  {
    "date": "2027-01-09",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "agent",
        "focus": "Publish the project website, check links, and make a backup",
        "teacherDelivery": "Website acceptance checklist, published link, and offline deployment package guidelines."
      },
      {
        "time": "14:00–17:00",
        "course": "heritage",
        "focus": "Building an attractive website with Vibe Coding",
        "studentDescription": "Build a personal portfolio website with Vibe Coding. Arrange the layout, colors, interactions, and media so the work looks polished and is easy to explore.",
        "teacherDelivery": "Website visual design methods, page-building demo, and portfolio display suggestions."
      }
    ]
  },
  {
    "date": "2027-01-10",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "music",
        "focus": "AI scoring and integrated demo production",
        "studentDescription": "Use Suno, Sponge Music, or Udio to create a score for a scene. Balance dialogue, effects, and music, then make one or two complete animated short-film demos.",
        "studentTask": "Submit the complete demo and identify the assets and tools used.",
        "teacherDelivery": "AI scoring and mixing demo, demo critique, and submission criteria."
      }
    ]
  }
];
