import { useState, useCallback, useEffect } from 'react';
import { Team, Player, GamePhase } from '../types/tactics';

// Since we can't use localStorage in Claude.ai artifacts, we'll use in-memory storage
let customTacticStorage: Team | null = null;

export function useTactics() {
  const [customTactic, setCustomTacticState] = useState<Team | null>(null);

  // Initialize from memory storage
  useEffect(() => {
    setCustomTacticState(customTacticStorage);
  }, []);

  const setCustomTactic = useCallback((tactic: Team | null) => {
    customTacticStorage = tactic;
    setCustomTacticState(tactic);
  }, []);

  const updatePlayerPosition = useCallback((
    tactic: Team,
    gamePhase: number,
    playerId: number,
    newX: number,
    newY: number
  ): Team => {
    if (gamePhase === 3) return tactic; // Can't edit set pieces this way
    
    const currentGamePhase = tactic.phases[gamePhase as keyof typeof tactic.phases] as GamePhase;
    
    // Ensure we have players array
    if (!currentGamePhase || !currentGamePhase.players) {
      console.warn('Invalid game phase or missing players array');
      return tactic;
    }
    
    const updatedPhase: GamePhase = {
      ...currentGamePhase,
      players: currentGamePhase.players.map((player: Player) =>
        player.id === playerId ? { ...player, x: newX, y: newY } : player
      )
    };
    
    const updatedTactic = {
      ...tactic,
      phases: { ...tactic.phases, [gamePhase]: updatedPhase }
    };
    
    // Auto-save to memory
    customTacticStorage = updatedTactic;
    
    return updatedTactic;
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
    
    // Ensure we have players array
    if (!currentGamePhase || !currentGamePhase.players) {
      console.warn('Invalid game phase or missing players array');
      return tactic;
    }
    
    const updatedPhase: GamePhase = {
      ...currentGamePhase,
      players: currentGamePhase.players.map((player: Player) =>
        player.id === playerId ? { ...player, role: newRole, detail: newDetail } : player
      )
    };
    
    const updatedTactic = {
      ...tactic,
      phases: { ...tactic.phases, [gamePhase]: updatedPhase }
    };
    
    // Auto-save to memory
    customTacticStorage = updatedTactic;
    
    return updatedTactic;
  }, []);

  const saveCurrentTactic = useCallback((tactic: Team) => {
    // In a real environment, this would save to localStorage
    // For now, we'll just update our memory storage
    customTacticStorage = tactic;
    setCustomTacticState(tactic);
    
    // Show success feedback
    console.log('Custom tactic saved successfully:', tactic.name);
  }, []);

  const loadCustomTactic = useCallback((): Team | null => {
    // In a real environment, this would load from localStorage
    return customTacticStorage;
  }, []);

  const clearCustomTactic = useCallback(() => {
    customTacticStorage = null;
    setCustomTacticState(null);
  }, []);

  // Helper function to copy formation to other phases
  const copyFormationToAllPhases = useCallback((tactic: Team): Team => {
    if (!tactic.phases[0] || !tactic.phases[0].players) {
      return tactic;
    }

    const baseFormation = tactic.phases[0].players;
    
    return {
      ...tactic,
      phases: {
        ...tactic.phases,
        1: { 
          players: baseFormation.map(player => ({ ...player })),
          movements: tactic.phases[1]?.movements || [],
          zones: tactic.phases[1]?.zones || []
        },
        2: { 
          players: baseFormation.map(player => ({ ...player })),
          movements: tactic.phases[2]?.movements || [],
          zones: tactic.phases[2]?.zones || []
        },
      }
    };
  }, []);

  // Helper function to reset custom tactic
  const resetCustomTactic = useCallback(() => {
    clearCustomTactic();
  }, [clearCustomTactic]);

  return {
    customTactic,
    setCustomTactic,
    updatePlayerPosition,
    updatePlayerRole,
    saveCurrentTactic,
    loadCustomTactic,
    clearCustomTactic,
    copyFormationToAllPhases,
    resetCustomTactic
  };
}