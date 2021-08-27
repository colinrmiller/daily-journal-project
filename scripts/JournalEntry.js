/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p class="journalEntry__text">${entry.entry}</p>
            <div class="journalEntry__footer">
                <p class="journalEntry__concept">Concepts: ${entry.concept}</p>
                <p class="journalEntry__date">Date: ${entry.date}</p>
            </div>
        </section>
    `
}