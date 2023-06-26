const { Food } = require('./food');
const { Item } = require('./item');
const { Room } = require('./room');
class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Fill this in
        //Picks up an item from a room into the player's inventory
        //1: Add item into Player list
        let roomitem = this.currentRoom.getItemByName(itemName)
        //console.log(roomitem)
        this.items.push(roomitem)
        //console.log("thisitems:",this.items)
        //remove item from Room list
        let newarray = []

        let found = this.currentRoom.items.filter(item => item !== roomitem )
        
        this.currentRoom.items= found
       


        return this.items , Room.items

    }

    dropItem(itemName) {

        // Fill this in
        //Drops an item the player is holding into their current room
    }

    eatItem(itemName) {
        // Fill this in
        //let food = new Food(itemName)
        if (itemName.isFood === true) {
        let index = this.items.indexOf(itemName)
        this.items.splice(index,1)

        return this.items
    }

    }

    getItemByName(name) {
       let find = this.items.find(dict => dict.name === name)
       return find
        // Fill this in
        //Retrieves an item from a player's inventory by name
    }
}

let item1 = new Item("rock", "just a simple rock");
let item2 = new Item("book", "just a simple book");
let room = new Room("Test Room", "A test room");
let player = new Player("player", room);

room.items.push(item1);
room.items.push(item2);
//player.items.push(item1)
//player.items.push(item2)
//console.log(player.items)
//console.log(player.getItemByName("rock"))

player.takeItem("rock");
console.log("PLAYER: ",player.items)
console.log("Room: ",room.items)
console.log(player.getItemByName("rock"))

module.exports = {
  Player,
};
