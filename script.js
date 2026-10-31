"use strict";

// Centro della mappa: Bologna
const center = [44.502379, 11.338829];
const zoom = 13;

// Crediti comuni a tutte le mappe
const osm =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// Stili disponibili (nessuno richiede una chiave API)
const layers = {
  OpenStreetMap: L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: osm,
  }),
  "OpenStreetMap Germania": L.tileLayer(
    "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
    {
      maxZoom: 18,
      attribution: osm,
    },
  ),
  "OpenStreetMap Francia": L.tileLayer(
    "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
    {
      maxZoom: 20,
      attribution: osm + " · &copy; OpenStreetMap France",
    },
  ),
  "Humanitarian (HOT)": L.tileLayer(
    "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        osm +
        ' · Stile <a href="https://www.hotosm.org/">Humanitarian OpenStreetMap Team</a>',
    },
  ),
  OpenTopoMap: L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution:
      osm +
      ' · Stile <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)',
  }),
  "CARTO chiaro": L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 20,
      attribution:
        osm + ' · &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
  ),
  "CARTO scuro": L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 20,
      attribution:
        osm + ' · &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
  ),
};

// Crea la mappa con lo stile di partenza
const map = L.map("map", {
  center: center,
  zoom: zoom,
  layers: [layers.OpenStreetMap],
});

// Menu in alto a destra per cambiare stile
L.control.layers(layers).addTo(map);

// Scala in basso a sinistra (solo metri)
L.control.scale({ imperial: false }).addTo(map);
