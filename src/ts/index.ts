import { notesToPlayInOrder } from "./music-to-play";

function playMusic() {
    const notes = notesToPlayInOrder;

    // to cycle through the notes automatically in order.
    for (var key in notes) {
        if (notes.hasOwnProperty(key)) {
            return notes[key];
        }
    }

    //Also you can play them one by one but it is not an optimal solution.

    // TODO Play these notes one after the other at the pitch and rhythm given in each note
}
document.getElementById('start-playing')?.addEventListener('click', playMusic);
