export const escrow = () => {
  const escrowBtn = document.querySelector('#escrow-btn') as HTMLElement;
  if (!escrowBtn) return;

  const escrowForm = document.querySelector('#escrow-form') as HTMLFormElement;
  if (!escrowForm) return;

  const embedEl = escrowForm.parentElement as HTMLElement;
  if (embedEl.classList.contains('w-condition-invisible')) {
    embedEl.remove();
  }

  // Create a new button element
  const newButton = document.createElement('button') as HTMLElement;

  // Copy the necessary attributes from the <a> tag
  newButton.id = escrowBtn.id;
  newButton.className = escrowBtn.className;
  newButton.dataset.wId = escrowBtn.dataset.wId;

  // Preserve the inner HTML (children) of the <a> tag
  newButton.innerHTML = escrowBtn.innerHTML;
  newButton.removeAttribute('href');
  newButton.setAttribute('type', 'submit');
  newButton.style.display = 'flex';
  escrowForm.appendChild(newButton);

  window.Webflow.destroy();
  window.Webflow.ready();
  window.Webflow.require('ix2').init();

  // Replace the <a> tag with the new <button> element
  //escrowBtn.parentNode.replaceChild(newButton, escrowBtn);
};
