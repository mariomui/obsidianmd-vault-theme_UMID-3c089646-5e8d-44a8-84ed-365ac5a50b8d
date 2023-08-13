---
UMID: UMID_3c089646-5e8d-44a8-84ed-365ac5a50b8d
VERSION: v0.0.2
---

# -

- [x] Convert a file over to scss.
- [x] Create a build system for scss
- [x] Create a subfolder called snippets that houses scss
- [x] Build the ouptut onto the root directory
- [ ] Research theme-ing
- [x] Copy this guide over to my vault and date the learnings.
- [ ] Create document versioning.
  - ~~Finish the guide in my personal vault and then sync to this readme~~.
  - As much as I'd like a single source of truth, in reality, it takes too much of an effort to switch apps.
  - This documentation should be versioned, so that when a milestone comes about, the sync with my local vault takes place.
- [ ] Creating minimum testing apparatus.

## About

This is an [[internal-guide]]. The goal is to simplify development for creating a style settings plugin system compatible with stacked tabs and pane relief.

![](/docs/assets/screenshot.png)

# =

# ---Transient Sandbox

I develop this inside a git synced vault therefore,

## Syncing

- **Git Submodule research** is needed to easily keep the git histories seperate (without resorting to file-mutating git ignores)

- 📝
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

* As a user I want any changes in git to reflect in my local files, and vice versa. While I\'ve found sync scripts that push and pull depending on file system changes there is no way to pull from git whenever there is a upstream change in data.

  - ie. github.com: [fnToUpdateMyLocal] <-- there is no hook hosted on github.com to hang my function hat on.

* As a developer I want to run scss changes, have it output to my obsidian snippets folder.

The quickest way is to hardcode an env or .in file that points to my local folder. A watch plugin via a bundler will output to that snippets directory, triggering the fswatch script that will automatically update git.

- 🤔 TLINE: Primary workslab is within files located within the symlinked folder path because of their instant feedback (UI) to css mutation
  - ❯ ln -s [INSERT_PATH_TO_SNIPPETS] snippets-symlinked

# ---Transient Bugs

When webpack dev middleware uses writetodisk , output clean is broken.

- https://github.com/webpack/webpack-dev-middleware/pull/1472

# ---Transient Performance

## Performance Numbers Of Testing Ports To See if they are available.

`const used = process.memoryUsage().heapUsed / 1024 / 1024;`

- measuring the memory usage of genPort:
  - `{ used: 18.541549682617188 } Current performant version`
  - `{ used: 18.55419921875 } 4cb2ec48cd0302dd8796bca63ddc3bd2ee979c14`
  * 🤔 Not that big of a difference.

## Testing

- python3 -m http.server 9100
- pnpm dev
- expected:
  - 'Address in use, retrying on port 9101'
  - 'Port 9101 is now opening...'
