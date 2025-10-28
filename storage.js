// storage.js
const STORAGE_KEY = 'kanban_issues';

// Carica tutte le issue salvate
function loadIssues() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Salva le issue aggiornate
function saveIssues(issues) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(issues));
}

