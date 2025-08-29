import { useState, useCallback } from 'react';
import { Team, Player, GamePhase } from '../types/tactics';
import { saveCustomTactic, loadCustomTactic } from '../utils/tacticStorage';

export function useTactics() {
  const [customTactic, setCustomTactic] = useState<Team | null>(() => loadCustomTactic());

  const updatePlayerPosition = useCallback((
    tactic: Team,
    gamePhase: number,
    playerId: number,
    newX: number,
    newY: number
  ): Team => {
    if (gamePhase === 3) return tactic; // Can't edit set pieces this way
    
    const currentGamePhase = tactic.phases[gamePhase as keyof typeof tactic.phases] as GamePhase;
    const updatedPhase: GamePhase = {
      ...currentGamePhase,
      players: currentGamePhase.players.map((player: Player) =>
        player.id === playerId ? { ...player, x: newX, y: newY } : player
      )
    };
    
    return {
      ...tactic,
      phases: { ...tactic.phases, [gamePhase]: updatedPhase }
    };
  }, []);

  const updatePlayerRole = useCallback((
    tactic: Team,
    gamePhase: number,
    playerId: number,
    newRole: string,
    newDetail: string
  ): Team => {
    if (gamePhase === 3) return tactic;
    
    const currentGamePhase = tactic.phases[gamePhase as keyof typeof tactic.phases] as GamePhase;
    const updatedPhase: GamePhase = {
      ...currentGamePhase,
      players: currentGamePhase.players.map((player: Player) =>
        player.id === playerId ? { ...player, role: newRole, detail: newDetail } : player
      )
    };
    
    return {
      ...tactic,
      phases: { ...tactic.phases, [gamePhase]: updatedPhase }
    };
  }, []);

  const saveCurrentTactic = useCallback((tactic: Team) => {
    saveCustomTactic(tactic);
    setCustomTactic(tactic);
  }, []);

  return {
    customTactic,
    setCustomTactic,
    updatePlayerPosition,
    updatePlayerRole,
    saveCurrentTactic
  };
}