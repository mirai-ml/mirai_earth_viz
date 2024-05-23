import variableFilters from './components/datasets/variables.js'
import { GriddedDataset } from './datasets.js'

// Creates datasets with the original colormaps/scales/domains/names from th


const translations = {
  'at 2 m above ground'          : 'near surface',
  'at 10 m above ground'         : 'near surface',
  'at 500 mb'                    : 'at cloud level',
  'at 200 mb'                    : 'at cruise level',
  'mean sea level pressure'      : 'pressure at sea level',
  'total precipitable water'     : 'water in atmosphere',
  'total cloud water'            : 'water in clouds',
  'total ozone'                  : 'ozone in atmosphere',
  'significant wave height'      : 'wave height',
  'ocean surface currents speed' : 'speed of sea surface currents',
  'ocean surface currents'       : 'sea surface currents',
}

const simplifiedDatasetCoresByVariable = {
  'temperature' : {
    colormap: 'TEMP',
    scale: 'linear',
    domain: [273.15 - 80, 273.15 + 55],
  },
  'wind': {
    colormap: 'WIND',
    scale: 'linear',
    domain: [0, 100],
  },
  'precipitation': {
    colormap: 'PRECIP_6H',
    scale: 'linear',
    domain: [0, 25],
  },
  'pressure': {
    colormap: 'MEAN_SEA_LEVEL_PRESSURE',
    scale: 'linear',
    domain: [96, 105],
  },
  'water in atmosphere': {
    colormap: 'TOTAL_PRECIP',
    scale: 'linear',
    domain: [0, 70],
  },
  'water in clouds': {
    colormap: 'TOTAL_CLOUD',
    scale: 'linear',
    domain: [0.0, 1.0],
  },
  'sea temperature': {
    colormap: 'SEA_SURFACE_TEMP',
    scale: 'linear',
    domain: [273.15 - 1.8, 273.15 + 31.5],
  },
  'currents': {
    colormap: 'CURRENTS',
    scale: 'linear',
    domain: [0.0, 1.5],
  },
  'ozone': {
    colormap: 'COLUMN_OZONE',
    scale: 'linear',
    domain: [200, 600],
  },
  'sulfur dioxide': {
    colormap: 'SO2_MASS',
    scale: 'linear',
    domain: [0, 100],
  },
  'carbon monoxide': {
    colormap: 'CO_SURFACE',
    scale: 'linear',
    domain: [1, 1000],
  },
  'dust': {
    colormap: 'DUST_MASS',
    scale: 'linear',
    domain: [0, 900],
  },
  'avg. temperature' : {
    colormap: 'TEMP',
    scale: 'linear',
    domain: [273.15 - 80, 273.15 + 55],
  },
  'avg. precipitation': {
    colormap: 'PRECIP_6H',
    scale: 'linear',
    domain: [0, 0.05],
  },
}

const cache = new Map()

export function simplify(griddedDataset) {
  if (cache.has(griddedDataset)) return cache.get(griddedDataset)

  let core = {}
  let variable = Object.keys(variableFilters.simple).find(key => {
    return variableFilters.simple[key](griddedDataset.name)
  })
  let griddedDatasetCore = griddedDataset.core
  let simplifiedCore = simplifiedDatasetCoresByVariable[variable]

  for (const prop in griddedDatasetCore) core[prop] = griddedDatasetCore[prop]
  for (const prop in simplifiedCore) core[prop] = simplifiedCore[prop]
  core.name = core.name ? translate(core.name) : undefined
  core.smode = true

  let simplifiedDataset = new GriddedDataset(core)
  cache.set(griddedDataset, simplifiedDataset)

  return simplifiedDataset
}

export function translate(name) {
  for (const [original, translation] of Object.entries(translations)) {
    name = name.replace(original, translation)
  }
  return name
}
