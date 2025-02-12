# How to use

## About

This note is an external guide to how to apply this repo to create a dev environment for ui work on obsidian md.

The overarching goal is to go into the current vault in obsidian, place a git repo inside its internals where the css is kept but have the dev environment and all its node_modules be in a seperate environment.

You can then sync your entire vault withou worrying about minute dev files get in theway.

### Requirements

* pnpm
* Node 18+
* Your own snippets repo
  * Go to your obsidian snippets location (herewither known as and referred to as OBSNIP) and make/upload a repo.
## Implementation

* Have this repo
* update the submodule located inside of obs-snippets
  * #todo/to-confirm/on-readme/regarding-accuracy
    * `git submodule add OBSNIP-CLOUD-ADDRESS snippets`
      * this adds a subrepo under your main dev repo (hereto known as DEVUMBRELLA)
    * utilize `git submodule update --init --recursive`
* symlink to obsidian snippets folder
  * `ln -s FULLPATH-TO-OBSIDIAN-SNIPPETS-FOLDER obs-snippets`
    * ⚠️ Make sure to name the symbolically linked folder to obs-snippets.
* Create an env
  * OMD_SNIPPETS_PATH="FULLPATH-TO-OBSIDIAN-SNIPPETS-FOLDER"
  * This path lets webpack know where to export the css files to.
* `pnpm dev` to run the watch server.
* Make sure that obsidian knows to enable onering.scss in the snippets.
  * all the scss you will write will flow there.

So now you can write scss and have the output be pumped directly into your obsidian snippets folder.

## Caveats

* onering.scss will be the defacto entry file for all your ui code. Just write everything and import everything into this file.
  * You could also have your css files seperate if you want by adding an entry point into the index.html
* Webpack was meant to pack js and assets not assets to assets so i'm using a html bundler to do this dirty work. This allows a single source of entry  but it also means you have an html artifact inside the graveyard folder.
  * The other option was to codesplit, resulting in a js artifact(s).
  * Best option is to actually just not use webpack :) but more specific automation tools such as  gulp/grunt.
* Webpack path prefixing isn't needed cuz obsidian doesn't allow access to local files through its style sheet.
