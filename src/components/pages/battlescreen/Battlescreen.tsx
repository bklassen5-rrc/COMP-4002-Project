import { useState } from "react";
import AllyIcon from "./AllyIcon";
import BattleLog from "./Battlelog";
import MovesPanel from "./MovesPanel";
import "./BattleScreen.css";

interface LogMessage {
    id: number;
    type: 'system' | 'ally' | 'enemy' 
}

function BattleScreen() {
    return (
        <div className="battle-screen">
            {/* Battle Area */}
            <div className="battle-area">
                {/* Enemy Section */}
                <div className="enemy-container">
                    <div className="enemy-placeholder">E</div>
                </div>

                {/* Allies Section */}
                <div className="allies-container">
                    <div className="ally-sprite">A1</div>
                    <div className="ally-sprite">A2</div>
                    <div className="ally-sprite">A3</div>
                    <div className="ally-sprite">A4</div>
                </div>
            </div>

            {/* Bottom UI Panel */}
            <div className="battle-ui">
                {/* Move Buttons */}
                <div className="moves-panel">
                    <button className="move-button">Attack</button>
                    <button className="move-button">Skills</button>
                    <button className="move-button">Movement</button>
                    <button className="move-button">Guard</button>
                </div>

                {/* Ally Icons */}
                <div className="ally-icons-panel">
                    <AllyIcon />
                    <AllyIcon />
                    <AllyIcon />
                    <AllyIcon />
                </div>
            </div>
        </div>
    );
}

export default BattleScreen;