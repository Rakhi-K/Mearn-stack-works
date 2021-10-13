//NESTED OBJECTS

var accounts = {
    1001: { acno: 1001, password: "userone", balance: 5000 },
    1002: { acno: 1002, password: "usertwo", balance: 7000 },
    1003: { acno: 1003, password: "userthree", balance: 8000 },
    1004: { acno: 1004, password: "userone", balance: 9000 },
}

//to have balamce of acc no -1001

console.log(accounts[1001]["balance"]);


// login with proper acc.no & passwrod
function login(acno, password) {

    if (acno in accounts) {

        let pwd = accounts[acno].password
        if (pwd == password) {
            console.log("login success");
        }
        else {
            console.log("invalid password");
        }
    }
    else {
        console.log("invalid account number");
    }
}
console.log(login(1002, "userone"));






//SECOND QUESTN

var accounts =
{
    1001: {
        acno: 1001, password: "userone", balance: 5000, transactions:
            [
                { to: 1002, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1002: {
        acno: 1002, password: "usertwo", balance: 7000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1003: {
        acno: 1003, password: "userthree", balance: 8000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1002, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1004: {
        acno: 1004, password: "userone", balance: 9000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    }
}

//Transcatn of 1001

console.log(accounts[1001]["transactions"]);



var res = accounts[1001].transactions.filter(transactions => transactions.amount > 500)
console.log(res);






//JSON- JS OBJ NOTATION -FORMAT- DATA TRANSFERRING

var countries =
    [
        {
            "name": {
                "common": "Ecuador",
                "official": "Republic of Ecuador",
                "nativeName": {
                    "spa": {
                        "official": "República del Ecuador",
                        "common": "Ecuador"
                    }
                }
            },
            "tld": [
                ".ec"
            ],
            "cca2": "EC",
            "ccn3": "218",
            "cca3": "ECU",
            "cioc": "ECU",
            "independent": true,
            "status": "officially-assigned",
            "unMember": true,
            "currencies": {
                "USD": {
                    "name": "United States dollar",
                    "symbol": "$"
                }
            },
            "idd": {
                "root": "+5",
                "suffixes": [
                    "93"
                ]
            },
            "capital": [
                "Quito"
            ],
            "altSpellings": [
                "EC",
                "Republic of Ecuador",
                "República del Ecuador"
            ],
            "region": "Americas",
            "subregion": "South America",
            "languages": {
                "spa": "Spanish"
            },
            "translations": {
                "ces": {
                    "official": "Ekvádorská republika",
                    "common": "Ekvádor"
                },
                "cym": {
                    "official": "Gweriniaeth Ecwador",
                    "common": "Ecwador"
                },
                "deu": {
                    "official": "Republik Ecuador",
                    "common": "Ecuador"
                },
                "est": {
                    "official": "Ecuadori Vabariik",
                    "common": "Ecuador"
                },
                "fin": {
                    "official": "Ecuadorin tasavalta",
                    "common": "Ecuador"
                },
                "fra": {
                    "official": "République de l'Équateur",
                    "common": "Équateur"
                },
                "hrv": {
                    "official": "Republika Ekvador",
                    "common": "Ekvador"
                },
                "hun": {
                    "official": "Ecuadori Köztársaság",
                    "common": "Ecuador"
                },
                "ita": {
                    "official": "Repubblica dell'Ecuador",
                    "common": "Ecuador"
                },
                "jpn": {
                    "official": "エクアドル共和国",
                    "common": "エクアドル"
                },
                "kor": {
                    "official": "에콰도르 공화국",
                    "common": "에콰도르"
                },
                "nld": {
                    "official": "Republiek Ecuador",
                    "common": "Ecuador"
                },
                "per": {
                    "official": "جمهوری اکوادور",
                    "common": "اکوادور"
                },
                "pol": {
                    "official": "Ekwador",
                    "common": "Ekwador"
                },
                "por": {
                    "official": "República do Equador",
                    "common": "Equador"
                },
                "rus": {
                    "official": "Республика Эквадор",
                    "common": "Эквадор"
                },
                "slk": {
                    "official": "Ekvádorská republika",
                    "common": "Ekvádor"
                },
                "spa": {
                    "official": "República del Ecuador",
                    "common": "Ecuador"
                },
                "swe": {
                    "official": "Republiken Ecuador",
                    "common": "Ecuador"
                },
                "urd": {
                    "official": "جمہوریہ ایکوڈور",
                    "common": "ایکواڈور"
                },
                "zho": {
                    "official": "厄瓜多尔共和国",
                    "common": "厄瓜多尔"
                }
            },
            "latlng": [
                -2,
                -77.5
            ],
            "landlocked": false,
            "borders": [
                "COL",
                "PER"
            ],
            "area": 276841,
            "demonyms": {
                "eng": {
                    "f": "Ecuadorean",
                    "m": "Ecuadorean"
                },
                "fra": {
                    "f": "Équatorienne",
                    "m": "Équatorien"
                }
            },
            "flag": "🇪🇨",
            "maps": {
                "googleMaps": "https://goo.gl/maps/TbX8hUW4gcbRPZiK7",
                "openStreetMaps": "https://www.openstreetmap.org/relation/108089"
            },
            "population": 17643060,
            "flags": {
                "svg": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
                "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png"
            }
        },


    ]

//COUNTRY NAME + CURRENCY

console.log(countries[0].name);   //name- il ula full details


console.log(countries[0].name["common"]);  //name only

//POPULATION
console.log(countries[0].population);

//CURRENCY
console.log(countries[0].currencies["USD"].symbol);

var sym = countries.map(country => country.currencies["USD"].symbol)
console.log("CURR",sym);


var country_name=[
    {
    "name": "India",
    "topLevelDomain": [
    ".in"
    ],
    "alpha2Code": "IN",
    "alpha3Code": "IND",
    "callingCodes": [
    "91"
    ],
    "capital": "New Delhi",
    "altSpellings": [
    "IN",
    "Bhārat",
    "Republic of India",
    "Bharat Ganrajya"
    ],
    "subregion": "Southern Asia",
    "region": "Asia",
    "population": 1380004385,
    "latlng": [
    20,
    77
    ],
    "demonym": "Indian",
    "area": 3287590,
    "gini": 35.7,
    "timezones": [
    "UTC+05:30"
    ],
    "borders": [
    "AFG",
    "BGD",
    "BTN",
    "MMR",
    "CHN",
    "NPL",
    "PAK",
    "LKA"
    ],
    "nativeName": "भारत",
    "numericCode": "356",
    "flags": {
    "svg": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    "png": "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png"
    },
    "currencies": [
    {
    "code": "INR",
    "name": "Indian rupee",
    "symbol": "₹"
    }
    ],
    "languages": [
    {
    "iso639_1": "hi",
    "iso639_2": "hin",
    "name": "Hindi",
    "nativeName": "हिन्दी"
    },
    {
    "iso639_1": "en",
    "iso639_2": "eng",
    "name": "English",
    "nativeName": "English"
    }
    ],
    "translations": {
    "br": "Índia",
    "pt": "Índia",
    "nl": "India",
    "hr": "Indija",
    "fa": "هند",
    "de": "Indien",
    "es": "India",
    "fr": "Inde",
    "ja": "インド",
    "it": "India",
    "hu": "India"
    },
    "flag": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    "regionalBlocs": [
    {
    "acronym": "SAARC",
    "name": "South Asian Association for Regional Cooperation"
    }
    ],
    "cioc": "IND",
    "independent": true
    },

    {
        "name": "usa",
        "topLevelDomain": [
        ".in"
        ],
        "alpha2Code": "IN",
        "alpha3Code": "IND",
        "callingCodes": [
        "91"
        ],
        "capital": "New Delhi",
        "altSpellings": [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya"
        ],
        "subregion": "Southern Asia",
        "region": "Asia",
        "population": 1380004385,
        "latlng": [
        20,
        77
        ],
        "demonym": "Indian",
        "area": 3287590,
        "gini": 35.7,
        "timezones": [
        "UTC+05:30"
        ],
        "borders": [
        "AFG",
        "BGD",
        "BTN",
        "MMR",
        "CHN",
        "NPL",
        "PAK",
        "LKA"
        ],
        "nativeName": "भारत",
        "numericCode": "356",
        "flags": {
        "svg": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
        "png": "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png"
        },
        "currencies": [
        {
        "code": "INR",
        "name": "dollar",
        "symbol": "&"
        }
        ],
        "languages": [
        {
        "iso639_1": "hi",
        "iso639_2": "hin",
        "name": "Hindi",
        "nativeName": "हिन्दी"
        },
        {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
        }
        ],
        "translations": {
        "br": "Índia",
        "pt": "Índia",
        "nl": "India",
        "hr": "Indija",
        "fa": "هند",
        "de": "Indien",
        "es": "India",
        "fr": "Inde",
        "ja": "インド",
        "it": "India",
        "hu": "India"
        },
        "flag": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
        "regionalBlocs": [
        {
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation"
        }
        ],
        "cioc": "IND",
        "independent": true
        }
    ]

    //CURRENCIES

    console.log(country_name[0].currencies[0].symbol);

    var symbol=country_name.map(country=>country.currencies[0].symbol)
    console.log(symbol);

    var sym=country_name.map(country=>country.currencies[0].name,symbol)
    console.log(sym);   //check in 5-10-21 video

