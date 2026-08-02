import { describe, it, expect } from 'vitest';
import { processCommand } from './script.js';

describe('Voice Control Portfolio Tests', () => {
  it('should process command correctly', () => {
    const result = processCommand('open portfolio');
    expect(result).toBe('Executing: open portfolio');
  });

  it('should handle empty input', () => {
    const result = processCommand('');
    expect(result).toBe('Empty command');
  });
});