# Vehicle catalog data

The vehicle records in `cars.ts` and `featured-cars.ts` are **demo/sample records**, not verified live inventory. Do not present them as confirmed vehicles for sale.

## Before using real inventory

- Replace sample records with seller-approved vehicle data.
- Verify price, year, mileage, trim, transmission, location, and availability.
- Keep each listing uniquely identified; do not duplicate the same vehicle in both datasets at conflicting prices.
- Store seller contact details only with permission and validate them before enabling direct contact.
- Keep the UI's sample-data notice until verified inventory is connected.

## Fields

- `id`: stable unique listing identifier used by the detail URL.
- `name`, `brand`, `year`: vehicle identity.
- `price`, `priceValue`: formatted price and numeric value for filtering/sorting.
- `km`: odometer value in kilometers.
- `location`: city or seller's stated area.
- `transmission`, `engine`: stated specifications.
- `tag`: a neutral display label, not a guarantee or verification claim.
