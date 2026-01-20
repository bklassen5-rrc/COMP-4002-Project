import './battleComplete.css'

function BattleComplete() {
    // placeholder data

    const experienceGained = 150
    const itemsDropped = ["Minor Health Potion", "Broken Straight Sword"]
    return(
        <div className="postBattleOverlay">
            <div className="postBattleModal">
                {/* <h1>{victoryAchieved ? "VICTORY!" : "DEFEAT"}</h1> */}
                <h1>VICTORY!</h1>
                <p>Experience gained: {experienceGained}</p>
                <div>
                    <h3>Items Dropped</h3>
                    <ul>
                        {itemsDropped.map((item) =>(
                        <li key={item}>{item}</li>))}
                    </ul>
                    <p className='baggedGoods'>You safely tuck the items into your bag.</p>
                    <p className='baggedGoods'>Best be on your way.</p>
                    <button className="continueButton">continue</button>
                </div>
            </div>
        </div>
    );
}

export default BattleComplete