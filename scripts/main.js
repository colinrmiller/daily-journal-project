// import { EntryListComponent } from "./JournalEntryList.js";
import { PopulateAside } from "./Aside.js";
import { NewEntry } from "./NewEntry.js";
import { updatePost, getSinglePost } from "./data/DataManager.js";
// import { PostEdit } from "./html/PostEdit.js";
import { WriteHeader } from "./html/WriteHeader.js";
import { updatePostEvent } from "./UpdateEntry.js";
import { WriteEntry } from "./html/WriteEntry.js";

// build sideBar
PopulateAside();

// add NewEntry Event
const addEntryEnvent = document
    .querySelector(".new-entry")
    .addEventListener("click", NewEntry);

// EDIT POSTS
document.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.id.startsWith("edit")) {
        const postId = event.target.id.split("--")[1];
        getSinglePost(postId).then((response) => {
            showEdit(response);
        });
    }
    if (event.target.id.startsWith("update")) {
        updatePostEvent(event);
    }
    if (event.target.id.startsWith("cancel-update")) {
        // updatePostEvent(event);
        NewEntry();
    }
});

const showEdit = (postObj) => {
    WriteHeader(`Editing Entry From ${postObj.date}`);

    const entryElement = document.querySelector("#page-body");
    entryElement.innerHTML = WriteEntry(postObj, true);
};
