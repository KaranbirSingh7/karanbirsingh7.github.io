.PHONY: start-local

start-local: fetch-submodules
	hugo server

new-post:
	@echo "Name for new blog post?"; \
	read POST_NAME; \
	hugo new content/posts/$$POST_NAME

build: fetch-submodules
	hugo --gc --minify

# submodules for custom theme
fetch-submodules:
	git submodule init
	git submodule update