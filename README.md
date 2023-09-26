# Karten-Viewer API Demo

This is a demo project of the LGB Karten-Viewer API. It contains two different versions: An API integration and a stand-alone version.

## Quickstart

You only have to download this repo and deploy the files on a webserver (e.g. apache, nginx). A small script based webserver will work as well:

```bash
# startet eine lokalen Webserver (Port 8000) im aktuellen Ordner
python -m SimpleHTTPServer 8000
```

## API Setup | Step by Step

### Requirements

  - Build of the map viewer: Download a prepared one or generate it by yourself (see more: https://git.geobasis-bb.de/open-data/kartenviewer-api/masterportal-fork)
  - Viewer Config: Create one or use an example (see more: https://git.geobasis-bb.de/open-data/kartenviewer-api/masterportal-fork/-/tree/demo/portal)

### Steps

  - In case you created your own build: Copy the build from `masterportal-fork/dist/mastercode` to the folder with your web site (e.g. `<website>/mastercode/<build>`)
  - In case you downloaded the build: Unzip the build and copy it to the folder with your web site (e.g. `<website>/mastercode/<build>`)
  - Copy the config files from `masterportal-fork/portal/<version>` or `masterportal/dist/<version>` to the folder with your web site (e.g. `<website>/default`)
  - Set references from your web page to the viewer build and conf:
    Stylesheets, e.g.:
    ```html
      <link rel="stylesheet" href="./mastercode/2_5_0_DEV_2021-06-30__16-47-43/css/demo-theme-less.css">
      <link rel="stylesheet" href="./mastercode/2_5_0_DEV_2021-06-30__16-47-43/css/masterportal.css">
    ```

    JS, e.g.:
    ```html
      <script type="text/javascript" data-masterportal-config="./default/config.js"></script>
      <script type="text/javascript" src="./mastercode/2_5_0_DEV_2021-06-30__16-47-43/js/masterportal.js"></script>
    ```

    Set MpConfigPath and MpMastercodePath, e.g.:
    ```html
      <script type="text/javascript">
        window.MpConfigPath = './';
        window.MpMastercodePath = './';
      </script>
    ```

#### config.js
  - Set the id of the HTML DOM element in which the map viewer should be rendered, e.g.:
  ```json
    renderTarget: "api-target-div",
  ```
  - Set the paths to the viewer conf, e.g.:
  ```json
    portalConf: "./default/config.json",
  ```
  ... and other Resource, e.g.:
   ```json
    quickHelp: {
        imgPath: "./default/ressources/img/"
    },
    layerConf: "./default/ressources/services-internet.json",
    restConf: "./default/ressources/rest-services-internet.json",
    styleConf: "./default/ressources/style_v2.json",
  ```   

#### config.json / other configs
  - Configurate the viewer for your needs
