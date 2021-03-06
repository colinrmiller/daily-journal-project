/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { deletePost, getPosts } from "./data/DataManager.js";
import { getJournalEntries } from "./JournalData.js";
import { getSingleJournalEntry } from "./JournalData.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { JournalSidebarComponent } from "./JournalEntry.js";
import { CreateDeleteEntryAsideEvent } from "./DeleteEntry.js";
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

    getPosts()
        .then((postObjs) => {
            for (const post of postObjs) {
                asideComponent.innerHTML += JournalSidebarComponent(post);
            }
            return postObjs;
        })
        .then((postObjs) => {
            for (const post of postObjs) {
                let entryElem = document.querySelector(
                    `#aside-entry--${post.id}`
                );
                let deleteElem = document.querySelector(
                    `#delete-entry--${post.id}`
                );
                entryElem.addEventListener("click", (event) => {
                    DisplayJournalEntry(post.id);
                });
                deleteElem.addEventListener("click", (event) => {
                    deletePost(post.id);
                });
            }
        });
};

const DisplayJournalEntry = (entryId) => {
    const pageElement = document.querySelector("#page-body");
    const pageHeader = document.querySelector("#page-header");
    getPosts().then((postObjs) => {
        let postId;
        const entryObject = postObjs.find((post) => {
            postId = post.id;
            return post.id == entryId;
        });

        pageHeader.innerHTML = `<h1>Jounral Entry: ${entryObject["date"]}</h1>`;

        // display journal on DOM
        pageElement.innerHTML = JournalEntryComponent(entryObject);

        // add delete functionality
        const deleteElement = document.querySelector(`#delete--${postId}`);
        deleteElement.addEventListener("click", () => {
            deletePost(postId);
            pageElement.innerHTML = "";
        });
    });
};
