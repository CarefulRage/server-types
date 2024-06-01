declare namespace CarefulRage.Weather {
    type ModelHashes =
        "BLIZZARD"|
        "CLEAR"|
        "CLEARING"|
        "CLOUDS"|
        "EXTRASUNNY"|
        "FOGGY"|
        "OVERCAST"|
        "RAIN"|
        "SMOG"|
        "SNOWLIGHT"|
        "THUNDER"|
        "XMAS";

    const enum Models {
        BLIZZARD = 'BLIZZARD',
        CLEAR = 'CLEAR',
        CLEARING = 'CLEARING',
        CLOUDS = 'CLOUDS',
        EXTRA_SUNNY = 'EXTRASUNNY',
        FOGGY = 'FOGGY',
        OVERCAST = 'OVERCAST',
        RAIN = 'RAIN',
        SMOG = 'SMOG',
        SNOW_LIGHT = 'SNOWLIGHT',
        THUNDER = 'THUNDER',
        XMAS = 'XMAS'
    }

    type Model = CarefulRage.Weather.ModelHashes | CarefulRage.Weather.Models;
}