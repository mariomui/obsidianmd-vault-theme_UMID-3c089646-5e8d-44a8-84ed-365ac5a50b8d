# -

- [ ] Convert a file over to scss.
- [ ] Create a build system for scss
- [ ] Create a subfolder called snippets that houses scss
- [ ] Build the ouptut onto the root directory
- [ ] Research themeing

## About

This is an [[internal-guide]]. The goal is to simplify development for creating a style settings plugin system compatible with stacked tabs and pane relief.

![](/docs/assets/screenshot.png)

# =

### ---Transient Sandbox

I develop this inside a git synced vault therefore,

- **Git Submodule research** is needed to easily keep the git histories seperate (without resorting to file-mutating git ignores)

  - :reference:
    - https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/The-git-submodule-add-example
      - https://youtu.be/RgIAXF53a8U
  - ⚖️
    - Git ignores require umbrella github to mutate a file. (accepted PR).
    - Multiple submodules in the future might balloon the git ignore file.
    - Parent git directory knows too much about the internal git system.

  * https://jakemccrary.com/blog/2020/02/25/auto-syncing-a-git-repository/
    - [ ] Should I consolidate the readme to one? or just copy the same readme across all submodules?
