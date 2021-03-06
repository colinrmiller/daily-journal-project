/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journal-entry">
            <p class="journal-entry__text">${entry.entry}</p>
            <div class="journal-entry__footer">
                <p class="journal-entry__concept">Concepts: ${entry.concept}</p>
                <p class="journal-entry__date">Date: ${entry.date}</p>
            </div>
            <div id="delete--${entry.id}"">Delete</div>
        </section>
    `;
};

export const JournalSidebarComponent = (entry) => {
    return `
        <a class="aside-bar__item" href="#" id="aside-entry--${entry.id}">
            <div class="aside-bar__item--icon">
                <img src="icons/outline_description_black_24dp.png">
            </div>
            <h4>Date: ${entry.date}</h4>
            <div class="aside-bar__item--delete hide" id="delete-entry--${entry.id}">
                <img src="icons/outline_delete_black_24dp.png">
            </div>
        </a>
            `;
};
