'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Edit3, Save, RotateCcw, Target, Zap, Users, Settings } from 'lucide-react';
import { legendaryTeams } from '@/data/teams';
import { oppositionFormations } from '@/data/formations';
import { rolesByPosition, roleDescriptions } from '@/data/playerRoles';
import { Team, Player, GamePhase, Movement, TacticalZone } from '@/types/tactics';
import { PITCH_DIMENSIONS, PLAYER_SIZES, PHASES } from '@/utils/constants';
import { useTactics } from '@/hooks/useLocalStorage';

export default function TacticsHub() {
  // State management
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [gamePhase, setGamePhase] = useState(0);
  const [showOpposition, setShowOpposition] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [hoveredPlayer, setHoveredPlayer] = useState<number | null>(null);
  const [selectedCornerType, setSelectedCornerType] = useState(0);
  const [showMovementLines, setShowMovementLines] = useState(false);
  const [showZones, setShowZones] = useState(false);
  const [oppositionFormation, setOppositionFormation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Custom tactics editing states
  const [editingMode, setEditingMode] = useState<'players' | 'arrows' | 'zones' | 'info' | 'formation'>('formation');
  const [arrowStart, setArrowStart] = useState<{x: number, y: number, playerId?: number} | null>(null);
  const [zoneStart, setZoneStart] = useState<{x: number, y: number} | null>(null);
  const [customDescription, setCustomDescription] = useState('');
  const [customName, setCustomName] = useState('');
  const [customManager, setCustomManager] = useState('');

  // Custom tactics hook
  const { customTactic, setCustomTactic, updatePlayerPosition, updatePlayerRole, saveCurrentTactic } = useTactics();

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const formations = {
  '4-3-3': [
    { id: 1, name: "GK", position: "GK", x: 50, y: 90, role: "Sweeper Keeper" },
    { id: 2, name: "RB", position: "RB", x: 20, y: 75, role: "Attacking FB" },
    { id: 3, name: "CB", position: "CB", x: 40, y: 80, role: "Ball-Playing CB" },
    { id: 4, name: "CB", position: "CB", x: 60, y: 80, role: "Stopper" },
    { id: 5, name: "LB", position: "LB", x: 80, y: 75, role: "Wing-Back" },
    { id: 6, name: "CDM", position: "CDM", x: 50, y: 65, role: "Anchor Man" },
    { id: 7, name: "CM", position: "CM", x: 35, y: 55, role: "Box-to-Box" },
    { id: 8, name: "CM", position: "CM", x: 65, y: 55, role: "Advanced Playmaker" },
    { id: 9, name: "RW", position: "RW", x: 20, y: 40, role: "Inverted Winger" },
    { id: 10, name: "ST", position: "ST", x: 50, y: 30, role: "False 9" },
    { id: 11, name: "LW", position: "LW", x: 80, y: 40, role: "Wide Playmaker" }
  ],
  '4-4-2': [
    { id: 1, name: "GK", position: "GK", x: 50, y: 90, role: "Sweeper Keeper" },
    { id: 2, name: "RB", position: "RB", x: 20, y: 75, role: "Attacking FB" },
    { id: 3, name: "CB", position: "CB", x: 40, y: 80, role: "Ball-Playing CB" },
    { id: 4, name: "CB", position: "CB", x: 60, y: 80, role: "Stopper" },
    { id: 5, name: "LB", position: "LB", x: 80, y: 75, role: "Wing-Back" },
    { id: 6, name: "RM", position: "RM", x: 20, y: 50, role: "Right Winger" },
    { id: 7, name: "CM", position: "CM", x: 40, y: 55, role: "Box-to-Box" },
    { id: 8, name: "CM", position: "CM", x: 60, y: 55, role: "Deep Playmaker" },
    { id: 9, name: "LM", position: "LM", x: 80, y: 50, role: "Left Winger" },
    { id: 10, name: "ST", position: "ST", x: 45, y: 30, role: "Target Man" },
    { id: 11, name: "ST", position: "ST", x: 55, y: 30, role: "Poacher" }
  ],
  '3-5-2': [
    { id: 1, name: "GK", position: "GK", x: 50, y: 90, role: "Sweeper Keeper" },
    { id: 2, name: "RCB", position: "RCB", x: 30, y: 80, role: "Ball-Playing CB" },
    { id: 3, name: "CB", position: "CB", x: 50, y: 82, role: "Stopper" },
    { id: 4, name: "LCB", position: "LCB", x: 70, y: 80, role: "Covering CB" },
    { id: 5, name: "RWB", position: "RWB", x: 10, y: 55, role: "Right Wing-Back" },
    { id: 6, name: "CDM", position: "CDM", x: 40, y: 60, role: "Defensive Screen" },
    { id: 7, name: "CM", position: "CM", x: 50, y: 50, role: "Box-to-Box" },
    { id: 8, name: "CDM", position: "CDM", x: 60, y: 60, role: "Deep Playmaker" },
    { id: 9, name: "LWB", position: "LWB", x: 90, y: 55, role: "Left Wing-Back" },
    { id: 10, name: "ST", position: "ST", x: 45, y: 30, role: "Target Man" },
    { id: 11, name: "ST", position: "ST", x: 55, y: 30, role: "Support Striker" }
  ],
  '4-2-3-1': [
    { id: 1, name: "GK", position: "GK", x: 50, y: 90, role: "Sweeper Keeper" },
    { id: 2, name: "RB", position: "RB", x: 20, y: 75, role: "Attacking FB" },
    { id: 3, name: "CB", position: "CB", x: 40, y: 80, role: "Ball-Playing CB" },
    { id: 4, name: "CB", position: "CB", x: 60, y: 80, role: "Stopper" },
    { id: 5, name: "LB", position: "LB", x: 80, y: 75, role: "Wing-Back" },
    { id: 6, name: "CDM", position: "CDM", x: 40, y: 65, role: "Anchor Man" },
    { id: 7, name: "CDM", position: "CDM", x: 60, y: 65, role: "Deep Playmaker" },
    { id: 8, name: "RM", position: "RM", x: 20, y: 45, role: "Right Midfielder" },
    { id: 9, name: "CAM", position: "CAM", x: 50, y: 45, role: "Attacking Midfielder" },
    { id: 10, name: "LM", position: "LM", x: 80, y: 45, role: "Left Midfielder" },
    { id: 11, name: "ST", position: "ST", x: 50, y: 30, role: "Complete Forward" }
  ],
  '3-4-3': [
    { id: 1, name: "GK", position: "GK", x: 50, y: 90, role: "Sweeper Keeper" },
    { id: 2, name: "RCB", position: "RCB", x: 30, y: 80, role: "Ball-Playing CB" },
    { id: 3, name: "CB", position: "CB", x: 50, y: 82, role: "Stopper" },
    { id: 4, name: "LCB", position: "LCB", x: 70, y: 80, role: "Covering CB" },
    { id: 5, name: "RWB", position: "RWB", x: 15, y: 55, role: "Right Wing-Back" },
    { id: 6, name: "CM", position: "CM", x: 40, y: 60, role: "Box-to-Box" },
    { id: 7, name: "CM", position: "CM", x: 60, y: 60, role: "Deep Playmaker" },
    { id: 8, name: "LWB", position: "LWB", x: 85, y: 55, role: "Left Wing-Back" },
    { id: 9, name: "RW", position: "RW", x: 25, y: 35, role: "Inside Forward" },
    { id: 10, name: "ST", position: "ST", x: 50, y: 30, role: "False 9" },
    { id: 11, name: "LW", position: "LW", x: 75, y: 35, role: "Wide Forward" }
  ]
};

  // Helper functions
  const getPositionSpecificRoles = useCallback((position: string): string[] => {
    return rolesByPosition[position as keyof typeof rolesByPosition] || ['Custom Role'];
  }, []);

  const getRoleDescription = useCallback((role: string): string => {
    return roleDescriptions[role as keyof typeof roleDescriptions] || 'Custom tactical role';
  }, []);

  // Apply formation template
  const applyFormation = useCallback((formationName: string) => {
    if (formations[formationName as keyof typeof formations]) {
      const template = formations[formationName as keyof typeof formations];
      const playersWithDetails = template.map(player => ({
        ...player,
        detail: getRoleDescription(player.role)
      }));

      const newTactic: Team = {
        name: customName || "Custom Tactic",
        manager: customManager || "You",
        formation: formationName,
        style: "Your Style",
        description: customDescription || `Your custom ${formationName} tactical setup - drag players, assign roles, add arrows and zones to create your masterpiece!`,
        primaryColor: "#9333EA",
        secondaryColor: "#7C3AED",
        achievement: "Custom Formation",
        quote: "Tactics are like a puzzle - every piece must fit perfectly.",
        managerImage: "/managers/custom.jpg",
        phases: {
  0: { players: playersWithDetails, movements: [], zones: [] },
  1: { players: playersWithDetails.map(p => ({...p})), movements: [], zones: [] },
  2: { players: playersWithDetails.map(p => ({...p})), movements: [], zones: [] },
  3: { 
    corners: [{ 
      name: "Custom Corner", 
      players: playersWithDetails.slice(0, 4).map(p => ({ 
        ...p, 
        x: p.x > 50 ? 85 : 82, 
        y: p.y > 50 ? 82 : 75 
      })), 
      opposition: [
        { x: 50, y: 90, role: "GK" }, 
        { x: 85, y: 85, role: "Defender" }
      ] 
    }] 
  }
}
      };
      setCustomTactic(newTactic);
      setEditingMode('players');
    }
  }, [setCustomTactic, getRoleDescription, customName, customManager, customDescription]);

  // Remove movement arrow
  const removeMovementArrow = useCallback((index: number) => {
    if (customTactic && gamePhase !== 3) {
      const currentPhase = customTactic.phases[gamePhase as keyof typeof customTactic.phases] as GamePhase;
      const updatedPhase = {
        ...currentPhase,
        movements: (currentPhase.movements || []).filter((_, idx) => idx !== index)
      };

      const updatedTactic = {
        ...customTactic,
        phases: { ...customTactic.phases, [gamePhase]: updatedPhase }
      };

      setCustomTactic(updatedTactic);
    }
  }, [customTactic, gamePhase, setCustomTactic]);

  // Remove tactical zone
  const removeTacticalZone = useCallback((index: number) => {
    if (customTactic && gamePhase !== 3) {
      const currentPhase = customTactic.phases[gamePhase as keyof typeof customTactic.phases] as GamePhase;
      const updatedPhase = {
        ...currentPhase,
        zones: (currentPhase.zones || []).filter((_, idx) => idx !== index)
      };

      const updatedTactic = {
        ...customTactic,
        phases: { ...customTactic.phases, [gamePhase]: updatedPhase }
      };

      setCustomTactic(updatedTactic);
    }
  }, [customTactic, gamePhase, setCustomTactic]);

  // Custom tactic creation
  const createCustomTactic = useCallback(() => {
    setEditMode(true);
    setEditingMode('formation');
  }, []);

  // Add movement arrow with name
  const addMovementArrow = useCallback((from: {x: number, y: number}, to: {x: number, y: number}, playerId?: number) => {
    if (customTactic && gamePhase !== 3) {
      const player = (customTactic.phases[gamePhase as keyof typeof customTactic.phases] as GamePhase).players?.find(p => p.id === playerId);
      const arrowName = prompt('Name this movement (e.g., "Overlap Run", "Through Ball", "Press"):') || 'Movement';
      
      const newMovement: Movement = {
        from,
        to,
        type: 'movement',
        player: player ? `${player.name}: ${arrowName}` : arrowName,
        color: '#FFD700'
      };

      const currentPhase = customTactic.phases[gamePhase as keyof typeof customTactic.phases] as GamePhase;
      const updatedPhase = {
        ...currentPhase,
        movements: [...(currentPhase.movements || []), newMovement]
      };

      const updatedTactic = {
        ...customTactic,
        phases: { ...customTactic.phases, [gamePhase]: updatedPhase }
      };

      setCustomTactic(updatedTactic);
    }
  }, [customTactic, gamePhase, setCustomTactic]);
  // Add tactical zone
  const addTacticalZone = useCallback((x: number, y: number, width: number, height: number, label: string) => {
    if (customTactic && gamePhase !== 3) {
      const newZone: TacticalZone = {
        x,
        y,
        width,
        height,
        color: 'rgba(147, 51, 234, 0.3)',
        label
      };

      const currentPhase = customTactic.phases[gamePhase as keyof typeof customTactic.phases] as GamePhase;
      const updatedPhase = {
        ...currentPhase,
        zones: [...(currentPhase.zones || []), newZone]
      };

      const updatedTactic = {
        ...customTactic,
        phases: { ...customTactic.phases, [gamePhase]: updatedPhase }
      };

      setCustomTactic(updatedTactic);
    }
  }, [customTactic, gamePhase, setCustomTactic]);

  // Handle pitch clicks for arrows and zones
  const handlePitchClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!editMode || !customTactic) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    // Get responsive dimensions
    const marginX = isMobile ? 10 : 30;
    const marginY = isMobile ? 17.5 : 50;
    const fieldWidth = rect.width - (marginX * 2);
    const fieldHeight = rect.height - (marginY * 2);
    
    // Convert to percentage
    const percentX = Math.max(0, Math.min(100, ((clickX - marginX) / fieldWidth) * 100));
    const percentY = Math.max(0, Math.min(100, ((clickY - marginY) / fieldHeight) * 100));

    if (editingMode === 'arrows') {
      if (!arrowStart) {
        setArrowStart({ x: percentX, y: percentY });
      } else {
        addMovementArrow(arrowStart, { x: percentX, y: percentY });
        setArrowStart(null);
      }
    } else if (editingMode === 'zones') {
      if (!zoneStart) {
        setZoneStart({ x: percentX, y: percentY });
      } else {
        const width = Math.abs(percentX - zoneStart.x);
        const height = Math.abs(percentY - zoneStart.y);
        const x = Math.min(percentX, zoneStart.x);
        const y = Math.min(percentY, zoneStart.y);
        
        const label = prompt('Enter zone label:') || 'Tactical Zone';
        addTacticalZone(x, y, width, height, label);
        setZoneStart(null);
      }
    }
  }, [editMode, customTactic, editingMode, arrowStart, zoneStart, addMovementArrow, addTacticalZone, isMobile]);

  // Handle player clicks in arrow mode
  const handlePlayerClick = useCallback((playerId: number) => {
    if (editingMode === 'arrows' && editMode && customTactic) {
      const player = (customTactic.phases[gamePhase as keyof typeof customTactic.phases] as GamePhase).players?.find(p => p.id === playerId);
      if (player) {
        if (!arrowStart) {
          setArrowStart({ x: 100 - player.x, y: player.y, playerId });
        } else {
          addMovementArrow(arrowStart, { x: 100 - player.x, y: player.y }, playerId);
          setArrowStart(null);
        }
      }
    }
  }, [editingMode, editMode, customTactic, gamePhase, arrowStart, addMovementArrow]);

  // Player position update - Fixed coordinates
const handlePlayerDragEnd = useCallback((playerId: number, e: React.DragEvent) => {
  if (editMode && customTactic && gamePhase !== 3 && editingMode === 'players') {
    const rect = e.currentTarget.parentElement?.getBoundingClientRect();
    if (rect) {
      const marginX = isMobile ? 10 : 30;
      const marginY = isMobile ? 17.5 : 50;
      const fieldWidth = rect.width - (marginX * 2);
      const fieldHeight = rect.height - (marginY * 2);
      
      const newX = ((e.clientX - rect.left - marginX) / fieldWidth) * 100;
      const newY = ((e.clientY - rect.top - marginY) / fieldHeight) * 100;
      const boundedX = Math.max(0, Math.min(100, 100 - newX)); // Flip X coordinate
      const boundedY = Math.max(0, Math.min(100, newY));
      
      console.log('Drag position:', { newX, newY, boundedX, boundedY }); // Debug log
      
      const updatedTactic = updatePlayerPosition(customTactic, gamePhase, playerId, boundedX, boundedY);
      setCustomTactic(updatedTactic);
    }
  }
}, [editMode, customTactic, gamePhase, updatePlayerPosition, setCustomTactic, isMobile, editingMode]);

  // Role update
  const handleRoleChange = useCallback((playerId: number, newRole: string, position: string) => {
    if (editMode && customTactic && gamePhase !== 3) {
      const newDetail = getRoleDescription(newRole);
      const updatedTactic = updatePlayerRole(customTactic, gamePhase, playerId, newRole, newDetail);
      setCustomTactic(updatedTactic);
    }
  }, [editMode, customTactic, gamePhase, updatePlayerRole, setCustomTactic, getRoleDescription]);

  // Save custom tactic
  const handleSave = useCallback(() => {
    if (customTactic) {
      saveCurrentTactic(customTactic);
      alert('🎯 Tactic saved successfully!');
    }
  }, [customTactic, saveCurrentTactic]);

  // Team and phase management
  const currentTeam = customTactic && editMode ? customTactic : legendaryTeams[selectedTeam];
  const currentPhase = gamePhase === 3 && currentTeam.phases[3] ? 
    currentTeam.phases[3].corners[selectedCornerType] : 
    currentTeam.phases[gamePhase as keyof typeof currentTeam.phases];

  // Navigation with style
  const NavigationButton = ({ direction, onClick, disabled }: { 
    direction: 'left' | 'right'; 
    onClick: () => void; 
    disabled?: boolean; 
  }) => (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden ${
        direction === 'left' ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
        direction === 'left' ? 'hover:-rotate-12' : 'hover:rotate-12'
      } shadow-xl hover:shadow-2xl`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {direction === 'left' ? <ChevronLeft size={32} className="relative z-10 drop-shadow-lg" /> 
                             : <ChevronRight size={32} className="relative z-10 drop-shadow-lg" />}
      <div className={`absolute -inset-1 ${
        direction === 'left' ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                              : 'bg-gradient-to-r from-purple-600 to-pink-600'
      } rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300`}></div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
      {/* Enhanced Header */}
      <div className="bg-black/40 backdrop-blur-md border-b-2 border-green-500/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="main-title text-6xl font-black mb-3 bg-gradient-to-r from-white via-green-200 via-yellow-200 to-white bg-clip-text text-transparent tracking-tight">
              ⚽ TACTICAL EVOLUTION HUB
            </h1>
            <p className="text-3xl font-black text-green-300 mb-2">Legendary Teams & Tactical Mastery</p>
            <div className="mt-4 text-lg italic text-green-400 max-w-4xl mx-auto font-bold leading-relaxed">
              &ldquo;Football is cyclical. Today&rsquo;s innovation becomes tomorrow&rsquo;s foundation. Everyone has a role to play - from the striker to the chef - it&rsquo;s a team sport where every contribution matters. Respect the game, respect your opponent, but never stop evolving.&rdquo;
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Enhanced Team Selection */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border-2 border-green-500/30 mb-8 shadow-2xl">
          <h3 className="text-3xl font-black mb-6 text-green-300 text-center">Select Legendary Team</h3>
          <div className="team-controls flex items-center justify-center gap-8 mb-6">
            <NavigationButton 
              direction="left"
              onClick={() => setSelectedTeam(Math.max(0, selectedTeam - 1))}
              disabled={editMode || selectedTeam === 0}
            />
            <div className="flex-1 text-center max-w-2xl">
              {/* Manager Image */}
              <div className="flex justify-center mb-4">
                <img 
                  src={currentTeam.managerImage} 
                  alt={currentTeam.manager}
                  className="w-24 h-24 rounded-full border-4 shadow-xl"
                  style={{ borderColor: currentTeam.primaryColor }}
                />
              </div>
              <div className="team-name text-4xl font-black mb-2" style={{ color: currentTeam.primaryColor }}>
                {currentTeam.name}
              </div>
              <div className="text-xl font-bold text-green-300 mb-2">
                {currentTeam.manager} • {currentTeam.achievement}
              </div>
              <div className="text-lg font-bold text-green-400 mb-3">
                {currentTeam.formation} • {currentTeam.style}
              </div>
              <p className="text-lg text-green-200 italic font-bold">
                &ldquo;{currentTeam.quote}&rdquo;
              </p>
            </div>
            <NavigationButton 
              direction="right"
              onClick={() => setSelectedTeam(Math.min(legendaryTeams.length - 1, selectedTeam + 1))}
              disabled={editMode || selectedTeam === legendaryTeams.length - 1}
            />
          </div>
        </div>

        {/* Enhanced Phase Selection */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border-2 border-green-500/30 mb-8 shadow-2xl">
          <h3 className="text-3xl font-black mb-6 text-green-300 text-center">Game Phase Analysis</h3>
          <div className="phase-buttons grid grid-cols-2 md:grid-cols-4 gap-4">
            {PHASES.map((phase, index) => (
              <button
                key={index}
                onClick={() => {
                  setGamePhase(index);
                  if (index === 3) setSelectedCornerType(0);
                }}
                className={`px-6 py-4 rounded-xl font-black text-lg transition-all duration-300 ${
                  gamePhase === index 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl transform scale-105 border-2 border-green-300' 
                    : 'bg-black/40 text-green-200 hover:bg-green-700/30 hover:scale-102 border-2 border-green-700/50'
                } backdrop-blur-sm`}
              >
                {phase === 'Kickoff' && '⚪ '}
                {phase === 'In Possession' && '🟢 '}
                {phase === 'Out of Possession' && '🔴 '}
                {phase === 'Set Pieces' && '🚩 '}
                <span>{phase}</span>
              </button>
            ))}
          </div>
          
          {gamePhase === 3 && currentTeam.phases[3]?.corners && (
            <div className="mt-6">
              <label className="block text-xl font-black mb-3 text-green-300">Set Piece Scenario:</label>
              <select 
                value={selectedCornerType} 
                onChange={(e) => setSelectedCornerType(parseInt(e.target.value))}
                className="w-full bg-black/50 border-2 border-green-500/50 rounded-xl px-6 py-4 text-white font-bold text-lg backdrop-blur-sm"
              >
                {currentTeam.phases[3].corners.map((corner, idx) => (
                  <option key={idx} value={idx} className="bg-gray-800">
                    {corner.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Enhanced Controls */}
        <div className="controls-row flex flex-wrap justify-center items-center gap-6 mb-8">
          <div className="flex gap-4">
            {!editMode ? (
              <button
                onClick={createCustomTactic}
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-4 rounded-xl transition-all font-black text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 backdrop-blur-sm"
              >
                <Edit3 size={24} />
                Create Custom Tactics
              </button>
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl transition-all font-black text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Save size={24} />
                  Save Tactics
                </button>
                <button
                  onClick={() => {
                    setEditMode(false);
                    setEditingMode('formation');
                  }}
                  className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-8 py-4 rounded-xl transition-all font-black text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <RotateCcw size={24} />
                  Exit Editor
                </button>
              </div>
            )}
          </div>

          {/* Editing Mode Buttons - Show when in edit mode */}
          {editMode && customTactic && (
            <div className="flex gap-2 bg-black/30 backdrop-blur-sm rounded-xl p-2 border-2 border-purple-500/50">
              <button
                onClick={() => setEditingMode('formation')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-bold ${
                  editingMode === 'formation' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-black/40 text-orange-300 hover:bg-orange-700/30'
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Formation
              </button>
              <button
                onClick={() => setEditingMode('players')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-bold ${
                  editingMode === 'players' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-black/40 text-purple-300 hover:bg-purple-700/30'
                }`}
              >
                <Users size={18} />
                Players
              </button>
              <button
                onClick={() => setEditingMode('arrows')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-bold ${
                  editingMode === 'arrows' 
                    ? 'bg-yellow-600 text-white' 
                    : 'bg-black/40 text-yellow-300 hover:bg-yellow-700/30'
                }`}
              >
                <Zap size={18} />
                Arrows
              </button>
              <button
                onClick={() => setEditingMode('zones')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-bold ${
                  editingMode === 'zones' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-black/40 text-blue-300 hover:bg-blue-700/30'
                }`}
              >
                <Target size={18} />
                Zones
              </button>
              <button
                onClick={() => setEditingMode('info')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-bold ${
                  editingMode === 'info' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-black/40 text-green-300 hover:bg-green-700/30'
                }`}
              >
                <Settings size={18} />
                Info
              </button>
            </div>
          )}

{/* Mode Instructions - Mobile Responsive */}
{editMode && (
  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 lg:p-4 border-2 border-purple-500/30 max-w-full lg:max-w-md">
    <div className="text-purple-300 font-bold text-xs lg:text-sm mb-2">
      Current Mode: {editingMode.toUpperCase()}
    </div>
    <div className="text-white text-xs lg:text-sm leading-relaxed">
      {editingMode === 'formation' && "📋 Choose a formation template to start with"}
      {editingMode === 'players' && "🔄 Drag players to reposition them on the pitch"}
      {editingMode === 'arrows' && "⚡ Click players or pitch to create movement arrows"}
      {editingMode === 'zones' && "🎯 Click and drag on pitch to create tactical zones"}
      {editingMode === 'info' && "📝 Edit team name, manager, and description below"}
      {arrowStart && editingMode === 'arrows' && " • Click destination for arrow"}
      {zoneStart && editingMode === 'zones' && " • Click to complete zone"}
    </div>
  </div>
)}
          {/* Enhanced Control Toggles */}
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-xl px-6 py-3 border-2 border-green-700/30 hover:border-green-500/50 transition-all">
              <input 
                type="checkbox" 
                checked={showOpposition}
                onChange={(e) => setShowOpposition(e.target.checked)}
                className="w-6 h-6 accent-green-500"
              />
              <span className="font-bold text-lg">Opposition</span>
            </label>

            <label className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-xl px-6 py-3 border-2 border-green-700/30 hover:border-green-500/50 transition-all">
              <input 
                type="checkbox" 
                checked={showMovementLines}
                onChange={(e) => setShowMovementLines(e.target.checked)}
                className="w-6 h-6 accent-green-500"
              />
              <Zap size={20} className="text-yellow-400" />
              <span className="font-bold text-lg">Movements</span>
            </label>

            <label className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-xl px-6 py-3 border-2 border-green-700/30 hover:border-green-500/50 transition-all">
              <input 
                type="checkbox" 
                checked={showZones}
                onChange={(e) => setShowZones(e.target.checked)}
                className="w-6 h-6 accent-green-500"
              />
              <Target size={20} className="text-purple-400" />
              <span className="font-bold text-lg">Zones</span>
            </label>
          </div>

          {showOpposition && (
            <select 
              value={oppositionFormation} 
              onChange={(e) => setOppositionFormation(parseInt(e.target.value))}
              className="bg-black/30 backdrop-blur-sm border-2 border-green-700/30 rounded-xl px-6 py-3 text-white font-bold text-lg hover:border-green-500/50 transition-all"
            >
              {oppositionFormations.map((formation, idx) => (
                <option key={idx} value={idx} className="bg-gray-800">
                  {formation.name}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Formation Selector */}
        {editMode && editingMode === 'formation' && (
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border-2 border-orange-500/30 shadow-2xl mb-8">
            <h3 className="text-2xl font-black mb-6 text-orange-300">Choose Formation Template</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(formations).map((formationName) => (
                <button
                  key={formationName}
                  onClick={() => applyFormation(formationName)}
                  className="bg-gradient-to-br from-orange-900/40 to-orange-800/40 hover:from-orange-800/60 hover:to-orange-700/60 border-2 border-orange-500/30 hover:border-orange-400/60 rounded-xl p-6 transition-all transform hover:scale-105 shadow-xl"
                >
                  <div className="text-2xl font-black text-orange-300 mb-3">{formationName}</div>
                  <div className="text-sm text-orange-200 mb-4">
                    {formationName === '4-3-3' && 'Balanced attacking formation with wingers'}
                    {formationName === '4-4-2' && 'Classic formation with two strikers'}
                    {formationName === '3-5-2' && 'Wing-back system with central overload'}
                    {formationName === '4-2-3-1' && 'Defensive stability with creative freedom'}
                    {formationName === '3-4-3' && 'Attacking wing-back formation'}
                  </div>
                  <div className="relative bg-green-600/20 rounded-lg h-32 overflow-hidden">
                    {/* Mini pitch visualization */}
                    <div className="absolute inset-0 flex flex-col justify-between p-2">
                      {/* Show formation layout in miniature */}
                      {formations[formationName as keyof typeof formations].slice(1).map((player) => (
                        <div
                          key={player.id}
                          className="absolute w-2 h-2 bg-orange-300 rounded-full"
                          style={{
                            left: `${10 + ((100 - player.x) / 100) * 80}%`,
                            top: `${10 + (player.y / 100) * 80}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-6 flex gap-4 justify-center">
              <button
                onClick={() => setEditingMode('players')}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-black text-white transition-all shadow-xl"
              >
                Go to Player Editor
              </button>
            </div>
          </div>
        )}

        {/* Custom Tactic Information Editor */}
        {editMode && editingMode === 'info' && (
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border-2 border-green-500/30 shadow-2xl mb-8">
            <h3 className="text-2xl font-black mb-6 text-green-300">Edit Tactic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-bold mb-2 text-white">Team Name</label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="Enter team name..."
                  className="w-full bg-black/50 border-2 border-green-500/50 rounded-xl px-4 py-3 text-white font-bold text-lg backdrop-blur-sm focus:border-green-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg font-bold mb-2 text-white">Manager Name</label>
                <input
                  type="text"
                  value={customManager}
                  onChange={(e) => setCustomManager(e.target.value)}
                  placeholder="Enter manager name..."
                  className="w-full bg-black/50 border-2 border-green-500/50 rounded-xl px-4 py-3 text-white font-bold text-lg backdrop-blur-sm focus:border-green-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-lg font-bold mb-2 text-white">Tactical Description</label>
              <textarea
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
                placeholder="Describe your tactical approach, philosophy, and key principles..."
                rows={4}
                className="w-full bg-black/50 border-2 border-green-500/50 rounded-xl px-4 py-3 text-white font-bold text-lg backdrop-blur-sm focus:border-green-400 focus:outline-none resize-none"
              />
            </div>
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => {
                  if (customTactic) {
                    const updatedTactic = {
                      ...customTactic,
                      name: customName || "Custom Tactic",
                      manager: customManager || "You",
                      description: customDescription || "Your custom tactical setup"
                    };
                    setCustomTactic(updatedTactic);
                  }
                }}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-black text-white transition-all shadow-xl"
              >
                Update Information
              </button>
              <button
                onClick={() => setEditingMode('players')}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-black text-white transition-all shadow-xl"
              >
                Back to Players
              </button>
            </div>
          </div>
        )}

        {/* Tactical Description */}
        <div className="text-center mb-8">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 max-w-6xl mx-auto border-2 border-green-500/30 shadow-2xl">
            <h2 className="text-3xl font-black mb-4 text-green-300">
              {PHASES[gamePhase]} Phase Analysis
            </h2>
            <p className="text-xl text-green-200 leading-relaxed font-bold mb-4">
              {currentTeam.description}
            </p>
            {editMode && (
              <div className="mt-6 p-4 bg-yellow-900/30 rounded-xl border-2 border-yellow-500/50">
                <p className="text-yellow-300 text-lg font-black">
                  🎯 CUSTOM EDITOR MODE ACTIVE
                </p>
                <p className="text-yellow-200 font-bold mt-2">
                  Use the mode buttons above to edit different aspects of your tactic
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Football Pitch */}
        <div 
          className="tactical-pitch relative mx-auto mb-12 rounded-2xl shadow-2xl"
          style={{ 
            width: isMobile ? '95vw' : `${PITCH_DIMENSIONS.width}px`, 
            height: isMobile ? 'calc(95vw * 1.5)' : `${PITCH_DIMENSIONS.height}px`,
            maxWidth: isMobile ? '350px' : 'none',
            maxHeight: isMobile ? '525px' : 'none'
          }}
        >
          <div className="relative bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-2xl shadow-2xl border-4 border-white/20" 
               style={{ width: '100%', height: '100%' }}
               onClick={handlePitchClick}
          >
            {/* Enhanced Pitch Markings */}
<svg className="absolute inset-0 w-full h-full">
  {/* Define responsive dimensions */}
  <defs>
    <pattern id="grassPattern" patternUnits="userSpaceOnUse" width="120" height="120">
      <rect width="60" height="120" fill="rgba(34, 197, 94, 0.1)"/>
    </pattern>
    <linearGradient id="pitchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="rgba(34, 197, 94, 0.2)"/>
      <stop offset="100%" stopColor="rgba(22, 163, 74, 0.1)"/>
    </linearGradient>
  </defs>
  
  {/* Responsive field dimensions */}
  {(() => {
    const marginX = isMobile ? 10 : 30;
    const marginY = isMobile ? 17.5 : 50;
    const fieldWidth = isMobile ? 330 : 540;
    const fieldHeight = isMobile ? 490 : 800;
    const centerX = marginX + fieldWidth / 2;
    const centerY = marginY + fieldHeight / 2;
    
    return (
      <>
        {/* Grass pattern */}
        <rect x={marginX} y={marginY} width={fieldWidth} height={fieldHeight} fill="url(#grassPattern)"/>
        <rect x={marginX} y={marginY} width={fieldWidth} height={fieldHeight} fill="url(#pitchGradient)"/>
        
        {/* Outer boundary */}
        <rect x={marginX} y={marginY} width={fieldWidth} height={fieldHeight} fill="none" stroke="white" strokeWidth="3" rx="8"/>
        
        {/* Center circle */}
        <circle cx={centerX} cy={centerY} r={fieldWidth * 0.15} fill="none" stroke="white" strokeWidth="3"/>
        <circle cx={centerX} cy={centerY} r="3" fill="white"/>
        
        {/* Center line */}
        <line x1={marginX} y1={centerY} x2={marginX + fieldWidth} y2={centerY} stroke="white" strokeWidth="3"/>
        
        {/* Penalty areas */}
        <rect x={marginX + fieldWidth * 0.25} y={marginY} width={fieldWidth * 0.5} height={fieldHeight * 0.165} fill="none" stroke="white" strokeWidth="3"/>
        <rect x={marginX + fieldWidth * 0.25} y={marginY + fieldHeight * 0.835} width={fieldWidth * 0.5} height={fieldHeight * 0.165} fill="none" stroke="white" strokeWidth="3"/>
        
        {/* Goal areas */}
        <rect x={marginX + fieldWidth * 0.37} y={marginY} width={fieldWidth * 0.26} height={fieldHeight * 0.055} fill="none" stroke="white" strokeWidth="2"/>
        <rect x={marginX + fieldWidth * 0.37} y={marginY + fieldHeight * 0.945} width={fieldWidth * 0.26} height={fieldHeight * 0.055} fill="none" stroke="white" strokeWidth="2"/>
        
        {/* Goals */}
        <rect x={marginX + fieldWidth * 0.44} y={marginY - 6} width={fieldWidth * 0.12} height="6" fill="white" rx="2"/>
        <rect x={marginX + fieldWidth * 0.44} y={marginY + fieldHeight} width={fieldWidth * 0.12} height="6" fill="white" rx="2"/>
        
        {/* Penalty spots */}
        <circle cx={centerX} cy={marginY + fieldHeight * 0.11} r="3" fill="white"/>
        <circle cx={centerX} cy={marginY + fieldHeight * 0.89} r="3" fill="white"/>
        
        {/* Corner arcs */}
        <path d={`M ${marginX} ${marginY} A 15 15 0 0 1 ${marginX + 15} ${marginY + 15}`} fill="none" stroke="white" strokeWidth="2"/>
        <path d={`M ${marginX + fieldWidth - 15} ${marginY + 15} A 15 15 0 0 1 ${marginX + fieldWidth} ${marginY}`} fill="none" stroke="white" strokeWidth="2"/>
        <path d={`M ${marginX + 15} ${marginY + fieldHeight - 15} A 15 15 0 0 1 ${marginX} ${marginY + fieldHeight}`} fill="none" stroke="white" strokeWidth="2"/>
        <path d={`M ${marginX + fieldWidth} ${marginY + fieldHeight} A 15 15 0 0 1 ${marginX + fieldWidth - 15} ${marginY + fieldHeight - 15}`} fill="none" stroke="white" strokeWidth="2"/>
      </>
    );
  })()}
</svg>

{/* Enhanced Tactical Zones with Working Delete */}
{showZones && currentPhase && 'zones' in currentPhase && currentPhase.zones && currentPhase.zones.map((zone, idx) => {
  const marginX = isMobile ? 10 : 30;
  const marginY = isMobile ? 17.5 : 50;
  const fieldWidth = (isMobile ? 330 : 540);
  const fieldHeight = (isMobile ? 490 : 800);

  return (
  <div
    key={`zone-${idx}`}
    className="absolute rounded-xl border-4 border-dashed flex items-center justify-center font-black text-lg shadow-lg backdrop-blur-sm"
    style={{
      left: `${marginX + (zone.x / 100) * fieldWidth}px`,
      top: `${marginY + (zone.y / 100) * fieldHeight}px`,
      width: `${(zone.width / 100) * fieldWidth}px`,
      height: `${(zone.height / 100) * fieldHeight}px`,
      backgroundColor: zone.color,
      borderColor: zone.color.replace(/0\.\d+/, '0.8'),
      zIndex: 1
    }}
  >
    <span 
      className="bg-black/80 px-4 py-2 rounded-lg text-white border-2 border-white/50 cursor-pointer" 
      style={{fontSize: isMobile ? '12px' : '16px'}}
      onClick={(e) => {
        e.stopPropagation();
        if (editMode && editingMode === 'zones') {
          if (confirm(`Delete "${zone.label}" zone?`)) {
            removeTacticalZone(idx);
          }
        }
      }}
    >
      {zone.label}
    </span>
    {editMode && editingMode === 'zones' && (
      <div
        className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold cursor-pointer shadow-lg border-2 border-white"
        style={{ zIndex: 10 }}
        onMouseDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (confirm(`Delete "${zone.label}" zone?`)) {
            removeTacticalZone(idx);
          }
        }}
      >
        ×
      </div>
    )}
  </div>
)})}

{/* Enhanced Movement Lines */}
{showMovementLines && currentPhase && 'movements' in currentPhase && currentPhase.movements && (
  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
    <defs>
      {currentPhase.movements.map((_, idx) => (
        <marker
          key={idx}
          id={`arrowhead-${idx}`}
          markerWidth="12"
          markerHeight="8"
          refX="11"
          refY="4"
          orient="auto"
        >
          <polygon
            points="0 0, 12 4, 0 8"
            fill={currentPhase.movements?.[idx]?.color || '#FFD700'}
            stroke="white"
            strokeWidth="1"
          />
        </marker>
      ))}
    </defs>
    {currentPhase.movements.map((movement, idx) => {
      const marginX = isMobile ? 10 : 30;
      const marginY = isMobile ? 17.5 : 50;
      const fieldWidth = (isMobile ? 330 : 540);
      const fieldHeight = (isMobile ? 490 : 800);

      return (
      <g key={`movement-${idx}`}>
        <line
          x1={marginX + (movement.from.x / 100) * fieldWidth}
          y1={marginY + (movement.from.y / 100) * fieldHeight}
          x2={marginX + (movement.to.x / 100) * fieldWidth}
          y2={marginY + (movement.to.y / 100) * fieldHeight}
          stroke={movement.color || '#FFD700'}
          strokeWidth="4"
          strokeDasharray={movement.type === 'pass' ? '15,8' : movement.type === 'press' ? '8,4' : '0'}
          markerEnd={`url(#arrowhead-${idx})`}
          className="drop-shadow-lg cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            if (editMode && editingMode === 'arrows') {
              if (confirm(`Delete "${movement.player}" arrow?`)) {
                removeMovementArrow(idx);
              }
            }
          }}
        />
        <text
          x={marginX + ((movement.from.x + movement.to.x) / 2 / 100) * fieldWidth}
          y={marginY + ((movement.from.y + movement.to.y) / 2 / 100) * fieldHeight - 15}
          fill={movement.color || '#FFD700'}
          fontSize={isMobile ? "10" : "14"}
          fontWeight="900"
          textAnchor="middle"
          className="drop-shadow-lg cursor-pointer"
          stroke="black"
          strokeWidth="1"
          onClick={(e) => {
            e.stopPropagation();
            if (editMode && editingMode === 'arrows') {
              if (confirm(`Delete "${movement.player}" arrow?`)) {
                removeMovementArrow(idx);
              }
            }
          }}
        >
          {movement.player}
        </text>
        {editMode && editingMode === 'arrows' && (
          <circle
            cx={marginX + ((movement.from.x + movement.to.x) / 2 / 100) * fieldWidth + 40}
            cy={marginY + ((movement.from.y + movement.to.y) / 2 / 100) * fieldHeight - 15}
            r="8"
            fill="red"
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              if (confirm(`Delete "${movement.player}" arrow?`)) {
                removeMovementArrow(idx);
              }
            }}
          />
        )}
      </g>
    )})}
  </svg>
)}

            {/* Enhanced Opposition Players */}
            {showOpposition && oppositionFormations[oppositionFormation].players.map((player, idx) => {
              const marginX = isMobile ? 10 : 30;
              const marginY = isMobile ? 17.5 : 50;
              const fieldWidth = (isMobile ? 330 : 540);
              const fieldHeight = (isMobile ? 490 : 800);

              return (
                <div
                  key={`opp-${idx}`}
                  className="absolute rounded-full border-4 border-white flex items-center justify-center font-black shadow-xl"
                  style={{
                    width: isMobile ? '32px' : '40px',
                    height: isMobile ? '32px' : '40px',
                    left: `${marginX + ((100 - player.x) / 100) * fieldWidth}px`,
                    top: `${marginY + (player.y / 100) * fieldHeight}px`,
                    backgroundColor: oppositionFormations[oppositionFormation].color,
                    color: 'white',
                    fontSize: isMobile ? '10px' : '14px',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 5
                  }}
                >
                  {idx + 1}
                </div>
              )
            })}

            {/* Enhanced Team Players */}
            {currentPhase && 'players' in currentPhase && currentPhase.players.map((player: Player) => {
              const marginX = isMobile ? 10 : 30;
              const marginY = isMobile ? 17.5 : 50;
              const fieldWidth = (isMobile ? 330 : 540);
              const fieldHeight = (isMobile ? 490 : 800);

              return (
              <div key={player.id} className="relative">
                {/* Player Circle */}
                <div
                  className={`player-circle absolute rounded-full border-4 border-white flex items-center justify-center font-black cursor-pointer transition-all duration-300 shadow-xl ${editMode ? 'hover:scale-125' : 'hover:scale-115'} backdrop-blur-sm`}
                  style={{
                    width: isMobile ? PLAYER_SIZES.mobile.width + 'px' : PLAYER_SIZES.standard.width + 'px',
                    height: isMobile ? PLAYER_SIZES.mobile.height + 'px' : PLAYER_SIZES.standard.height + 'px',
                    left: `${marginX + ((100 - player.x) / 100) * fieldWidth}px`,
                    top: `${marginY + (player.y / 100) * fieldHeight}px`,
                    backgroundColor: currentTeam.primaryColor,
                    color: currentTeam.primaryColor === '#FFFFFF' ? '#000000' : '#FFFFFF',
                    fontSize: isMobile ? '12px' : '18px',
                    transform: 'translate(-50%, -50%)',
                    zIndex: hoveredPlayer === player.id ? 25 : 15,
                    boxShadow: hoveredPlayer === player.id ? 
                      `0 0 30px ${currentTeam.primaryColor}, 0 0 60px ${currentTeam.primaryColor}40` : 
                      '0 8px 16px rgba(0,0,0,0.4)',
                    border: editMode ? `4px solid ${currentTeam.secondaryColor}` : `4px solid white`
                  }}
                  onMouseEnter={() => setHoveredPlayer(player.id)}
                  onMouseLeave={() => setHoveredPlayer(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (editingMode === 'arrows') {
                      handlePlayerClick(player.id);
                    }
                  }}
                  draggable={editMode && editingMode === 'players'}
                  onDragEnd={(e) => editingMode === 'players' && handlePlayerDragEnd(player.id, e)}
                >
                  {player.id}
                </div>

                {/* Enhanced Player Name Label */}
                <div
                  className="player-name absolute font-black text-white bg-black/90 px-3 py-2 rounded-lg pointer-events-none backdrop-blur-sm border-2"
                  style={{
                    left: `${marginX + ((100 - player.x) / 100) * fieldWidth}px`,
                    top: `${marginY + (player.y / 100) * fieldHeight + (isMobile ? 20 : 35)}px`,
                    transform: 'translate(-50%, 0)',
                    zIndex: 10,
                    borderColor: currentTeam.primaryColor,
                    fontSize: isMobile ? '10px' : '14px'
                  }}
                >
                  {player.name}
                </div>

                {/* Enhanced Role Selector for Edit Mode */}
                {editMode && editingMode === 'players' && (
                  <div
                    className="absolute"
                    style={{
                      left: `${marginX + ((100 - player.x) / 100) * fieldWidth}px`,
                      top: `${marginY + (player.y / 100) * fieldHeight - (isMobile ? 25 : 40)}px`,
                      transform: 'translate(-50%, 0)',
                      zIndex: 20
                    }}
                  >
                    <select
                      value={player.role}
                      onChange={(e) => handleRoleChange(player.id, e.target.value, player.position)}
                      className="bg-black/95 text-white text-xs font-bold rounded-lg px-3 py-2 border-2 backdrop-blur-sm shadow-xl"
                      style={{
                        borderColor: currentTeam.primaryColor,
                        fontSize: isMobile ? '10px' : '12px'
                      }}
                    >
                      {getPositionSpecificRoles(player.position).map(role => (
                        <option key={role} value={role} className="bg-gray-800 font-bold">
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )})}

            {/* Enhanced Player Tooltip */}
            {hoveredPlayer && currentPhase && 'players' in currentPhase && (
              <div className="absolute bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 rounded-2xl shadow-2xl z-30 max-w-sm pointer-events-none border-4 backdrop-blur-md"
                   style={{
                     left: (() => {
                       const marginX = isMobile ? 10 : 30;
                       const fieldWidth = (isMobile ? 330 : 540);
                       const playerX = currentPhase.players.find((p: Player) => p.id === hoveredPlayer)?.x || 0;
                       return `${marginX + ((100 - playerX) / 100) * fieldWidth + 40}px`;
                     })(),
                     top: (() => {
                       const marginY = isMobile ? 17.5 : 50;
                       const fieldHeight = (isMobile ? 490 : 800);
                       const playerY = currentPhase.players.find((p: Player) => p.id === hoveredPlayer)?.y || 0;
                       return `${marginY + (playerY / 100) * fieldHeight}px`;
                     })(),
                     borderColor: currentTeam.primaryColor
                   }}>
                <div className="text-2xl font-black text-green-300 mb-2">
                  #{currentPhase.players.find((p: Player) => p.id === hoveredPlayer)?.id} {currentPhase.players.find((p: Player) => p.id === hoveredPlayer)?.name}
                </div>
                <div className="text-xl text-yellow-300 mb-3 font-black">
                  {currentPhase.players.find((p: Player) => p.id === hoveredPlayer)?.role}
                </div>
                <div className="text-base text-gray-200 leading-relaxed font-bold">
                  {currentPhase.players.find((p: Player) => p.id === hoveredPlayer)?.detail}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Tactical Analysis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Key Principles */}
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border-2 border-green-500/30 shadow-2xl">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-green-300">
              <Target size={28} />
              Key Tactical Principles
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-xl border-l-4 border-blue-400">
                <div className="font-black text-blue-300 mb-2 text-lg">🎯 Dynamic Transformations</div>
                <div className="text-blue-200 font-bold">Teams morph between phases with tactical intelligence and purpose</div>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-900/40 to-purple-800/40 rounded-xl border-l-4 border-purple-400">
                <div className="font-black text-purple-300 mb-2 text-lg">⚡ Positional Fluidity</div>
                <div className="text-purple-200 font-bold">Players interchange positions creating overloads and confusion</div>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-900/40 to-green-800/40 rounded-xl border-l-4 border-green-400">
                <div className="font-black text-green-300 mb-2 text-lg">🧠 Tactical Intelligence</div>
                <div className="text-green-200 font-bold">Every movement has purpose - space creation and exploitation</div>
              </div>
            </div>
          </div>

          {/* Phase Analysis */}
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border-2 border-green-500/30 shadow-2xl">
            <h3 className="text-2xl font-black mb-6 text-green-300">
              {gamePhase === 0 && "⚪ Formation Base"}
              {gamePhase === 1 && "🟢 Attacking Mastery"}
              {gamePhase === 2 && "🔴 Defensive Excellence"} 
              {gamePhase === 3 && "🚩 Set Piece Genius"}
            </h3>
            <div className="space-y-4">
              {gamePhase === 1 && (
                <>
                  <div className="p-4 bg-gradient-to-r from-green-900/40 to-green-800/40 rounded-xl border-l-4 border-green-400">
                    <div className="font-black text-green-300 mb-2 text-lg">🎯 Build-up Mastery</div>
                    <div className="text-green-200 font-bold">Patient circulation creates openings through intelligent movement</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-xl border-l-4 border-blue-400">
                    <div className="font-black text-blue-300 mb-2 text-lg">📐 Width Creation</div>
                    <div className="text-blue-200 font-bold">Fullbacks and wingers stretch defenses to create central spaces</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-900/40 to-purple-800/40 rounded-xl border-l-4 border-purple-400">
                    <div className="font-black text-purple-300 mb-2 text-lg">⚡ Final Third Magic</div>
                    <div className="text-purple-200 font-bold">Fluid rotations and positional chaos unlocks tight defenses</div>
                  </div>
                </>
              )}

              {gamePhase === 2 && (
                <>
                  <div className="p-4 bg-gradient-to-r from-red-900/40 to-red-800/40 rounded-xl border-l-4 border-red-400">
                    <div className="font-black text-red-300 mb-2 text-lg">🔥 Pressing Intensity</div>
                    <div className="text-red-200 font-bold">Coordinated high press wins ball back in dangerous areas</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-orange-900/40 to-orange-800/40 rounded-xl border-l-4 border-orange-400">
                    <div className="font-black text-orange-300 mb-2 text-lg">🛡️ Defensive Structure</div>
                    <div className="text-orange-200 font-bold">Organized lines move as unit to deny space and time</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 rounded-xl border-l-4 border-yellow-400">
                    <div className="font-black text-yellow-300 mb-2 text-lg">⚡ Lightning Transitions</div>
                    <div className="text-yellow-200 font-bold">Immediate counter-pressing and rapid transition to attack</div>
                  </div>
                </>
              )}

              {gamePhase === 3 && (
                <>
                  <div className="p-4 bg-gradient-to-r from-purple-900/40 to-purple-800/40 rounded-xl border-l-4 border-purple-400">
                    <div className="font-black text-purple-300 mb-2 text-lg">🎯 Set Piece Mastery</div>
                    <div className="text-purple-200 font-bold">Specialized routines exploit defensive weaknesses</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-indigo-900/40 to-indigo-800/40 rounded-xl border-l-4 border-indigo-400">
                    <div className="font-black text-indigo-300 mb-2 text-lg">🏗️ Strategic Positioning</div>
                    <div className="text-indigo-200 font-bold">Players positioned to create chaos and exploit space</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Key Players */}
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border-2 border-green-500/30 shadow-2xl">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-green-300">
              <Users size={28} />
              Star Players
            </h3>
            <div className="space-y-4">
              {currentPhase && 'players' in currentPhase && currentPhase.players.slice(0, 6).map((player: Player) => (
                <div key={player.id} 
                     className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border-2 hover:bg-black/60 transition-all backdrop-blur-sm shadow-lg"
                     style={{ borderColor: currentTeam.primaryColor + '40' }}>
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black text-white shadow-xl"
                    style={{ 
                      backgroundColor: currentTeam.primaryColor, 
                      color: currentTeam.primaryColor === '#FFFFFF' ? '#000000' : '#FFFFFF' 
                    }}
                  >
                    {player.id}
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-white text-xl">{player.name}</div>
                    <div className="text-base text-green-300 font-bold">{player.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Legend & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border-2 border-green-500/30 shadow-2xl">
            <h3 className="text-2xl font-black mb-6 text-green-300">Legend & Controls</h3>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-4 border-white shadow-xl" style={{ backgroundColor: currentTeam.primaryColor }}></div>
                  <span className="font-bold text-lg">Your Team</span>
                </div>
                {showOpposition && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-4 border-white shadow-xl" style={{ backgroundColor: oppositionFormations[oppositionFormation].color }}></div>
                    <span className="font-bold text-lg">Opposition</span>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 rounded-xl">
                  <Zap size={24} className="text-yellow-400" />
                  <span className="font-bold text-yellow-300 text-lg">Movement Arrows</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-900/40 to-purple-800/40 rounded-xl">
                  <Target size={24} className="text-purple-400" />
                  <span className="font-bold text-purple-300 text-lg">Tactical Zones</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border-2 border-green-500/30 shadow-2xl">
            <h3 className="text-2xl font-black mb-6 text-green-300">Hub Statistics</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">{legendaryTeams.length}</div>
                <div className="text-lg text-green-300 font-bold">Legendary Teams</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">4</div>
                <div className="text-lg text-green-300 font-bold">Game Phases</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">25+</div>
                <div className="text-lg text-green-300 font-bold">Player Roles</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl border-l-4 border-green-400">
              <div className="font-black text-green-300 text-xl mb-3">💡 Masters Wisdom</div>
              <div className="text-green-200 font-bold italic leading-relaxed">
                Study how teams transform between phases - the greatest tactical minds master these transitions like conducting a symphony!
              </div>
            </div>
          </div>
        </div>

{/* Enhanced Footer - Mobile Responsive */}
<div className="text-center">
  <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-black/30 backdrop-blur-md rounded-2xl px-4 sm:px-8 lg:px-12 py-4 sm:py-6 border-2 border-green-500/30 shadow-2xl max-w-full">
    <span className="text-lg sm:text-2xl lg:text-3xl font-black text-green-300 text-center">
      Tactical Evolution:
    </span>
    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
      {legendaryTeams.length}
    </div>
    <span className="text-base sm:text-lg lg:text-xl text-green-400 font-black text-center">
      masterpieces analyzed
    </span>
  </div>
</div>
      </div>
    </div>
  );
}