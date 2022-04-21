## karanbirsingh7.github.io

### Development
1. Clone this repo
    ```bash
    git clone git@github.com:KaranbirSingh7/karanbirsingh7.github.io.git
    cd karanbirsingh7.github.io/
    ```
1. Start server locally
    ```bash
    make start-local
    ```
1. Build `public`
    ```bash
    make build
    ```
1. Create new blog post
    ```bash
    make new-post
    ```

### How-to: switch themes/remove git submodules

```bash
git submodule deinit <path_to_submodule>
git rm <path_to_submodule>
git commit-m "Removed submodule"
rm -rf .git/modules/<path_to_submodule> [Optional]
```