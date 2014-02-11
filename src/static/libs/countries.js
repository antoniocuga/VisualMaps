

var countries = {
    "USA": {
        "posicion": 1,
        "pais": "Estados Unidos",
        "oro": 1861,
        "plata": 1379,
        "bronce": 4173,
        "fillKey": "USA"
    },
    "CUB": {
        "posicion": 2,
        "pais": "Cuba",
        "oro": 839,
        "plata": 566,
        "bronce": 1932,
        "fillKey": "CUB"
    },
    "CAN": {
        "posicion": 3,
        "pais": "Canadá",
        "oro": 377,
        "plata": 586,
        "bronce": 1696,
        "fillKey": "CAN"
    },
    "BRA": {
        "posicion": 4,
        "pais": "Brasil",
        "oro": 287,
        "plata": 319,
        "bronce": 1066,
        "fillKey": "BRA"
    },
    "ARG": {
        "posicion": 5,
        "pais": "Argentina",
        "oro": 279,
        "plata": 301,
        "bronce": 978,
        "fillKey": "ARG"
    },
    "MEX": {
        "posicion": 6,
        "pais": "México",
        "oro": 199,
        "plata": 259,
        "bronce": 917,
        "fillKey": "MEX"
    },
    "VEN": {
        "posicion": 7,
        "pais": "Venezuela",
        "oro": 85,
        "plata": 183,
        "bronce": 525,
        "fillKey": "VEN"
    },
    "COL": {
        "posicion": 8,
        "pais": "Colombia",
        "oro": 82,
        "plata": 134,
        "bronce": 411,
        "fillKey": "COL"
    },
    "CHL": {
        "posicion": 9,
        "pais": "Chile",
        "oro": 39,
        "plata": 85,
        "bronce": 257,
        "fillKey": "CHL"
    },
    "PRI": {
        "posicion": 10,
        "pais": "Puerto Rico",
        "oro": 27,
        "plata": 80,
        "bronce": 228,
        "fillKey": "PRI"
    },
    "DOM": {
        "posicion": 11,
        "pais": "República Dominicana",
        "oro": 26,
        "plata": 52,
        "bronce": 180,
        "fillKey": "DOM"
    },
    "JAM": {
        "posicion": 12,
        "pais": "Jamaica",
        "oro": 22,
        "plata": 42,
        "bronce": 122,
        "fillKey": "JAM"
    },
    "ECU": {
        "posicion": 13,
        "pais": "Ecuador",
        "oro": 21,
        "plata": 21,
        "bronce": 88,
        "fillKey": "ECU"
    },
    "GTM": {
        "posicion": 14,
        "pais": "Guatemala",
        "oro": 14,
        "plata": 14,
        "bronce": 65,
        "fillKey": "GTM"
    },
    "URY": {
        "posicion": 15,
        "pais": "Uruguay",
        "oro": 11,
        "plata": 24,
        "bronce": 78,
        "fillKey": "URY"
    },
    "TTO": {
        "posicion": 16,
        "pais": "Trinidad y Tobago",
        "oro": 8,
        "plata": 20,
        "bronce": 55,
        "fillKey": "TTO"
    },
    "BHS": {
        "posicion": 17,
        "pais": "Bahamas",
        "oro": 7,
        "plata": 13,
        "bronce": 31,
        "fillKey": "BHS"
    },
    "PER": {
        "posicion": 18,
        "pais": "Perú",
        "oro": 5,
        "plata": 30,
        "bronce": 94,
        "fillKey": "PER"
    },
    null: {
        "posicion": 19,
        "pais": "Antillas Neerlandesas",
        "oro": 5,
        "plata": 9,
        "bronce": 31,
        "fillKey": null
    },
    "CRI": {
        "posicion": 20,
        "pais": "Costa Rica",
        "oro": 5,
        "plata": 6,
        "bronce": 21,
        "fillKey": "CRI"
    }
};

var fills = {};

function randomColors() {

    for (i in countries) {

        var hex = "#" + Math.random().toString(16).slice(2, 8);

        fills[i] = hex;
    }

    fills['defaultFill'] = "#ABDDA4";

    return fills;
}

console.log(fills);

var colors = randomColors();
