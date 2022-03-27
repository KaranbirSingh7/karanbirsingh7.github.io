.PHONY: start-local

start-local: fetch-submodules
	hugo server

build: fetch-submodules
	hugo --gc --minify

# submodules for custom theme
fetch-submodules:
	git submodule init
	git submodule update