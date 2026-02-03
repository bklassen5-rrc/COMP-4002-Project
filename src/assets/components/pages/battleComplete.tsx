import { useState } from "react";
import './battleComplete.css'


// flow
// items appear
// click item(s
// popup saying "are you sure you want to discard?")
//"confirm"
// items removed

function BattleComplete() {
    // placeholder data

    const experienceGained = 150
    // const itemsDropped = ["Minor Health Potion", "Broken Straight Sword"]
    const [itemsDropped, setItemsDropped] = useState([
        {id: 1, value: "Minor Health Potion"},
        {id: 2, value: "Broken Straight Sword"},
        {id: 3, value: "A rusted nail"},
        {id: 4, value: "An all-seeing eyeball"}
    ])
    // items that are 'dropped' after the fight
    const [itemsDiscarded, setItemsDiscarded] = useState<{id: number, value: string}[]>([])
    // need another state to track items that player doesn't want anymore
    const[selectedItems, setSelectedItems] = useState<{id: number, value: string}[]>([])
    
    return(
        <div className="postBattleOverlay">
            <div className="postBattleModal">
                {/* <h1>{victoryAchieved ? "VICTORY!" : "DEFEAT"}</h1> */}
                <h1>VICTORY!</h1>
                <p>Experience gained: {experienceGained}</p>
                <div>
                    <h3>Items Dropped</h3>
                    <p>Select the ones you'd like to discard:</p>
                    <br></br>
                   <ul>
                        {
                            itemsDropped.map((items) => {

                                return(
                                    <li key={items.id}
                                     className={selectedItems.filter(selectedItem => selectedItem.id === items.id).length > 0 ? "selected" : ""}
                                        onClick={() => {
                                            if(selectedItems.filter(selectedItem => selectedItem.id === items.id).length > 0 ){
                                                setSelectedItems(oldList => oldList.filter(filteredItems => filteredItems.id != items.id));
                                            } else {
                                                setSelectedItems(oldItems => [...oldItems, items])
                                            }
                                        }}
                                    >
                                        {items.value}
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <h3>Are you sure you want to discard these items?</h3>
                    <ul>
                        {itemsDiscarded.map((itemsDiscard) => {
                            return(
                                <li key = {itemsDiscard.id}>
                                    {itemsDiscard.value}
                                </li>
                            );
                        })}
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