# Music, made visible / 音乐，可被看见

面向 **The University of Queensland School of Music** 学生的中英双语音乐可视化教学网站，按桌面电脑与课堂投影制作。本地入口为 `index.html`。

## 打开网站 / Run locally

在本目录运行：

```powershell
python -m http.server 8765
```

然后打开 `http://localhost:8765/index.html`。使用麦克风、摄像头时请使用 `localhost` 或 HTTPS；直接双击 `file://` 页面可能受浏览器安全限制。麦克风和摄像头只应在用户主动授权后启用。

## 内容结构 / Contents

| 文件 | 内容 |
|---|---|
| `index.html` | 深色双语开场，以“音乐里什么值得被看见？”衔接浅色理论页；理论页加入用户选定的 Vimeo 音乐可视化视频及双语观看任务；发展历程配四张对应案例图，随后讲教学目的、原有工种与流程、音乐学生应用；实时示范与完成案例卡片都嵌入可操作的水墨圆环成品，示范下方有双语学习目标与课堂工具；三小时课堂节奏后加入五阶段生产流程和讲座示范，实作部分另含 Google AI Studio 六步操作 |
| `courses.html` | 从原站单独整理的音乐可视化教案：五个练习、提示词、案例、效果配方、排错与交付要求 |
| `build-sumi-e.html` | 水墨案例 11 步逐句制作与可复制提示词 |
| `build-sumi-e-results.html` | 桌面课堂图文讲义：按三个阶段组织 11 步提示词、验证内容与对应截图；截图可点击看完整原图；页末附双语故障排查与 Gemini 迭代急救 |
| `steps/1.png`–`steps/11.png` | 第 1–11 步课堂结果截图，按相同编号配对；静态图片不作为声音响应、动画或交互验证 |
| `visualizers.html` | 嵌入当前水墨圆环成品，并提供操作说明与完整页面入口 |
| `ink-wash-ring.html` | 当前运行的水墨圆环成品：本地 MP3、内置节奏、调色、拖拽、麦克风与摄像头交互 |
| `assets/production/` | 首页五阶段生产流程与讲座示意图的本地副本，页面内保留来源及许可署名 |
| `examples/elegant_audio_visualizer.html` | 保留的旧版教学示例，网页成品入口已切换 |
| `source-notes.md` | 原站音乐可视化与水墨部分的提取清单、课程文字和提示词，供迁移核对 |

新站保留原课程 CUC × UCC 的作者与来源信息，同时以 “Prepared for The University of Queensland School of Music” 表示本次教学改编对象。原营地提到的音频不随这节独立课提供；学生可用有使用权的自己的音频。

## 已知素材边界 / Asset status

- Google Fonts 为外部资源；字体加载失败时网站仍可阅读。AI Studio 本身需要联网。
- [用户选定的 Vimeo 视频](https://vimeo.com/363819046)按需加载，需联网。课堂网络若无法显示嵌入播放器，可点击页面上的原视频链接。当前环境无法核实该视频的标题、作者、时长、内容及嵌入权限，因此页面不标注这些未核实信息。
- 时间线前三张案例图分别取自 Wikimedia Commons 的公有领域影片《Lichtspiel: Opus I》预览帧、Free Stock Footage Archive 的 After Effects 音频光谱模板演示图、Rosa Menkman 的现场照片（CC BY 2.0）；按需联网加载，图下已标来源与许可。第四张使用本课程第 11 步的本地结果图 `steps/11.png`。
- 生产流程的五张示意图来自原教案列出的 Wikimedia 文件，已存入 `assets/production/`，可在本地打开；各卡片下保留原有署名与许可，原始 URL 见 `source-notes.md`。
- 昆士兰大学标识文件 `assets/uq-logo.png` 取自[大学官方子域名上的公开图片](https://biosig.lab.uq.edu.au/aim6ars/static/imgs/uq-logo.png)，仅用于本地教学草稿预览。依照[学校品牌使用程序](https://policies.uq.edu.au/document/view-current.php?id=358)，公开发布前应由有权方确认使用许可，并以 UQ DAM 中获准的正式标识替换。

## 来源 / Sources

原始教案与案例：

- https://haner199022.github.io/ireland-study-tour/courses.html#visual
- https://haner199022.github.io/ireland-study-tour/build-sumi-e.html

历史与技术资料链接已逐项放在主页对应段落。Google AI Studio 的界面指引依据[官方 Build mode 文档](https://ai.google.dev/gemini-api/docs/aistudio-build-mode)；浏览器音频原理依据 [MDN Web Audio 可视化文档](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)。
