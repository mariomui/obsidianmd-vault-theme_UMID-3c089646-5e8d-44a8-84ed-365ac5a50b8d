---

alias: 
CREATION_DATE: 2023-08-11
MUID: MUID-1428
tag: _wip
TEMPLATE_VERSION: v1.0.5_default-template
UMID: UMID-3c089646-5e8d-44a8-84ed-365ac5a50b8d
VERSION: v0.0.2
---

# -

README UNDER GOING HEAVY construction right now!

> [!warning] **TLINE**: *User should only pay attention to content under the H1 "="*
> These notes are synced to obsidian notes.
> The structure are based on H1s with only the = being suitable for public consumption.

![[~view-for-local-tasks-using-a-progress-bar-TCODEID-2#=]]

```dataview
TASK WHERE file.name = this.file.name AND !completed
```
```dataview
TASK WHERE file.name = this.file.name AND completed
```
## About
* [ ] Refer to [[default-template]] on every note. The version must be 0. #_todo/long-term/to-normalize/on-note-taking-meta/regarding-document-versioning

This is an [[wip_analysis-note]]. The goal is to simplify development for creating a style settings plugin system compatible with stacked tabs and pane relief.

This [[wip_analysis-note]]?
### Reference
![[~view-for-referencing-current-jumpid#=|nlk]]
* † [GitHub - mariomui/obsidianmd-vault-theme\_UMID-3c089646-5e8d-44a8-84ed-365ac5a50b8d: Collection of css snippets used in a(my) Obsidianmd vault.](https://github.com/mariomui/obsidianmd-vault-theme_UMID-3c089646-5e8d-44a8-84ed-365ac5a50b8d)

* [ ] Deprecate dictionary note #_todo/done/long-term/to-normalize/on-note-types/regarding-convention
  * [[Library-note]] have supplanted dictionary notes as a better name.
* [ ] Build the output onto the root directory
* [ ] Research theme-ing
* [ ] Finish the guide in my personal vault and then sync to this readme.
# =

## = TITLE
*`= this.file.name`*
![[~view-for-calculating-reading-time#=|olk ui-noscroll]]

# ---Transient Sandbox

* [TO-MAIN-NOTES](obsidian://open?vault=sbrain&file=analysis-of-webpack-deficiencies,via-scss-to-css-tooling)
  * 🤔 okay, i can't type in vscode. ui experienc e is too shoddy.

# -

* [x] Convert a file over to scss.
* [x] Create a build system for scss
* [x] Create a subfolder called snippets that houses scss
* [x] Build the ouptut onto the root directory
* [ ] Research theme-ing
* [x] Copy this guide over to my vault and date the learnings.
* [ ] Create document versioning.
  * ~~Finish the guide in my personal vault and then sync to this readme~~.
  * As much as I'd like a single source of truth, in reality, it takes too much of an effort to switch apps.
  * This documentation should be versioned, so that when a milestone comes about, the sync with my local vault takes place.
* [ ] Creating minimum testing apparatus.

## About

This is an [[internal-guide]]. The goal is to simplify development for creating a style settings plugin system compatible with stacked tabs and pane relief.

![](https://raw.githubusercontent.com/mariomui/obsidianmd-vault-theme_UMID-3c089646-5e8d-44a8-84ed-365ac5a50b8d/master/docs/assets/screenshot.png)

# =

## For Developers Who Want to Use SCSS

The goal is to write a bunch of scss files and compile all the files down to one css file.

* Set up a .env file in the root of the directory
  * in this file, write
    * `OMD_SNIPPETS_PATH=INSERT-YOUR-ABSOLUTE-PATH-TO-SNIPPETS`
  *

# ---Transient Sandbox

I develop this inside a git synced vault therefore,

## Syncing

* **Git Submodule research** is needed to easily keep the git histories seperate (without resorting to file-mutating git ignores)

* 📝
  * <https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/The-git-submodule-add-example>
    * <https://youtu.be/RgIAXF53a8U>
* ⚖️
  * Git ignores require umbrella github to mutate a file. (accepted PR).
  * Multiple submodules in the future might balloon the git ignore file.
  * Parent git directory knows too much about the internal git system.

* <https://jakemccrary.com/blog/2020/02/25/auto-syncing-a-git-repository/>

* TLINE: Link the submodule readme to the parent readme
  * [x] Should I consolidate the readme to one? or just copy the same readme across all submodules?
    * No. It is +more steps to update a submodule readme than a parent.

for initial submodule set up, its best to look at docs.

* <https://git-scm.com/book/en/v2/Git-Tools-Submodules>

* Here's some handy dandy commands for now:
  * git push --recurse-submodules=on-demand origin master
  * git pull --recurse-submodules

* As a user I want any changes in git to reflect in my local files, and vice versa. While I\'ve found sync scripts that push and pull depending on file system changes there is no way to pull from git whenever there is a upstream change in data.
  * ie. github.com: [fnToUpdateMyLocal] <-- there is no hook hosted on github.com to hang my function hat on.

* As a developer I want to run scss changes, have it output to my obsidian snippets folder.

The quickest way is to hardcode an env or .in file that points to my local folder. A watch plugin via a bundler will output to that snippets directory, triggering the fswatch script that will automatically update git.

* 🤔 TLINE: Primary workslab is within files located within the symlinked folder path because of their instant feedback (UI) to css mutation
  * ❯ ln -s [INSERT_PATH_TO_SNIPPETS] snippets-symlinked

# ---Transient Bugs

* When webpack dev middleware uses writetodisk , output clean is broken.
  * <https://github.com/webpack/webpack-dev-middleware/pull/1472>
* Workspaces for vscode doesn't automatically sync all open repositories in the Source Control Tab. Best to avoid using vscode local workspaces.
  * Previous assumption is slightly wrong. It seems that if i re-init the submodules, the source control reverts to normal. If vscode sc is working as normal then its git not updating submodules properly in some config file. Config file seems okay, though. Which means that vscode is aggressively caching, and the fact that I removed the submodule config clears the cache. Both theories diametrically oppose each other.
    * 🤔 Its more likely that this is a malformed git folder. (low priority issue)
      * [ ] Enable git lens logging
      * [ ] Enable vs code logging
      * [ ] Document heuristic of nuking and resetting up vs code modules.
        * After nuking,
          * reconfig `.gitmodules` property
          * `git submodule update --init --recursive`

# ---Transient Local Resources

## Gitmodules file

```sh
[submodule "obs-snippets"]
path = obs-snippets
url = git@github.com:USERNAME/REPONAME
```

# ---Transient Performance

## Performance Numbers Of Testing Ports To See if they are available

`const used = process.memoryUsage().heapUsed / 1024 / 1024;`

* measuring the memory usage of genPort:
  * `{ used: 18.541549682617188 } Current performant version`
  * `{ used: 18.55419921875 } 4cb2ec48cd0302dd8796bca63ddc3bd2ee979c14`
  * 🤔 Not that big of a difference.

## Testing

* python3 -m http.server 9100
* pnpm dev
* expected:
  * 'Address in use, retrying on port 9101'
  * 'Port 9101 is now opening...'

# ---Transient Theme Information

* :reference: <https://docs.obsidian.md/Themes/App+themes/Build+a+theme>

# ---Transient Misc

* Markdown Preview Enhanced by Yiyi looks the nicest but it has by far the least proper support for markdown niceties like anchor heading jumping.
* Prettier is a little dumb about markdown. Inserts a new line before every solo-child list-item

* In practice, submodules are a huge pain to sort out in terms of rebasing. Once there is a problems. The css submodules has an updated version of the thing that you want. YOU MUST KNOW your hash, rebase the CLOUD version of the hash onto your base hash, then rebase AGAIN onto that hash ... its a lot of hassle to worry about. It makes more sense just to download it, use ksdiff to diff it and then move forward. (conserve your brain power since only you working on this anyways)
