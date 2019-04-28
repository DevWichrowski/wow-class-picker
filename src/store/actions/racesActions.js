export const HANDLE_SWITCH = 'HANDLE_SWITCH';
export const HANDLE_ALLIANCE = 'HANDLE_ALLIANCE';
export const HANDLE_HORDE = 'HANDLE_HORDE';
export const HANDLE_TANK = 'HANDLE_TANK';
export const HANDLE_RANGED_DPS = 'HANDLE_RANGED_DPS';
export const HANDLE_MELEE_DPS = 'HANDLE_MELEE_DPS';
export const HANDLE_HEALER = 'HANDLE_HEALER';

export const handleSwitch = () => ({
    type: HANDLE_SWITCH,
});

export const handleAlliance = () => ({
    type: HANDLE_ALLIANCE,
});

export const handleHorde = () => ({
    type: HANDLE_HORDE,
});

export const handleTank= () => ({
    type: HANDLE_TANK,
});

export const handleRangedDps = () => ({
    type: HANDLE_RANGED_DPS,
});

export const handleMeleeDps = () => ({
    type: HANDLE_MELEE_DPS,
});

export const handleHealer = () => ({
    type: HANDLE_HEALER,
});
