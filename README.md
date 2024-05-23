# mirai

[![A visualization of swirling winds over the United States and Canada](https://fluid-earth.byrd.osu.edu/images/banner.png)](https://fluid-earth.byrd.osu.edu/#gdata=wind+speed+at+500+mb&pdata=wind+at+500+mb&smode=false)

## Test
https://main--prismatic-cupcake-d057e6.netlify.app/#date=2024-04-01T00%3A00%3A00.000Z&gdata=average+temperature+at+2+m+above+ground&pdata=none&proj=vertical+perspective&lat=50.55&lon=-0.14&zoom=9.17&smode=true&kmode=false&pins=%5B%5D
## Development

### Frontend-only setup

#### Prerequisites

- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io/installation#using-corepack)

```sh
git clone https://github.com/byrd-polalsr/fluid-earth
cd fluid-earth
pnpm install
pnpm run dev
```

Changes to files in `src` will be automatically displayed from the dev server.

### Local backend setup

#### Additional prerequisites

- [wgrib](https://www.cpc.ncep.noaa.gov/products/wesley/wgrib.html)
- [wgrib2](https://www.cpc.ncep.noaa.gov/products/wesley/wgrib2/)
- [NetCDF](https://www.unidata.ucar.edu/downloads/netcdf/)
- [Deno](https://deno.land/#installation)

First, complete the frontend-only setup.

Then, [create an account](https://cds.climate.copernicus.eu/user/register) to
access CDS. Once logged in, [accept the Copernicus
license](https://cds.climate.copernicus.eu/cdsapp/#!/terms/licence-to-use-copernicus-products)
and use your [CDS API key](https://cds.climate.copernicus.eu/api-how-to) to
create a `.env` file in the root of this Git repository with the following
content, replacing the `X`s with your key:

```env
CDS_API_KEY=XXXXXX:XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```

Similarly, [create an account](https://urs.earthdata.nasa.gov/users/new) to
access Earthdata, and add your username and password to `.env`:

```env
EARTHDATA_LOGIN=XXXXX:XXXXX
```

Finally, in a separate terminal tab/window:

```sh
pnpm run tera
```

To develop against the remote backend again (as in the frontend-only setup),
remove  the `public/tera` directory.

### Building frontend for production

```sh
pnpm run build
pnpm run preview
```

### Updating local development environment

```sh
git pull https://github.com/
pnpm install
```
