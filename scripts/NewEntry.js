import { createPost } from "./data/DataManager.js";
import { PopulateAside } from "./Aside.js";
import { WriteHeader } from "./html/WriteHeader.js";
import { NewEntryHTML } from "./html/NewEntryHTML.js";
import { WriteEntry } from "./html/WriteEntry.js";

// execute display for newEntry
export const NewEntry = () => {
    WriteHeader(`New Entry`);
    // const pageHeader = document.querySelector("#page-header");

    // pageHeader.innerHTML = `<h1>New Entry</h1>`;

    // populate body
    const pageElement = document.querySelector("#page-body");

    pageElement.innerHTML = WriteEntry(null);
    addEntryClickEvents();
};

const addEntryClickEvents = () => {
    // clear post on 'Clear'
    document.addEventListener("click", (event) => {
        if (event.target.id === "new-post--cancel") {
            ClearPostForm();
        }
    });

    // submit form on 'Submit'
    document.addEventListener("click", (event) => {
        // event.preventDefault();
        if (event.target.id === "new-post--submit") {
            newPostSubmitEventHandler();
        }
    });
};

const newPostSubmitEventHandler = () => {
    //collect the input values into an object to post to the DB
    const postText = document.querySelector(
        "textarea[name='post--text']"
    ).value;
    const postDate = document.querySelector("input[name='post--date']").value;
    const postConcepts = document.querySelector(
        "input[name='post--concepts-covered']"
    ).value;
    const postMoodIndex = document.querySelector(
        "select[name='post--mood']"
    ).selectedIndex;

    const postObject = {
        userId: 1, // hardcode the user as 1 until it's created
        timestamp: Date.now(),
        date: postDate,
        entry: postText,
        mood: postMoodIndex, // TODO convert index to mood
        conceptsCovered: postConcepts,
    };
    createPost(postObject);
    ClearPostForm();
    PopulateAside();
};

const ClearPostForm = () => {
    document.querySelector("textarea[name='post--text']").value = "";
    document.querySelector("input[name='post--date']").value = "";
    document.querySelector("input[name='post--concepts-covered']").value = "";
    document.querySelector("select[name='post--mood']").selectedIndex = "0";
};

// add post to DB on 'Save'
