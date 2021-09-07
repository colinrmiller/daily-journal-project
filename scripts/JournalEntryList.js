/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "./JournalData.js";
import { getSingleJournalEntry } from "./JournalData.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { JournalSidebarComponent } from "./JournalEntry.js";

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog");

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getJournalEntries();
    // populate aside
    for (const entry of entries) {
        entryLog.innerHTML += JournalEntryComponent(entry);
    }
};

export const PopulateAside = () => {
    const entries = getJournalEntries();

    const asideComponent = document.querySelector(".aside-bar");

    asideComponent.innerHTML = "";
    console.log("cleared aside");

    for (const entry of entries) {
        asideComponent.innerHTML += JournalSidebarComponent(entry);
    }

    asideComponent.addEventListener("click", (event) => {
        console.log(event);
        console.log(event.target.id);

        if (event.target.id.startsWith("aside-entry")) {
            DisplayJournalEntry(event.target.id.split("--")[1]);
        }
    });
};

const DisplayJournalEntry = (entryId) => {
    const pageElement = document.querySelector("#page-body");
    const entryObject = getSingleJournalEntry(entryId)[0];

    const pageHeader = document.querySelector("#page-header");
    pageHeader.innerHTML = `<h1>Jounral Entry: ${entryObject["date"]}</h1>`;

    console.log(entryObject);

    pageElement.innerHTML = JournalEntryComponent(entryObject);
};
