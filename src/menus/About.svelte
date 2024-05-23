<!-- Note: this file intentionally omits optional closing html tags such as
</p>, </dt>, and </dd> to reduce some of the tag clutter. -->

<script>
  import '@slightlyoff/lite-vimeo';

  export let kioskMode;

  let content;
  $: links = content ? content.querySelectorAll('a') : [];

  $: if (kioskMode) {
    for (let link of links) {
      let href = link.getAttribute('href');
      link.textContent = `${link.textContent} [${href}]`
      link.removeAttribute('href');
    }
  } else {
    for (let link of links) {
      let [text, href] = link.textContent.split(/ \[|\]/);
      if (href) {
        link.textContent = text;
        link.setAttribute('href', href);
      }
    }
  }
</script>

<div bind:this={content}>

<details>
<summary><h2>Data Sources</h2></summary>
<p>
it utilizes an enormous amount of scientifically complex data, allowing you
to explore the interconnectedness of weather and climate, including between
polar regions and the rest of the planet.
<p>
Data sources include:
<dl>
  <dt>Weather
  <dd><a href="https://www.emc.ncep.noaa.gov/emc/pages/numerical_forecast_systems/gfs.php">
    Global Forecast System</a> (GFS)

  <dt>Ocean currents
  <dd><a href="https://www.esr.org/research/oscar/oscar-surface-currents/">
    Ocean Surface Current Analysis Real-time</a> (OSCAR)

  <dt>Sea surface temperature
  <dd><a href="https://www.nco.ncep.noaa.gov/pmb/products/sst/">
    Real Time Global Sea Surface Temperature</a> (RTGSST)

  <dt>Gases &amp; aerosols
  <dd><a href="https://gmao.gsfc.nasa.gov/GEOS_systems/">
    Goddard Earth Observing System</a> (GEOS)

  <dt>Climate
  <dd><a href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/reanalysis-era5-single-levels-monthly-means">
    Copernicus Climate Change Service</a> (ERA5)

  <dt>Permafrost
    <dd><a href="https://doi.pangaea.de/10.1594/PANGAEA.888600">
      Northern Hemisphere permafrost map</a> (Obu et al., 2018. Alfred Wegener Institute, Helmholtz Centre for Polar and Marine Research)

  <dt>Locations
  <dd>"<a href="https://simplemaps.com/data/world-cities">
    Basic World Cities Database</a>" by
    <a href="https://simplemaps.com">Pareto Software, LLC</a>, used under
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
    with text reformatted from original
</dl>
</details>


<details>
  <summary><h2>Kiosk mode</h2></summary>
  <p>
    it can be run in a "kiosk mode", intended for museum displays,
    that prevents users from navigating away from the application. To set up
    kiosk mode for Chrome on Windows:
    <ol>
      <li>
        Open Chrome and go to
        <a href="https://fluid-earth.byrd.osu.edu/#kmode=true">
          https://fluid-earth.byrd.osu.edu/#kmode=true
        </a>.
      </li>
      <li>
        Go to the "..." menu in the upper-right corner and click "More Tools",
        "Create Shortcut".
      </li>
      <li>
        Change the text to "mirai kiosk" and click "Create".
      </li>
      <li>
        Right-click the new shortcut and click "Properties". In the "Target"
        field, scroll to the end and add " --kiosk" (be sure to include the
        space). Click OK.
      </li>
      <li>
        Double-click the shortcut to open the app.
      </li>
      <li>
        Hit "F11" to go to fullscreen.
      </li>
      <li>
        Remove the keyboard from the display (since users would be able to use
        key commands to circumvent kiosk mode).
      </li>
    </ol>
</details>

</div>

<style>
  dt {
    font-weight: bold;
    clear: both;
    margin-top: 1em;
  }

  dd {
    margin-inline-start: 1em;
  }

  img {
    float: right;
    border-radius: 50%;
    margin: -1.5em 1em 1em 1em;
  }

  ul, ol {
    padding-left: 1em;
  }

  li {
    margin-top: 1em;
  }
</style>
