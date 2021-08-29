export const NewEntry = () => {
    const pageElement = document.querySelector(".page-body");

    pageElement.innerHTML = `
    <section class="field__entry">
    <fieldset>
        <textarea
            id="new-journal-entry"
            rows="5"
            cols="60"
            name="text"
            placeholder="Enter text"
        ></textarea>
        <div>
            <form action="/action_page.php">
                <label for="date">Date</label>
                <input type="date" id="date" name="date" />

                <label for="concepts-covered"
                    >Concepts Covered</label
                >
                <input
                    type="text"
                    id="concepts"
                    name="concepts-covered"
                    placeholder="eg. HTML, array methods..."
                />

                <label for="mood">Mood</label>
                <select id="mood" name="mood" selectedIndex="2">
                    <option value="">
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
                    <option value="dreamy">Pretty Good</option>
                </select>

                <input
                    type="submit"
                    value="Submit"
                    id="submit"
                />
            </form>
        </div>
        <!-- <label class="journal-entry" for="journalEntry">Journal Entry</label> -->
    </fieldset>
</section>


    `;
};
