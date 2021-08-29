import { EntryListComponent } from "./JournalEntryList.js";
import { PopulateAside } from "./JournalEntryList.js";
import { NewEntry } from "./NewEntry.js";

// EntryListComponent()

// console.log(`${document.getElementById("mood").selectedIndex}`);

// const deselectSelector = () => {
// document.getElementById("mood").selectedIndex = "-1";
// }

// deselectSelector()

// console.log(`${document.getElementById("mood").selectedIndex}`);

PopulateAside();

const addEntryEnvent = document
    .querySelector(".new-entry")
    .addEventListener("click", NewEntry);
