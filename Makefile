.PHONY: start-local
start-local:
	hugo server
build:
	hugo --gc --minify
fetch-submodules:
	git submodule init
	git submodule update