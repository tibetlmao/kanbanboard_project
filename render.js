/** Crea e renderizza tutte le colonne del Kanban */
function renderBoard(issues) {
  const containers = {
    backlog: document.getElementById('backlog-container'),
    'in-progress': document.getElementById('in-progress-container'),
    review: document.getElementById('review-container'),
    done: document.getElementById('done-container'),
  };

  // Svuota tutte le colonne in modo efficiente
  Object.values(containers).forEach(c => c.replaceChildren());

  // Usa frammenti per prestazioni migliori
  const fragments = {
    backlog: document.createDocumentFragment(),
    'in-progress': document.createDocumentFragment(),
    review: document.createDocumentFragment(),
    done: document.createDocumentFragment(),
  };

  // Crea e aggiunge le card
  issues.forEach(issue => {
    const cardHTML = createIssueCardHTML(issue);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = cardHTML.trim();

    // Aggiunge la card al frammento della colonna corretta
    const card = wrapper.firstElementChild;

    // Gestione del bottone "Elimina"
    const deleteBtn = card.querySelector('[data-action="delete"]');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => deleteIssue(issue.id));
    }

    fragments[issue.status]?.appendChild(card);
  });

  // Inserisce tutti i frammenti nelle colonne
  Object.entries(fragments).forEach(([status, fragment]) => {
    containers[status]?.appendChild(fragment);
  });

  // Aggiorna i contatori
  updateCounters(issues);
}

/** Crea il markup HTML per una singola issue card */
function createIssueCardHTML(issue) {
  let priorityColor = 'bg-gray-500';
  let borderColor = 'border-yellow-500';

  switch (issue.priority) {
    case 'high':
      priorityColor = 'bg-red-500';
      borderColor = 'border-red-500';
      break;
    case 'medium':
      priorityColor = 'bg-yellow-500';
      borderColor = 'border-yellow-500';
      break;
    case 'low':
      priorityColor = 'bg-green-500';
      borderColor = 'border-green-500';
      break;
  }

  return `
    <div class="issue-card bg-white p-4 rounded-md shadow-sm border-l-4 ${borderColor}
                transition duration-200 hover:shadow-lg hover:scale-[1.02]"
         draggable="true" 
         data-id="${issue.id}" 
         data-priority="${issue.priority}">
        
        <div class="flex justify-between items-start mb-2">
            <h4 class="font-semibold text-gray-900 truncate">${issue.title}</h4>
            <span class="text-xs font-medium text-white px-2 py-0.5 rounded-full ${priorityColor} capitalize">
              ${issue.priority}
            </span>
        </div>

        <p class="text-sm text-gray-600 mb-3 line-clamp-2">${issue.description}</p>

        <div class="flex justify-end">
            <button class="text-gray-400 hover:text-red-500 text-sm transition duration-150" 
                    data-action="delete" data-id="${issue.id}">
                Elimina
            </button>
        </div>
    </div>
  `;
}

/** Aggiorna i contatori sopra le colonne + legenda */
function updateCounters(issues) {
  const statuses = ['backlog', 'in-progress', 'review', 'done'];

  statuses.forEach(status => {
    const count = issues.filter(i => i.status === status).length;

    const colCounter = document.getElementById(`${status}-counter`);
    if (colCounter) colCounter.textContent = count;

    const legendCounter = document.getElementById(`legend-${status}`);
    if (legendCounter) legendCounter.textContent = count;
  });
}

