# BarroCode High-Fidelity UI Image Prompt

Use case: ui-mockup

Asset type: final high-fidelity UI mockup reference for BarroCode before implementation

Primary request: create a polished, high-fidelity desktop UI mockup for BarroCode that clearly shows the main elements, hierarchy, spacing, and visual style. BarroCode is a light-code graphical instrument for converting SVG into G-code toolpaths.

Core design priorities:

1. **Panel hierarchy:** left = SVG and print setup; center = trajectory; bottom = local measurement and output; right = wave controls.
2. **Clean default view:** show summaries first; reveal advanced settings only when selected, expanded, focused, or needed.
3. **ASCII as graphic language:** use `o`, `|`, `>`, `#`, `[x]` as small integrated UI marks in headers, rows, status flows and keyframe/toolpath states. Do not make the UI look like a terminal emulator.
4. **Measurement feel:** use thin dividers, tabular numbers, compact labels, small metrics, axis legends, ruler marks, flat bars and precise grid.
5. **N/T axis clarity:** blue for Normal `N`, terracotta for Tangent `T`; this mapping must appear consistently in controls, Lissajous preview and canvas annotations.
6. **Canvas chrome:** keep the central canvas dominant and precise, with toolbar, metrics, timeline and keyframe controls supporting the visualization.
7. **Keyboard and cursor discoverability:** imply visible focus states, logical tab flow, expandable rows, and interactions that do not rely only on dragging.

Style/medium: premium product UI mockup, minimal technical instrument, clean light-code feel, warm paper interface, crisp monospaced typography, precise grid, thin structural rules, compact discoverable controls, measurement-panel aesthetic. It should feel professional and buildable in React/CSS.

Composition/framing: full 16:9 desktop app screen, straight-on screenshot-like view, no perspective tilt. Dense but clean app shell.

Layout requirements:

- Left sidebar, about 15% width: BarroCode wordmark at top, subtitle `SVG > PATH > WAVE > G-CODE`, compact SVG load/drop control, sample button, path list with two loaded paths, print settings grouped into collapsed/expanded technical sections.
- Central workspace, largest area: top toolbar with status `READY`, file name, fit button, compact metrics `6 layers` and `1240 pts`. Below it, a large warm off-white canvas showing a layered SVG-derived toolpath with subtle grid, X/Y/Z measurement axes, selected keyframe diamond in indigo, color-coded layers from blue to terracotta, small orientation gizmo bottom-right.
- Bottom row, about 24% height: three panels separated by thin rules. Left panel `CENTER / SCALE` with a small square coordinate pad and numeric fields. Middle panel `LOCAL WAVE` with Lissajous preview, N and T axes colored blue and terracotta. Right panel `G-CODE` with compact output preview, diagnostics, and an `EXPORT` button.
- Right sidebar, about 16% width: Lissajous controls grouped as `N AXIS`, `T AXIS`, `PHASE`, `PRESETS`. Use sliders and numeric values. Some advanced controls are collapsed as discoverable rows.

ASCII integration: use ASCII characters as subtle graphic UI marks, not terminal text: `o` for state nodes, `|` as flow connectors, `>` as active/focus marker, `#` as module mark, `[x]` for selected toggles. Place them in panel headers, status rows, path list, and flow indicators.

Progressive disclosure: show clean summaries by default with small expandable rows, one selected row expanded inline, advanced rows collapsed.

Interaction cues: one selected control has a clean indigo focus outline; keyboard/cursor navigability is implied through visible focus states, tab-like row structure, and clear hit areas.

Color palette: warm paper `#EDEBE4` background, ivory panels `#F7F5F0`, subtle right panel `#F2F0EB`, near-black ink `#100E09`, muted gray `#6A6762`, indigo `#4F46E5` for focus/keyframe, normal axis blue `#1D64B4`, tangent axis terracotta `#B84F22`, success green `#1C6E45`, red `#AA2A2A` only for destructive/error. Mostly monochrome with sparse functional accents.

Typography: GSCode-like monospaced type, small uppercase labels, tabular numeric values, no negative letter spacing. Text must be crisp and minimal.

Text to include: `BarroCode`, `SVG > PATH > WAVE > G-CODE`, `READY`, `sample.svg`, `6 layers`, `1240 pts`, `LOAD SVG`, `PATHS`, `PRINT`, `TRAJECTORY`, `CENTER / SCALE`, `LOCAL WAVE`, `G-CODE`, `EXPORT`, `N AXIS`, `T AXIS`, `PHASE`, `PRESETS`, `soft join`, `z-hop`, `scale`, `origin`, `Amp`, `Wave`.

Constraints: no landing page, no hero section, no dark terminal, no terminal emulator skin, no CLI-looking text inputs except the G-code output preview. Inputs/sliders/buttons must be graphical controls. No big rounded SaaS cards, no nested cards, no glassmorphism, no shadows, no gradients, no decorative blobs, no stock imagery, no excessive color.
