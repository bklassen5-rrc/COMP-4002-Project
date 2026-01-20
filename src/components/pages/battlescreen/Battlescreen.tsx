import AllyIcon from "./AllyIcon";
import "./BattleScreen.css";

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