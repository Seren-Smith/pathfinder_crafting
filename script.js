const weaponEnchantments = [
    {"name": "Agile", "bonus": 1, "cl": 5, "desc": "Use DEX instead of STR for damage rolls"},
    {"name": "Allying", "bonus": 1, "cl": 5, "desc": "Adds allies' enhancement bonuses to attacks"},
    {"name": "Anarchic", "bonus": 2, "cl": 7, "desc": "+2d6 vs. lawful"},
    {"name": "Anchoring", "bonus": 2, "cl": 10, "desc": "Prevents dimensional travel"},
    {"name": "Axiomatic", "bonus": 2, "cl": 7, "desc": "+2d6 vs. chaotic"},
    {"name": "Bane", "bonus": 1, "cl": 8, "desc": "+2 enhancement, +2d6 vs. chosen creature type"},
    {"name": "Benevolent", "bonus": 1, "cl": 5, "desc": "Bonus to Aid Another"},
    {"name": "Called", "bonus": 1, "cl": 9, "desc": "Teleport weapon to hand"},
    {"name": "Conductive", "bonus": 1, "cl": 8, "desc": "Transfer energy to target"},
    {"name": "Corrosive", "bonus": 1, "cl": 8, "desc": "+1d6 acid"},
    {"name": "Corrosive Burst", "bonus": 2, "cl": 10, "desc": "+1d6 acid, +1d10 on crit"},
    {"name": "Countering", "bonus": 1, "cl": 9, "desc": "Disrupts spells and abilities"},
    {"name": "Courageous", "bonus": 1, "cl": 5, "desc": "Enhances morale bonuses"},
    {"name": "Cruel", "bonus": 1, "cl": 5, "desc": "Sickens target, grants temp HP"},
    {"name": "Cunning", "bonus": 1, "cl": 5, "desc": "Detect lies or thoughts"},
    {"name": "Deadly", "bonus": 1, "cl": 7, "desc": "Increase crit multiplier"},
    {"name": "Defending", "bonus": 1, "cl": 8, "desc": "Transfer bonus to AC"},
    {"name": "Defiant", "bonus": 2, "cl": 8, "desc": "Defend against specific foes"},
    {"name": "Dispelling", "bonus": 1, "cl": 10, "desc": "Dispel magic on hit"},
    {"name": "Dispelling Burst", "bonus": 2, "cl": 12, "desc": "Greater dispel on crit"},
    {"name": "Disruption", "bonus": 2, "cl": 14, "desc": "Destroys undead on crit"},
    {"name": "Flaming", "bonus": 1, "cl": 10, "desc": "+1d6 fire"},
    {"name": "Flaming Burst", "bonus": 2, "cl": 12, "desc": "+1d6 fire, +1d10 on crit"},
    {"name": "Frost", "bonus": 1, "cl": 8, "desc": "+1d6 cold"},
    {"name": "Furious", "bonus": 1, "cl": 7, "desc": "+2 enhancement while raging"},
    {"name": "Ghost Touch", "bonus": 1, "cl": 9, "desc": "Affects incorporeal targets"},
    {"name": "Grayflame", "bonus": 1, "cl": 10, "desc": "Channel energy enhances weapon"},
    {"name": "Grounding", "bonus": 1, "cl": 5, "desc": "Protects against electrical effects"},
    {"name": "Guardian", "bonus": 1, "cl": 5, "desc": "Transfer bonus to adjacent ally"},
    {"name": "Heartseeker", "bonus": 1, "cl": 10, "desc": "Ignore concealment"},
    {"name": "Holy", "bonus": 2, "cl": 7, "desc": "+2d6 vs. evil"},
    {"name": "Huntsman", "bonus": 1, "cl": 5, "desc": "+1d6 vs. studied quarry"},
    {"name": "Igniting", "bonus": 2, "cl": 10, "desc": "Set target ablaze on crit"},
    {"name": "Impact", "bonus": 2, "cl": 10, "desc": "Increased damage dice"},
    {"name": "Invigorating", "bonus": 2, "cl": 10, "desc": "Heals temp HP on hit"},
    {"name": "Jurist", "bonus": 1, "cl": 5, "desc": "+2 to CMB on legal combat"},
    {"name": "Keen", "bonus": 1, "cl": 10, "desc": "Double crit range"},
    {"name": "Ki Focus", "bonus": 1, "cl": 8, "desc": "Use ki abilities with weapon"},
    {"name": "Ki Intensifying", "bonus": 2, "cl": 10, "desc": "+1 ki pool use"},
    {"name": "Lifesurge", "bonus": 2, "cl": 10, "desc": "+1d8+enh on channeling"},
    {"name": "Limning", "bonus": 1, "cl": 5, "desc": "Outline invisible creatures"},
    {"name": "Menacing", "bonus": 1, "cl": 5, "desc": "+2 flanking"},
    {"name": "Merciful", "bonus": 1, "cl": 5, "desc": "+1d6 nonlethal"},
    {"name": "Mighty Cleaving", "bonus": 1, "cl": 5, "desc": "Second cleave attempt"},
    {"name": "Mimetic", "bonus": 1, "cl": 5, "desc": "Adapts to resistances"},
    {"name": "Neutralizing", "bonus": 1, "cl": 10, "desc": "Cures poison on crit"},
    {"name": "Ominous", "bonus": 1, "cl": 5, "desc": "Cause shaken on crit"},
    {"name": "Planar", "bonus": 1, "cl": 10, "desc": "Bypass DR/align"},
    {"name": "Quenching", "bonus": 1, "cl": 10, "desc": "Suppress fire effects"},
    {"name": "Seaborne", "bonus": 1, "cl": 5, "desc": "Buoyant, water-adapted"},
    {"name": "Shock", "bonus": 1, "cl": 8, "desc": "+1d6 electricity"},
    {"name": "Shocking Burst", "bonus": 2, "cl": 12, "desc": "+1d6 elec, +1d10 on crit"},
    {"name": "Spell Storing", "bonus": 1, "cl": 12, "desc": "Store 1 spell (≤3rd)"},
    {"name": "Spell Stealing", "bonus": 3, "cl": 15, "desc": "Steal active spells"},
    {"name": "Speed", "bonus": 3, "cl": 17, "desc": "Extra attack on full attack"},
    {"name": "Stalking", "bonus": 2, "cl": 10, "desc": "Track better"},
    {"name": "Thawing", "bonus": 1, "cl": 5, "desc": "Negates cold-based paralysis"},
    {"name": "Throwing", "bonus": 1, "cl": 5, "desc": "Return after throwing"},
    {"name": "Thundering", "bonus": 1, "cl": 8, "desc": "+1d8 sonic on crit, deafens"},
    {"name": "Transformative", "bonus": 0, "cl": 10, "gp_cost": 10000, "desc": "Change shape"},
    {"name": "Unholy", "bonus": 2, "cl": 7, "desc": "+2d6 vs. good"},
    {"name": "Valiant", "bonus": 1, "cl": 5, "desc": "+2 vs. charge/charge attacks"},
    {"name": "Vicious", "bonus": 1, "cl": 9, "desc": "+2d6 target, 1d6 self"},
    {"name": "Vorpal", "bonus": 5, "cl": 18, "desc": "Decapitate on crit"},
    {"name": "Wounding", "bonus": 2, "cl": 10, "desc": "1 bleed dmg/hit"}
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
    {"name": "Orc Double Axe", "category": "Exotic", "cost": 60}
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
const existingEnchantmentsDiv = document.getElementById('existingEnchantments');
const desiredEnchantmentsDiv = document.getElementById('desiredEnchantments');
const selectAllExistingBtn = document.getElementById('selectAllExisting');
const deselectAllExistingBtn = document.getElementById('deselectAllExisting');

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
    
    // Select/Deselect all buttons
    selectAllExistingBtn.addEventListener('click', () => toggleAllEnchantments('existing', true));
    deselectAllExistingBtn.addEventListener('click', () => toggleAllEnchantments('existing', false));
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
    selectAllExistingBtn.addEventListener('click', () => toggleAllEnchantments('existing', true));
    deselectAllExistingBtn.addEventListener('click', () => toggleAllEnchantments('existing', false));
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
    existingEnchantmentsDiv.innerHTML = '';
    desiredEnchantmentsDiv.innerHTML = '';
    
    // Add headers
    const existingHeader = document.createElement('h6');
    existingHeader.textContent = 'Existing Enchantments';
    existingEnchantmentsDiv.appendChild(existingHeader);
    
    const desiredHeader = document.createElement('h6');
    desiredHeader.textContent = 'Desired Enchantments';
    desiredEnchantmentsDiv.appendChild(desiredHeader);
    
    // Create container divs for scrollable content
    const existingContainer = document.createElement('div');
    existingContainer.className = 'enchantment-container';
    existingEnchantmentsDiv.appendChild(existingContainer);
    
    const desiredContainer = document.createElement('div');
    desiredContainer.className = 'enchantment-container';
    desiredEnchantmentsDiv.appendChild(desiredContainer);
    
    // Add all enchantments
    enchantments.forEach(ench => {
        // Existing enchantments
        const existingDiv = document.createElement('div');
        existingDiv.className = 'enchantment-item';
        
        const existingCheckbox = document.createElement('input');
        existingCheckbox.type = 'checkbox';
        existingCheckbox.id = `existing-${ench.name.replace(/\s+/g, '-')}`;
        existingCheckbox.dataset.name = ench.name;
        existingCheckbox.dataset.bonus = ench.bonus;
        
        const existingLabel = document.createElement('label');
        existingLabel.htmlFor = existingCheckbox.id;
        existingLabel.innerHTML = `<strong>${ench.name}</strong> (+${ench.bonus})`;
        
        const existingDesc = document.createElement('div');
        existingDesc.className = 'enchantment-desc';
        existingDesc.textContent = ench.desc;
        
        existingDiv.appendChild(existingCheckbox);
        existingDiv.appendChild(existingLabel);
        existingDiv.appendChild(existingDesc);
        existingContainer.appendChild(existingDiv);
        
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
    const container = type === 'existing' ? existingEnchantmentsDiv : desiredEnchantmentsDiv;
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
    // Input validation
    const desiredBonus = parseInt(desiredBonusInput.value);
    const existingBonus = parseInt(existingBonusInput.value);
    
    if (isNaN(desiredBonus)) {
        outputDiv.textContent = "Error: Desired enhancement bonus must be a number";
        return;
    }
    
    if (isNaN(existingBonus)) {
        outputDiv.textContent = "Error: Existing enhancement bonus must be a number";
        return;
    }
    
    if (desiredBonus < 0 || desiredBonus > 10) {
        outputDiv.textContent = "Error: Desired enhancement bonus must be between 0 and 10";
        return;
    }
    
    if (existingBonus < 0 || existingBonus > 10) {
        outputDiv.textContent = "Error: Existing enhancement bonus must be between 0 and 10";
        return;
    }
    
    const itemType = document.querySelector('input[name="itemType"]:checked').value;
    const material = materialSelect.value;
    
    // Material validation
    if (itemType === "Weapon" && material === "Dragonhide") {
        outputDiv.textContent = "Error: Dragonhide cannot be used for weapons";
        return;
    }
    
    const enchantments = itemType === "Weapon" ? weaponEnchantments : armorEnchantments;
    
    // Get selected enchantments
    const existingEnchantments = getSelectedEnchantments(existingEnchantmentsDiv);
    const desiredEnchantments = getSelectedEnchantments(desiredEnchantmentsDiv);
    
    // Calculate effective bonuses
    const existingTotal = existingBonus + existingEnchantments.reduce((sum, ench) => sum + (ench.bonus || 0), 0);
    
    // Only count desired enchantments that aren't already selected
    const newDesiredEnchantments = desiredEnchantments.filter(desired => 
        !existingEnchantments.some(existing => existing.name === desired.name)
    );
    
    const desiredTotal = desiredBonus + newDesiredEnchantments.reduce((sum, ench) => sum + (ench.bonus || 0), 0);
    
    if (desiredTotal > 10) {
        outputDiv.textContent = "Error: Total bonus exceeds +10 limit.";
        return;
    }
    
    // Armor must be +1 before special abilities
    if (itemType !== "Weapon" && newDesiredEnchantments.length > 0 && desiredBonus < 1) {
        outputDiv.textContent = "Error: Armor/Shield must have +1 enhancement before adding special abilities";
        return;
    }
    
    // Calculate costs
    const baseCost = enhancementCost(desiredTotal, itemType) - enhancementCost(existingBonus, itemType);
    let extraCost = 0;
    
    newDesiredEnchantments.forEach(ench => {
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
    const craftingCost = Math.floor(totalCost * 0.5);
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
    const enchantCl = Math.max(...newDesiredEnchantments.map(ench => ench.cl || 0), 0);
    const bonusCl = 3 * desiredBonus;
    const requiredCl = Math.max(enchantCl, bonusCl, 8);
    
    // Crafting time
    const daysNormal = Math.max(1, Math.floor(craftingCost / 1000) + (craftingCost % 1000 ? 1 : 0));
    const daysAccel = Math.max(1, Math.floor(daysNormal / 2) + (daysNormal % 2 ? 1 : 0));
    
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
    
    newDesiredEnchantments.forEach(ench => {
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
        `Normal: ${daysNormal} day(s)`,
        `Accelerated: ${daysAccel} day(s) (DC +5)`
    );
    
    //outputDiv.textContent = statLines.filter(line => line !== "").join('\n');
    outputDiv.innerHTML = `<pre>${statLines.filter(line => line !== "").join('\n')}</pre>`;
}}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
