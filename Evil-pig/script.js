(function replitBadge(theme = 'dark', position = 'bottom-left') {
  // Suppress badge in ReplView
  //if (window.location.hostname.split('.')[1] === 'id') {
  //  return;
  //}

  // define positions
  // helps reduce polluting css classes
  //const offset = '1.5rem';
  //const validPositions = {
  //  'top-left': { top: offset, left: offset },
  //  'top-right': { top: offset, right: offset },
  //  'bottom-left': { bottom: offset, left: offset },
  //  'bottom-right': { bottom: offset, right: offset },
  //};
  const validPositions = {
    'bottom-right': { bottom: "1.5rem", right: "1.5rem" },
  };
  // ensure positions are valid
  //if (!validPositions.hasOwnProperty(position)) {
  //  console.warn(
  //    `${position} is not a valid position, defaulting to bottom-left`,
  //  );
  //  position = 'bottom-left';
  //}

  // create link & styles
  const badgeAnchor = document.createElement('a');
  Object.assign(badgeAnchor, {
    target: '_blank',
    href: 'https://danfosv2.github.io/Evil-pig/index.html',
  });

  // create badge image & styles
  const badgeImage = document.createElement('img');
  if (screen.width == "1920" || screen.width >="1920"){
    //conputer
    badgeImage.src = `./image-removebg-preview.png`;
    //bigest size
  }
  if (screen.width == "1024" || screen.width <= "1024"){
    // ipad pro
    badgeImage.src = `./image-removebg-preview2.png`;
  }
  badgeImage.id = 'mybage';
  Object.assign(badgeImage.style, validPositions[position]);

  // inject styles
  document.head.insertAdjacentHTML(
    'beforeend',
    `
    <style>
      #mybage {
        position: fixed;
        cursor: pointer;
        z-index: 100;
        transition: transform 100ms ease-in-out;
      }

      #mybage:hover {
        transform: scale(1.05);
      }
    </style>
  `,
  );

  // append badge to page
  badgeAnchor.appendChild(badgeImage);
  document.body.appendChild(badgeAnchor);
})(
  document.currentScript.getAttribute('theme'),
  document.currentScript.getAttribute('position'),
);

// all rights resved to replit for code
