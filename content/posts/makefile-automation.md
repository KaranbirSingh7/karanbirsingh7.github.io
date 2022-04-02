---
title: "Makefile Automation as part of Workflow"
date: 2022-04-01T22:13:58-04:00
draft: true
tags:
    - makefile
---

I have been using Makefile from spinning up docker containers to setting up local dev environment `venv` (_yeah I know I should be using docker-compose_) and I can safely say its still one of the best tools out for automating tasks.

Recently I included Makefile into this repo so that I can build/publish/run hugo site easily without having to look through documentation on which command to run for local-server or build assets.

Interesting problem I ran into was how to read "user input" in Makefile and use that input to do something. 
In my case I wanted to read name of new blog from user and run underlying `hugo` commmand to create a new markdown page in `posts/`

Thankfully [StackOverflow](https://stackoverflow.com/questions/12170339/read-input-variable-in-makefile-and-set-variable-upon-its-name/12170504) and [this article](https://erictleung.com/user-input-makefile)already had me covered :blush: and I was able to overcome this using following:

```bash
# file: Makefile.hugo
.PHONY: create-new-post

create-new-post:
    @echo "got a name for new post?"; \
    read POSTNAME; \
    echo "creating new post $$POSTNAME"

```

>You might look at above code and ask why commands need to be chained together? Answer is that each command in Makefile run in its own subshell and that results in variable unable to survive. Putting them on single line or chaining them works.