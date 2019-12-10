var user, l, token;
const us = ["lightbringer", "cenarius", "uther", "kilrogg", "proudmoore", "hyjal", "frostwolf", "nerzhul", "kiljaeden", "blackrock", "tichondrius", "silver-hand", "doomhammer", "icecrown", "deathwing", "kelthuzad", "eitrigg", "garona", "alleria", "hellscream", "blackhand", "whisperwind", "archimonde", "illidan", "stormreaver", "malganis", "stormrage", "zuljin", "medivh", "durotan", "bloodhoof", "khadgar", "dalaran", "elune", "lothar", "arthas", "mannoroth", "warsong", "shattered-hand", "bleeding-hollow", "skullcrusher", "argent-dawn", "sargeras", "azgalor", "magtheridon", "destromath", "gorgonnash", "dethecus", "spinebreaker", "bonechewer", "dragonmaw", "shadowsong", "silvermoon", "windrunner", "cenarion-circle", "nathrezim", "terenas", "burning-blade", "gorefiend", "eredar", "shadowmoon", "lightnings-blade", "eonar", "gilneas", "kargath", "llane", "earthen-ring", "laughing-skull", "burning-legion", "thunderlord", "malygos", "thunderhorn", "aggramar", "crushridge", "stonemaul", "daggerspine", "stormscale", "dunemaul", "boulderfist", "suramar", "dragonblight", "draenor", "uldum", "bronzebeard", "feathermoon", "bloodscalp", "darkspear", "azjolnerub", "perenolde", "eldrethalas", "spirestone", "shadow-council", "scarlet-crusade", "firetree", "frostmane", "gurubashi", "smolderthorn", "skywall", "runetotem", "moonrunner", "detheroc", "kalecgos", "ursin", "dark-iron", "greymane", "wildhammer", "staghelm", "emerald-dream", "maelstrom", "twisting-nether", "chogall", "guldan", "kaelthas", "alexstrasza", "kirin-tor", "ravencrest", "balnazzar", "azshara", "agamaggan", "lightninghoof", "nazjatar", "malfurion", "aegwynn", "akama", "chromaggus", "draka", "drakthul", "garithos", "hakkar", "khaz-modan", "mugthol", "korgath", "kul-tiras", "malorne", "rexxar", "thorium-brotherhood", "arathor", "madoran", "trollbane", "muradin", "veknilash", "senjin", "baelgun", "duskwood", "zuluhed", "steamwheedle-cartel", "norgannon", "thrall", "anetheron", "turalyon", "haomarush", "scilla", "ysondre", "ysera", "dentarg", "andorhal", "executus", "dalvengyr", "black-dragonflight", "altar-of-storms", "uldaman", "aerie-peak", "onyxia", "demon-soul", "gnomeregan", "anvilmar", "the-venture-co", "sentinels", "jaedenar", "tanaris", "alterac-mountains", "undermine", "lethon", "blackwing-lair", "arygos", "echo-isles", "the-forgotten-coast", "fenris", "anubarak", "blackwater-raiders", "vashj", "korialstrasz", "misha", "darrowmere", "ravenholdt", "bladefist", "shuhalo", "winterhoof", "sisters-of-elune", "maiev", "rivendare", "nordrassil", "tortheldrin", "cairne", "draktharon", "antonidas", "shandris", "moon-guard", "nazgrel", "hydraxis", "wyrmrest-accord", "farstriders", "borean-tundra", "queldorei", "garrosh", "moknathal", "nesingwary", "drenden", "drakkari", "ragnaros", "quelthalas", "azuremyst", "auchindoun", "coilfang", "shattered-halls", "blood-furnace", "the-underbog", "terokkar", "blades-edge", "exodar", "area-52", "velen", "the-scryers", "zangarmarsh", "fizzcrank", "ghostlands", "grizzly-hills", "galakrond", "dawnbringer", "goldrinn", "nemesis", "azralon", "tol-barad", "gallywix", "caelestrasz", "amanthul", "barthilas", "thaurissan", "frostmourne", "khazgoroth", "dreadmaul", "nagrand", "dathremar", "jubeithos", "gundrak", "saurfang"];

$(async function () {
    l = await checkLogIn();
    if (l) {
        renderButtons();
    }
    renderShowPostButtons();
    getToken();
    let url = 'http://localhost:3000/public/id';
});

export function renderButtons() {
    let e = `<button class="button is-dark new" type="button">New Post</button>`;
    $('#topbuttons').append(e);
    $('button.new').on('click', handleNewPost);

}

export function renderShowPostButtons() {
    let e = `<button class="button is-dark lfg" type="button">Show Player Posts</button>
            <button class="button is-dark lfm" type="button">Show Guild Posts</button>`;
    $('#topbuttons').append(e);
    $('button.lfg').on('click', showLFGPosts);
    $('button.lfm').on('click', showLFMPosts);
}

export async function showLFGPosts() {
    $('#lfg').remove();
    let url = 'http://localhost:3000/public/lfg';
    const result = await axios({
        method: 'get',
        url: url,
    });
    let e = `<div class="columns" id="lfg"><div class="column">`
    for (let i = Object.keys(result.data.result).length - 1; i >= 0; i--) {
        e += renderPost(result.data.result[Object.keys(result.data.result)[i]]);
    }
    e += `</div></div>`;
    $('#body').append(e);
    $('button.editButton').on('click', handleLFGEdit);
    $('button.deleteButton').on('click', handleLFGDelete);
}
export async function showLFMPosts() {

}

export function handleNewPost() {
    let c = `<div id="newPost" class="box">
                <form><div class="columns">
                    <div class="column"><textarea id="newPostBody" rows="5" cols="50" placeholder="Post here (Be sure to include contact information)"></textarea></div>
                    <div class="column">
                    <div class="select" id="type">
                        <select>
                            <option value="lfg">Player looking for Guild</option>
                            <option value="lfm">Guild looking for Players</option>
                        </select>
                    </div>
                    </div>
                    <div class="column"><input class="input" type="text" placeholder="Character or Guild name" id="name">
                    <div class="autocomplete"><input class="input" type="text" placeholder="Realm" id="realm"></div></div>
                    <div class="column"><button type="submit" class="button submitButton is-dark">Post</button><br>
                    <button type="button" class="button cancelButton is-dark">Cancel</button></div>
                </div></form>
             </div>`
    $('#newPost').remove();
    $('#lfg').remove();
    $('#lfm').remove();
    $('#body').prepend(c);
    $('button.submitButton').on('click', handlePost);
    $('button.cancelButton').on('click', handleCancel);
    $('#realm').autocomplete({
        source: us,
        delay: 500,
    });

}

export function handleCancel() {
    $('#newPost').remove();
}

export async function handleLFGEdit(event) {
    let id = event.target.parentElement.id;
    let url = `http://localhost:3000/public/lfg/${id}`;
    const result = await axios({
        method: 'get',
        url: url,
    });
    let obj = result.data.result;
    let e = `<div id=${id} class="box is-dark"><p><span class=${obj.class}>${obj.name}-${obj.realm}</span></p>
                <textarea id="editedBody${id}" placeholder=${obj.post} rows=4 cols=50></textarea>
                <div class="columns"><div class="column has-text-centered"><button type="submit" class="button subEditButton is-dark">Post</button>
                <button type="button" class="button cancelEditButton is-dark">Cancel</button></div></div>
            </div>`
    $(`#${id}`).replaceWith(e);
    $('button.cancelEditButton').on('click', cancelLFGEdit);
    $('button.subEditButton').on('click', submitLFGEdit);
}

export async function submitLFGEdit(event) {

}

export async function cancelLFGEdit(event) {
    let id = event.target.parentElement.parentElement.parentElement.id;
    let url = `http://localhost:3000/public/lfg/${id}`;
    const result = await axios({
        method: 'get',
        url: url,
    });
    let obj = result.data.result;
    let e = renderPost(obj);
    $(`#${id}`).replaceWith(e);
    $('button.editButton').on('click', handleLFGEdit);
    $('button.deleteButton').on('click', handleLFGDelete);
}

export async function handleLFGDelete(event) {
    let id = event.target.parentElement.id;
    let url = `http://localhost:3000/public/lfg/${id}`;
    const res = await axios({
        method: 'delete',
        url: url,
    });
    showLFGPosts();
}

export async function handlePost() {
    event.preventDefault();
    $('#error').remove();
    let body = $('#newPostBody').val();
    let type = $('#type :selected').val();
    let id = await getID();
    let realm = $('#realm').val().toLowerCase();
    let name = $('#name').val().toLowerCase();
    var c;
    if (type == 'lfg') {
        try {
            let u = `https://us.api.blizzard.com/profile/wow/character/${realm}/${name}?namespace=profile-us&locale=en_US&access_token=${token}`;
            const res = await axios({
                method: 'get',
                url: u,
            });
            c = res.data.character_class.name;
        } catch (error) {
            let e = `<div id="error">
                <p class="error">Invalid Character</p>
            </div>`
            $('#newPost').append(e);
            return;
        }
    } else {
        try {
            let u = `https://us.api.blizzard.com/data/wow/guild/${realm}/${name}?namespace=profile-us&locale=en_US&access_token=${token}`;
            const res = await axios({
                method: 'get',
                url: u,
            });
            c = res.data.faction.name;
        } catch (error) {
            let e = `<div id="error">
            <p class="error">Invalid Guild</p>
        </div>`
            $('#newPost').append(e);
            return;
        }
    }
    let url = `http://localhost:3000/public/${type}/${id}`
    const result = await axios({
        method: 'post',
        url: url,
        data: { data: { 'post': body, 'id': id, 'author': user, 'name': name, 'realm': realm, 'class': c } },
    });
    id++;
    updateID(id);
    $('#newPost').remove();
    if (type == 'lfg') {
        showLFGPosts();
    }
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
        user = result.data.user.name;
        let e = `<a id="loggedIn" class="navbar-item">Logged in as ${user}</a>
                 <a id="logout" class="navbar-item">Log Out</a>`
        $('#login').remove();
        $('#signup').remove();
        $('#navbar-end').append(e);
        $('#logout').on('click', handleLogOut);
    } catch (error) {
        return false;
    }
    return true;
}

export function renderPost(obj) {
    if (obj.author == user) {
        let e = `<div id=${obj.id} class="box is-dark">
        <p><strong><span class=${obj.class}>${obj.name}-${obj.realm}</span></strong>
            <br>
            ${obj.post}
            <br>
        </p>
        <button type="button" class="button editButton is-small is-dark">Edit</button>
        <button type="button" class="button deleteButton is-small is-dark">Delete</button>
    </div>`
        return e;
    } else {
        let e = `<div id=${obj.id} class="box is-dark">
        <p><strong><span class=${obj.class}>${obj.name}-${obj.realm}</span></strong>
            <br>
            ${obj.post}
            <br>
        </p>
    </div>`;
        return e;
    }
}

export function handleLogOut() {
    localStorage.removeItem('jwt');
    window.location.reload();
}

export async function getID() {
    let url = 'http://localhost:3000/public/id/id';
    const result = await axios({
        method: 'get',
        url: url,
    });
    let id = result.data.result;
    return id;
}

export async function updateID(id) {
    let url = 'http://localhost:3000/public/id';
    const result = await axios({
        method: 'post',
        url: url,
        data: { data: { 'id': id } }
    });
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