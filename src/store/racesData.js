import DK_icon from "../assets/classes_icons/DK_icon.png";
import Rogue_icon from "../assets/classes_icons/Rogue_icon.png";
import Mage_icon from "../assets/classes_icons/Mage_icon.png";
import Priest_icon from "../assets/classes_icons/Priest_icon.png";
import Warrior_icon from "../assets/classes_icons/Warrior_icon.png";
import Hunter_icon from "../assets/classes_icons/Hunter_icon.png";
import Monk_icon from "../assets/classes_icons/Monk_icon.png";
import Paladin_icon from "../assets/classes_icons/Paladin_icon.png";
import Shaman_icon from "../assets/classes_icons/Shaman_icon.png";
import Warlock_icon from "../assets/classes_icons/Warlock_icon.png";
import DH_icon from "../assets/classes_icons/DH_icon.png";
import Druid_icon from "../assets/classes_icons/Druid_icon.png";

import Human_icon from "../assets/races_icons/Human_icon.png";
import Dwarf_icon from "../assets/races_icons/Dwarf_icon.png";
import NightElf_icon from "../assets/races_icons/NightElf_icon.png";
import Gnome_icon from "../assets/races_icons/Gnome_icon.png";
import Draenei_icon from "../assets/races_icons/Draenei_icon.png";
import Worgen_icon from "../assets/races_icons/Worgen_icon.png";
import Pandaren_icon from "../assets/races_icons/Pandaren_icon.png";

import Orc_icon from '../assets/races_icons/Orc_icon.png';
import Undead_icon from '../assets/races_icons/Undead_icon.png';
import Tauren_icon from '../assets/races_icons/Tauren_icon.png';
import Troll_icon from '../assets/races_icons/Troll_icon.png';
import Goblin_icon from '../assets/races_icons/Goblin_icon.png';
import BloodElf_icon from '../assets/races_icons/BloodElf_icon.png';

import DarkIronDwarf_icon from '../assets/races_icons/DarkIronDwarf_icon.png';
import KulTiran_icon from '../assets/races_icons/KulTiran_icon.png';
import LightforgedDraenei_icon from '../assets/races_icons/LightforgedDraenei_icon.png';
import VoidElf_icon from '../assets/races_icons/VoidElf_icon.png';

import HighmountainTauren_icon from '../assets/races_icons/HighmountainTauren_icon.png';
import MagharOrc_icon from '../assets/races_icons/MagharOrc_icon.png';
import Nightborn_icon from '../assets/races_icons/Nightborn_icon.png';
import ZandalariTroll_icon from '../assets/races_icons/ZandalariTroll_icon.png';





export const racesData = [
    // Alliance races
    {
        id: 'human',
        name: 'Human',
        faction: 'Alliance',
        race_icon: Human_icon,
        classes: [
            {
                id: 'dk',
                name: 'Death Knight',
                roles: [ 'tank', 'melee dps' ],
                icon: DK_icon
            },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon },
            { id: 'paladin', name: 'Paladin', roles: [ 'tank', 'melee dps', 'healer' ], icon: Paladin_icon }
            ]
    },
    {
        id: 'dwarf',
        name: 'Dwarf',
        faction: 'Alliance',
        race_icon: Dwarf_icon,
        classes: [
            { id: 'dk', name: 'Death Knight', roles: [ 'tank', 'melee dps' ], icon: DK_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            { id: 'paladin', name: 'Paladin', roles: [ 'tank', 'melee dps', 'healer' ], icon: Paladin_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'night_elf',
        name: 'Night Elf',
        faction: 'Alliance',
        classes: [
            { id: 'dh', name: 'Demon Hunter', roles: [ 'tank', 'melee dps' ], icon: DH_icon },
            {
                id: 'druid',
                name: 'Druid',
                roles: [ 'tank', 'ranged dps', 'melee dps', 'healer' ],
                icon: Druid_icon
            },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon },
            { id: 'dk', name: 'Death Knight', roles: [ 'tank', 'melee dps' ], icon: DK_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon }
            ]
    },
    {
        id: 'gnome',
        name: 'Gnome',
        faction: 'Alliance',
        classes: [
            { id: 'dh', name: 'Demon Hunter', roles: [ 'tank', 'melee dps' ], icon: DH_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon }
            ]
    },
    {
        id: 'draenei',
        name: 'Draenei',
        faction: 'Alliance',
        classes: [
            { id: 'dk', name: 'Death Knight', roles: [ 'tank', 'melee dps' ], icon: DK_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'paladin', name: 'Paladin', roles: [ 'tank', 'melee dps', 'healer' ], icon: Paladin_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'worgen',
        name: 'Worgen',
        faction: 'Alliance',
        classes: [
            { id: 'dk', name: 'Death Knight', roles: [ 'tank', 'melee dps' ], icon: DK_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            {
                id: 'druid',
                name: 'Druid',
                roles: [ 'tank', 'ranged dps', 'melee dps', 'healer' ],
                icon: Druid_icon
            },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'pandaren',
        name: 'Pandaren',
        faction: [ 'Alliance', 'Horde' ],
        classes: [
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon }
            ]
    },
    // Horde races
    {
        id: 'orc',
        name: 'Orc',
        faction: 'Horde',
        classes: [
            { id: 'dk', name: 'Death Knight', roles: [ 'tank', 'melee dps' ], icon: DK_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'undead',
        name: 'Undead',
        faction: 'Horde',
        classes: [
            { id: 'dk', name: 'Death Knight', roles: [ 'tank', 'melee dps' ], icon: DK_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'tauren',
        name: 'Tauren',
        faction: 'Horde',
        classes: [
            { id: 'dk', name: 'Death Knight', roles: [ 'tank', 'melee dps' ], icon: DK_icon },
            {
                id: 'druid',
                name: 'Druid',
                roles: [ 'tank', 'ranged dps', 'melee dps', 'healer' ],
                icon: Druid_icon
            },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'paladin', name: 'Paladin', roles: [ 'tank', 'melee dps', 'healer' ], icon: Paladin_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'troll',
        name: 'Troll',
        faction: 'Horde',
        classes: [
            { id: 'dk', name: 'Death Knight', roles: [ 'tank', 'melee dps' ], icon: DK_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            {
                id: 'druid',
                name: 'Druid',
                roles: [ 'tank', 'ranged dps', 'melee dps', 'healer' ],
                icon: Druid_icon
            },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'blood_elf',
        name: 'Blood Elf',
        faction: 'Horde',
        classes: [
            { id: 'dh', name: 'Demon Hunter', roles: [ 'tank', 'melee dps' ], icon: DH_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            { id: 'dk', name: 'Death Knight', roles: [ 'tank', 'melee dps' ], icon: DK_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'paladin', name: 'Paladin', roles: [ 'tank', 'melee dps', 'healer' ], icon: Paladin_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'goblin',
        name: 'Goblin',
        faction: 'Horde',
        classes: [
            { id: 'dk', name: 'Death Knight', roles: [ 'tank', 'melee dps' ], icon: DK_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },

    // Alliance allied races
    {
        id: 'dark_iron_dwarf',
        name: 'Dark Iron Dwarf',
        faction: 'Alliance',
        alliedRace: true,
        classes: [
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'paladin', name: 'Paladin', roles: [ 'tank', 'melee dps', 'healer' ], icon: Paladin_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'kul_tiran',
        name: 'Kul Tiran',
        faction: 'Alliance',
        alliedRace: true,
        classes: [
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'druid', name: 'Druid', roles: [ 'tank', 'ranged dps', 'melee dps', 'healer' ], icon: Druid_icon }
            ]
    },
    {
        id: 'lighforged_draenei',
        name: 'Lightforged Draenei',
        faction: 'Alliance',
        alliedRace: true,
        classes: [
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'paladin', name: 'Paladin', roles: [ 'tank', 'melee dps', 'healer' ], icon: Paladin_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'void_elf',
        name: 'Void Elf',
        faction: 'Alliance',
        alliedRace: true,
        classes: [
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    // Horde allied races
    {
        id: 'highmountatin_tauren',
        name: 'Highmountain Tauren',
        faction: 'Horde',
        alliedRace: true,
        classes: [
            {
                id: 'druid',
                name: 'Druid',
                roles: [ 'tank', 'ranged dps', 'melee dps', 'healer' ],
                icon: Druid_icon
            },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'maghar_orc',
        name: 'Maghar Orc',
        faction: 'Horde',
        alliedRace: true,
        classes: [
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'nightborn',
        name: 'Nightborn',
        faction: 'Horde',
        alliedRace: true,
        classes: [
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'warlock', name: 'Warlock', roles: [ 'ranged dps' ], icon: Warlock_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    },
    {
        id: 'zandalari_troll',
        name: 'Zandalari Troll',
        faction: 'Horde',
        alliedRace: true,
        classes: [
            {
                id: 'druid',
                name: 'Druid',
                roles: [ 'tank', 'ranged dps', 'melee dps', 'healer' ],
                icon: Druid_icon
            },
            { id: 'hunter', name: 'Hunter', roles: [ 'ranged dps', 'melee dps' ], icon: Hunter_icon },
            { id: 'mage', name: 'Mage', roles: [ 'ranged dps' ], icon: Mage_icon },
            { id: 'monk', name: 'Monk', roles: [ 'tank', 'melee dps', 'healer' ], icon: Monk_icon },
            { id: 'paladin', name: 'Paladin', roles: [ 'tank', 'melee dps', 'healer' ], icon: Paladin_icon },
            { id: 'priest', name: 'Priest', roles: [ 'ranged dps', 'healer' ], icon: Priest_icon },
            { id: 'rogue', name: 'Rogue', roles: [ 'melee dps' ], icon: Rogue_icon },
            { id: 'shaman', name: 'Shaman', roles: [ 'ranged dps', 'melee dps', 'healer' ], icon: Shaman_icon },
            { id: 'warrior', name: 'Warrior', roles: [ 'tank', 'melee dps' ], icon: Warrior_icon }
            ]
    }
    ];
