export const inputText = () => {
  const inputsCategory = document.querySelectorAll(
    '[input-category]'
  ) as NodeListOf<HTMLInputElement>;
  if (inputsCategory.length === 0) return;

  const categoryTitle = document.querySelector('[category-title]') as HTMLElement;
  if (!categoryTitle) return;

  inputsCategory.forEach((input) => {
    input.addEventListener('change', (event) => {
      if ((event.target as HTMLInputElement).checked) {
        const attrInput = input.getAttribute('input-category');
        if (attrInput) {
          const labelCategory = document.querySelector(
            `[label-category="${attrInput}"]`
          ) as HTMLElement;

          if (labelCategory) {
            const textCategory = labelCategory.textContent;
            if (textCategory) {
              categoryTitle.textContent = textCategory;
            }
          }
        }
      }
    });
  });
};
