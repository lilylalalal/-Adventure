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

        let found = this.currentRoom.items.filter(item => item !== roomitem )
        
        this.currentRoom.items= found
       
        return this.items , Room.items

    }

    dropItem(itemName) {
        //Drops an item the player is holding into their current room
        // this.Items.getItemByName(name) identify the item (Key value pairs)
        let drppeditem = this.getItemByName(itemName) 
        //remove item from  this.Items
        let filtered = this.items.filter(item => item !== drppeditem )
        this.items = filtered
        //Add item into this.currentRoom.items
        this.currentRoom.items.push(drppeditem )
        return this.items
    }

    eatItem(itemName) {
        // Fill this in
        //this.Items.getItemByName(name) identify the item 
        let eatitem = this.getItemByName(itemName) 
        // check if item is food
        if (eatitem.isFood == true) {
        // remove item from this.Items
        let filtered = this.items.filter(item => item !== eatitem )
        this.items = filtered
    }

        return this.items
    }
    

    getItemByName(name) {
       let find = this.items.find(dict => dict.name === name)
       return find
        // Fill this in
        //Retrieves an item from a player's inventory by name
    }
}

let item1 = new Food("food", "just a simple apple",true);
let item2 = new Item("book", "just a simple book");
let room = new Room("Test Room", "A test room");
let player = new Player("player", room);

player.items.push(item1);
player.items.push(item2);
//player.items.push(item1)
//player.items.push(item2)
console.log(player.items)
//console.log(player.getItemByName("rock"))

player.eatItem("food");
console.log("PLAYER after ate: ",player.items)
//console.log("Room: ",room.items)

module.exports = {
  Player,
};
