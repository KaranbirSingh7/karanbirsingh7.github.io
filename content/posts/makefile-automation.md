---
title: "Makefile automation as part of my development workflow"
date: 2022-04-03T22:13:58-04:00
draft: false
tags:
    - makefile
    - python
    - terraform
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

### Bonus :star: 

Here's list of useful Makefiles that I use across my projects:

**Python**    
```bash
# Makefile 'python'
# ref: https://venthur.de/2021-03-31-python-makefiles.html
# system python interpreter. used only to create virtual environment
PY = python3
VENV = venv
BIN=$(VENV)/bin

# make it work on windows too
ifeq ($(OS), Windows_NT)
    BIN=$(VENV)/Scripts
    PY=python
endif

$(VENV): requirements.txt
	$(PY) -m venv $(VENV)
	$(BIN)/pip install --upgrade -r requirements.txt
	touch $(VENV)
	@echo "virtualenv created."
	@echo "activate venv in current session by running -> . ./$(BIN)/activate "

.PHONY: $(VENV)

clean:
	rm -rf $(VENV)
```


**Terraform**
```bash
# Makefile 'terraform'
# ref: https://www.sapranidis.gr/working-with-terraform-and-makefile/

SHELL:=/bin/bash

all: plan

clean:
	rm -f /tmp/plan_stg

get:
	@echo "Updating modules"
	@terraform get -update

format:
	@echo "Format existing code"
	@terraform fmt

show:
	@echo "Showing plan to apply"
	@terraform show /tmp/plan_stg

plan: format get
	@echo "Checking Infrastracture"
	@terraform plan -out /tmp/plan_stg
	$(MAKE) confirm
	$(MAKE) apply

apply:
	@echo "Applying changes to Infrastracture"
	@terraform apply /tmp/plan_stg
	@echo "Clean up after myself"
	$(MAKE) clean

confirm:
	@read -r -t 5 -p "Type y to apply, otherwise it will abort (timeout in 5 seconds): " CONTINUE; \
	if [ ! $$CONTINUE == "y" ] || [ -z $$CONTINUE ]; then \
	    echo "Abort apply." ; \
		exit 1; \
	fi

help: 
	@echo "Usage: make plan"
	@echo "After applying terraform plan it prompt if to apply the changes."
	@echo "Other commands: "
	@echo " * make show - to list what the plan will apply "
	@echo " * make clean - delete the executed plan, so no files left behind "
	@echo " * make get - update the teffarom modules"
	@echo " * make format - execute terraform fmt"
```

**Go**
```bash
# Makefile 'go'
# ref: https://golangdocs.com/makefiles-golang

BINARY_NAME=my-awesome-app

all: build test

run:
	go build -o bin/${BINARY_NAME} *.go
	./bin/${BINARY_NAME}

build:
	GOARCH=amd64 GOOS=darwin go build -o bin/${BINARY_NAME}-darwin *.go
	GOARCH=amd64 GOOS=linux go build -o bin/${BINARY_NAME}-linux *.go
	GOARCH=amd64 GOOS=window go build -o bin/${BINARY_NAME}-windows *.go

clean:
	go clean
	rm bin/${BINARY_NAME}-darwin
	rm bin/${BINARY_NAME}-linux
	rm bin/${BINARY_NAME}-windows

dep:
	go mod download

vet:
	go vet

test:
	go test -v *.go

```
