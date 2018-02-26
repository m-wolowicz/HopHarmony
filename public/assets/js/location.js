jQuery(document).ready(function () {

    var placeSearch, autocomplete;

    function initialize() {
        // Create the autocomplete object, restricting the search
        // to geographical location types.
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {HTMLInputElement} */
            (document.getElementById('autocomplete')), {
                types: ['geocode']
            });

        google.maps.event.addDomListener(document.getElementById('autocomplete'), 'focus', geolocate);
    }

    function geolocate() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                var geolocation = new google.maps.LatLng(
                    position.coords.latitude, position.coords.longitude);
                var circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                autocomplete.setBounds(circle.getBounds());
            });
        }
    }
    initialize();
});