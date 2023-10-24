const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

const command = process.argv[2];

const msg = getNotes();

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    },
    builder: {
        title: {
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    handler: function(){
        console.log('Removing a new note');
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing a new note',
    handler: function(){
        console.log('Listing a new note');
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading your note',
    handler: function(){
        console.log('Reading a note');
    }
})

yargs.parse();