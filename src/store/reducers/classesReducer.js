import DH_icon from '../../assets/classes_icons/DH_icon.png';
import DK_icon from '../../assets/classes_icons/DK_icon.png';
import Druid_icon from '../../assets/classes_icons/Druid_icon.png';
import Hunter_icon from '../../assets/classes_icons/Hunter_icon.png';
import Mage_icon from '../../assets/classes_icons/Mage_icon.png';
import Monk_icon from '../../assets/classes_icons/Monk_icon.png';
import Paladin_icon from '../../assets/classes_icons/Paladin_icon.png';
import Priest_icon from '../../assets/classes_icons/Priest_icon.png';
import Rogue_icon from '../../assets/classes_icons/Rogue_icon.png';
import Shaman_icon from '../../assets/classes_icons/Shaman_icon.png';
import Warlock_icon from '../../assets/classes_icons/Warlock_icon.png';
import Warrior_icon from '../../assets/classes_icons/Warrior_icon.png';

const initialState = {
	classes: [
		{id: 'dh', name: 'Demon Hunter', icon: DH_icon},
		{id: 'dk', name: 'Death Knight', icon: DK_icon},
		{id: 'druid', name: 'Druid', icon: Druid_icon},
		{id: 'hunter', name: 'Hunter', icon: Hunter_icon},
		{id: 'mage', name: 'Mage', icon: Mage_icon},
		{id: 'monk', name: 'Monk', icon: Monk_icon},
		{id: 'paladin', name: 'Paladin', icon: Paladin_icon},
		{id: 'priest', name: 'Priest', icon: Priest_icon},
		{id: 'rogue', name: 'Rogue', icon: Rogue_icon},
		{id: 'shaman', name: 'Shaman', icon: Shaman_icon},
		{id: 'warlock', name: 'Warlock', icon: Warlock_icon},
		{id: 'warrior', name: 'Warrior', icon: Warrior_icon},
	],
	races: [
		// Alliance races
		{id: 'human', name: 'Human', faction: 'Alliance',
		classes: [
			{id: 'dk', name: 'Death Knight', icon: DK_icon},
			{id: 'rogue', name: 'Rogue', icon: Rogue_icon},
			{id: 'mage', name: 'Mage', icon: Mage_icon},
			{id: 'priest', name: 'Priest', icon: Priest_icon},
			{id: 'warrior', name: 'Warrior', icon: Warrior_icon},
			{id: 'hunter', name: 'Hunter', icon: Hunter_icon},
			{id: 'monk', name: 'Monk', icon: Monk_icon},
			{id: 'warrior', name: 'Warrior', icon: Warrior_icon},
			{id: 'paladin', name: 'Paladin', icon: Paladin_icon},
		]},
		{id: 'dwarf', name: 'Dwarf', faction: 'Alliance',
		classes:[
				{id: 'dk', name: 'Death Knight', icon: DK_icon},
				{id: 'hunter', name: 'Hunter', icon: Hunter_icon},
				{id: 'mage', name: 'Mage', icon: Mage_icon},
				{id: 'priest', name: 'Priest', icon: Priest_icon},
				{id: 'shaman', name: 'Shaman', icon: Shaman_icon},
				{id: 'rogue', name: 'Rogue', icon: Rogue_icon},
				{id: 'monk', name: 'Monk', icon: Monk_icon},
				{id: 'warlock', name: 'Warlock', icon: Warlock_icon},
				{id: 'paladin', name: 'Paladin', icon: Paladin_icon},
				{id: 'warrior', name: 'Warrior', icon: Warrior_icon},
			]},
		{id: 'night_elf', name: 'Night Elf', faction: 'Alliance',
		classes:[
			{id: 'dh', name: 'Demon Hunter', icon: DH_icon},
			{id: 'druid', name: 'Druid', icon: Druid_icon},
			{id: 'hunter', name: 'Hunter', icon: Hunter_icon},
			{id: 'mage', name: 'Mage', icon: Mage_icon},
			{id: 'warrior', name: 'Warrior', icon: Warrior_icon},
			{id: 'dk', name: 'Death Knight', icon: DK_icon},
			{id: 'rogue', name: 'Rogue', icon: Rogue_icon},
			{id: 'monk', name: 'Monk', icon: Monk_icon},
			{id: 'priest', name: 'Priest', icon: Priest_icon},
			]},
		{id: 'gnome', name: 'Gnome', faction: 'Alliance',
		classes: [
			{id: 'dh', name: 'Demon Hunter', icon: DH_icon},
			{id: 'monk', name: 'Monk', icon: Monk_icon},
			{id: 'warlock', name: 'Warlock', icon: Warlock_icon},
			{id: 'mage', name: 'Mage', icon: Mage_icon},
			{id: 'hunter', name: 'Hunter', icon: Hunter_icon},
			{id: 'priest', name: 'Priest', icon: Priest_icon},
			{id: 'warrior', name: 'Warrior', icon: Warrior_icon},
			{id: 'rogue', name: 'Rogue', icon: Rogue_icon},
		]},
		{id: 'draenei', name: 'Draenei', faction: 'Alliance',
	classes: [
		{id: 'dk', name: 'Death Knight', icon: DK_icon},
		{id: 'monk', name: 'Monk', icon: Monk_icon},
		{id: 'priest', name: 'Priest', icon: Priest_icon},
		{id: 'shaman', name: 'Shaman', icon: Shaman_icon},	
		{id: 'hunter', name: 'Hunter', icon: Hunter_icon},
		{id: 'mage', name: 'Mage', icon: Mage_icon},
		{id: 'paladin', name: 'Paladin', icon: Paladin_icon},
		{id: 'warrior', name: 'Warrior', icon: Warrior_icon},
	]},
	{id: 'worgen', name: 'Worgen', faction: 'Alliance', 
	classes: [
		{id: 'dk', name: 'Death Knight', icon: DK_icon},
		{id: 'rogue', name: 'Rogue', icon: Rogue_icon},
		{id: 'mage', name: 'Mage', icon: Mage_icon},
		{id: 'warlock', name: 'Warlock', icon: Warlock_icon},
		{id: 'druid', name: 'Druid', icon: Druid_icon},
		{id: 'hunter', name: 'Hunter', icon: Hunter_icon},
		{id: 'priest', name: 'Priest', icon: Priest_icon},
		{id: 'warrior', name: 'Warrior', icon: Warrior_icon},
	]}
	],

};

export function classesReducer(state = initialState, action) {
	return state;
}
