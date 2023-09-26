(window.webpackJsonp=window.webpackJsonp||[]).push([[288,277,278,293,294,308,309],{1807:function(e,t,r){"use strict";r.r(t),r.d(t,"SpeedProfile",function(){return n}),r.d(t,"Preference",function(){return o}),r.d(t,"MapInteractionMode",function(){return i}),r.d(t,"preferenceOptions",function(){return a}),r.d(t,"AvoidFeatureOption",function(){return c}),r.d(t,"DownloadFormat",function(){return u}),r.d(t,"RoutingResultError",function(){return l});var n=Object.freeze({CAR:{id:"CAR",i18n:"car",icon:"fa-car",orsKey:"driving-car"},HGV:{id:"HGV",i18n:"hgv",icon:"fa-truck",orsKey:"driving-hgv"},FOOT:{id:"FOOT",i18n:"foot",icon:"fa-walking",orsKey:"foot-walking"},CYCLING:{id:"CYCLING",i18n:"cycling",icon:"fa-bicycle",orsKey:"cycling-regular"},WHEELCHAIR:{id:"WHEELCHAIR",i18n:"wheelchair",icon:"fa-wheelchair",orsKey:"wheelchair"}}),o=Object.freeze({RECOMMENDED:{id:"RECOMMENDED",i18n:"recommended",orsKey:"recommended"},SHORTEST:{id:"SHORTEST",i18n:"shortest",orsKey:"shortest"}}),i=Object.freeze({WAYPOINTS:"WAYPOINTS",AVOID_AREAS:"AVOID_AREAS",DELETE_AVOID_AREAS:"DELETE_AVOID_AREAS"}),a=Object.keys(o),c=Object.freeze({HIGHWAYS:{id:"HIGHWAYS",i18n:"highways",availableProfiles:["CAR","HGV"],orsKey:"highways"},TOLLWAYS:{id:"TOLLWAYS",i18n:"tollways",availableProfiles:["CAR","HGV"],orsKey:"tollways"},FERRIES:{id:"FERRIES",i18n:"ferries",availableProfiles:["CAR","HGV","CYCLING","FOOT","WHEELCHAIR"],orsKey:"ferries"},STEPS:{id:"STEPS",i18n:"steps",availableProfiles:["CYCLING","FOOT","WHEELCHAIR"],orsKey:"steps"}}),u=Object.freeze({GEOJSON:"GEOJSON",GPX:"GPX",KML:"KML"}),l=Object.freeze({NO_ROUTE_FOUND:{i18n:"noRouteFound"},AVOID_AREA_TOO_LARGE:{i18n:"avoidAreasTooLarge"},FETCHING_FAILED:{i18n:"routeFetchFailed"},SERVICE_UNAVAILABLE:{i18n:"routeServiceUnavailable"}})},1808:function(e,t,r){"use strict";r.r(t);var n=r(41),o=r(36),i=r(63);t.default=new n.a({features:[new o.a({geometry:new i.a([]),isHighlight:!1}),new o.a({geometry:new i.a([]),isHighlight:!0})]})},1809:function(e,o,i){"use strict";i.r(o),function(t){i.d(o,"transformCoordinatesLocalToWgs84Projection",function(){return e}),i.d(o,"transformCoordinatesWgs84ToLocalProjection",function(){return n});var r=i(55);function e(e){return Object(r.e)(t.request("MapView","getProjection").getCode(),"EPSG:4326",e)}function n(e){return Object(r.e)("EPSG:4326",t.request("MapView","getProjection").getCode(),e)}}.call(this,i(4))},1852:function(e,c,u){"use strict";u.r(c),function(t){u.d(c,"default",function(){return e});var r=u(23),n=u(34);function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=null;function e(e){return a=a||t.request("RoutingLGB","getSettings").routing.styleRoute,e.get("isHighlight")?new r.c({stroke:new n.a({color:[].concat(o(a.partHighlightColor),[1]),width:a.partHighlightWidth})}):[new r.c({stroke:new n.a({color:[].concat(o(a.highlightColor),[1]),width:a.highlightWidth})}),new r.c({stroke:new n.a({color:[].concat(o(a.fillColor),[1]),width:a.width})})]}}.call(this,u(4))},1892:function(e,i,I){"use strict";I.r(i),function(u,l){I.d(i,"downloadRoute",function(){return t}),I.d(i,"printRoute",function(){return r}),I.d(i,"isPrintingAvailable",function(){return n});var y=I(81),h=I(302),m=I(36),s=I(42),v=I(1809),f=I(1893),d=I(1808),g=I(1852),p=I(1807),w=I(5),e=I(14),S=I.n(e);function b(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function A(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){if(!((t instanceof y.a||t instanceof h.a)&&Array.isArray(e)))return"";var r,n=[],o=A(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i instanceof m.a){var a=i.clone(),c=a.getGeometry(),u=c.getType(),l=c.getCoordinates(),s=[];if("Point"===u)s=Object(v.transformCoordinatesLocalToWgs84Projection)(l);else if("LineString"===u)s=l.map(function(e){return Object(v.transformCoordinatesLocalToWgs84Projection)(e)});else if("Polygon"===u){var f,d=A(l);try{for(d.s();!(f=d.n()).done;){var g=f.value;s.push(g.map(function(e){return Object(v.transformCoordinatesLocalToWgs84Projection)(e)}))}}catch(e){d.e(e)}finally{d.f()}}c.setCoordinates(s),n.push(a)}}}catch(e){o.e(e)}finally{o.f()}return t.writeFeatures(n)}function t(){var e,t,r,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:p.DownloadFormat.GEOJSON,o=1<arguments.length?arguments[1]:void 0,i=function(e,t){switch(t){case p.DownloadFormat.GEOJSON:return O(e,new y.a);case p.DownloadFormat.GPX:return O(e,new h.a);case p.DownloadFormat.KML:return Object(f.default)(e);default:return}}(function(e){var t,r=A(e);try{for(r.s();!(t=r.n()).done;){var n=t.value,o=Object(g.default)(n);o[1]&&n.setStyle(o[1])}}catch(e){r.e(e)}finally{r.f()}return e}([d.default.getFeatures().find(function(e){return!e.get("isHighlight")})]),n),a=(e=n,t=o,r=S()().format("YYYYMMDD_HHmm"),(t||"route_"+r)+"."+e.toLowerCase()),c="data:text/plain;charset=utf-8,".concat(encodeURIComponent(i)),u=document.createElement("a");u.href=c,u.download=a,u.style.visibility="hidden",u.onclick=function(){return!0},document.body.appendChild(u),u.click(),document.body.removeChild(u)}function r(){var e=w.Radio.request("RoutingLGB","getRouteExtent"),t=Object(s.d)(e);t.scale(1.4);var r=w.Radio.request("Map","getLayers").getArray().filter(function(e){return!0===e.getVisible()&&("WMS"===e.getProperties().typ||"routing_route_layer"===e.get("name"))}),n=r.filter(function(e){return"WMS"===e.getProperties().typ}).map(function(e){return e.getProperties().name}),o=t.getExtent(),i="E:"+o[2].toFixed(2).toString()+", N:"+o[3].toFixed(2).toString(),a="E:"+o[0].toFixed(2).toString()+", N:"+o[1].toFixed(2).toString(),c={layout:"A4 Hochformat",outputFilename:"route",outputFormat:"pdf",attributes:{current_date:(new Date).toLocaleDateString(),shown_services:n.toString(),extent_coords_no:i,extent_coords_sw:a,map:{dpi:96,projection:w.Radio.request("MapView","getProjection").getCode(),bbox:o}}};w.Radio.trigger("MapMarker","hideWktFeature"),I.e(4).then(I.bind(null,1861)).then(function(e){var t=new e.default(c);t.buildLayers(r),t=t.toJSON(),t=u.omit(t,"uniqueIdList"),w.Radio.trigger("Print","createPrintJob","viewerapi",encodeURIComponent(JSON.stringify(t)),"pdf")}).catch(function(e){w.Radio.trigger("Alert","alert",{text:l.t("additional:routingLGB:noPrintingAvailable"),kategorie:"alert-warning"})})}function n(){return o.apply(this,arguments)}function o(){var c;return c=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.e(4).then(I.bind(null,1861));case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,null,[[0,6]])}),(o=function(){var e=this,a=arguments;return new Promise(function(t,r){var n=c.apply(e,a);function o(e){b(n,t,r,o,i,"next",e)}function i(e){b(n,t,r,o,i,"throw",e)}o(void 0)})}).apply(this,arguments)}}.call(this,I(3),I(24))},1893:function(e,h,m){"use strict";m.r(h),function(i){m.d(h,"default",function(){return y}),m.d(h,"convertFeatures",function(){return g}),m.d(h,"transformCoordinates",function(){return d});var a=m(280),t=m(38);function c(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var e,r,n,o=(e="EPSG:25832",r="EPSG:4326",n="32",t.default.defs(e,"+proj=utm +zone="+n+"ellps=WGS84 +towgs84=0,0,0,0,0,0,1 +units=m +no_defs"),{sourceProj:Object(t.default)(e),destProj:Object(t.default)(r)}),l=[{color:"blue",value:[55,126,184]},{color:"black",value:[0,0,0]},{color:"green",value:[77,175,74]},{color:"grey",value:[153,153,153]},{color:"orange",value:[255,127,0]},{color:"red",value:[228,26,28]},{color:"white",value:[255,255,255]},{color:"yellow",value:[255,255,51]}];function E(n){var e=l.filter(function(e){return t=n,r=e.value,Array.isArray(t)&&3===t.length&&Array.isArray(r)&&3===r.length&&t.every(function(e,t){return e===r[t]});var t,r});return e&&e[0]?e[0].color:""}function s(e,t){var r,n=[],o=c(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;t?i.forEach(function(e){n.push(f(e))}):n.push(f(i))}}catch(e){o.e(e)}finally{o.f()}return t?[n]:n}function f(e){return Object(t.default)(o.sourceProj,o.destProj,e)}function d(e){var t=e.getCoordinates();switch(e.getType()){case"LineString":return s(t,!1);case"Point":return f(t);case"Polygon":return s(t,!0);default:return[]}}function g(e,t){var r,n=[],o=c(e);try{for(o.s();!(r=o.n()).done;){var i=r.value.clone(),a=d(i.getGeometry());3===a.length&&0===a[2]&&a.pop(),i.getGeometry().setCoordinates(a,"XY"),n.push(i)}}catch(e){o.e(e)}finally{o.f()}return t.writeFeatures(n)}function y(e){var t,r=e.length,p=Array(r).fill(void 0),n=new a.a({extractStyles:!0}),w=Array(r).fill(!1),S=Array(r).fill(void 0),b=Array(r).fill(!1),l=Array(r).fill(void 0),A=Array(r).fill(void 0),o=(new DOMParser).parseFromString(g(e,n),"text/xml");return e.forEach(function(e,t){var r,n,o,i=e.getGeometry().getType();if("Point"===i&&e.values_.drawState&&void 0!==e.values_.drawState.text)b[t]=!0,A[t]=e.values_.drawState.fontSize;else{try{o=e.getStyleFunction()(e),n=Array.isArray(o)?o[0]:o}catch(e){b[t]=!0}if("Point"===i)if(null!==n.getImage()&&void 0!==n.getImage().iconImage_){w[t]=!0;var a=n.getImage().anchorXUnits_,c=n.getImage().anchorYUnits_,u=n.getImage().anchor_;p[t]={xUnit:a,yUnit:c,anchor:u}}else n.getText()?l[t]=n.getText().getFont():(r=n.getImage().getFill().getColor(),S[t]=[r[0],r[1],r[2]])}}),t=o,Array.from(t.getElementsByTagName("ExtendedData")).forEach(function(e){e.getElementsByTagName("value")[0].textContent=i.request("Util","uniqueId","")}),Array.from(o.getElementsByTagName("Placemark")).forEach(function(e,t){if(0<e.getElementsByTagName("Point").length&&!1===b[t]){var r=e.getElementsByTagName("Style")[0];if(!1===w[t]&&S[t]){var n="".concat(window.location.origin,"/img/tools/draw/circle_").concat(E(S[t]),".svg"),o=(s=n,f="<scale>".concat(1,"</scale>"),d="<href>".concat(s,"</href>"),"<IconStyle>".concat(f,"<Icon>").concat(d,"</Icon></IconStyle>"));r.innerHTML+=o}else if(!0===w[t]&&void 0!==p[t]){e.getElementsByTagName("IconStyle")[0].innerHTML+=(i=p[t],a=i.anchor[0],c=i.anchor[1],u=i.xUnit,l=i.yUnit,'<hotSpot x="'.concat(a,'" y="').concat(c,'" xunits="').concat(u,'" yunits="').concat(l,'" />'))}}var i,a,c,u,l,s,f,d;if(0<e.getElementsByTagName("Point").length&&!0===b[t]&&!isNaN(A[t])){var g=A[t]/16,y=e.getElementsByTagName("Style")[0],h="".concat(window.location.origin,"/img/tools/draw/circle_blue.svg"),m=(new DOMParser).parseFromString("<IconStyle><scale>0</scale><Icon><href>"+h+"</href></Icon></IconStyle>","text/xml"),v=(new DOMParser).parseFromString("<scale>"+g+"</scale>","text/xml");y.getElementsByTagName("LabelStyle")[0].appendChild(v.getElementsByTagName("scale")[0]),y.appendChild(m.getElementsByTagName("IconStyle")[0])}}),(new XMLSerializer).serializeToString(o)}}.call(this,m(4))}}]);