const ROWS = 5;
const COLS = 5;
const CELLS = 63;

const ICONS = {
    1: "stop", 
    2: "yield",
    3: "scenic-area",
    4: "do-not-enter",
    5: "tow-truck", 
    6: "electric-car",
    7: "hay",  
    8: "convertible",
    9: "lift-kit",  
    10: "fire-hydrant",
    11: "snake",
    12: "fire-truck", 
    13: "pool",  
    14: "dog",  
    15: "bicycle",  
    16: "traffic-cone", 
    17: "motorcycle",  
    18: "wrong-way",  
    19: "no-turn-on-red",
    20: "dump-truck",  
    21: "deer-crossing",
    22: "us-flag",  
    23: "rebel-flag",  
    24: "hospital",
    25: "moose",  
    26: "helicopter",  
    27: "duck",  
    28: "bird-of-prey",  
    29: "moose-crossing",
    30: "fence",  
    31: "airport",
    32: "airplane",  
    33: "one-way",
    34: "rainbow",
    35: "digger",  
    36: "oversize-load",  
    37: "silo",  
    38: "derelict-house",  
    39: "pedestrian-crossing",  
    40: "police-car",  
    41: "porta-potty",  // missing
    42: "crane",  
    43: "information", 
    44: "river",  
    45: "cemetery",  
    46: "bear",  
    47: "motorhome",  
    48: "delivery-truck",  
    49: "solar-panel",  
    50: "cell-tower",  
    51: "sailboat",  
    52: "golf",  
    53: "stadium",  
    54: "playground",  
    55: "derelict-car",  // missing
    56: "train",  
    57: "farm-animal",  
    58: "for-sale",  
    59: "golf-cart",  
    60: "ambulance",  
    61: "school-bus",  
    62: "tanker-truck",  
    63: "water-tower"  
}

function createBingoCard() {
    const card = [];
    const usedNumbers = new Set();

    while (usedNumbers.size < ROWS * COLS) {
        const num = Math.floor(Math.random() * CELLS) + 1;
        if(!usedNumbers.has(num)) {
            usedNumbers.add(num)
        }
    }

    const numbersArray = 
        Array.from(usedNumbers);

    for (let i = 0; i < ROWS; i++) {
        card.push(numbersArray.slice(i * COLS, (i + 1) * COLS));
    }

    return card;
}

function displayBingoCard(card, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    for (let i = 0; i < ROWS; i++) {
    
        for (let j = 0; j < COLS; j++) {
    
            const cell = 
                document.createElement('div');
	
	    var x = document.createElement('img');
 		
 	    if (i == 2 && j == 2) {
            	x.setAttribute('src', "icons/FREE.svg");
 		x.setAttribute('alt', "FREE");
 		} else {
		let source = ICONS[card[i][j]];
            	x.setAttribute('src', "icons/" + ICONS[card[i][j]] + ".svg");
 		x.setAttribute('alt', ICONS[card[i][j]]);
 		}
 		cell.appendChild(x);
 	    
        	container.appendChild(cell);
        }
    }
}



document.getElementById('resetButton')
    .addEventListener('click', () => {
        player1Card = createBingoCard();
        player2Card = createBingoCard();
        displayBingoCard(player1Card, 'bingoCard1');
        displayBingoCard(player2Card, 'bingoCard2');
    });

