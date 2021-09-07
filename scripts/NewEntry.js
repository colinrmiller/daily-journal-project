import { createPost } from "./data/DataManager.js";
import { PopulateAside } from "./JournalEntryList.js";
// execute display for newEntry
export const NewEntry = () => {
    // populate header
    const pageHeader = document.querySelector("#page-header");

    pageHeader.innerHTML = `<h1>New Entry</h1>`;

    // populate body
    const pageElement = document.querySelector("#page-body");

    pageElement.innerHTML = `
    <section class="field__entry">
    <fieldset>
        <div id="entry-form">
            <textarea
                id="new-journal-entry"
                rows="5"
                cols="60"
                name="post--text"
            ></textarea>
            <span class="placeholder">Enter Text</span>
        </div>
        <div>
            <form action="/action_page.php">
                <div>
                    <input
                        type="date"
                        id="form-date"
                        name="post--date"
                    />
                    <span class="placeholder" for="date"
                        >Date</span
                    >
                </div>
                <div>
                    <input
                        type="text"
                        id="form-concepts"
                        name="post--concepts-covered"
                        placeholder="eg. HTML, array methods..."
                    />
                    <span
                        class="placeholder"
                        for="concepts-covered"
                        >Concepts Covered</span
                    >
                </div>
                <div>
                    <span class="placeholder" for="mood"
                        >Mood</span
                    >
                    <select
                        id="form-mood"
                        name="post--mood"
                        selectedIndex="2"
                    >
                        <option
                            value=""
                            style="color: grey"
                            class="default"
                        >
                            --How Are You Feeling Today?--
                        </option>
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="tired">Tired</option>
                        <option value="excited">Excited</option>
                        <option value="calm">Calm</option>
                        <option value="cranky">Cranky</option>
                        <option value="dreamy">Dreamy</option>
                        <option value="dreamy">Good</option>
                        <option value="dreamy">
                            Pretty Good
                        </option>
                    </select>
                </div>
                <div class="post__options">
                    <div id="new-post--cancel" class="form-button">Cancel</div>
                    <div id="new-post--submit" class="form-button">Submit</div>
                </div>
            </form>
        </div>
    </fieldset>
</section>
    `;
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
            //collect the input values into an object to post to the DB
            console.log("submitting");

            const postText = document.querySelector(
                "textarea[name='post--text']"
            ).value;
            const postDate = document.querySelector(
                "input[name='post--date']"
            ).value;
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
        }
    });
};

const ClearPostForm = () => {
    document.querySelector("textarea[name='post--text']").value = "";
    document.querySelector("input[name='post--date']").value = "";
    document.querySelector("input[name='post--concepts-covered']").value = "";
    document.querySelector("select[name='post--mood']").selectedIndex = "0";
};

// add post to DB on 'Save'
