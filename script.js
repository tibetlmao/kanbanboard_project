let issues = [];

// Elementi principali
const openDialogBtn = document.getElementById('open-issue-form');
const closeDialogBtn = document.getElementById('close-issue-form');
const issueDialog = document.getElementById('issue-dialog');
const newIssueForm = document.getElementById('new-issue-form');
const searchInput = document.getElementById('issue-search');
const statusFilter = document.getElementById('status-filter'); // Filtro per stato

// Inizializzazione
window.addEventListener('DOMContentLoaded', () => {
  issues = loadIssues();
  renderBoard(issues);
  enableDragAndDrop();
});

// Apri / chiudi dialog
openDialogBtn.addEventListener('click', () => issueDialog.showModal());
closeDialogBtn.addEventListener('click', () => issueDialog.close());

// Aggiungi nuova issue
newIssueForm.addEventListener('submit', e => {
  e.preventDefault();

  const newIssue = {
    id: Date.now(),
    title: document.getElementById('issue-title').value.trim(),
    description: document.getElementById('issue-description').value.trim(),
    priority: document.getElementById('issue-priority').value,
    status: 'backlog',
  };

  issues.push(newIssue);
  saveIssues(issues);
  renderBoard(issues);
  issueDialog.close();
  newIssueForm.reset();
});

// Filtro di ricerca testo
searchInput.addEventListener('input', applyFilters);

// Filtro per stato
statusFilter.addEventListener('change', applyFilters);

// Funzione combinata di filtraggio
function applyFilters() {
  const query = searchInput.value.toLowerCase();
  const status = statusFilter.value;

  const filtered = issues.filter(issue => {
    const matchesText =
      issue.title.toLowerCase().includes(query) ||
      issue.description.toLowerCase().includes(query);
    const matchesStatus = status === 'all' || issue.status === status;
    return matchesText && matchesStatus;
  });

  renderBoard(filtered);
}

// Drag and Drop con SortableJS
function enableDragAndDrop() 
{
  const lists = ['backlog', 'in-progress', 'review', 'done'];

  lists.forEach(status => {
    const container = document.getElementById(`${status}-container`);
    new Sortable(container, {
      group: 'shared',
      animation: 150,
      onAdd: e => {
        const movedId = e.item.dataset.id;
        const movedIssue = issues.find(i => i.id == movedId);
        if (movedIssue) {
          movedIssue.status = status;
          saveIssues(issues);
          renderBoard(issues);
          enableDragAndDrop();
        }
      },
    });
  });
}

function deleteIssue(id) {
  issues = issues.filter(issue => issue.id !== id);
  saveIssues(issues);
  renderBoard(issues);
  enableDragAndDrop();
}


