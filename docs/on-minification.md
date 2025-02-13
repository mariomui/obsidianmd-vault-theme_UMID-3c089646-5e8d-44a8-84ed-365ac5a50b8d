---
date: 
DOC_VERSION: v0.0.1
---

# -

# 10-About

This index specced note explains and documents the ongoing css minification process and thinking. Only append thoughts this after prototyping.

# =

* v0.0.2
  * lightning css 3mb file to 800kb which is still large. i should find a way to bifurcate the one ring into multiple files
  * Removing the dataurl pic took out 500kb; the obsidian promoting url loading of pictures is another way of promoting lazy loading. Judging by my css waterfall patterns, i dont think they even cache the pictures but load all of them as is.
* v0.0.1
  * No minification needed
