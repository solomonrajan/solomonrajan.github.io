// Script to automate changelog updation in the modal UI
(async function automateChangelogUpdation() {
  try {
    const response = await fetch('assets/changelog.html?_t=' + Date.now(), { cache: 'no-cache' });
    if (!response.ok) throw new Error('Failed to load changelog.html');
    
    const html = await response.text();
    window.CHANGELOG_CONTENT = html;
    
    // Automatically update the dialog if it's currently open and showing the error/loading state
    const dialogContent = document.getElementById('dialog-content');
    const backdrop = document.getElementById('dialog-backdrop');
    if (dialogContent && backdrop && backdrop.classList.contains('open')) {
      dialogContent.innerHTML = html;
    }
  } catch (error) {
    console.error('Error in automated changelog updation:', error);
  }
})();
