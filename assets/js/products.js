// Dados dos sabores: tabelas nutricionais oficiais (informadas pela marca)
const PRODUCT_CATEGORIES = {
  classicos: {
    title: 'Cappuccinos Clássicos',
    flavors: [
      {
        name: 'Tradicional',
        img: 'assets/img/produto-classicos.png',
        ingredients: 'Leite integral, cacau em pó, amido de milho, espessante carboximetilcelulose sódica, sal, café solúvel, bicarbonato de sódio, canela, açúcar refinado.',
        portionInfo: 'Porções por embalagem: 8 · Porção: 25g (1 colher de sopa)',
        rows: [
          ['Valor energético (kcal)', '107', '107', '6%'],
          ['Carboidratos (g)', '13', '13', '4%'],
          ['Açúcares totais (g)', '13', '13', '26%'],
          ['Açúcares adicionados (g)', '7,3', '7,3', '15%'],
          ['Proteínas (g)', '4,2', '4,2', '5%'],
          ['Gorduras totais (g)', '4,1', '4,1', '8%'],
          ['Gorduras saturadas (g)', '2,9', '2,9', '13%'],
          ['Gorduras trans (g)', '0', '0', '—'],
          ['Fibras alimentares (g)', '0', '0', '1%'],
          ['Sódio (mg)', '80', '80', '3%'],
          ['Cálcio (mg)', '133', '133', '14%'],
          ['Ferro (mg)', '2,4', '2,4', '17%'],
          ['Zinco (mg)', '1,2', '1,2', '17%'],
        ],
        allergens: 'Contém lactose e derivados de soja.',
      },
      {
        name: 'Ovomaltine',
        img: 'assets/img/produto-classicos.png',
        ingredients: 'Leite integral, achocolatado Ovomaltine®, café solúvel, bicarbonato de sódio, açúcar refinado.',
        portionInfo: 'Porções por embalagem: 8 · Porção: 25g (1 colher de sopa)',
        rows: [
          ['Valor energético (kcal)', '108', '108', '6%'],
          ['Carboidratos (g)', '14', '14', '4%'],
          ['Açúcares totais (g)', '12', '12', '24%'],
          ['Açúcares adicionados (g)', '6,9', '6,9', '14%'],
          ['Proteínas (g)', '4', '4', '5%'],
          ['Gorduras totais (g)', '3,7', '3,7', '7%'],
          ['Gorduras saturadas (g)', '2,6', '2,6', '12%'],
          ['Gorduras trans (g)', '0', '0', '0%'],
          ['Fibras alimentares (g)', '0', '0', '1%'],
          ['Sódio (mg)', '85', '85', '3%'],
          ['Cálcio (mg)', '123', '123', '13%'],
          ['Ferro (mg)', '2,2', '2,2', '16%'],
          ['Zinco (mg)', '1,1', '1,1', '16%'],
        ],
        allergens: 'Contém glúten, lactose e derivados de soja.',
      },
      {
        name: 'Alpino',
        img: 'assets/img/produto-classicos.png',
        ingredients: 'Leite integral, achocolatado Alpino®, café solúvel, bicarbonato de sódio, açúcar refinado.',
        portionInfo: 'Porções por embalagem: 8 · Porção: 25g (1 colher de sopa)',
        rows: [
          ['Valor energético (kcal)', '103', '103', '6%'],
          ['Carboidratos (g)', '14', '14', '4%'],
          ['Açúcares totais (g)', '14', '14', '—'],
          ['Açúcares adicionados (g)', '8,2', '8,2', '16%'],
          ['Proteínas (g)', '3,8', '3,8', '5%'],
          ['Gorduras totais (g)', '3,5', '3,5', '6%'],
          ['Gorduras saturadas (g)', '2,5', '2,5', '11%'],
          ['Gorduras trans (g)', '0', '0', '0%'],
          ['Fibras alimentares (g)', '0', '0', '2%'],
          ['Sódio (mg)', '86', '86', '3%'],
          ['Cálcio (mg)', '259', '259', '26%'],
          ['Ferro (mg)', '2,1', '2,1', '15%'],
          ['Zinco (mg)', '1,0', '1,0', '15%'],
        ],
        allergens: 'Contém glúten, lactose e derivados de soja.',
      },
    ],
  },
  especiais: {
    title: 'Cappuccinos Especiais',
    flavors: [
      {
        name: 'Tradicional (sem adição de açúcar)',
        img: 'assets/img/produto-especiais.png',
        ingredients: 'Leite integral, alfarroba em pó, cacau em pó, café solúvel, bicarbonato de sódio, canela.',
        portionInfo: 'Porções por embalagem: 8 · Porção: 25g (1 colher de sopa)',
        rows: [
          ['Valor energético (kcal)', '107', '107', '6%'],
          ['Carboidratos (g)', '10', '10', '3%'],
          ['Açúcares totais (g)', '7,5', '7,5', '15%'],
          ['Açúcares adicionados (g)', '0', '0', '0%'],
          ['Proteínas (g)', '5', '5', '6%'],
          ['Gorduras totais (g)', '5', '5', '9%'],
          ['Gorduras saturadas (g)', '3,6', '3,6', '16%'],
          ['Gorduras trans (g)', '0', '0', '—'],
          ['Fibras alimentares (g)', '0', '0', '1%'],
          ['Sódio (mg)', '100', '100', '4%'],
          ['Cálcio (mg)', '238', '238', '24%'],
          ['Ferro (mg)', '4,4', '4,4', '31%'],
          ['Ácido fólico - vit. B9 (mcg)', '28', '28', '7%'],
          ['Zinco (mg)', '2,1', '2,1', '31%'],
        ],
        allergens: 'Contém lactose e derivados de soja.',
        notes: ['Diabéticos: contém sacarose, frutose e glicose natural em alguns ingredientes.'],
      },
      {
        name: 'Whey Protein',
        img: 'assets/img/produto-especiais.png',
        ingredients: 'Leite integral, proteína concentrada do soro do leite, cacau em pó, amido de milho, alfarroba em pó, espessante carboximetilcelulose, sal, café solúvel, bicarbonato de sódio.',
        portionInfo: 'Porções por embalagem: 8 · Porção: 25g (1 colher de sopa)',
        rows: [
          ['Valor energético (kcal)', '112', '112', '4%'],
          ['Carboidratos (g)', '9', '9', '3%'],
          ['Açúcares totais (g)', '6', '6', '11%'],
          ['Açúcares adicionados (g)', '0', '0', '0%'],
          ['Proteínas (g)', '7,5', '7,5', '10%'],
          ['Gorduras totais (g)', '4,9', '4,9', '9%'],
          ['Gorduras saturadas (g)', '3', '3', '15%'],
          ['Gorduras trans (g)', '0', '0', '—'],
          ['Fibras alimentares (g)', '0,3', '0,3', '1%'],
          ['Sódio (mg)', '112', '112', '0%'],
          ['Cálcio (mg)', '203', '203', '21%'],
          ['Ferro (mg)', '2,8', '2,8', '20%'],
          ['Zinco (mg)', '1', '1', '20%'],
        ],
        allergens: 'Contém lactose e derivados de soja. Pode conter ovo.',
      },
      {
        name: 'Zero Lactose',
        img: 'assets/img/produto-especiais.png',
        ingredients: 'Leite integral, enzima lactase, emulsificante lecitina, cacau em pó, amido de milho, espessante carboximetilcelulose sódica, sal, café solúvel, bicarbonato de sódio, canela, açúcar refinado.',
        portionInfo: 'Porções por embalagem: 8 · Porção: 25g (1 colher de sopa)',
        rows: [
          ['Valor energético (kcal)', '103', '103', '5%'],
          ['Carboidratos (g)', '13', '13', '4%'],
          ['Açúcares totais (g)', '13', '13', '26%'],
          ['Açúcares adicionados (g)', '7,3', '7,3', '15%'],
          ['Lactose (g)', '0,0', '0,0', '—'],
          ['Glicose (g)', '2,8', '2,8', '—'],
          ['Galactose (g)', '2,8', '2,8', '—'],
          ['Proteínas (g)', '3,8', '3,8', '7%'],
          ['Gorduras totais (g)', '3,9', '3,9', '6%'],
          ['Gorduras saturadas (g)', '2,5', '2,5', '13%'],
          ['Gorduras trans (g)', '0', '0', '—'],
          ['Fibras alimentares (g)', '0', '0', '1%'],
          ['Sódio (mg)', '77', '77', '2%'],
          ['Cálcio (mg)', '187', '187', '19%'],
          ['Ferro (mg)', '1,1', '1,1', '8%'],
          ['Zinco (mg)', '0,9', '0,9', '8%'],
        ],
        allergens: 'Contém leite e derivados de soja.',
        notes: ['Não contém glúten.'],
      },
    ],
  },
  chocolate: {
    title: 'Chocolate Quente',
    flavors: [
      {
        name: 'Chocolate Quente',
        img: 'assets/img/produto-chocolate.png',
        ingredients: 'Cacau, açúcar refinado, amido de milho, espessante carboximetilcelulose sódica e sal.',
        portionInfo: 'Porções por embalagem: 8 · Porção: 25g (1 colher de sopa)',
        rows: [
          ['Valor energético (kcal)', '152', '93', '5%'],
          ['Carboidratos (g)', '25', '20', '6%'],
          ['Açúcares totais (g)', '23', '19', '37%'],
          ['Açúcares adicionados (g)', '19', '19', '37%'],
          ['Proteínas (g)', '4,1', '1,4', '3%'],
          ['Gorduras totais (g)', '2,7', '0,7', '1%'],
          ['Gorduras saturadas (g)', '2,3', '0,3', '2%'],
          ['Gorduras trans (g)', '0', '0', '—'],
          ['Fibras alimentares (g)', '1,9', '1,9', '7%'],
          ['Sódio (mg)', '69', '9', '0,5%'],
        ],
        notes: ['Não contém glúten.', 'Não contém lactose.'],
      },
    ],
  },
};

(function () {
  const overlay = document.getElementById('product-modal');
  if (!overlay) return;

  const modal = overlay.querySelector('.modal');
  const titleEl = document.getElementById('product-modal-title');
  const bodyEl = document.getElementById('product-modal-body');
  const closeBtn = document.getElementById('product-modal-close');
  let lastFocused = null;

  function renderNutritionTable(flavor) {
    const rowsHtml = flavor.rows
      .map(
        ([label, v100, v25, vd]) =>
          `<tr><th scope="row">${label}</th><td>${v100}</td><td>${v25}</td><td>${vd}</td></tr>`
      )
      .join('');

    const notesHtml = flavor.notes
      ? `<div class="flavor-item__badges">${flavor.notes
          .map((note) => `<span class="badge">${note}</span>`)
          .join('')}</div>`
      : '';

    return `
      <p class="flavor-item__ingredients"><strong>Ingredientes:</strong> ${flavor.ingredients}</p>
      ${notesHtml}
      <div class="nutrition-table-wrap">
        <table class="nutrition-table">
          <caption>${flavor.portionInfo}</caption>
          <thead>
            <tr>
              <th scope="col">Informação nutricional</th>
              <th scope="col">100ml**</th>
              <th scope="col">25g</th>
              <th scope="col">%VD*</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
      <p class="nutrition-table__footnote">*Percentual de valores diários fornecidos pela porção. **No alimento pronto para o consumo.</p>
      ${flavor.allergens ? `<p class="flavor-item__allergens"><strong>Alérgicos:</strong> ${flavor.allergens}</p>` : ''}
    `;
  }

  function renderFlavorItem(flavor, index) {
    const panelId = `flavor-panel-${index}`;
    return `
      <div class="flavor-item">
        <button type="button" class="flavor-item__toggle" aria-expanded="false" aria-controls="${panelId}">
          <img src="${flavor.img}" alt="" class="flavor-item__thumb" loading="lazy">
          <span class="flavor-item__name">${flavor.name}</span>
          <span class="flavor-item__chevron" aria-hidden="true">⌄</span>
        </button>
        <div class="flavor-item__panel" id="${panelId}" hidden>
          ${renderNutritionTable(flavor)}
        </div>
      </div>
    `;
  }

  function openModal(categoryKey) {
    const category = PRODUCT_CATEGORIES[categoryKey];
    if (!category) return;

    titleEl.textContent = category.title;
    bodyEl.innerHTML = category.flavors.map(renderFlavorItem).join('');

    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add('modal-open');
    closeBtn.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('.js-product-modal-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.category));
  });

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !overlay.hidden) closeModal();
  });

  bodyEl.addEventListener('click', (event) => {
    const toggle = event.target.closest('.flavor-item__toggle');
    if (!toggle) return;

    const panel = document.getElementById(toggle.getAttribute('aria-controls'));
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', String(!isOpen));
    panel.hidden = isOpen;
  });
})();
