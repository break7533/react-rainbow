##### GoogleAddressLookup base

    const styles = {
        width: 600,
        margin: 'auto',
    };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large" style={styles}>
        <GoogleAddressLookup
            id="gaddresslookup-1"
            label="GoogleAddressLookup label"
            placeholder="Enter location"
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
        />
    </div>

##### GoogleAddressLookup disabled

    const styles = {
        width: 600,
        margin: 'auto',
    };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large" style={styles}>
        <GoogleAddressLookup
            id="gaddresslookup-2"
            label="GoogleAddressLookup label"
            placeholder="Enter location"
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            disabled
        />
    </div>

##### GoogleAddressLookup with custom search params (bounds, types)

    const styles = {
        width: 600,
        margin: 'auto',
    };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large" style={styles}>
        <GoogleAddressLookup
            id="gaddresslookup-3"
            label="GoogleAddressLookup label"
            placeholder="Enter location"
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            searchOptions={{
                bounds: {
                    sw: {
                        latitude: -63.941264,
                        longitude: 151.2042969,
                    },
                    ne: {
                        latitude: 63.941264,
                        longitude: -151.2042969,
                    }
                },
                types: ['address'],
            }}
        />
    </div>

##### GoogleAddressLookup with custom search params (location, radius, types, country)

    const styles = {
        width: 600,
        margin: 'auto',
    };

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large" style={styles}>
        <GoogleAddressLookup
            id="gaddresslookup-4"
            label="GoogleAddressLookup label"
            placeholder="Enter location"
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            searchOptions={{
                location: {
                    latitude: -33.941264,
                    longitude: 151.2042969,
                },
                country: 'us',
                radius: 150000,
                types: ['address'],
            }}
        />
    </div>