/*
  日期、时段和课程名称依据：第二期AIGC微专业课程课程时间表_2026年10月11日起.xlsx。
  首日按用户确认采用2026-10-11（周日）；源表该格的“周六”是星期标注错误。
  马屹锴课程的 focus 按用户提供的七节课计划更新；其他课程主题仍沿用网站原建议。
  teacherDelivery 为配套说明，实际内容以任课教师通知为准。
*/

window.courseCatalog = {
  "agent": {
    "order": 5,
    "shortName": "AI Agent",
    "fullName": "AI程序开发",
    "teacher": "张宇辰"
  },
  "literature": {
    "order": 1,
    "shortName": "文献收集和智能分析",
    "fullName": "AIGC文献收集与智能分析",
    "teacher": "Vincenzo De Masi教授"
  },
  "heritage": {
    "order": 2,
    "shortName": "3D数字文博应用",
    "fullName": "AI+IP设计、场景道具设计与3D数字文博应用",
    "teacher": "马屹锴"
  },
  "video": {
    "order": 3,
    "shortName": "智能视频生成",
    "fullName": "AI智能视频生成",
    "teacher": "袁敏"
  },
  "music": {
    "order": 4,
    "shortName": "音乐可视化及制作",
    "fullName": "AI音乐可视化及创作",
    "teacher": "吴孟娇"
  }
};

window.courseSchedule = [
  {
    "date": "2026-10-11",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "agent",
        "focus": "Vibe Coding与AI Agent基础、开发环境建立",
        "teacherDelivery": "课程任务书、环境配置清单和课堂示范工程。"
      },
      {
        "time": "14:00–17:00",
        "course": "agent",
        "focus": "个人网站信息架构与首个页面原型",
        "teacherDelivery": "网站结构模板、首页示例和第一次原型反馈。"
      }
    ]
  },
  {
    "date": "2026-10-17",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "literature",
        "focus": "研究方向、问题界定与资料来源规范",
        "teacherDelivery": "研究任务书、检索规范和资料来源记录模板。"
      },
      {
        "time": "14:00–17:00",
        "course": "literature",
        "focus": "AI辅助检索、资料库建立与分类",
        "teacherDelivery": "示范资料库、检索提示词和文献分类表。"
      }
    ]
  },
  {
    "date": "2026-10-24",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "literature",
        "focus": "文献分析、主题提炼与事实核验",
        "teacherDelivery": "分析矩阵、引用规范和课堂批改反馈。"
      },
      {
        "time": "14:00–17:00",
        "course": "literature",
        "focus": "研究内容转化为世界观、角色与场景",
        "teacherDelivery": "世界观、角色小传和场景描述模板及示例。"
      }
    ]
  },
  {
    "date": "2026-10-31",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "literature",
        "focus": "整理研究成果与剧本，准备进入视觉设计",
        "teacherDelivery": "阶段审核意见、剧本锁定清单和视觉课程交接单。"
      },
      {
        "time": "14:00–17:00",
        "course": "heritage",
        "focus": "课程总览与IP设计原理",
        "studentDescription": "了解课程如何从IP设定延伸到文创、3D和网站；拆解成熟IP的角色特征、视觉语言与应用场景，确定自己的创作方向。",
        "teacherDelivery": "课程框架、IP设计基本概念和本学期创作任务。"
      }
    ]
  },
  {
    "date": "2026-11-07",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "music",
        "focus": "AI音频视觉创作导论",
        "studentDescription": "赏析影视与动画案例，认识音乐可视化、配音、音效与配乐的完整链路，了解Gemini、MiniMax、Suno等工具及结业作品要求。",
        "studentTask": "搜集1—2个喜欢的音乐可视化或动画配音案例，记录观感。",
        "teacherDelivery": "工具全景、课程任务与案例赏析。"
      },
      {
        "time": "14:00–17:00",
        "course": "heritage",
        "focus": "如何用AI做IP设计",
        "studentDescription": "从角色定位和关键词出发，借助AI探索造型、色彩与表情，筛选方案并形成风格统一的IP角色设定。",
        "teacherDelivery": "IP角色设计方法、AI工具示范和课堂方案反馈。"
      }
    ]
  },
  {
    "date": "2026-11-14",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "video",
        "focus": "AI视频流程与视觉一致性测试",
        "teacherDelivery": "视频工作流示范、镜头测试模板和生成参数记录表。"
      },
      {
        "time": "14:00–17:00",
        "course": "heritage",
        "focus": "如何用AI做场景和道具设计",
        "studentDescription": "把角色放进具体的故事情境，用AI推敲场景结构、材质、光线与关键道具，让画面元素彼此呼应。",
        "teacherDelivery": "场景与道具设计方法、风格统一检查和练习反馈。"
      }
    ]
  },
  {
    "date": "2026-11-21",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "video",
        "focus": "分镜、镜头语言与场景调度",
        "teacherDelivery": "分镜模板、镜头清单和阶段审核意见。"
      },
      {
        "time": "14:00–17:00",
        "course": "music",
        "focus": "Gemini音乐可视化：音乐节风格",
        "studentDescription": "认识频率、振幅与频谱，学习提示词结构；用Gemini制作可上传音频、带粒子效果与交互控制的音乐节风格网页。",
        "studentTask": "提交HTML文件、录屏和简短创作说明。",
        "teacherDelivery": "音乐节风格网页示范、提示词模板和调试要点。"
      }
    ]
  },
  {
    "date": "2026-11-28",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "music",
        "focus": "Gemini音乐可视化：文博叙事",
        "studentDescription": "把文物造型、国风色彩与民乐节奏融入粒子动画，完成文博主题网页，并练习排查音频、性能与交互问题。",
        "studentTask": "提交HTML文件、录屏、创作说明和问题记录。",
        "teacherDelivery": "文博主题网页示范、故障排查与导出规范。"
      },
      {
        "time": "14:00–17:00",
        "course": "heritage",
        "focus": "作业点评",
        "studentDescription": "展示阶段作业，围绕主题清晰度、视觉一致性和应用可能性交流，带走一份可执行的修改清单。",
        "teacherDelivery": "阶段作业点评、问题梳理与修改建议。"
      }
    ]
  },
  {
    "date": "2026-12-05",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "agent",
        "focus": "整合剧本、视觉与媒体资产到作品网站",
        "teacherDelivery": "媒体整合组件、项目页模板和网站阶段反馈。"
      },
      {
        "time": "14:00–17:00",
        "course": "video",
        "focus": "角色与场景动态测试、连续性修正",
        "teacherDelivery": "动态测试反馈、连续性检查表和参数建议。"
      }
    ]
  },
  {
    "date": "2026-12-12",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "video",
        "focus": "关键场景生成与主体镜头制作",
        "teacherDelivery": "中期制作检查、镜头问题清单和修正建议。"
      },
      {
        "time": "14:00–17:00",
        "course": "video",
        "focus": "剪辑结构、节奏与粗剪形成",
        "teacherDelivery": "粗剪提交规范、剪辑反馈和下一版修改清单。"
      }
    ]
  },
  {
    "date": "2026-12-19",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "heritage",
        "focus": "文创衍生品设计",
        "studentDescription": "把IP视觉转化为海报、包装或文创产品，考虑受众、使用场景与制作材质，完成可展示的衍生设计方案。",
        "teacherDelivery": "衍生品设计案例、应用场景建议和方案反馈。"
      },
      {
        "time": "14:00–17:00",
        "course": "music",
        "focus": "AI配音与环境音效实战",
        "studentDescription": "用MiniMax、ElevenLabs或即梦制作角色台词与旁白，调整语气和节奏；再生成脚步、雨声等环境与动作音效。",
        "studentTask": "选一段动画脚本，完成配音及配套音效。",
        "teacherDelivery": "配音与音效工具示范、自然度调节及素材分类建议。"
      }
    ]
  },
  {
    "date": "2026-12-26",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "agent",
        "focus": "Agent功能、互动体验、测试与部署",
        "teacherDelivery": "部署检查表、功能测试表和现场调试反馈。"
      },
      {
        "time": "14:00–17:00",
        "course": "video",
        "focus": "粗剪评审、声音整合与最终修改",
        "teacherDelivery": "粗剪评审意见、声音提示表和终剪修改清单。"
      }
    ]
  },
  {
    "date": "2027-01-02",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "video",
        "focus": "终剪、字幕、画面与成片输出",
        "teacherDelivery": "终剪审核、成片导出规范和展映版本确认。"
      },
      {
        "time": "14:00–17:00",
        "course": "heritage",
        "focus": "AI 3D运用与制作",
        "studentDescription": "学习用AI辅助Blender建模、布光与动画，把已有设计转成3D场景，尝试用于宣传片、游戏素材或趣味视频。",
        "teacherDelivery": "AI辅助3D制作流程、模型与场景示范、阶段练习反馈。"
      }
    ]
  },
  {
    "date": "2027-01-09",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "agent",
        "focus": "发布作品网站，检查链接并做好备份",
        "teacherDelivery": "网站验收表、发布链接和离线部署包归档规范。"
      },
      {
        "time": "14:00–17:00",
        "course": "heritage",
        "focus": "如何用Vibe Coding制作好看的网站",
        "studentDescription": "用Vibe Coding搭建个人作品网站，安排版式、色彩、交互和媒体展示，让作品既好看，也方便别人浏览。",
        "teacherDelivery": "网站视觉设计方法、页面制作示范与作品展示建议。"
      }
    ]
  },
  {
    "date": "2027-01-10",
    "sessions": [
      {
        "time": "09:00–12:00",
        "course": "music",
        "focus": "AI配乐与综合Demo制作",
        "studentDescription": "用Suno、海绵音乐或Udio为场景生成配乐，调整人声、音效与音乐的比例，合成1—2个完整动画短片Demo。",
        "studentTask": "提交完整Demo，并说明所用素材与工具。",
        "teacherDelivery": "AI配乐与混音示范、Demo点评及提交标准。"
      }
    ]
  }
];
