import { useEffect, useState } from 'react';
import type { BattleLogMessage } from '../types/BattleLogMessage';
import * as BattleLogService from '../services/battleLogService';

/**
 * This is a custom hook, which is defined when we want to reuse presentation
 * logic. They are often built around specific groups of data or behavior.
 * 
 * You can think of this hook as an extra layer of functionality that we've 
 * added to a State that is an array of BattleLogMessage[].
 * 
 * Hooks typically return an object that holds functions and variables for 
 * reading and interacting with a state or set of states.
 * 
 * @param dependencies: any variables that, when changed, should re-query 
 *  ("refresh") our list of messages by getting all messages from our Service
 * @returns {
 *  messages: the array of battle log messages to display
 *  error: any error message that is raised 
 *  handleAttack: method that processes an attack action
 *  handleSkill: method that processes a skill action
 *  handleGuard: method that processes a guard action
 *  handleMovement: method that processes a movement action
 * }
 */
export function useBattleLog(dependencies: unknown[]) {
    const [messages, setMessages] = useState<BattleLogMessage[]>([]);
    const [error, setError] = useState<string | null>(null);

    /**
     * Get the BattleLogService to fetch all messages and store them in state.
     */
    const fetchMessages = async () => {
        try {
            const result = await BattleLogService.fetchMessages();
            // map the resulting array onto the state
            setMessages([...result]);
        } catch (errorObject) {
            // set the error state to the error object if an error is caught
            setError(`${errorObject}`);
        }
    };

    /**
     * Handle attack action
     * Triggers attack business logic and updates UI
     * @param weaponType - The weapon being used (default: 'sword)
     * @param damage - The damage amount (default: 15)
     */
    const handleAttack = async (weaponType: string = 'sword', damage: number = 15) => {
        try {
            await BattleLogService.processAttackAction(weaponType, damage);
            // re-fetch messages to update our state once the operation is finished
            await fetchMessages();
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    };

    /**
     * Handle skill action
     * Triggers skill business logic and updates UI
     * @param skillName - The skill being used (default: 'Fireball)
     * @param damage - The damage amount (default: 25)
     */
    const handleSkill = async (skillName: string = 'Fireball', damage: number = 25) => {
        try {
            await BattleLogService.processSkillAction(skillName, damage);
            // re-fetch messages to update our state once the operation is finished
            await fetchMessages();
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    };

    /**
     * Handle guard action
     * Triggers guard business logic and updates UI
     */
    const handleGuard = async () => {
        try {
            await BattleLogService.processGuardAction();
            // re-fetch messages to update our state once the operation is finished
            await fetchMessages();
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    };

    /**
     * Handle movement action (placeholder)
     * Currently just adds a system message
     */
    const handleMovement = async () => {
        try {
            await BattleLogService.addSystemMessage('Movement option selected.');
            // re-fetch messages to update our state once the operation is finished
            await fetchMessages();
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    };

    /**
     * When this hook is first invoked, fetchMessages() immediately runs, getting
     * all messages from its service.
     * 
     * If any of the dependencies that this hook received change in value,
     * it will re-run the fetch automatically.
     */
    useEffect(() => {
        fetchMessages();
    }, [...dependencies]);

    /**
     * Not all return object properties have to be used; components can choose
     * which handlers they need.
     * Note that we can use custom hooks to limit how components can interact with a state.
     */
    return {
        messages,
        error,
        handleAttack,
        handleSkill,
        handleGuard,
        handleMovement
    };
}