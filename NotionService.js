import { Client } from '@notionhq/client';

const databaseId_NextGame = "";
const user_auth = "";
const notion = new Client({ auth: user_auth });

export async function getAllNotionEntries() {
    let pages = [];
    let hasMorePages = true;
    let startCursor = undefined;
  
    while (hasMorePages) {
        const response = await notion.databases.query({
        database_id: databaseId_NextGame,
        start_cursor: startCursor,
        });

        pages.push(...response.results);

        if (response.has_more) {
            startCursor = response.next_cursor;
        } else {
            hasMorePages = false;
        }
    }

    console.log(pages.length);
    //return pages;
}
