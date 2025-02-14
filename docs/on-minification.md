---
date: 
DOC_VERSION: v0.0.1
---

# -

# 10-About

This index specced note explains and documents the ongoing css minification process and thinking. Only append thoughts this after prototyping.

# =

* v0.0.3

  * CSS Artifacts 314kb 2 files
    * MCF scss is 7.57 kb
    * one ring is now 307.66kb
  * ! SMOOTH !
* v0.0.2
  * Removing the dataurl pic took out 500kb;
    * 🤔 ObsidianMD promotes url loading of assets. The app does not optimize cached-rendering, behaves similar to a website.
  * Implement lightning css minification
    * Converted a 3mb css file to 800kb which is still large.
    * i should find a way to bifurcate the one ring into multiple files
* v0.0.1
  * No minification needed
