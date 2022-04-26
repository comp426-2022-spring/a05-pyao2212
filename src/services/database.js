/*
    This is a JavaScript fie which is run to either initialize the log.db file (where the actual 
    database data is stored) to sqlite format, or if the log.db file is already initialized, 
    it simply exports the db object (which essentially manages the log.db file) for external use.
*/
"use strict";
const database = require("better-sqlite3")
const db = new database("log.db")

const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`);
let row = stmt.get();

if (row === undefined) {
    console.log('Database uninitialized...')
    console.log('Creating Database...')
    const sqlInit = `CREATE TABLE accesslog (
        id INTEGER PRIMARY KEY, 
        remoteaddr TEXT, 
        remoteuser TEXT, 
        time TEXT, 
        method TEXT, 
        url TEXT, 
        protocol TEXT,
        httpversion TEXT, 
        status TEXT, 
        referer TEXT,
        useragent TEXT
    );`;
    db.exec(sqlInit)
} else {
    console.log("Database exists!");
}

module.exports = db