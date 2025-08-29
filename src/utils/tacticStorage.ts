import { Team } from '../types/tactics';

export const saveCustomTactic = (tactic: Team): void => {
  try {
    localStorage.setItem('customTactic', JSON.stringify(tactic));
  } catch (error) {
    console.error('Failed to save custom tactic:', error);
  }
};

export const loadCustomTactic = (): Team | null => {
  try {
    const saved = localStorage.getItem('customTactic');
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load custom tactic:', error);
    return null;
  }
};

export const clearCustomTactic = (): void => {
  try {
    localStorage.removeItem('customTactic');
  } catch (error) {
    console.error('Failed to clear custom tactic:', error);
  }
};