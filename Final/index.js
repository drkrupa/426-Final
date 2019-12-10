//import Axios from "axios";

var token;
var imgFifteen, imgThirty, imgFourtyfive, imgSixty, imgSeventyfive, imgNinety, imgHundred;
const us = ["lightbringer", "cenarius", "uther", "kilrogg", "proudmoore", "hyjal", "frostwolf", "nerzhul", "kiljaeden", "blackrock", "tichondrius", "silver-hand", "doomhammer", "icecrown", "deathwing", "kelthuzad", "eitrigg", "garona", "alleria", "hellscream", "blackhand", "whisperwind", "archimonde", "illidan", "stormreaver", "malganis", "stormrage", "zuljin", "medivh", "durotan", "bloodhoof", "khadgar", "dalaran", "elune", "lothar", "arthas", "mannoroth", "warsong", "shattered-hand", "bleeding-hollow", "skullcrusher", "argent-dawn", "sargeras", "azgalor", "magtheridon", "destromath", "gorgonnash", "dethecus", "spinebreaker", "bonechewer", "dragonmaw", "shadowsong", "silvermoon", "windrunner", "cenarion-circle", "nathrezim", "terenas", "burning-blade", "gorefiend", "eredar", "shadowmoon", "lightnings-blade", "eonar", "gilneas", "kargath", "llane", "earthen-ring", "laughing-skull", "burning-legion", "thunderlord", "malygos", "thunderhorn", "aggramar", "crushridge", "stonemaul", "daggerspine", "stormscale", "dunemaul", "boulderfist", "suramar", "dragonblight", "draenor", "uldum", "bronzebeard", "feathermoon", "bloodscalp", "darkspear", "azjolnerub", "perenolde", "eldrethalas", "spirestone", "shadow-council", "scarlet-crusade", "firetree", "frostmane", "gurubashi", "smolderthorn", "skywall", "runetotem", "moonrunner", "detheroc", "kalecgos", "ursin", "dark-iron", "greymane", "wildhammer", "staghelm", "emerald-dream", "maelstrom", "twisting-nether", "chogall", "guldan", "kaelthas", "alexstrasza", "kirin-tor", "ravencrest", "balnazzar", "azshara", "agamaggan", "lightninghoof", "nazjatar", "malfurion", "aegwynn", "akama", "chromaggus", "draka", "drakthul", "garithos", "hakkar", "khaz-modan", "mugthol", "korgath", "kul-tiras", "malorne", "rexxar", "thorium-brotherhood", "arathor", "madoran", "trollbane", "muradin", "veknilash", "senjin", "baelgun", "duskwood", "zuluhed", "steamwheedle-cartel", "norgannon", "thrall", "anetheron", "turalyon", "haomarush", "scilla", "ysondre", "ysera", "dentarg", "andorhal", "executus", "dalvengyr", "black-dragonflight", "altar-of-storms", "uldaman", "aerie-peak", "onyxia", "demon-soul", "gnomeregan", "anvilmar", "the-venture-co", "sentinels", "jaedenar", "tanaris", "alterac-mountains", "undermine", "lethon", "blackwing-lair", "arygos", "echo-isles", "the-forgotten-coast", "fenris", "anubarak", "blackwater-raiders", "vashj", "korialstrasz", "misha", "darrowmere", "ravenholdt", "bladefist", "shuhalo", "winterhoof", "sisters-of-elune", "maiev", "rivendare", "nordrassil", "tortheldrin", "cairne", "draktharon", "antonidas", "shandris", "moon-guard", "nazgrel", "hydraxis", "wyrmrest-accord", "farstriders", "borean-tundra", "queldorei", "garrosh", "moknathal", "nesingwary", "drenden", "drakkari", "ragnaros", "quelthalas", "azuremyst", "auchindoun", "coilfang", "shattered-halls", "blood-furnace", "the-underbog", "terokkar", "blades-edge", "exodar", "area-52", "velen", "the-scryers", "zangarmarsh", "fizzcrank", "ghostlands", "grizzly-hills", "galakrond", "dawnbringer", "goldrinn", "nemesis", "azralon", "tol-barad", "gallywix", "caelestrasz", "amanthul", "barthilas", "thaurissan", "frostmourne", "khazgoroth", "dreadmaul", "nagrand", "dathremar", "jubeithos", "gundrak", "saurfang"];
//const eu = ["aggramar", "arathor", "aszune", "azjolnerub", "bloodhoof", "doomhammer", "draenor", "dragonblight", "emerald-dream", "garona", "voljin", "sunstrider", "arakarahm", "twilights-hammer", "zenedar", "forscherliga", "medivh", "agamaggan", "alakir", "bladefist", "bloodscalp", "burning-blade", "burning-legion", "crushridge", "daggerspine", "deathwing", "dragonmaw", "dunemaul", "dethecus", "sinstralis", "durotan", "argent-dawn", "kirin-tor", "dalaran", "archimonde", "elune", "illidan", "hyjal", "kaelthas", "nerzhul", "chogall", "sargeras", "runetotem", "shadowsong", "silvermoon", "stormrage", "terenas", "thunderhorn", "turalyon", "ravencrest", "shattered-hand", "skullcrusher", "spinebreaker", "stormreaver", "stormscale", "earthen-ring", "alexstrasza", "alleria", "antonidas", "baelgun", "blackhand", "gilneas", "kargath", "khazgoroth", "lothar", "madmortem", "malfurion", "zuluhed", "nozdormu", "perenolde", "die-silberne-hand", "aegwynn", "arthas", "azshara", "blackmoore", "blackrock", "destromath", "eredar", "frostmourne", "frostwolf", "gorgonnash", "guldan", "kelthuzad", "kiljaeden", "malganis", "mannoroth", "zirkel-des-cenarius", "proudmoore", "nathrezim", "dun-morogh", "amanthul", "senjin", "thrall", "theradras", "genjuros", "balnazzar", "anubarak", "wrathbringer", "onyxia", "nerathor","nefarian", "kult-der-verdammten", "das-syndikat", "terrordar", "kragjin", "der-rat-von-dalaran", "nordrassil", "hellscream", "laughing-skull", "magtheridon", "quelthalas", "neptulon", "twisting-nether", "ragnaros", "the-maelstrom", "sylvanas", "vashj", "bloodfeather", "darksorrow", "frostwhisper", "korgall", "defias-brotherhood", "the-venture-co", "lightnings-blade", "haomarush", "xavius", "khaz-modan", "drekthar", "rashgarroth", "throkferoth", "conseil-des-ombres", "varimathras", "hakkar", "les-sentinelles", "khadgar", "bronzebeard", "kul-tiras", "chromaggus", "dentarg", "moonglade", "la-croisade-écarlate", "executus", "trollbane", "mazrigos", "talnivarr", "emeriss", "drakthul", "ahnqiraj", "scarshield-legion", "ysera", "malygos", "rexxar", "anetheron", "nazjatar", "tichondrius", "steamwheedle-cartel", "die-ewige-wacht", "die-todeskrallen", "die-arguswacht", "uldaman", "eitrigg", "confrérie-du-thorium", "veknilash", "boulderfist", "frostmane", "outland", "grim-batol", "jaedenar", "kazzak", "tarren-mill", "chamber-of-aspects", "ravenholdt", "pozzo-delleternità", "eonar", "kilrogg", "aerie-peak", "wildhammer", "saurfang", "nemesis", "darkmoon-faire", "veklor", "mugthol", "taerar", "dalvengyr", "rajaxx", "ulduar", "malorne", "der-abyssische-rat", "der-mithrilorden", "tirion", "ambossar", "suramar", "krasus", "die-nachtwache", "arathi", "ysondre", "eldrethalas", "culte-de-la-rive-noire", "dun-modr", "zuljin","uldum", "cthun", "sanguino", "shendralar", "tyrande", "exodar", "minahonda", "los-errantes", "lightbringer", "darkspear", "alonsus", "burning-steppes", "bronze-dragonflight", "anachronos", "colinas-pardas", "ungoro", "garrosh", "area-52", "todeswache", "arygos", "teldrassil", "norgannon", "lordaeron", "aggra-português", "terokkar", "blades-edge", "azuremyst", "hellfire", "ghostlands", "nagrand", "the-shatar", "karazhan", "auchindoun", "shattered-halls", "gordunni", "lich-king", "soulflayer", "deathguard", "sporeggar", "nethersturm", "shattrath", "deepholm", "greymane", "festung-der-stürme", "echsenkessel", "blutkessel", "galakrond", "howling-fjord", "razuvious", "deathweaver", "die-aldor", "das-konsortium", "chants-éternels", "marécage-de-zangar", "temple-noir", "fordragon", "naxxramas", "borean-tundra", "les-clairvoyants", "azuregos", "ashenvale", "booty-bay", "eversong", "thermaplugg", "grom", "goldrinn", "blackscar"];
$(function () {
    $("button.searchButton").on('click', handleSearch);
    getToken();
    checkLogIn();
    $('#realm').autocomplete({
        source: us,
        delay: 500,
    });
});

export async function handleSearch() {
    $('#error').remove();
    let region = 'us';
    let realm = $('#realm').val().toLowerCase();
    let name = $('#name').val().toLowerCase();


    let url = 'https://' + region + '.api.blizzard.com/profile/wow/character/' + realm + '/' + name + '?namespace=profile-' + region + '&locale=en_US&access_token=' + token;

    try {
        let result = await axios({
            method: 'get',
            url: url,

        });
        renderCharacterForm(region, realm, name);
    } catch (error) {
        let msg = error.response.data.detail;
        let e = `<div id="error">
                <p class="error">${msg}</p>
            </div>`
        $('#body').append(e);
        $('#char').remove();
    }
}

export async function renderCharacterForm(region, realm, name) {
    $('#title').remove();
    $('#search').remove();
    $('#char').remove();
    $('#home').remove();
    let n = `<a class="navbar-item" href="index.html" id="home">Home</a>`;
    $('#navbar-start').prepend(n);
    let e = `<div class="container" id="search">
    <div class="columns has-text-centered">
        <div class="column">
            <div class="form">
                <input class="input" type="text" placeholder="Realm" id="realm">
            </div>
        </div>
        <div class="column is-half">
            <div class="form">
                <input class="input" type="text" placeholder="Character" id="name">
            </div>
        </div>
        <div class="column">
            <div class="form">
                <button class="button is-dark searchButton" type="submit">Search</button>
            </div>
        </div>
    </div>
</div>`

    $('#nav').append(e);
    $("button.searchButton").on('click', handleSearch);
    $('#realm').autocomplete({
        source: us,
        delay: 500,
    });
    let a = `<div id="char">
                <div class="columns">`;
    a += await renderName(region, realm, name);
    a += await renderIlvl(region, realm, name);
    a += await renderRaid(region, realm, name);
    a += '</div><div class="columns">';
    a += await renderDungeonScore(region, realm, name);
    a += await renderPvP(region, realm, name);
    a += await renderTalents(region, realm, name);
    a += await renderGear(region, realm, name);
    a += '</div>';
    $('#body').append(a);

}

export async function renderName(region, realm, name) {
    let url = 'https://' + region + '.api.blizzard.com/profile/wow/character/' + realm + '/' + name + '?namespace=profile-' + region + '&locale=en_US&access_token=' + token;
    let url2 = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/character-media?namespace=profile-${region}&locale=en_US&access_token=${token}`;

    let result = await axios({
        method: 'get',
        url: url,

    });
    let n = result.data.name;
    let guild = result.data.guild.name;
    let race = result.data.race.name;
    let spec = result.data.active_spec.name;
    let c = result.data.character_class.name;
    let faction = result.data.faction.name;

    let result2 = await axios({
        method: 'get',
        url: url2,
    });
    let img = result2.data.avatar_url;
    return `<div class="column is-6"><div class="box"><div class="columns"><div class="column is-3"><img src=${img}></img></div>
            <div class="column"<p><strong class="${faction}">${n}</strong>
            <br>&#60;${guild}&#62;
            <br><span class="${faction}">${race}</span> <span class="${c}">${spec} ${c}</span></p></div></div></div></div>`;
}

export async function renderIlvl(region, realm, name) {
    let url = 'https://' + region + '.api.blizzard.com/profile/wow/character/' + realm + '/' + name + '?namespace=profile-' + region + '&locale=en_US&access_token=' + token;


    let result = await axios({
        method: 'get',
        url: url,

    });

    let equip = result.data.equipped_item_level;
    let bag = result.data.average_item_level;
    let achieve = result.data.achievement_points;
    return `<div class="column is-6"><div class="box"><p><strong class="has-text-white">${equip} equipped ilvl</strong>
            <br>${bag} bag ilvl
            <br>${achieve} achievement points</p></div></div>`
}

export async function renderRaid(region, realm, name) {
    let url = 'https://raider.io/api/v1/characters/profile?region=' + region + '&realm=' + realm + '&name=' + name + '&fields=raid_progression';


    let result = await axios({
        method: 'get',
        url: url,

    });
    let mythic = result.data.raid_progression['the-eternal-palace'].mythic_bosses_killed;
    let heroic = result.data.raid_progression['the-eternal-palace'].heroic_bosses_killed;
    let normal = result.data.raid_progression['the-eternal-palace'].normal_bosses_killed;
    return `<div class="column is-6"><div class="box"><p>${mythic}/8 Mythic Eternal Palace
            <br>${heroic}/8 Heroic Eternal Palace
            <br>${normal}/8 Normal Eternal Palace</p></div></div>`
}

export async function renderDungeonScore(region, realm, name) {
    let url = 'https://raider.io/api/v1/characters/profile?region=' + region + '&realm=' + realm + '&name=' + name + '&fields=mythic_plus_scores_by_season%3Acurrent%2Cmythic_plus_ranks';


    let result = await axios({
        method: 'get',
        url: url,

    });
    let score = result.data.mythic_plus_scores_by_season[0].scores.all;
    let overallWorld = result.data.mythic_plus_ranks.overall.world;
    let classWorld = result.data.mythic_plus_ranks.class.world;
    let classy = result.data.class;
    var c, cworld, cclass;
    if (score < 500) {
        c = "poor";
    } else if (score < 1000) {
        c = "uncommon";
    } else if (score < 1500) {
        c = "rare";
    } else if (score < 2000) {
        c = "epic";
    } else if (score < 3000) {
        c = "legendary";
    } else {
        c = "artifact";
    }
    if (overallWorld < 100 && overallWorld > 0) {
        cworld = "artifact";
    } else if (overallWorld < 500 && overallWorld > 0) {
        cworld = "legendary";
    } else if (overallWorld < 5000 && overallWorld > 0) {
        cworld = "epic";
    } else if (overallWorld < 15000 && overallWorld > 0) {
        cworld = "rare";
    } else if (overallWorld < 100000 && overallWorld > 0) {
        cworld = "uncommon";
    } else {
        cworld = "poor";
    }
    if (classWorld < 100 && classWorld > 0) {
        cclass = "artifact";
    } else if (classWorld < 500 && classWorld > 0) {
        cclass = "legendary";
    } else if (classWorld < 5000 && classWorld > 0) {
        cclass = "epic";
    } else if (classWorld < 15000 && classWorld > 0) {
        cclass = "rare";
    } else if (classWorld < 100000 && classWorld > 0) {
        cclass = "uncommon";
    } else {
        cclass = "poor";
    }
    return `<div class="column is-6"><div class="box"><p><span class=${c}>${score}</span> M+ score
            <br><span class=${cworld}>${overallWorld}</span> of all players 
            <br><span class=${cclass}>${classWorld}</span> of all <span class=${classy}>${classy}s</span></p></div>`
}

export async function renderPvP(region, realm, name) {
    let url = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/pvp-summary?namespace=profile-${region}&locale=en_US&access_token=${token}`;
    let url2 = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/pvp-bracket/2v2?namespace=profile-${region}&locale=en_US&access_token=${token}`;
    let url3 = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/pvp-bracket/3v3?namespace=profile-${region}&locale=en_US&access_token=${token}`;
    let honor = 0;
    let twos = 0;
    let threes = 0;
    try {
        const result = await axios({
            method: 'get',
            url: url,
        });
        honor = result.data.honor_level;
    } catch (error) {
    }
    try {
        const result2 = await axios({
            method: 'get',
            url: url2,
        });
        twos = result2.data.rating;
    } catch (error) {
    }
    try {
        const result3 = await axios({
            method: 'get',
            url: url3,
        });
        threes = result3.data.rating;
    } catch (error) {
    }
    var c2, c3;
    if (twos < 500) {
        c2 = "poor";
    } else if (twos < 1000) {
        c2 = "uncommon";
    } else if (twos < 1600) {
        c2 = "rare";
    } else if (twos < 2100) {
        c2 = "epic";
    } else if (twos < 2400) {
        c2 = "legendary";
    } else {
        c2 = "artifact";
    }
    if (threes < 500) {
        c3 = "poor";
    } else if (threes < 1000) {
        c3 = "uncommon";
    } else if (threes < 1600) {
        c3 = "rare";
    } else if (threes < 2100) {
        c3 = "epic";
    } else if (threes < 2400) {
        c3 = "legendary";
    } else {
        c3 = "artifact";
    }



    return `<div class="box"><p>Honor Level: ${honor}
            <br><strong class="has-text-white">Arena:</strong>
            <br>2v2: <span class=${c2}>${twos}</span>
            <br>3v3: <span class=${c3}>${threes}</span></p></div></div>`
}

export async function renderTalents(region, realm, name) {
    let url = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/specializations?namespace=profile-${region}&locale=en_US&access_token=${token}`;

    let result = await axios({
        method: 'get',
        url: url,
    });
    let id = result.data.active_specialization.id;
    let arr = result.data.specializations;
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].specialization.id == id) {
            n = i;
            break;
        }
    }
    let fifteen = arr[n].talents[0].spell_tooltip.spell.id;
    let url15 = `https://us.api.blizzard.com/wow/spell/${fifteen}?locale=en_US&access_token=${token}`;
    let result15 = await axios({
        method: 'get',
        url: url15,
    });
    imgFifteen = result15.data.icon;

    let thirty = arr[n].talents[1].spell_tooltip.spell.id;
    let url30 = `https://us.api.blizzard.com/wow/spell/${thirty}?locale=en_US&access_token=${token}`;
    let result30 = await axios({
        method: 'get',
        url: url30,
    });
    imgThirty = result30.data.icon;
    let fourtyfive = arr[n].talents[2].spell_tooltip.spell.id;
    let url45 = `https://us.api.blizzard.com/wow/spell/${fourtyfive}?locale=en_US&access_token=${token}`;
    let result45 = await axios({
        method: 'get',
        url: url45,
    });
    imgFourtyfive = result45.data.icon;
    let sixty = arr[n].talents[3].spell_tooltip.spell.id;
    let url60 = `https://us.api.blizzard.com/wow/spell/${sixty}?locale=en_US&access_token=${token}`;
    let result60 = await axios({
        method: 'get',
        url: url60,
    });
    imgSixty = result60.data.icon;
    let seventyfive = arr[n].talents[4].spell_tooltip.spell.id;
    let url75 = `https://us.api.blizzard.com/wow/spell/${seventyfive}?locale=en_US&access_token=${token}`;
    let result75 = await axios({
        method: 'get',
        url: url75,
    });
    imgSeventyfive = result75.data.icon;
    let ninety = arr[n].talents[5].spell_tooltip.spell.id;
    let url90 = `https://us.api.blizzard.com/wow/spell/${ninety}?locale=en_US&access_token=${token}`;
    let result90 = await axios({
        method: 'get',
        url: url90,
    });
    imgNinety = result90.data.icon;
    let hundred = arr[n].talents[6].spell_tooltip.spell.id;
    let url100 = `https://us.api.blizzard.com/wow/spell/${hundred}?locale=en_US&access_token=${token}`;
    let result100 = await axios({
        method: 'get',
        url: url100,
    });
    imgHundred = result100.data.icon;
    checkIcons();
    let e = `<div class="column is-6"><div class="box"><p><strong class="has-text-white">Talents:</strong><div class="blank"></div><div class="columns">
                <div class="column"><a href="https://www.wowhead.com/spell=${fifteen}"><img src='https://wow.zamimg.com/images/wow/icons/large/${imgFifteen}.jpg'></img></a><br></div>
                <div class="column"><a href="https://www.wowhead.com/spell=${thirty}"><img src='https://wow.zamimg.com/images/wow/icons/large/${imgThirty}.jpg'></img></a><br></div>
                <div class="column"><a href="https://www.wowhead.com/spell=${fourtyfive}"><img src='https://wow.zamimg.com/images/wow/icons/large/${imgFourtyfive}.jpg'></img></a><br></div></div>
                <div class="columns"><div class="column"><a href="https://www.wowhead.com/spell=${sixty}"><img src='https://wow.zamimg.com/images/wow/icons/large/${imgSixty}.jpg'></img></a><br></div> 
                <div class="column"><a href="https://www.wowhead.com/spell=${seventyfive}"><img src='https://wow.zamimg.com/images/wow/icons/large/${imgSeventyfive}.jpg'></img></a><br></div>
                <div class="column"><a href="https://www.wowhead.com/spell=${ninety}"><img src='https://wow.zamimg.com/images/wow/icons/large/${imgNinety}.jpg'></img></a><br></div></div>
                <div></div><a href="https://www.wowhead.com/spell=${hundred}"><img src='https://wow.zamimg.com/images/wow/icons/large/${imgHundred}.jpg'></img></a><br>
            </p></div></div>`;
    return e;


}

export function checkIcons() {
    if (imgFifteen == 'spell_frost_iceshards') {
        imgFifteen = 'spell_frost_ice-shards';
    }
    if (imgThirty == 'spell_frost_iceshards') {
        imgThirty = 'spell_frost_ice-shards';
    }
    if (imgFourtyfive == 'spell_frost_iceshards') {
        imgFourtyfive = 'spell_frost_ice-shards';
    }
    if (imgSixty == 'spell_frost_iceshards') {
        imgSixty = 'spell_frost_ice-shards';
    }
    if (imgSeventyfive == 'spell_frost_iceshards') {
        imgSeventyfive = 'spell_frost_ice-shards';
    }
    if (imgNinety == 'spell_frost_iceshards') {
        imgNinety = 'spell_frost_ice-shards';
    }
    if (imgHundred == 'spell_frost_iceshards') {
        imgHundred = 'spell_frost_ice-shards';
    }

    if (imgFifteen == 'ability_paladin_guardedbythelight') {
        imgFifteen = 'ability_paladin_gaurdedbythelight';
    }
    if (imgThirty == 'ability_paladin_guardedbythelight') {
        imgThirty = 'ability_paladin_gaurdedbythelight';
    }
    if (imgFourtyfive == 'ability_paladin_guardedbythelight') {
        imgFourtyfive = 'ability_paladin_gaurdedbythelight';
    }
    if (imgSixty == 'ability_paladin_guardedbythelight') {
        imgSixty = 'ability_paladin_gaurdedbythelight';
    }
    if (imgSeventyfive == 'ability_paladin_guardedbythelight') {
        imgSeventyfive = 'ability_paladin_gaurdedbythelight';
    }
    if (imgNinety == 'ability_paladin_guardedbythelight') {
        imgNinety = 'ability_paladin_gaurdedbythelight';
    }
    if (imgHundred == 'ability_paladin_guardedbythelight') {
        imgHundred = 'ability_paladin_gaurdedbythelight';
    }
}

export async function renderGear(region, realm, name) {
    let url = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/equipment?namespace=profile-${region}&locale=en_US&access_token=${token}`;
    const result = await axios({
        method: 'get',
        url: url,
    });
    let arr = result.data.equipped_items;
    let e = `<div class="column is-6"><div class="box"><p><strong class="has-text-white">Gear:</strong><div class="blank"></div><div class="columns">`;
    for (let i = 0; i < 5; i++) {
        e += await renderItem(arr[i].item.id, region);
    }
    e += `</div><div class="columns">`;
    for (let i = 5; i < 10; i++) {
        e += await renderItem(arr[i].item.id, region);
    }
    e += `</div><div class="columns">`;
    for (let i = 10; i < 15; i++) {
        e += await renderItem(arr[i].item.id, region);
    }
    e += `</div><div class="columns">`;
    for (let i = 15; i < arr.lenth; i++) {
        e += await renderItem(arr[i].item.id), region;
    }
    e += `</div></div></div>`;
    return e;
}

export async function renderItem(id, region) {
    let url = `https://${region}.api.blizzard.com/data/wow/media/item/${id}?namespace=static-${region}&locale=en_US&access_token=${token}`;
    const result = await axios({
        method: 'get',
        url: url,
    });
    let img = result.data.assets[0].value;
    let e = `<div class="column">
                <a href="https://www.wowhead.com/item=${id}">
                    <img src=${img}></img>
                </a><br>
            </div>`
    return e;

}




export async function getToken() {
    let url = 'https://us.battle.net/oauth/token?grant_type=client_credentials';
    const result = await axios({
        method: 'POST',
        url: url,
        auth: {
            username: '6e632159e12343f69919365074c3029c',
            password: 'n67RLQnHAm3NWb4oLnlpaagbJWrzSsne',
        },
    });
    token = result.data.access_token;
}

export async function checkLogIn() {
    let url = `http://localhost:3000/account/status`;
    let jwt = localStorage.getItem('jwt');

    try {
        const result = await axios({
            method: 'get',
            url: url,
            headers: { 'Authorization': "Bearer " + jwt },
        });
        let user = result.data.user.name;
        let e = `<a id="loggedIn" class="navbar-item">Logged in as ${user}</a>
                 <a id="logout" class="navbar-item">Log Out</a>`
        $('#login').remove();
        $('#signup').remove();
        $('#navbar-end').append(e);
        $('#logout').on('click', handleLogOut);
    } catch(error) {

    }
}

export function handleLogOut() {
    localStorage.removeItem('jwt');
    window.location.reload();
}