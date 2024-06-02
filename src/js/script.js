document.addEventListener('DOMContentLoaded', () => {
  let pageWidth = window.innerWidth;

  const linksToSec = document.querySelectorAll('a[href^="#"]');

  linksToSec.forEach((item) => {
    const link = item;
    link.onclick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      let scrollTop = section.offsetTop;

      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
    };
  });

  // apps
  const appsEl = document.querySelector('.apps');
  const appsColl = appsEl.querySelectorAll('.apps__card');

  let appsGrid;

  const createAppsGrid = (size) => {
    return handleAppsGrid(appsEl, appsColl, size);
  };

  const resizeAppsGrid = () => {
    if (!appsGrid) {
      appsGrid = createAppsGrid(3);
    }

    if (pageWidth >= 1024 && appsGrid.columns !== 3) {
      appsGrid = createAppsGrid(3);
      return;
    }
    if (pageWidth >= 650 && pageWidth < 1024 && appsGrid.columns !== 2) {
      appsGrid = createAppsGrid(2);
      return;
    }
    if (pageWidth < 650 && appsGrid.columns !== 1) {
      appsGrid = createAppsGrid(1);
      return;
    }
  }

  resizeAppsGrid();

  window.onresize = (e) => {
    pageWidth = e.target.innerWidth;

    resizeAppsGrid();
  };
});

function handleAppsGrid(wrapper, coll, size) {
  let chunkApps = [];
  let tempArray = [];

  coll.forEach((app, i) => {
    const colors = app.dataset.colors;
    if (colors) {
      const colorsArr = colors.replace(' ', '').split(',');
      app.style.setProperty('--colors', `${colorsArr.map((color) => '#' + color)}`);
    }
    let timeout;

    app.onclick = (e) => {
      if (e.target.classList.contains('btn')) return;
      clearTimeout(timeout);

      if (app.classList.contains('apps__card_active')) {
        app.classList.add('apps__card_close');
        app.classList.remove('apps__card_active');

        timeout = setTimeout(() => {
          app.classList.remove('apps__card_close');
        }, 600);

        return;
      }

      const curr = document.querySelector('.apps__card_active');
      if (curr) curr.classList.remove('apps__card_active');

      app.classList.add('apps__card_open');

      setTimeout(() => app.classList.add('apps__card_active'), 0);

      timeout = setTimeout(() => {
        app.classList.remove('apps__card_open');
      }, 300);

    };

    tempArray.push(app);

    if (!(tempArray.length === size || i === coll.length - 1)) return;

    chunkApps.push(tempArray);
    tempArray = [];
  });

  wrapper.innerHTML = '';

  chunkApps.forEach((chunk) => {
    const div = document.createElement('div');
    div.classList.add('apps__row');
    div.style.setProperty('--width', `calc(100% / ${chunk.length})`)

    chunk.forEach((appCard) => {
      div.appendChild(appCard);
    });

    wrapper.appendChild(div);
  });

  return {
    wrapper,
    rows: chunkApps.length,
    columns: size,
  }
}