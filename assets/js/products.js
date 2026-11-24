// Dados dos sabores: tabelas nutricionais oficiais (informadas pela marca)
const PRODUCT_CATEGORIES = {
  classicos: {
    title: 'Cappuccinos Clássicos',
    flavors: [
      {
        name: 'Tradicional',
        price: 'R$ 24,00',
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
        price: 'R$ 24,00',
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
        price: 'R$ 24,00',
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
        price: 'R$ 28,00',
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
        price: 'R$ 28,00',
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
        price: 'R$ 28,00',
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
        price: 'R$ 24,00',
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

// Combos: cada combo tem 1+ grupos, cada grupo exige escolher N unidades
// dentro de uma categoria de sabores (conforme o cardápio oficial)
const COMBOS = [
  {
    key: 'sou-classico',
    name: 'Sou clássico',
    price: 'R$ 66,00',
    summary: '3 unidades à sua escolha entre os Cappuccinos Clássicos.',
    groups: [{ category: 'classicos', count: 3, label: 'Escolha 3 Clássicos' }],
  },
  {
    key: 'muito-especial',
    name: 'Muito especial',
    price: 'R$ 78,00',
    summary: '3 unidades à sua escolha entre os Cappuccinos Especiais.',
    groups: [{ category: 'especiais', count: 3, label: 'Escolha 3 Especiais' }],
  },
  {
    key: 'quero-chocolate',
    name: 'Quero chocolate',
    price: 'R$ 66,00',
    summary: '3 unidades de Chocolate Quente.',
    groups: [{ category: 'chocolate', count: 3, label: null }],
  },
  {
    key: 'combinado',
    name: 'Combinado',
    price: 'R$ 70,00',
    summary: '2 Clássicos + 1 Especial, à sua escolha.',
    groups: [
      { category: 'classicos', count: 2, label: 'Escolha 2 Clássicos' },
      { category: 'especiais', count: 1, label: 'Escolha 1 Especial' },
    ],
  },
];

(function () {
  const overlay = document.getElementById('product-modal');
  if (!overlay) return;

  const modal = overlay.querySelector('.modal');
  const eyebrowEl = document.getElementById('product-modal-eyebrow');
  const titleEl = document.getElementById('product-modal-title');
  const bodyEl = document.getElementById('product-modal-body');
  const closeBtn = document.getElementById('product-modal-close');
  let lastFocused = null;
  const WHATSAPP_NUMBER = '5561999134312';
  const WHATSAPP_ICON_SVG = '<svg class="icon-whatsapp" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.898.526 3.671 1.436 5.187L2 22l4.955-1.404A9.945 9.945 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.148a8.14 8.14 0 0 1-4.152-1.14l-.298-.177-2.94.833.838-2.866-.194-.296A8.13 8.13 0 0 1 3.85 12c0-4.501 3.65-8.148 8.15-8.148 4.501 0 8.15 3.647 8.15 8.148 0 4.502-3.649 8.148-8.15 8.148z"/></svg>';

  function buildOrderLink(flavor) {
    const text = encodeURIComponent(`Olá! Quero pedir o Cappuccino Queridinho sabor ${flavor.name} ☕`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

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
      <p class="nutrition-table__caption">${flavor.portionInfo}</p>
      <div class="nutrition-table-wrap">
        <table class="nutrition-table">
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
      <a href="${buildOrderLink(flavor)}" class="btn btn--primary btn--sm flavor-item__order" target="_blank" rel="noopener">
        ${WHATSAPP_ICON_SVG}
        <span>Pedir no WhatsApp</span>
      </a>
    `;
  }

  function renderFlavorItem(flavor, index) {
    const panelId = `flavor-panel-${index}`;
    return `
      <div class="flavor-item">
        <button type="button" class="flavor-item__toggle" aria-expanded="false" aria-controls="${panelId}">
          <img src="${flavor.img}" alt="" class="flavor-item__thumb" loading="lazy">
          <span class="flavor-item__name">${flavor.name}</span>
          ${flavor.price ? `<span class="flavor-item__price">${flavor.price}</span>` : ''}
          <span class="flavor-item__chevron" aria-hidden="true">⌄</span>
        </button>
        <div class="flavor-item__panel" id="${panelId}" hidden>
          ${renderNutritionTable(flavor)}
        </div>
      </div>
    `;
  }

  // sabor escolhido por combo: { [comboKey]: { [flavorName]: quantidade } }
  const comboState = {};

  function groupTotal(combo, group) {
    const picks = comboState[combo.key] || {};
    const flavors = PRODUCT_CATEGORIES[group.category].flavors;
    return flavors.reduce((sum, f) => sum + (picks[f.name] || 0), 0);
  }

  function comboIsComplete(combo) {
    return combo.groups.every((group) => groupTotal(combo, group) === group.count);
  }

  function buildComboOrderLink(combo) {
    const picks = comboState[combo.key] || {};
    const items = Object.entries(picks)
      .filter(([, qty]) => qty > 0)
      .map(([name, qty]) => `${qty}x ${name}`)
      .join(', ');
    const text = encodeURIComponent(
      `Olá! Quero pedir o combo ${combo.name} (${combo.price}): ${items} ☕`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  function renderComboGroup(combo, group) {
    const flavors = PRODUCT_CATEGORIES[group.category].flavors;
    const picks = comboState[combo.key] || {};
    const total = groupTotal(combo, group);

    const flavorsHtml = flavors
      .map((flavor) => {
        const qty = picks[flavor.name] || 0;
        const atGroupLimit = total >= group.count;
        return `
          <div class="combo-flavor">
            <span class="combo-flavor__name">${flavor.name}</span>
            <div class="combo-flavor__stepper">
              <button type="button" class="combo-flavor__btn" data-combo-action="dec" data-combo="${combo.key}" data-category="${group.category}" data-flavor="${flavor.name}" data-group-count="${group.count}" ${qty === 0 ? 'disabled' : ''} aria-label="Diminuir ${flavor.name}">−</button>
              <span class="combo-flavor__qty">${qty}</span>
              <button type="button" class="combo-flavor__btn" data-combo-action="inc" data-combo="${combo.key}" data-category="${group.category}" data-flavor="${flavor.name}" data-group-count="${group.count}" ${atGroupLimit ? 'disabled' : ''} aria-label="Aumentar ${flavor.name}">+</button>
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="combo-group">
        ${group.label ? `<p class="combo-group__label">${group.label} <span class="combo-group__counter">(${total}/${group.count})</span></p>` : ''}
        <div class="combo-group__flavors">${flavorsHtml}</div>
      </div>
    `;
  }

  function renderComboPanel(combo) {
    const hasChoice = combo.groups.some((group) => group.label);
    const complete = comboIsComplete(combo);
    return `
      <p class="flavor-item__ingredients">${combo.summary}</p>
      ${hasChoice ? `<div class="combo-builder">${combo.groups.map((group) => renderComboGroup(combo, group)).join('')}</div>` : ''}
      <button type="button" class="btn btn--primary btn--sm flavor-item__order js-combo-order" data-combo="${combo.key}" ${complete ? '' : 'disabled'}>
        ${WHATSAPP_ICON_SVG}
        <span>${complete ? 'Pedir no WhatsApp' : `Escolha ${combo.groups.reduce((s, g) => s + g.count, 0)} unidades para continuar`}</span>
      </button>
    `;
  }

  function renderComboItem(combo, index) {
    const panelId = `combo-panel-${index}`;
    return `
      <div class="flavor-item">
        <button type="button" class="flavor-item__toggle" aria-expanded="false" aria-controls="${panelId}">
          <span class="flavor-item__name">${combo.name}</span>
          <span class="flavor-item__price">${combo.price}</span>
          <span class="flavor-item__chevron" aria-hidden="true">⌄</span>
        </button>
        <div class="flavor-item__panel" id="${panelId}" hidden data-combo-panel="${combo.key}">
          ${renderComboPanel(combo)}
        </div>
      </div>
    `;
  }

  function updateComboPanel(comboKey) {
    const combo = COMBOS.find((c) => c.key === comboKey);
    const panel = bodyEl.querySelector(`[data-combo-panel="${comboKey}"]`);
    if (!combo || !panel) return;

    panel.innerHTML = renderComboPanel(combo);
  }

  function initCombos() {
    COMBOS.forEach((combo) => {
      comboState[combo.key] = {};
      if (!combo.groups.some((group) => group.label)) {
        // combo sem escolha (ex.: "Quero chocolate"): já começa completo
        const flavor = PRODUCT_CATEGORIES[combo.groups[0].category].flavors[0];
        comboState[combo.key][flavor.name] = combo.groups[0].count;
      }
    });
  }

  function openModal(categoryKey) {
    if (categoryKey === 'combos') {
      eyebrowEl.textContent = 'Monte seu combo';
      titleEl.textContent = 'Combos Cappuccino Queridinho';
      initCombos();
      bodyEl.innerHTML = COMBOS.map(renderComboItem).join('');
    } else {
      const category = PRODUCT_CATEGORIES[categoryKey];
      if (!category) return;

      eyebrowEl.textContent = 'Nossos sabores';
      titleEl.textContent = category.title;
      bodyEl.innerHTML = category.flavors.map(renderFlavorItem).join('');
    }

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
    if (toggle) {
      const panel = document.getElementById(toggle.getAttribute('aria-controls'));
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';

      toggle.setAttribute('aria-expanded', String(!isOpen));
      panel.hidden = isOpen;
      return;
    }

    const stepperBtn = event.target.closest('.combo-flavor__btn');
    if (stepperBtn) {
      const { combo: comboKey, category, flavor: flavorName, comboAction } = stepperBtn.dataset;
      const groupCount = Number(stepperBtn.dataset.groupCount);
      const picks = (comboState[comboKey] = comboState[comboKey] || {});
      const current = picks[flavorName] || 0;
      const group = COMBOS.find((c) => c.key === comboKey).groups.find((g) => g.category === category);
      const total = groupTotal({ key: comboKey }, group);

      if (comboAction === 'inc' && total < groupCount) {
        picks[flavorName] = current + 1;
      } else if (comboAction === 'dec' && current > 0) {
        picks[flavorName] = current - 1;
      }

      updateComboPanel(comboKey);
      return;
    }

    const orderBtn = event.target.closest('.js-combo-order');
    if (orderBtn && !orderBtn.disabled) {
      const combo = COMBOS.find((c) => c.key === orderBtn.dataset.combo);
      window.open(buildComboOrderLink(combo), '_blank', 'noopener');
    }
  });
})();
