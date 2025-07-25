const weaponEnchantments = [

    {"name": "Aberration Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs aberrations."},
    {"name": "Advancing", "bonus": 1, "cl": 10, "desc": "+10 ft movement when attacking; stacks with haste."},
    {"name": "Agile", "bonus": 1, "cl": 5, "desc": "Use DEX instead of STR for damage rolls."},
    {"name": "Allying", "bonus": 1, "cl": 5, "desc": "Lend your weapon's bonus to an ally's weapon for one turn."},
    {"name": "Anarchic", "bonus": 2, "cl": 7, "desc": "+2d6 vs lawful; lawful wielders take negative level."},
    {"name": "Anchoring", "bonus": 2, "cl": 10, "desc": "Acts like immovable rod; DC 30 Str to move."},
    {"name": "Animal Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs animals."},
    {"name": "Axiomatic", "bonus": 2, "cl": 7, "desc": "+2d6 vs chaotic; chaotic wielders take negative level."},
    {"name": "Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs chosen type."},
    {"name": "Benevolent", "bonus": 1, "cl": 5, "desc": "Aid another gives bonus equal to weapon enhancement."},
    {"name": "Brilliant Energy", "bonus": 4, "cl": 12, "desc": "Ignores armor/natural armor; can't hit undead/constructs/objects."},
    {"name": "Called", "bonus": 1, "cl": 9, "desc": "Teleport weapon to hand (100 ft)."},
    {"name": "Conductive", "bonus": 1, "cl": 8, "desc": "Channel touch spells/abilities through weapon."},
    {"name": "Construct Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs constructs."},
    {"name": "Corrosive", "bonus": 1, "cl": 8, "desc": "+1d6 acid damage."},
    {"name": "Corrosive Burst", "bonus": 2, "cl": 10, "desc": "+1d6 acid; crits deal +1d10 acid."},
    {"name": "Countering", "bonus": 1, "cl": 9, "desc": "+2 vs disarm/sunder; retaliate on failed attempt."},
    {"name": "Courageous", "bonus": 1, "cl": 5, "desc": "+enhancement bonus to fear saves."},
    {"name": "Cruel", "bonus": 1, "cl": 5, "desc": "Sickens shaken foes; temp HP on kill."},
    {"name": "Cunning", "bonus": 1, "cl": 5, "desc": "+4-6 to confirm crits if Knowledge check succeeds."},
    {"name": "Dancing", "bonus": 4, "cl": 18, "desc": "Weapon fights on its own for 4 rounds."},
    {"name": "Deadly", "bonus": 1, "cl": 7, "desc": "Makes nonlethal weapons lethal; toggle back."},
    {"name": "Defending", "bonus": 1, "cl": 8, "desc": "Convert bonus into AC each turn."},
    {"name": "Defiant", "bonus": 2, "cl": 8, "desc": "Resists being dropped; helps stabilize."},
    {"name": "Dispelling", "bonus": 1, "cl": 10, "desc": "Holds dispel magic; adds bonus to check."},
    {"name": "Dispelling Burst", "bonus": 2, "cl": 12, "desc": "Crits trigger stored dispels."},
    {"name": "Disruption", "bonus": 2, "cl": 14, "desc": "Destroys undead on failed Will save."},
    {"name": "Dragon Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs dragons."},
    {"name": "Dueling", "bonus": 0, "cl": 5, "gp_cost": 15000, "desc": "+2 to initiative, disarm, and CMB/CMD vs disarm."},
    {"name": "Fey Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs fey."},
    {"name": "Flaming", "bonus": 1, "cl": 10, "desc": "+1d6 fire damage."},
    {"name": "Flaming Burst", "bonus": 2, "cl": 12, "desc": "+1d6 fire; crits +1d10 fire."},
    {"name": "Furyborn", "bonus": 2, "cl": 7, "desc": "Every time you hit same enemy, get +1 to hit (max +5); resets if they die or you switch." },
    {"name": "Frost", "bonus": 1, "cl": 8, "desc": "+1d6 cold damage."},
    {"name": "Furious", "bonus": 1, "cl": 7, "desc": "+2 enhancement while raging; helps rage powers."},
    {"name": "Ghost Touch", "bonus": 1, "cl": 9, "desc": "Can hit incorporeal creatures as normal."},
    {"name": "Glorious", "bonus": 3, "cl": 15, "desc": "Blinds foes within 30 ft for 1d4 rounds when drawn."},
    {"name": "Glamered", "bonus": 0, "cl": 6, "gp_cost": 4000, "desc": "Looks like other object until used."},
    {"name": "Grayflame", "bonus": 1, "cl": 10, "desc": "+1 enhancement/+1d6 divine damage for a few rounds."},
    {"name": "Grounding", "bonus": 1, "cl": 5, "desc": "+1d6 vs air creatures; +2 vs electric saves."},
    {"name": "Guardian", "bonus": 1, "cl": 5, "desc": "Convert bonus into save bonuses."},
    {"name": "Heartseeker", "bonus": 1, "cl": 10, "desc": "Ignore concealment vs creatures with hearts."},
    {"name": "Holy", "bonus": 2, "cl": 7, "desc": "+2d6 vs evil; evil wielders take negative level."},
    {"name": "Huntsman", "bonus": 1, "cl": 5, "desc": "+[enhancement] to Survival; +1d6 to tracked foes."},
    {"name": "Humanoid Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs humanoids."},
    {"name": "Icy Burst", "bonus": 2, "cl": 10, "desc": "+1d6 cold; crits deal +1d10 cold."},
    {"name": "Igniting", "bonus": 2, "cl": 10, "desc": "Crits ignite targets if Flaming is on."},
    {"name": "Impact", "bonus": 2, "cl": 10, "desc": "Weapon deals damage as one size larger."},
    {"name": "Impervious", "bonus": 0, "cl": 8, "gp_cost": 3000, "desc": "Doubled HP/hardness; can't decay or be disarmed easily."},
    {"name": "Invigorating", "bonus": 2, "cl": 10, "desc": "Gain temp HP equal to bonus when initiative is rolled."},
    {"name": "Jurist", "bonus": 1, "cl": 5, "desc": "+[enhancement] to Sense Motive."},
    {"name": "Keen", "bonus": 1, "cl": 10, "desc": "Doubles weapon crit range (slashing or piercing only)."},
    {"name": "Ki Focus", "bonus": 1, "cl": 8, "desc": "Lets monks use ki abilities through weapon."},
    {"name": "Ki Intensifying", "bonus": 2, "cl": 12, "desc": "Add enhancement bonus to ki DCs/damage."},
    {"name": "Lifesurge", "bonus": 2, "cl": 10, "desc": "+bonus vs necromancy; gain temp HP; crits vs undead heal."},
    {"name": "Limning", "bonus": 1, "cl": 5, "desc": "Outlines invisible/concealed targets struck."},
    {"name": "Magical Beast Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs magical beasts."},
    {"name": "Menacing", "bonus": 1, "cl": 5, "desc": "+2 on flank attacks if flanking with ally."},
    {"name": "Merciful", "bonus": 1, "cl": 5, "desc": "Deals nonlethal; +1d6 nonlethal damage."},
    {"name": "Mighty Cleaving", "bonus": 1, "cl": 5, "desc": "Gain second Cleave attack if first hits."},
    {"name": "Mimetic", "bonus": 1, "cl": 5, "desc": "Resist energy type struck by for 1 round."},
    {"name": "Monstrous Humanoid Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs monstrous humanoids."},
    {"name": "Negating", "bonus": 2, "cl": 10, "desc": "Nullifies DR on crit; lasts 1 round."},
    {"name": "Neutralizing", "bonus": 1, "cl": 10, "desc": "+1d6 vs acid/earth; neutralize acid."},
    {"name": "Nullifying", "bonus": 3, "cl": 15, "desc": "Suppress magical defenses for 1 round on hit."},
    {"name": "Ominous", "bonus": 1, "cl": 5, "desc": "+[enhancement] to Intimidate; may cause shaken."},
    {"name": "Ooze Bane", "bonus": 1, "cl": 5, "desc": "+2 to hit and +2d6 vs oozes."},
    {"name": "Outsider Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs outsiders."},
    {"name": "Phase Locking", "bonus": 2, "cl": 13, "desc": "Prevents teleportation/blinking for 1 round."},
    {"name": "Planar", "bonus": 1, "cl": 10, "desc": "Ignores 5 DR from outsiders."},
    {"name": "Planestriking", "bonus": 3, "cl": 13, "desc": "Bypasses DR of aligned outsiders."},
    {"name": "Plant Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs plants."},
    {"name": "Quenching", "bonus": 1, "cl": 10, "desc": "+1d6 vs fire; puts out flames."},
    {"name": "Repositioning", "bonus": 3, "cl": 12, "desc": "Crits let you move enemy 5 ft (no AoO)."},
    {"name": "Seaborne", "bonus": 1, "cl": 5, "desc": "Negates underwater penalties; +[enhancement] Swim."},
    {"name": "Shock", "bonus": 1, "cl": 8, "desc": "+1d6 electricity."},
    {"name": "Shocking Burst", "bonus": 2, "cl": 12, "desc": "+1d6 electricity; crits +1d10."},
    {"name": "Spell Stealing", "bonus": 3, "cl": 15, "desc": "Steal spell effect on crit."},
    {"name": "Spell Storing", "bonus": 1, "cl": 12, "desc": "Store 3rd-level spell; cast on hit."},
    {"name": "Speed", "bonus": 3, "cl": 17, "desc": "Extra attack on full attack."},
    {"name": "Stalking", "bonus": 2, "cl": 10, "desc": "Bonus precision damage after studying foe."},
    {"name": "Thawing", "bonus": 1, "cl": 5, "desc": "+1d6 vs cold; melts ice."},
    {"name": "Throwing", "bonus": 1, "cl": 5, "desc": "Throw weapon 10 ft; returns."},
    {"name": "Thundering", "bonus": 1, "cl": 8, "desc": "Crit deals +1d8 sonic; may deafen."},
    {"name": "Transformative", "bonus": 0, "cl": 10, "gp_cost": 10000, "desc": "Shift weapon form/type."},
    {"name": "Undead Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs undead."},
    {"name": "Unholy", "bonus": 2, "cl": 7, "desc": "+2d6 vs good; good wielders take negative level."},
    {"name": "Unaligned", "bonus": 1, "cl": 7, "desc": "Ignore alignment-based damage reductions."},
    {"name": "Valiant", "bonus": 1, "cl": 5, "desc": "+1d6 vs challenged foe; +2 disarm/sunder."},
    {"name": "Vermin Bane", "bonus": 1, "cl": 8, "desc": "+2 to hit and +2d6 vs vermin."},
    {"name": "Vicious", "bonus": 1, "cl": 9, "desc": "+2d6 to foe, take 1d6 self-damage."},
    {"name": "Vorpal", "bonus": 5, "cl": 18, "desc": "Decapitate on confirmed 20 (slashing only)."},
    {"name": "Wounding", "bonus": 2, "cl": 10, "desc": "Deals 1 Con bleed per hit."}
];

const armorEnchantments = [
    {"name": "Benevolent", "bonus": 0, "gp_cost": 2000, "desc": "+2 morale bonus to Aid Another AC"},
    {"name": "Billowing", "bonus": 1, "gp_cost": null, "desc": "Billows dramatically"},
    {"name": "Cocooning", "bonus": 1, "gp_cost": null, "desc": "Absorbs damage and releases it later"},
    {"name": "Poison-resistant", "bonus": 0, "gp_cost": 2250, "desc": "+5 save vs. poison"},
    {"name": "Balanced", "bonus": 1, "gp_cost": null, "desc": "Easier balance/stability"},
    {"name": "Bitter", "bonus": 1, "gp_cost": null, "desc": "Retaliates against attackers"},
    {"name": "Bolstering", "bonus": 1, "gp_cost": null, "desc": "Increases saving throw support"},
    {"name": "Champion", "bonus": 1, "gp_cost": null, "desc": "Boosts morale or performance"},
    {"name": "Dastard", "bonus": 1, "gp_cost": null, "desc": "Frightens foes"},
    {"name": "Deathless", "bonus": 1, "gp_cost": null, "desc": "Avoid death/negative energy"},
    {"name": "Defiant", "bonus": 1, "gp_cost": null, "desc": "Resists control or domination"},
    {"name": "Fortification (light)", "bonus": 1, "gp_cost": null, "desc": "25% negate crit/sneak"},
    {"name": "Grinding", "bonus": 1, "gp_cost": null, "desc": "Inflicts wounds over time"},
    {"name": "Impervious", "bonus": 1, "gp_cost": null, "desc": "Resists sundering and damage"},
    {"name": "Mirrored", "bonus": 1, "gp_cost": null, "desc": "Reflects light, deters gaze attacks"},
    {"name": "Spell storing", "bonus": 1, "gp_cost": null, "desc": "Holds a single spell (max 3rd)"},
    {"name": "Stanching", "bonus": 1, "gp_cost": null, "desc": "Reduces bleed damage"},
    {"name": "Warding", "bonus": 1, "gp_cost": null, "desc": "Defensive bonus against spells"},
    {"name": "Glamered", "bonus": 0, "gp_cost": 2700, "desc": "Disguises armor as normal clothing"},
    {"name": "Jousting", "bonus": 0, "gp_cost": 3750, "desc": "+2 CMD vs. charge, free mount action"},
    {"name": "Shadow", "bonus": 0, "gp_cost": 3750, "desc": "+5 Stealth"},
    {"name": "Slick", "bonus": 0, "gp_cost": 3750, "desc": "+5 Escape Artist"},
    {"name": "Expeditious", "bonus": 0, "gp_cost": 4000, "desc": "+10 ft. movement speed"},
    {"name": "Creeping", "bonus": 0, "gp_cost": 5000, "desc": "Move silently in armor"},
    {"name": "Rallying", "bonus": 0, "gp_cost": 5000, "desc": "+2 morale saves if allies succeed"},
    {"name": "Spell resistance (13)", "bonus": 2, "gp_cost": null, "desc": "SR 13"},
    {"name": "Adhesive", "bonus": 0, "gp_cost": 7000, "desc": "Automatically grapples attackers"},
    {"name": "Cotraveling", "bonus": 3, "gp_cost": null, "desc": "Carry allies with teleport"},
    {"name": "Brawling", "bonus": 3, "gp_cost": null, "desc": "+2 unarmed, counts as magic"},
    {"name": "Hosteling", "bonus": 0, "gp_cost": 7500, "desc": "Store mount inside armor"},
    {"name": "Radiant", "bonus": 0, "gp_cost": 7500, "desc": "Lights up, daylight 1/day"},
    {"name": "Delving", "bonus": 0, "gp_cost": 10000, "desc": "Burrow through stone"},
    {"name": "Putrid", "bonus": 0, "gp_cost": 10000, "desc": "Sickens attackers"},
    {"name": "Fortification (moderate)", "bonus": 3, "gp_cost": null, "desc": "75% negate crit/sneak"},
    {"name": "Ghost touch", "bonus": 3, "gp_cost": null, "desc": "Affects incorporeal creatures"},
    {"name": "Invulnerability", "bonus": 3, "gp_cost": null, "desc": "+5 enhancement bonus"},
    {"name": "Shadow blending", "bonus": 3, "gp_cost": null, "desc": "+2 AC in dim light"},
    {"name": "Spell resistance (15)", "bonus": 3, "gp_cost": null, "desc": "SR 15"},
    {"name": "Titanic", "bonus": 3, "gp_cost": null, "desc": "Grants enlarge person benefits"},
    {"name": "Wild", "bonus": 3, "gp_cost": null, "desc": "Retains wild shape function"},
    {"name": "Harmonizing", "bonus": 0, "gp_cost": 15000, "desc": "Counters performance failure"},
    {"name": "Shadow, improved", "bonus": 0, "gp_cost": 15000, "desc": "+10 Stealth"},
    {"name": "Slick, improved", "bonus": 0, "gp_cost": 15000, "desc": "+10 Escape Artist"},
    {"name": "Energy resistance", "bonus": 0, "gp_cost": 18000, "desc": "Resist 10 to one energy"},
    {"name": "Martyring", "bonus": 0, "gp_cost": 18000, "desc": "Transfer damage to self"},
    {"name": "Spell resistance (17)", "bonus": 4, "gp_cost": null, "desc": "SR 17"},
    {"name": "Righteous", "bonus": 0, "gp_cost": 27000, "desc": "+2d6 vs. evil once/day"},
    {"name": "Unbound", "bonus": 0, "gp_cost": 27000, "desc": "+2 CMD vs. grapple, break bonds"},
    {"name": "Unrighteous", "bonus": 0, "gp_cost": 27000, "desc": "+2d6 vs. good once/day"},
    {"name": "Vigilant", "bonus": 0, "gp_cost": 27000, "desc": "+1 Initiative, +2 Perception"},
    {"name": "Determination", "bonus": 0, "gp_cost": 30000, "desc": "Self-resurrect 1/day"},
    {"name": "Shadow, greater", "bonus": 0, "gp_cost": 33750, "desc": "+15 Stealth"},
    {"name": "Slick, greater", "bonus": 0, "gp_cost": 33750, "desc": "+15 Escape Artist"},
    {"name": "Energy resistance, improved", "bonus": 0, "gp_cost": 42000, "desc": "Resist 20"},
    {"name": "Etherealness", "bonus": 0, "gp_cost": 49000, "desc": "Ethereal Jaunt 1/day"},
    {"name": "Undead controlling", "bonus": 0, "gp_cost": 49000, "desc": "Command undead 1/day"},
    {"name": "Energy resistance, greater", "bonus": 0, "gp_cost": 66000, "desc": "Resist 30"},
    {"name": "Fortification (heavy)", "bonus": 5, "gp_cost": null, "desc": "100% negate crit/sneak"},
    {"name": "Spell resistance (19)", "bonus": 5, "gp_cost": null, "desc": "SR 19"}
];

const weaponBaseItems = [
    {"name": "Club", "category": "Simple", "cost": 0},
    {"name": "Dagger", "category": "Simple", "cost": 2},
    {"name": "Heavy Mace", "category": "Simple", "cost": 12},
    {"name": "Light Mace", "category": "Simple", "cost": 5},
    {"name": "Morningstar", "category": "Simple", "cost": 8},
    {"name": "Sickle", "category": "Simple", "cost": 6},
    {"name": "Shortspear", "category": "Simple", "cost": 1},
    {"name": "Spear", "category": "Simple", "cost": 2},
    {"name": "Crossbow, Light", "category": "Simple", "cost": 35},
    {"name": "Crossbow, Heavy", "category": "Simple", "cost": 50},
    {"name": "Quarterstaff", "category": "Simple", "cost": 0},
    {"name": "Longsword", "category": "Martial", "cost": 15},
    {"name": "Rapier", "category": "Martial", "cost": 20},
    {"name": "Scimitar", "category": "Martial", "cost": 15},
    {"name": "Battleaxe", "category": "Martial", "cost": 10},
    {"name": "Warhammer", "category": "Martial", "cost": 12},
    {"name": "Greataxe", "category": "Martial", "cost": 20},
    {"name": "Greatsword", "category": "Martial", "cost": 50},
    {"name": "Halberd", "category": "Martial", "cost": 10},
    {"name": "Lance", "category": "Martial", "cost": 10},
    {"name": "Composite Longbow", "category": "Martial", "cost": 100},
    {"name": "Whip", "category": "Exotic", "cost": 1},
    {"name": "Bastard Sword", "category": "Exotic", "cost": 35},
    {"name": "Double Axe", "category": "Exotic", "cost": 60},
    {"name": "Chain Whip", "category": "Exotic", "cost": 25},
    {"name": "Spiked Chain", "category": "Exotic", "cost": 25},
    {"name": "Orc Double Axe", "category": "Exotic", "cost": 60},
    {"name": "Battle Claw", "category": "Exotic", "cost": 50},
    {"name": "Shurikens x50", "category": "Exotic", "cost": 10}
];

const armorBaseItems = [
    {"name": "Padded", "type": "Light", "ac": 1, "cost": 5},
    {"name": "Leather", "type": "Light", "ac": 2, "cost": 10},
    {"name": "Studded Leather", "type": "Light", "ac": 3, "cost": 25},
    {"name": "Chain Shirt", "type": "Light", "ac": 4, "cost": 100},
    {"name": "Hide", "type": "Medium", "ac": 4, "cost": 15},
    {"name": "Scale Mail", "type": "Medium", "ac": 5, "cost": 50},
    {"name": "Chainmail", "type": "Medium", "ac": 6, "cost": 150},
    {"name": "Breastplate", "type": "Medium", "ac": 6, "cost": 200},
    {"name": "Splint Mail", "type": "Heavy", "ac": 7, "cost": 200},
    {"name": "Banded Mail", "type": "Heavy", "ac": 7, "cost": 250},
    {"name": "Half-Plate", "type": "Heavy", "ac": 8, "cost": 600},
    {"name": "Full Plate", "type": "Heavy", "ac": 9, "cost": 1500},
    {"name": "Buckler", "type": "Shield", "ac": 1, "cost": 5},
    {"name": "Shield, Light Wooden", "type": "Shield", "ac": 1, "cost": 3},
    {"name": "Shield, Light Steel", "type": "Shield", "ac": 1, "cost": 9},
    {"name": "Shield, Heavy Wooden", "type": "Shield", "ac": 2, "cost": 7},
    {"name": "Shield, Heavy Steel", "type": "Shield", "ac": 2, "cost": 20},
    {"name": "Tower Shield", "type": "Shield", "ac": 4, "cost": 30}
];

const baseMaterials = {
    "None": {"dc_mod": 0, "cost": 0},
    "Adamantine": {"dc_mod": 6, "cost": {
        "Light Armor": 5000,
        "Medium Armor": 10000,
        "Heavy Armor": 15000,
        "Weapon": 3000,
        "Shield": 2000
    }},
    "Dragonhide": {"dc_mod": 4, "cost": {
        "Light Armor": 1000,
        "Medium Armor": 4000,
        "Heavy Armor": 9000,
        "Shield": 1000
    }},
    "Cold Iron": {"dc_mod": 2, "cost": {
        "Weapon": 2000
    }},
    "Mithral": {"dc_mod": 4, "cost": {
        "Light Armor": 1000,
        "Medium Armor": 4000,
        "Heavy Armor": 9000,
        "Shield": 1000
    }}
};

// Helper functions
function enhancementCost(bonus, itemType) {
    if (itemType === "Weapon") {
        const weaponCosts = {
            1: 2000,
            2: 8000,
            3: 18000,
            4: 32000,
            5: 50000,
            6: 72000,
            7: 98000,
            8: 128000,
            9: 162000,
            10: 200000
        };
        return weaponCosts[bonus] || 0;
    } else {  // Armor
        const armorCosts = {
            1: 1000,
            2: 4000,
            3: 9000,
            4: 16000,
            5: 25000,
            6: 36000,
            7: 49000,
            8: 64000,
            9: 81000,
            10: 100000
        };
        return armorCosts[bonus] || 0;
    }
}

function enhancementCl(bonus) {
    return bonus * 3;  // +1 → 3rd, +2 → 6th, ..., +5 → 15th
}

// DOM elements
const itemTypeRadios = document.querySelectorAll('input[name="itemType"]');
const baseItemSelect = document.getElementById('baseItem');
const existingBonusInput = document.getElementById('existingBonus');
const desiredBonusInput = document.getElementById('desiredBonus');
const materialSelect = document.getElementById('material');
const knowSpellsCheckbox = document.getElementById('knowSpells');
const alreadyMasterworkCheckbox = document.getElementById('alreadyMasterwork');
const calculateBtn = document.getElementById('calculateBtn');
const outputDiv = document.getElementById('output');
const desiredEnchantmentsDiv = document.getElementById('desiredEnchantments');

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set default item type to Weapon
    document.getElementById('weaponType').checked = true;
    
    // Render initial items and enchantments
    renderBaseItems();
    renderEnchantments();
    
    // Set up event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Item type change
    itemTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            renderBaseItems();
            renderEnchantments();
        });
    });
    
    // Calculate button
    calculateBtn.addEventListener('click', calculate);
}

// Initialize the app
function init() {
    renderBaseItems();
    renderEnchantments();
    
    // Event listeners
    itemTypeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            renderBaseItems();
            renderEnchantments();
        });
    });
    baseItemSelect.addEventListener('change', () => {
            
    calculateBtn.addEventListener('click', calculate);
})

function renderBaseItems() {
    const itemType = document.querySelector('input[name="itemType"]:checked').value;
    const items = itemType === 'Weapon' ? weaponBaseItems : armorBaseItems;
    
    // Clear existing options
    baseItemSelect.innerHTML = '';
    
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '-- Select Base Item --';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    baseItemSelect.appendChild(defaultOption);
    
    // Add all items
    items.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        baseItemSelect.appendChild(option);
    });
    
    console.log('Base items rendered:', items.length); // Debug
}

function renderEnchantments() {
    const itemType = document.querySelector('input[name="itemType"]:checked').value;
    const enchantments = itemType === 'Weapon' ? weaponEnchantments : armorEnchantments;
    
    // Clear existing enchantments
    desiredEnchantmentsDiv.innerHTML = '';

    // Create container divs for scrollable content
    const existingContainer = document.createElement('div');
    existingContainer.className = 'enchantment-container';

    const desiredContainer = document.createElement('div');
    desiredContainer.className = 'enchantment-container';
    desiredEnchantmentsDiv.appendChild(desiredContainer);
    
    // Add all enchantments
    enchantments.forEach(ench => {
        // Desired enchantments
        const desiredDiv = document.createElement('div');
        desiredDiv.className = 'enchantment-item';
        
        const desiredCheckbox = document.createElement('input');
        desiredCheckbox.type = 'checkbox';
        desiredCheckbox.id = `desired-${ench.name.replace(/\s+/g, '-')}`;
        desiredCheckbox.dataset.name = ench.name;
        desiredCheckbox.dataset.bonus = ench.bonus;
        
        const desiredLabel = document.createElement('label');
        desiredLabel.htmlFor = desiredCheckbox.id;
        desiredLabel.innerHTML = `<strong>${ench.name}</strong> (+${ench.bonus})`;
        
        const desiredDesc = document.createElement('div');
        desiredDesc.className = 'enchantment-desc';
        desiredDesc.textContent = ench.desc;
        
        desiredDiv.appendChild(desiredCheckbox);
        desiredDiv.appendChild(desiredLabel);
        desiredDiv.appendChild(desiredDesc);
        desiredContainer.appendChild(desiredDiv);
    });
    
    console.log('Enchantments rendered:', enchantments.length); // Debug
}
function toggleAllEnchantments(type, checked) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = checked;
    });
}

function getSelectedEnchantments(container) {
    const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
    const enchantments = [];
    
    checkboxes.forEach(checkbox => {
        const name = checkbox.dataset.name;
        const bonus = parseInt(checkbox.dataset.bonus);
        const ench = (itemTypeRadios[0].checked ? weaponEnchantments : armorEnchantments)
            .find(e => e.name === name);
        enchantments.push(ench);
    });
    
    return enchantments;
}

function calculate() {
    // Input validation - set minimum bonus to 1
    const desiredBonus = Math.max(1, parseInt(desiredBonusInput.value) || 1);
    desiredBonusInput.value = desiredBonus; // Update the input field

    if (isNaN(desiredBonus)) {
        outputDiv.textContent = "Error: Desired enhancement bonus must be a number";
        return;
    }

    if (desiredBonus < 1 || desiredBonus > 10) {
        outputDiv.textContent = "Error: Desired enhancement bonus must be between 1 and 10";
        return;
    }

    const itemType = document.querySelector('input[name="itemType"]:checked').value;
    const material = materialSelect.value;

    // Material validation
    if (itemType === "Weapon" && material === "Dragonhide") {
        outputDiv.textContent = "Error: Dragonhide cannot be used for weapons";
        return;
    }

    // Get selected enchantments
    const desiredEnchantments = getSelectedEnchantments(desiredEnchantmentsDiv);
    const desiredTotal = desiredBonus + desiredEnchantments.reduce((sum, ench) => sum + (ench.bonus || 0), 0);

    if (desiredTotal > 10) {
        outputDiv.textContent = "Error: Total bonus exceeds +10 limit.";
        return;
    }

    // Armor must be +1 before special abilities
    if (itemType !== "Weapon" && desiredEnchantments.length > 0 && desiredBonus < 1) {
        outputDiv.textContent = "Error: Armor/Shield must have +1 enhancement before adding special abilities";
        return;
    }

    // Calculate costs
    const baseCost = enhancementCost(desiredTotal, itemType);
    let extraCost = 0;

    desiredEnchantments.forEach(ench => {
        if (ench.gp_cost !== undefined && ench.gp_cost !== null) {
            extraCost += ench.gp_cost;
        } else if (ench.name.includes("Spell Resistance")) {
            const sr = parseInt(ench.name.match(/\d+/)[0]);
            extraCost += (sr - 12) * 10000;
        } else if (ench.name.includes("Energy Resistance")) {
            const resValue = parseInt(ench.name.match(/\d+/)[0]);
            const resBonus = resValue / 10;
            if (material === "Dragonhide") {
                extraCost += (resBonus ** 2) * 750;  // 25% discount
            } else {
                extraCost += (resBonus ** 2) * 1000;
            }
        }
    });

    // Get base item info
    const baseItemName = baseItemSelect.value;
    let baseItem, baseItemCost, itemCategory;

    if (itemType === "Weapon") {
        baseItem = weaponBaseItems.find(w => w.name === baseItemName) || {};
        baseItemCost = baseItem.cost || 0;
        itemCategory = baseItem.category || "Martial";
    } else {
        baseItem = armorBaseItems.find(a => a.name === baseItemName) || {};
        baseItemCost = baseItem.cost || 0;
        itemCategory = baseItem.type || "Light";
    }

    // Material cost
    const materialInfo = baseMaterials[material] || {"dc_mod": 0, "cost": 0};
    let materialCost = 0;

    if (material !== "None") {
        if (itemType === "Weapon") {
            materialCost = materialInfo.cost?.Weapon || 0;
        } else {
            if (itemCategory + " Armor" in materialInfo.cost) {
                materialCost = materialInfo.cost[itemCategory + " Armor"];
            } else if (itemCategory === "Shield") {
                materialCost = materialInfo.cost?.Shield || 0;
            }
        }
    }

    // Masterwork cost
    let masterworkCost = 0;
    if (!alreadyMasterworkCheckbox.checked) {
        masterworkCost = itemType === "Weapon" ? 300 : 150;
    }

    const totalCost = baseItemCost + materialCost + masterworkCost + baseCost + extraCost;
    const craftingCost = Math.floor((baseCost + extraCost) * 0.5); // Should include extraCost in crafting cost
    const marketPrice = totalCost;
    const sale60 = Math.floor(marketPrice * 0.6);

    // Crafting DCs
    const materialDcMod = materialInfo.dc_mod || 0;
    let craftDc;

    if (itemType === "Weapon") {
        craftDc = 12 + (desiredBonus * 4) + materialDcMod;
        if (itemCategory === "Martial") {
            craftDc += 3;
        } else if (itemCategory === "Exotic") {
            craftDc += 6;
        }
    } else {
        craftDc = 10 + (baseItem.ac || 0) + (desiredBonus * 4) + materialDcMod;
    }

    // Caster Level
    const enchantCl = Math.max(...desiredEnchantments.map(ench => ench.cl || 0), 0);
    const bonusCl = 3 * desiredBonus;
    const requiredCl = Math.max(enchantCl, bonusCl, 8);

    // Crafting time - based on MARKET PRICE (totalCost), not just craftingCost
    const basePrice = totalCost; // This is the market price we use for time calculation
    const hoursNormal = Math.max(8, Math.ceil(basePrice / 1000) * 8);
    const daysNormal = Math.ceil(hoursNormal / 8); // Convert to days
    const hoursAccel = Math.max(4, Math.ceil(basePrice / 1000) * 4);
    const daysAccel = Math.ceil(hoursAccel / 8); // Convert to days

    // Masterwork info
    let mwInfo = "";
    if (!alreadyMasterworkCheckbox.checked) {
        const mwDc = 20;
        mwInfo = `\nMasterwork DC: ${mwDc} (Cost: ${masterworkCost} gp)`;
    }

    // Build output
    const statLines = [
        `Item Type: ${itemType}`,
        `Base Item: ${baseItemName}`,
        `Material: ${material} (+${materialDcMod} DC)`,
        `Total Effective Bonus: +${desiredTotal}`,
        "",
        "Selected Enchantments:"
    ];

    desiredEnchantments.forEach(ench => {
        statLines.push(`- ${ench.name} (+${ench.bonus || 0}): ${ench.desc || ''}`);
    });

    statLines.push(
        "",
        "--- Costs ---",
        `Base Item Cost: ${baseItemCost.toLocaleString()} gp`,
        `Material Cost: ${materialCost.toLocaleString()} gp`,
        masterworkCost ? `Masterwork Cost: ${masterworkCost.toLocaleString()} gp` : "Masterwork: Included",
        `Enhancement Cost: ${baseCost.toLocaleString()} gp`,
        `Additional Enchantment Costs: ${extraCost.toLocaleString()} gp`,
        `Total Market Price: ${marketPrice.toLocaleString()} gp`,
        `Crafting Cost (50%): ${craftingCost.toLocaleString()} gp`,
        `Resale Estimate (60%): ${sale60.toLocaleString()} gp`,
        "",
        "--- Crafting Requirements ---",
        `Craft DC: ${craftDc} (Base ${craftDc - materialDcMod} + Material ${materialDcMod})`,
        `Required Caster Level: ${requiredCl} (3× enhancement)`,
        `Spellcraft DC (known): ${craftDc}`,
        `Spellcraft DC (unknown): ${craftDc + 5}`,
        mwInfo,
        "",
        "--- Crafting Time ---",
        `Normal: ${hoursNormal} hours (${daysNormal} days)`,
        `Accelerated: ${hoursAccel} hours (${daysAccel} days) (DC +5)`
    );

    outputDiv.innerHTML = statLines.filter(line => line !== "").join('<br>');
}}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

document.getElementById('enchantmentSearch').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    const enchantments = document.querySelectorAll('#desiredEnchantments .enchantment-item');

    // Show all if search is empty
    if (searchTerm === '') {
        enchantments.forEach(el => el.style.display = 'block');
        return;
    }

    // Perform exact word-start matching
    enchantments.forEach(enchantment => {
        const text = enchantment.textContent.toLowerCase();

        // Split into words and check for exact matches at word starts
        const words = text.split(/\s+/);
        const hasMatch = words.some(word => word.substring(0, searchTerm.length) === searchTerm);

        enchantment.style.display = hasMatch ? 'block' : 'none';
    });
});
