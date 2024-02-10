import { Client } from '@notionhq/client';

let databaseId_NextGame = "";
let notion = "";

export function setOAuth(notionOAuth){
    notion = new Client({ auth: notionOAuth });
}
    
export function setDatabaseId(notionId){
    databaseId_NextGame = notionId;
}

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

    return pages;
}

export async function getNotionEntryNames() {
    let names = [];
    let hasMorePages = true;
    let startCursor = undefined;
  
    while (hasMorePages) {
      const response = await notion.databases.query({
        database_id: databaseId_NextGame,
        start_cursor: startCursor,
      });
  
      names = names.concat(response.results.map(entry => entry.properties["Name"].title[0] ? entry.properties["Name"].title[0].text.content : ""));
  
      if (response.has_more) {
        startCursor = response.next_cursor;
      } else {
        hasMorePages = false;
      }
    }
    
    return names;
}
