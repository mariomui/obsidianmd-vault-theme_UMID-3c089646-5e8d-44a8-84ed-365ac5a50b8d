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

# ---Transient Sandbox

I develop this inside a git synced vault therefore,

## Syncing

- **Git Submodule research** is needed to easily keep the git histories seperate (without resorting to file-mutating git ignores)

- :reference:
  - https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/The-git-submodule-add-example
    - https://youtu.be/RgIAXF53a8U
- ⚖️
  - Git ignores require umbrella github to mutate a file. (accepted PR).
  - Multiple submodules in the future might balloon the git ignore file.
  - Parent git directory knows too much about the internal git system.

* https://jakemccrary.com/blog/2020/02/25/auto-syncing-a-git-repository/

- TLINE: Link the submodule readme to the parent readme
  - [x] Should I consolidate the readme to one? or just copy the same readme across all submodules?
    - No. It is +more steps to update a submodule readme than a parent.

for initial submodule set up, its best to look at docs.

- https://git-scm.com/book/en/v2/Git-Tools-Submodules

- Here's some handy dandy commands for now:
  - git push --recurse-submodules=on-demand origin master
  - git pull --recurse-submodules

* As a user I want any changes in git to reflect in my local files, and vice versa. While I've found sync scripts that push and pull depending on file system changes there is no way to pull from git whenever there is a upstream change in data.

  - ie. github.com: [fnToUpdateMyLocal] <-- there is no hook hosted on github.com to hang my function hat on.

* As a developer I want to run scss changes, have it output to my obsidian snippets folder.

The quickest way is to hardcode an env or .in file that points to my local folder. A watch plugin via a bundler will output to that snippets directory, triggering the fswatch script that will automatically update git.
