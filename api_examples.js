let mvs = null;

function saveMapViewerState() {
  mvs = MpJsApi.getMapViewerState();
  console.log(mvs);
}

function restoreMapViewerState() {
  if (mvs) {
    MpJsApi.applyMapViewerState(mvs);
  }
}

function setLangEn() {
  MpJsApi.changeLanguage('en');
}

function setLangDe() {
  MpJsApi.changeLanguage('de');
}

function showSaveButton() {
  const saveCallback = (mvs, msg) => {msg("Erfolgreich gespeichert")};
  MpJsApi.addSaveButton(saveCallback, null, {text: ''});
}

function showResetButton() {
  const stateText = '{"extent":[353813.29913902516,5800182.378729035,381488.70086097484,5813993.621270965],"layers":[{"id":"tree","isSelected":false},{"id":"tools","isSelected":false},{"id":"gfi"},{"id":"searchByCoord"},{"id":"coord"},{"id":"coordinateTransform"},{"id":"measure"},{"id":"download"},{"id":"draw","transparency":"Transparenz"},{"id":"kmlimport"},{"id":"saveSelection"},{"id":"printLGB"},{"id":"1001","transparency":0,"isSelected":false,"selectionIDX":1},{"id":"1000","transparency":0,"isSelected":true,"selectionIDX":2},{"id":"2020","transparency":0,"isSelected":false,"selectionIDX":3},{"id":"4001","transparency":0,"isSelected":false,"selectionIDX":5},{"id":"3002","transparency":0,"isSelected":false,"selectionIDX":7},{"id":"1005","transparency":0,"isSelected":false,"selectionIDX":9},{"id":"Fachdaten41","isSelected":false,"selectionIDX":8},{"id":"GeschtzteDienste42","isSelected":false,"selectionIDX":6},{"id":"WMTS43","isSelected":false,"selectionIDX":4},{}]}';
  const stateObj = JSON.parse(stateText);
  const resetCallback = (msg) => {msg("ZurÃƒÂ¼ckgesetzt")};
  MpJsApi.addResetButton(stateObj, resetCallback, null, {text: ''});
}

/*
/////////////////////////
Marker-FunktionalitÃ¤ten
/////////////////////////
*/


/*function getMarkerLayer() {
    MpJsApi.getMarkerLayer()
}*/

function addMarker() {
    MpJsApi.addMarker([13, 52], { color: "green", id: 123, address: "Mainstreet 123" })
}

function higlightMarker() {
    MpJsApi.highlightMarker(123, true, "#ffff00",6)
}

function toggleMarkerTooltip() {
    MpJsApi.toggleMarkerTooltip(123, true)
}

function removeMarker() {
    MpJsApi.removeMarker(123)
}

function addOnClickMarker(coordinate) {
    MpJsApi.addMarker(coordinate, { color: "blue", id: 2, address: "Mainstreet 123" })
	console.log(coordinate)
}

function setAddMarkerOnClick() {
    MpJsApi.setAddMarkerOnClick(true, addOnClickMarker)
}

/*
/////////////////////////////////////////
HinzufÃ¼gen eines Markers mit HTML-Inhalt
/////////////////////////////////////////
*/

/*Add Marker with HTML with Hover*/
function addHTMLMarkerHover() {

// Versuch 1 (funktioniert )
 var html = '<div id="div"><table id="t_1"><tr class="tr"><th id="th_logo"><a href="http://www.geobasis-bb.de" target="_blank"><img src="https://www.geobasis-bb.de/LGB1/grafik/Logo_farbe_klein.png" alt="Logo: Land Brandenburg" title="Land Brandenburg" height="35"/></a></th><th class="th" colspan="2" align="left">DGM</th></tr></table><table id="t_2"><tr class="tr" valign="top"><td class="td_attr">Blattnummer</td><td class="td">33405-5774</td></tr><tr class="tr" valign="top"><td class="td_attr">Laserscan-befliegung</td><td class="td">28.03.2011</td></tr><tr class="tr" valign="top"><td class="td_attr">Photogr. Nachbearbeitung (Bildflugjahr)</td><td class="td">19.04.2019</td></tr></table></div>'

// Versuch 2 (funktioniert)
// var html = '<table><tr><th><a href="http://www.geobasis-bb.de" target="_blank"><img src="https://www.geobasis-bb.de/LGB1/grafik/Logo_farbe_klein.png" alt="Logo: Land Brandenburg" title="Land Brandenburg" height="35"/></a></th><th colspan="2" align="left">DGM</th></tr></table>';

// Nur URL (funktioniert)
// var html = '<a href="http://www.geobasis-bb.de" target="_blank"><img src="https://www.geobasis-bb.de/LGB1/grafik/Logo_farbe_klein.png" alt="Logo: Land Brandenburg" title="Land Brandenburg" height="35"/></a>';
	
	MpJsApi.addHTMLMarker([13,53], {color: "red", id: 123, popup: { hoverContent: html, content: html, className: "fancy-popup"}} )
}

/*Add Marker with HTML (no Hover)*/
function addHTMLMarker() {
	MpJsApi.addHTMLMarker([13,52], {color: "green", id: 124, popup: {centerMap: false, content: "<div>Hi!<br/>I am a <br/>popup</div>", className: "fancy-popup2"}} )
}


/*
////////////////////////////////////////////
Dynamisches HinzufÃ¼gen eines GeoJSON-Layers
////////////////////////////////////////////
*/

/*Add GeoJSON from a URL*/
async function addGeoJSONLayerFromURL(layerUrl, layerName, hoverField){
  layerId = await MpJsApi.addGeoJSONLayerFromURL("./default/ressources/0684.json", {
    useProxy: false,
    hoverField: 'the_flugnummer',
    layerName: '0684',
    style: {
      "rules": [
        {
          "style": {
            "type": "circle",
            "circleFillColor": [255, 0, 255, 0.8],
            "circleRadius": 15
          }
        }
      ]
    }
  })
}

/*Add GeoJSON from a Layer*/
function addGeoJSONLayersynch(){
layerId = MpJsApi.addGeoJSONLayer('{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[13.05,52.40]},"properties":{"type": "test"}}]}', {
          hoverField: "type",
          layerName: "Potsdam",
          style: {
            "rules": [
              {
                "style": {
                  "type": "circle",
                  "circleFillColor": [255, 0, 10, 0.8]
                }
              }
            ]
          }
        })
}
function addGeoJSONLayer(){addGeoJSONLayersynch()};

/*Removes GeoJSON*/
function removeGeoJSONLayer(){
MpJsApi.removeGeoJSONLayer(layerId)
  }
