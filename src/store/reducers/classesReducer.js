import DH_icon from '../../assets/new_class_icons/DH_icon.png';
import DK_icon from '../../assets/new_class_icons/DK_icon.png';
import Druid_icon from '../../assets/new_class_icons/Druid_icon.png';
import Hunter_icon from '../../assets/new_class_icons/Hunter_icon.png';
import Mage_icon from '../../assets/new_class_icons/Mage_icon.png';
import Monk_icon from '../../assets/new_class_icons/Monk_icon.png';
import Paladin_icon from '../../assets/new_class_icons/Paladin_icon.png';
import Priest_icon from '../../assets/new_class_icons/Priest_icon.png';
import Rogue_icon from '../../assets/new_class_icons/Rogue_icon.png';
import Shaman_icon from '../../assets/new_class_icons/Shaman_icon.png';
import Warlock_icon from '../../assets/new_class_icons/Warlock_icon.png';
import Warrior_icon from '../../assets/new_class_icons/Warrior_icon.png';

const initialState = {
    classes: [
        {id: 'dh', name: 'Demon Hunter', roles: ['tank', 'melee dps'], icon: DH_icon},
        {id: 'dk', name: 'Death Knight', roles: ['tank', 'melee dps'], icon: DK_icon},
        {id: 'druid', name: 'Druid', roles: ['tank', 'ranged dps', 'melee dps', 'healer'], icon: Druid_icon},
        {id: 'hunter', name: 'Hunter', roles: ['ranged dps', 'melee dps'], icon: Hunter_icon},
        {id: 'mage', name: 'Mage', roles: ['ranged dps'], icon: Mage_icon},
        {id: 'monk', name: 'Monk', roles: ['tank', 'melee dps', 'healer'], icon: Monk_icon},
        {id: 'paladin', name: 'Paladin', roles: ['tank', 'melee dps', 'healer'], icon: Paladin_icon},
        {id: 'priest', name: 'Priest', roles: ['ranged dps', 'healer'], icon: Priest_icon},
        {id: 'rogue', name: 'Rogue', roles: ['melee dps'], icon: Rogue_icon},
        {id: 'shaman', name: 'Shaman', roles: ['ranged dps', 'melee dps', 'healer'], icon: Shaman_icon},
        {id: 'warlock', name: 'Warlock', roles: ['ranged dps'], icon: Warlock_icon},
        {id: 'warrior', name: 'Warrior', roles: ['tank', 'melee dps'], icon: Warrior_icon}
    ],
    classicClasses: [
        {id: 'druid', name: 'Druid', roles: ['tank', 'ranged dps', 'melee dps', 'healer'], icon: Druid_icon},
        {id: 'hunter', name: 'Hunter', roles: ['ranged dps', 'melee dps'], icon: Hunter_icon},
        {id: 'mage', name: 'Mage', roles: ['ranged dps'], icon: Mage_icon},
        {id: 'paladin', name: 'Paladin', roles: ['tank', 'melee dps', 'healer'], icon: Paladin_icon},
        {id: 'priest', name: 'Priest', roles: ['ranged dps', 'healer'], icon: Priest_icon},
        {id: 'rogue', name: 'Rogue', roles: ['melee dps'], icon: Rogue_icon},
        {id: 'shaman', name: 'Shaman', roles: ['ranged dps', 'melee dps', 'healer'], icon: Shaman_icon},
        {id: 'warlock', name: 'Warlock', roles: ['ranged dps'], icon: Warlock_icon},
        {id: 'warrior', name: 'Warrior', roles: ['tank', 'melee dps'], icon: Warrior_icon}
    ],
}

export const classesReducer = (state = initialState, action) => {
    return state;
}
