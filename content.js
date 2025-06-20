(function() {
  const SIDEBAR_ID = 'chatgpq-sidebar';
  const LIST_ID = 'chatgpq-list';

  function createSidebar() {
    if (document.getElementById(SIDEBAR_ID)) return;

    const sidebar = document.createElement('div');
    sidebar.id = SIDEBAR_ID;
    Object.assign(sidebar.style, {
      position: 'fixed',
      top: '0',
      right: '0',
      width: '280px',
      height: '100vh',
      backgroundColor: '#f7f7f8',
      borderLeft: '1px solid #e2e2e2',
      padding: '10px',
      overflowY: 'auto',
      zIndex: '9999',
    });

    const title = document.createElement('h2');
    title.innerText = 'My Questions';
    Object.assign(title.style, { margin: '0 0 10px', fontSize: '16px' });
    sidebar.appendChild(title);

    const list = document.createElement('ul');
    list.id = LIST_ID;
    sidebar.appendChild(list);

    document.body.appendChild(sidebar);
  }

  function addQuestion(text, id) {
    const list = document.getElementById(LIST_ID);
    if (!list) return;
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.innerText = text;
    link.onclick = (e) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    item.appendChild(link);
    list.appendChild(item);
  }

  function observeQuestions() {
    const chatContainer = document.querySelector('main');
    if (!chatContainer) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1 && node.matches('div.chat-message')) {
            const isUser = node.querySelector('svg[aria-label="User"]');
            if (isUser) {
              const textEl = node.querySelector('div.markdown');
              const text = textEl?.innerText.trim();
              if (text) {
                const uid = 'q-' + Date.now();
                node.id = uid;
                addQuestion(text.split("\n")[0].slice(0, 50) + '...', uid);
              }
            }
          }
        });
      });
    });

    observer.observe(chatContainer, { childList: true, subtree: true });
  }

  // Initialize
  window.addEventListener('load', () => {
    createSidebar();
    observeQuestions();
  });
})();

