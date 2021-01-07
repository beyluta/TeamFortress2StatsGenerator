/*
*   This website was a non-profit, fun project created by SteamUser "Beyluta"
*   The code is publicly available on GitHub for everyone to improve
*/

// Array of all weapon types
var weapons = ["Scattergun", "Pistol", "Bat", "Rocket Launcher", "Shotgun", "Shovel", "Flamethrower", "Flare gun", "Axe", 
"Grenade Launcher", "Stickybomb Launcher", "Bottle", "Minigun", "Sandvich", "Gloves", "Wrench", "Sentry Gun", 
"Syringe Gun", "Bonesaw", "Revolver", "Knife", "Sword", "Shield (Demoman)", "Shield (Sniper)"];

// Array of all pros available for all weapons
var defaultStats = ["Max Health", "Speed boost", "Faster weapon switch", "Damage", "Knockback", "Clip size", "Fire rate",
"Overheal bonus", "Bullets per shot", "Damage Absorbition", "Objective capture rate", "Max ammo", "Reload speed",
"Blast Resistance", "Fire Resistance", "Bullet Resistance", "Random crit chance", "Self heal rate", "Medpack heal"]

// Array of special stats
var specialStats = ["Cloak on hit", "Übercharge on hit", "Jarate on hit"];

// Tf2 weapon qualities
var weaponQuality = ["<span style='color: #8650AC'>Unusual</span>", "<span style='color: #CF6A32'>Strange</span>"]

// Starting point of the script
window.onload = (event) =>{
    // Nothing yet
}

// Gets a random value from 0 to the max current value
function GetRandVal(cVal)
{
    var val = Math.floor(Math.random() * cVal  + 1);
    return val;
}

// Rounds up the current value to the nearest 10
function RoundToNearTen(cVal)
{
    var val = Math.ceil(cVal / 10) * 10;
    return val;
}

// Global weapon name
var glob_weap = "";
var glob_weap_index = [];

// Gets a new weapon from the array of weapons
function GetRandWeapon()
{
    var rand = GetRandVal(weapons.length - 1);
    glob_weap = weapons[rand];
    return document.write(glob_weap);
}

// Generates a random level for the weapon
function GetRandWeaponLevel()
{
    var rand = GetRandVal(100);
    if (rand == 69) // ( ͡° ͜ʖ ͡°)
    {
        return document.write("Level " + rand + "(nice) " + glob_weap);
    }
    else{
        return document.write("Level " + rand + " " + glob_weap);
    }
}

// Appends a random weapon attribute to the weapon
function RandWeapAttribute()
{
    var rand = GetRandVal(100);

    if (rand <= 10)
    {
        return " on hit";
    }
    else if (rand <= 20)
    {
        return " on wearer";
    }
    else if (rand <= 30)
    {
        return " when deployed";
    }
    else{
        return "";
    }
}

// Generates a random weapon quality
function RandWeapQuality()
{
    var rand = GetRandVal(100);

    if (rand <= 5)
    {
        return document.write(weaponQuality[0] + " ");
    }
    else if (rand <= 35)
    {
        return document.write(weaponQuality[1] + " ");
    }
    else{
        return "";
    }
}

// Generates the stats to the displayed
function GenerateStats()
{
    /*Generating up to three pros and cons to be displayed*/
    var pCount = GetRandVal(3);
    var cCount = GetRandVal(3);

    // Displaying the pros
    for (var i = 0; i < pCount; i++)
    {
        var skipLoop = false; // Should the current loop be skipped?
        var statsIndex = GetRandVal(defaultStats.length - 1);

        // Searching for duplicates
        for (var x = 0; x < glob_weap_index.length; x++)
        {
            if (statsIndex == glob_weap_index[x]) // Found a duplicate entry
            {
                skipLoop = true;
            }
        }

        // Continuing to the next loop if applicable
        if (skipLoop == true){
            skipLoop = false;
            continue;
        }
        else{
            glob_weap_index.push(statsIndex);
            var statsPercent = RoundToNearTen(GetRandVal(100));
            document.write('<p class="tf-item-pro">+' + statsPercent + "% " + defaultStats[statsIndex] + RandWeapAttribute() +'</p>');
        }
    }

    // Displaying the cons
    for (var i = 0; i < cCount; i++)
    {
        var skipLoop = false; // Should the current loop be skipped?
        var statsIndex = GetRandVal(defaultStats.length - 1);
        
        // Searching for duplicates
        for (var x = 0; x < glob_weap_index.length; x++)
        {
            if (statsIndex == glob_weap_index[x]) // Found a duplicate entry
            {
                skipLoop = true;
            }
        }

        // Continuing to the next loop if applicable
        if (skipLoop == true){
            skipLoop = false;
            continue;
        }
        else{
            glob_weap_index.push(statsIndex);
            var statsPercent = RoundToNearTen(GetRandVal(100));
            document.write('<p class="tf-item-con">-' + statsPercent + "% " + defaultStats[statsIndex] + RandWeapAttribute() + '</p>');
        }
    }
}