import * as fs from 'node:fs'
import { Note } from '../types/notes'

type NotesRaw = {
  notes: Note[]
}

export function getNotes(): Note[] {
  const notesRaw = fs.readFileSync('data/notes.json', 'utf8')
  const notizen = JSON.parse(notesRaw) as NotesRaw
  const array = notizen.notes
  return array
}
