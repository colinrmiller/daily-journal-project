export const NewEntry = () => {
    const pageElement = document.querySelector(".page-body");

    pageElement.innerHTML = `
    <section class="field__entry">
    <fieldset>
        <div id="entry-form">
            <textarea
                id="new-journal-entry"
                rows="5"
                cols="60"
                name="text"
            ></textarea>
            <span class="placeholder">Enter Text</span>
        </div>
        <div>
            <form action="/action_page.php">
                <div>
                    <input
                        type="date"
                        id="form-date"
                        name="date"
                    />
                    <span class="placeholder" for="date"
                        >Date</span
                    >
                </div>
                <div>
                    <input
                        type="text"
                        id="form-concepts"
                        name="concepts-covered"
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
                        name="mood"
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

                <input
                    type="submit"
                    value="Submit"
                    id="submit"
                />
            </form>
        </div>
    </fieldset>
</section>
    `;
};
