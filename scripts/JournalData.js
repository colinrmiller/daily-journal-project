/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "08/14/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok",
    },
    {
        id: 2,
        date: "08/19/2021",
        concept: "JS Modules",
        entry: "We learned how to import and export JS objects, as well as for..of loops.",
        mood: "Pretty Good",
    },
    {
        id: 3,
        date: "08/20/2021",
        concept: "JS Modules cont.",
        entry: "We implemented the concepts of JS Modules, DOM manipulation, and iterator methods",
        mood: "Good",
    },
];

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    );
    return sortedByDate;
};

export const getSingleJournalEntry = (entryId) => {
    return journal.filter((obj) => obj.id == entryId);
};
