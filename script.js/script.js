function toggleNote(i, num) {
  let notes = cells[i].note.dataset.notes || "";

  if (notes.includes(num)) {
    notes = notes.replace(num, "");
  } else {
    notes += num;
  }

  cells[i].note.dataset.notes = notes;

  renderNotes(cells[i].note, notes);
}

function renderNotes(noteEl, notes) {
  noteEl.innerHTML = "";

  for (let n = 1; n <= 9; n++) {
    const span = document.createElement("span");
    span.textContent = notes.includes(String(n)) ? n : "";
    noteEl.appendChild(span);
  }
}
