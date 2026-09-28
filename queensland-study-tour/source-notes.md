# 音乐可视化课程来源清单 / Music visualisation source notes

核对日期：2026-09-28。此清单仅覆盖用户指定范围内的**音乐驱动水墨画布**与相关教学步骤。正文是为 The University of Queensland School of Music 学生准备的提取与迁移参考；原站的其他作品不收入本版。源页面保留原作者署名，新站应把原营地的时间与素材前提改为学生自带录音或课堂示范素材。

## 来源与页面映射

| 本站页面 | 原始来源 | 保留内容 |
|---|---|---|
| `index.html` | [原三小时音乐可视化教案](https://haner199022.github.io/ireland-study-tour/courses.html#visual) | 核心方法与 Google AI Studio 实作路径，并补充面向音乐专业学生的引言 |
| `courses.html#visual` | [同一原教案](https://haner199022.github.io/ireland-study-tour/courses.html#visual) | 学习目标、工具、无障碍要求、时程、制作流程、分解法、效果配方、五道练习、故障处理；迁移时删去与本课无关的资产线索 |
| `build-sumi-e.html` | [原水墨作品逐步指南](https://haner199022.github.io/ireland-study-tour/build-sumi-e.html) | 11 步目标、提示词、逐步验证与技术原理；最后一步的提示词按本课范围改写 |
| `visualizers.html` | [原水墨可交互成品](https://haner199022.github.io/ireland-study-tour/examples/elegant_audio_visualizer.html) | 单一作品导览、交互说明、完整页面入口 |
| `examples/elegant_audio_visualizer.html` | [原可交互成品](https://haner199022.github.io/ireland-study-tour/examples/elegant_audio_visualizer.html) | 画布、声音分析、上传音频、麦克风与动作输入；使用时须检查实际控件 |

## 原教案可迁移的完整教学内容

### 教师课前准备

- 确认学生能登录 Google AI Studio；原教案也提到 Gemini App 的 Canvas。
- 准备一段可合法用于课堂的录音，或让学生上传自己的作品。原营地的 `music-final.mp3` 是其前置活动产生的文件，不是本站提供的现成资源。
- 使用 HTTPS 或 localhost 测试麦克风与摄像头；从 `file://` 打开的页面可能被浏览器拒绝。可用 `python3 -m http.server` 起本地服务器。
- 在当前 Google AI Studio Build 预览中，若作品使用麦克风或摄像头，需在 `metadata.json` 的 `requestFramePermissions` 声明 `microphone` 或 `camera`，并由使用者确认预览权限提示。
- 课前测试网络和浏览器，并存一份可运行示例。每轮修改都保存上一版可运行的 HTML。
- 原教案提到 20 秒示范音乐和 `starter.html`，但未提供可用的下载入口；新站不应声称它们已经随站附带。

### 学习目标与工具

1. 学会“描述 → 预览 → 验证 → 迭代”的生成式界面工作流。
2. 把低频、中频、高频与节拍拆开，各自控制不同视觉参数，而不是让一个圆代表整段音乐。
3. 用渗墨、飞白、留白、泼墨、层次和克制的点色做有意图的水墨画面。
4. 做出一种值得反复操作的招牌交互，能检查并调试 AI 生成结果。
5. 主力工具是 Google AI Studio；原教案另列 Gemini App Canvas。输出为浏览器页面，可选择分享链接或静态网页托管。

### 安全与无障碍（原课计分要求）

- 闪光保持局部、短暂，少于每秒三次；避免全屏纯白频闪。
- 尊重 `prefers-reduced-motion: reduce`，取消抖屏与强泛光，以柔和透明度变化替代剧烈脉冲。
- 持续显示暂停和静音控制，不在打开页面时大音量自动播放。
- 文字及红色印章在纸色 `#FAF6F0` 上达到 WCAG AA 对比度。
- 30 秒演示视频加一行字幕；投屏前提示观众包含闪光和运动。
- 原线上水墨示例偏重视觉，原指南明确提醒：学生自己的成品仍需补齐静音和减弱动效并亲自验证。

### 三小时课表

| 时间 | 内容 |
|---|---|
| 09:00–09:25 | 讲座与现场演示：用自然语言生成可运行页面，加载声音，故意触发错误再反馈给 AI |
| 09:25–10:05 | 练习 1–2：Hello Canvas 与声音分析 |
| 10:05–10:45 | 练习 3：只做一种招牌交互 |
| 10:45–11:30 | 练习 4：水墨风格与视觉判断 |
| 11:30–12:00 | 练习 5：导出、发布，在课堂电脑和投影上验证并演示 |

### 制作主线与十级拆解阶梯

生产主线：用语言生成 HTML → 让声音驱动画面 → 增加一种观众交互 → 做水墨风格 → 发布并分享。

1. 先建单文件全屏 Canvas、渲染循环与暂停/静音控件，验证画布持续刷新。
2. 加载本地音频，确认能播放和暂停。
3. 接入 FFT，先只把低频数值显示出来，确认声音响起时数字会变。
4. 用低频一个数值驱动一个视觉参数，确认强拍到来时画面响应。
5. 一次加一个频段：中频驱动涟漪，高频驱动粒子，每次单独检查。
6. 检测强拍，触发一次温和的局部视觉反馈。
7. 对音频特征做 `lerp` 平滑，避免画面抖动。
8. 选一种招牌交互并调到愿意再次使用。
9. 最后处理风格：渗墨、飞白、留白和少量点色，删除 AI 过度添加的元素。
10. 导出、部署，确认链接在课堂电脑和投影上运行，并保存演示与提示词记录。

四条规则：先结构再声音反应最后风格；一次只改一个变量；每步验证；永远留上一版能跑的文件。

### 五道练习及交付

- **Exercise 1 · Hello Canvas（15 分钟）**：打开生成界面，输入第一条提示词、运行预览、点击测试、截图并保存 HTML。交一个可运行页面与截图；讨论 AI 增减了什么、自己能否描述它的行为。
- **Exercise 2 · Audio Lives in the Page（25 分钟）**：在同一对话中接本地音频和 FFT，逐次添加低频脉冲、中频涟漪、高频粒子，再加节拍反应、辉光、拖尾与平滑。交页面与 30 秒录屏，片段应包含安静与高潮对比；讨论延迟、抖动与错误修复。
- **Exercise 3 · Add One Interaction（35 分钟）**：选一种鼠标、键盘、麦克风、滚轮、摄像头、拖拽、点击或拍手输入；用一句话描述，亲自测是否想再用一次，交页面和 30 秒交互演示。重点讨论它是否改变观众聆听方式。
- **Exercise 4 · Style as Culture（35 分钟）**：从米纸纹理与留白、湿笔触、深浅墨色与飞白、泼墨、低频渗墨、轴线与印章等处理中至少选三项；删去一个不合适的 AI 元素，保留完整提示词记录。讨论风格究竟来自动态笔触与空间，还是仅来自表面符号。
- **Exercise 5 · Ship It（30 分钟）**：选择一种分享或托管路径，发布公开 URL，在课堂电脑与投影环境实测，录 30 秒 `demo.mp4`，整理至少五轮 `prompt-log.md`，备份 `index.html`。

原教案最终交付：可在浏览器打开的页面、公开 URL、30 秒演示视频、至少五轮提示词迭代记录。原营地的跨模块评分权重为文化理解 30%、提示与迭代 30%、沟通可懂度 25%、原创惊喜 15%；用于本课时需以真实教学要求为准。

### 常见问题与排错顺序

- 播放无声：在用户点击后建立或恢复 `AudioContext`。
- 麦克风或摄像头被拒：检查 HTTPS/localhost；捕获异常并复位开关，允许改用本地音频。
- `createMediaElementSource` 错误：同一个 `<audio>` 只创建一次来源节点。
- 课堂电脑掉帧：限制粒子数量与阴影效果，降低摄像头帧差画布分辨率，并复用数组。
- 同一错误尝试三次仍未解决：把报错原样贴回并要求完整修正文件 → 缩小改动范围 → 回滚上一版 → 向教师求助或选更简单的交互。

## 完整可复制提示词 / Complete retained prompts

以下保留原教案和原水墨指南中与本课有关的英文提示词。键盘交互示例及水墨第 8、10、11 步按本版课堂范围略作调整；其余各条来自源页面。

## Day 3 原教案的练习提示词


### Exercise 1 · Hello Canvas

```text
Build a single-file HTML page with one centered black circle on a
white background. When I click anywhere, the circle should bounce
once (scale up to 1.5x and back). Use vanilla JS, no libraries.
Make it elegant and minimal.
```


### Exercise 2 · Audio Lives in the Page

```text
Now load a local .mp3 (small play/pause button) and drive everything with
the Web Audio API in real time. Split the FFT into 3 bands and make AT
LEAST 3 things react:
  - BASS (low)    -> the core pulses / scales on every kick
  - MIDS          -> concentric rings ripple outward
  - TREBLE (high) -> a spray of small bright particles
Add simple BEAT DETECTION: on a strong onset, fire a quick flash / shockwave.
Add a soft additive GLOW (bloom) and short motion TRAILS so it feels alive,
not jittery; smooth every value (lerp) so it breathes.
Single HTML file, vanilla JS + canvas.
```


### Exercise 4 · Style as Culture

```text
Restyle it as REAL Chinese ink-wash (水墨 / sumi-e), not "grey shapes":
1. Canvas = warm rice-paper cream (#FAF6F0) with a faint fibrous grain
   and lots of empty space (留白 negative space).
2. Brush strokes, NOT geometric shapes: tapered ends, varied width, wet
   edges that BLEED softly into the paper (feathered alpha).
3. Ink in tonal washes (dark -> pale, 墨分五色) + dry-brush "flying-white"
   streaks (飞白) on fast strokes; ONE restrained accent only — a
   cinnabar-red seal 印章 OR jade #5B8C7E.
4. On a strong BEAT, throw a splashed-ink burst (泼墨): droplets scatter,
   then DIFFUSE and dry into the paper over ~1s.
5. The bass pulse should look like fresh ink BLOOMING on wet paper —
   not a circle scaling.
6. A single faint vertical centre line (Beijing Central Axis), a Chinese
   serif (Noto Serif SC), and a small red seal in one corner.
Reference look: Sesshu's "splashed-ink" (haboku) landscape.
```


Exercise 3 的一句话交互候选：


- **Mouse / 鼠标**: `When I move the mouse, the circle follows my cursor with a 0.3s lag.`

- **Keyboard / 键盘（按本版范围改写）**: `When I press SPACE, trigger one gentle visual pulse.`

- **Microphone / 麦克风**: `When I make a sound into the mic, a smaller circle appears and pulses with my voice.`

- **Scroll / 滚轮**: `Mouse-wheel up = warmer color tone; down = cooler tone.`

- **Webcam / 摄像头**: `When my face moves left/right (webcam), the visuals shift left/right.`

- **Drag / 拖动作画**: `Click-drag leaves a trailing ink brush-stroke that slowly fades.`

- **Click / 点击冲击波**: `On click, emit a shockwave ring that warps everything it passes through.`

- **Clap / 拍手**: `On a loud clap, trigger an ink-splash explosion.`


## Day 3 的五条效果配方


### Bloom / 辉光

```text
Add an additive bloom/glow pass so bright parts halo and bleed light into the paper.
```


### Beat particles / 节拍粒子

```text
On each detected beat, emit ~30 glowing ink droplets that fly outward and fade.
```


### Trails / 拖尾

```text
Don't fully clear the canvas each frame — fade it ~8% so motion leaves silky ink trails.
```


### Shockwave / 冲击波

```text
On click or a strong onset, send an expanding ring that warps everything it passes.
```


### Parallax / 景深

```text
Layer 3 depths of strokes; move them at different speeds with the mouse for depth.
```


## 水墨成品：11 步逐轮提示词

第 1 步建立文件；第 2–11 步都接着在同一对话继续。每步输入后先预览、验证，再保存可用版本。第 8、10、11 步按本版的课堂电脑与音频水墨范围略作调整；其余提示词保留源页原文。


### 01 · Rice paper + one brush ring / 宣纸与第一道墨环

```text
Build a single self-contained HTML file — one full-screen canvas,
vanilla JavaScript, no libraries. Fill it with a warm rice-paper
cream colour (#FAF6F0). In the exact centre, draw one soft black
ink-wash ring: a circle whose edge is slightly irregular and
wobbly, like a single brush stroke, not a perfect geometric circle.
Leave lots of calm empty space around it. Make it elegant and minimal.
```

**Verify / 验证：**暖米白画面；中央手绘边缘的单一墨环。


### 02 · Breathe + trails / 呼吸与拖尾

```text
Now animate it, in the same file. Make the ring breathe forever —
its radius and edge gently wobble and pulse, slowly. And here is the
key trick: do NOT clear the whole canvas each frame. Instead, paint a
near-transparent rice-paper-coloured rectangle over everything each
frame (about 8% opacity), so moving ink leaves soft silky trails that
fade into the paper. If the visitor has prefers-reduced-motion turned
on, calm the motion right down.
```

**Verify / 验证：**墨环缓慢起伏，运动留下逐渐淡去的墨痕。


### 03 · Load music / 放进音乐

```text
Add audio. Put a small, tasteful play/pause button and a "choose a
local audio file" picker at the bottom. Load the chosen mp3 into an
audio element and read it with the Web Audio API — create an
AnalyserNode with fftSize 256, so we can read the sound's frequencies
every frame. Keep a visible Pause and a Mute control at all times,
and never auto-blast sound.
```

**Verify / 验证：**本地音乐可播放、暂停；静音控件持续可见。


### 04 · Follow the bass / 随低音起伏

```text
Now couple the ring to the music. Every frame, read the
low-frequency (bass) energy from the analyser — just the lowest few
frequency bins — and smooth it over time. Drive the ring's size and
line thickness with that bass value: loud bass makes the ring swell
and thicken; in quiet passages it settles and calms. Keep the motion
organic, not jumpy.
```

**Verify / 验证：**低音重时环变大变粗，安静段平稳。


### 05 · Splash on strong beats / 重拍泼墨

```text
Add splashing ink on the beat. Detect strong bass hits with an
ADAPTIVE threshold — after each hit raise the bar, then let it slowly
decay — so it self-tunes to any track instead of using a fixed number.
On each detected hit, burst about 30 ink droplets outward from the
centre: they fly out, slow down with friction, and as they slow they
spread bigger and dry/fade into the paper over roughly one second.
Make most droplets black ink, a few jade or bronze, a rare pale gold.
Cap it with a short cooldown of a few frames so it can't fire on
every single frame.
```

**Verify / 验证：**强拍出现扩散的墨点，安静处没有乱闪。


### 06 · Three ink layers + mouse parallax / 三层墨环与鼠标视差

```text
Make it feel deep. Use THREE concentric ink rings at different sizes
and opacities — a faint big outer wash, a strong middle stroke, and a
small sharp inner accent. Then follow the mouse: shift the three rings
by different amounts — the inner ring moves most, the outer least — to
create parallax depth. Add a soft lag (about a third of a second) so
they drift smoothly toward the cursor rather than snapping to it.
```

**Verify / 验证：**三层环深浅不同，鼠标移动有不同位移与迟滞。


### 07 · Shockwave warp / 冲击波扭曲

```text
Add a shockwave. On every strong beat — and whenever I click — send
an expanding ring outward from the centre that warps and distorts
everything it passes through: push points outward as the wave front
reaches them, then let it fade as it grows. Keep the distortion subtle
and elegant, like a ripple moving through wet ink.
```

**Verify / 验证：**强拍或点击有温和的扩展涟漪与统一扭曲。


### 08 · Drag to paint / 拖动作画

```text
Let me paint. When I press and drag on the paper with a mouse, lay
down a trail of soft ink brush dots along my path that
wobble slightly and slowly soak in and fade, like a wet brush on rice
paper. They should take on the current ink colour.
```

**Verify / 验证：**鼠标拖动留下会渗开淡去的笔触。


### 09 · Scroll colour + central axis / 滚轮调色与中轴线

```text
Add colour control by scroll wheel. Scrolling up warms the whole
palette toward bronze; scrolling down cools it toward jade green.
Interpolate one "tone" value between cool jade and warm bronze, and
use it to colour the rings, the ink splatters, the brush strokes, and
a faint vertical "central axis" line down the middle of the page. That
axis line is the spine of the piece — the 中轴线.
```

**Verify / 验证：**上滚偏暖、下滚偏冷；整体同步且有淡淡竖轴。


### 10 · Voice input / 麦克风

```text
Add a microphone toggle, named "Mic". When switched on, ask for
permission and read the mic with its own analyser. Let my voice volume
grow a glowing gold core in the centre — the louder I speak or sing,
the brighter and bigger it blooms. And detect a clap — a sudden spike
in volume — and make it throw an ink explosion. (Reminder: the mic
only works over localhost or https, not from a file:// page.)
```

**Verify / 验证：**说话或唱歌时中心光芯变亮；拍手产生墨点爆发。


### 11 · Webcam + ambient synth + safety / 摄像头、内置合成器与安全控件

```text
Final layer, three things, in the same file.
(1) Add a "Webcam" toggle: with permission, compare each camera frame
    to the previous one to find where the motion is, and use the
    horizontal position of that motion to shift the rings' parallax —
    lean or wave left and right and the ink drifts with you.
(2) If no audio file is loaded, let the visitor press Play to start a
    built-in calm 50-BPM ambient synth — a soft bass pulse plus occasional
    sustained pentatonic tones. Do not autoplay audio when the page opens.
(3) Safety, and it is graded: keep every flash gentle (never more than
    about three per second, never a full-screen white strobe), disable
    the screen-shake when prefers-reduced-motion is on, and keep the
    Pause and Mute controls visible the whole time.
```

**Verify / 验证：**摄像头仅在授权后影响视差；无音频文件时点击 Play 可启动内置合成器；减少动效、暂停、静音有效。


## 示例页面的真实行为与验收边界

- 示例用 Canvas 绘制宣纸纹理、中轴线、墨环与粒子，支持本地音频文件、麦克风、摄像头、鼠标拖动、滚轮调色、点击波纹以及拍手触发的墨点反应。声音通过 Web Audio 分析；音频文件由访问者自行选择。
- 原案例页的嵌入写法是 `iframe` 指向 `examples/elegant_audio_visualizer.html`，并授予 `microphone; camera; autoplay; fullscreen`；权限依然由访问者决定。权限失败时让学员使用本地文件或打开完整页面。
- 源指南特别提醒：线上示例未必把持续可见的静音与减弱动效全部做到。因此它是审美与交互参考，**不是安全验收的替代**。课堂成品必须逐项实测。
- 受浏览器自动播放规则约束，声音应由访问者点击启动。没有选择文件时，可由内置合成器作为示范输入。

## 教案图像及出处（选用时保留署名）

- [Processing 工作界面](https://upload.wikimedia.org/wikipedia/commons/0/08/Processing_4.0b1_Screenshot.png) · 源页署名 Processing Foundation / GPL / Wikimedia。
- [声音波形与频谱](https://upload.wikimedia.org/wikipedia/commons/f/f1/Voice_waveform_and_spectrum.png) · 源页署名 Bob K / Public domain / Wikimedia。
- [分形生成画面](https://upload.wikimedia.org/wikipedia/commons/d/d5/Fractals_Geometric_Pattern_%288665018571%29.jpg) · 源页署名 Dilshan Jayakody / CC BY-SA 2.0 / Wikimedia。
- [雪舟泼墨山水](https://upload.wikimedia.org/wikipedia/commons/2/27/Sesshu_-_Haboku-Sansui.jpg) · 源页署名 Sesshū Tōyō (1495) / Public domain / Wikimedia。
- [浏览器页面](https://upload.wikimedia.org/wikipedia/commons/c/c1/Chromium_web_browser.PNG) · 源页署名 Google / CC BY-SA 4.0 / Wikimedia。
