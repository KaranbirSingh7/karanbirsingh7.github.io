---
title: 'Automating Mac Development Setup'
date: 2021-05-23T14:32:18-03:00
draft: false
tags: 
  - macos
  - ansible
  - brew
  - dotfiles
---

This weekend I spent my time configuring [dotfiles](https://github.com/KaranbirSingh7/dotfiles) and automating the development setup on mac using [ansible playbooks](https://github.com/KaranbirSingh7/mac-dev-playbook).

Inspired by [geerlingguy/mac-dev-playbook](https://github.com/geerlingguy/mac-dev-playbook)

---

**Why would you need something like this for development setup?**

Normally, you never know when your machine (mac) is going to have issues and you need to reconfigure new machine with all the required tools and configurations.
In corporate world, it is normal to have your machine replaced for certain reasons. One thing that I don't like is repetition even if its just once a year.
This can be easily solved by using ansible, homebrew and magic of dotfiles.

## dotfiles

my dotfiles: https://github.com/KaranbirSingh7/dotfiles

dotfiles (found in your `~` home dir) is where your configuration lives for most of the CLI tools and other applications. For me, these files are pretty simple. The common ones that I normally use are mentioned below:

```bash
# tree: https://github.com/KaranbirSingh7/dotfiles
├── .gitconfig
├── .gitignore
├── .tmux.conf
├── .vimrc
├── .zshrc
```

### mac-dev-playbook

forked from: [geerlingguy/mac-dev-playbook](https://github.com/geerlingguy/mac-dev-playbook)

Most of the GUI and almost all CLI apps you use on Mac can be installed using `homebrew`.
For GUI `brew install --cask slack` and for cli `brew install kubectl`.

With ansible this process is more streamlined and easier to configure. Also ansible being idempotent. You can run this playbook repeatedly without any issues. Below is sample config file that installs couple of GUI apps (casks) and core CLI apps.

```yaml
# file: https://github.com/KaranbirSingh7/mac-dev-playbook/blob/master/default.config.yml

homebrew_installed_packages:
  - git
  - go
  - sqlite
  - nmap
  - ssh-copy-id
  - openssl
  - wget
  - ngrok
  - tldr
  - zsh-history-substring-search

homebrew_cask_appdir: /Applications
homebrew_cask_apps:
  - iterm2
  - dozer
  - licecap
  - slack
  - sublime-text
  - maccy
  - alfred
  - 1password
  - tiles
```

Once you have pulled down repo/playbook locally with requirements from ansible-galaxy. You can easily automate the setup by running the playbook using command `ansible-playbook main.yml -i inventory --ask-become-pass`

`--ask-become-pass` is required for installing applications in folder `/Applications`

This will start the execution locally and you would see output coming through something like this:

![1](/posts/automating-mac-dev-setup/1.png)

Here is a screenshot showing how homebrew cli and casks being installed.
![2](/posts/automating-mac-dev-setup/2.png)

To take this one step further and also pull and configure dotfiles. You can update config.yml file to point to your dotfiles repo and update `configure_dotfiles` to `true`. By the way, `default.config.yml` is the main configuration for your playbooks and tasks.

```yaml
# file: mac-dev-setup/default.config.yml
configure_dotfiles: true
dotfiles_repo: https://github.com/KaranbirSingh7/dotfiles.git # change this to point to your dotfiles
dotfiles_repo_accept_hostkey: true
dotfiles_repo_local_destination: ~/Development/GitHub/dotfiles

# list of dotfiles that you need to configure.
dotfiles_files:
  - .zshrc
  - .gitignore
  - .gitconfig
  - .tmux.conf
  - .vimrc
```

That's it, you don't have to run `brew install` everytime you need that GUI app on new system. You can easily extend this playbook for your casks of choice and even run certain posts scripts after configuration is complete. Ansible is great tool for this use case and as it is agentless, these playbooks are easy to run and develop.
