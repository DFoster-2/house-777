/**
 * This script adds a "Built with Replit" badge to your repl when seen in full-browser view
 */

(function replitBadge(
  theme = 'dark',
  position = 'bottom-left',
  caption = null,
) {
  // Suppress badge in ReplView
  if (window.location.hostname.split('.')[1] === 'id') {
    return;
  }

  // define positions
  // helps reduce polluting css classes
  const offset = '1.5rem';
  const validPositions = {
    'top-left': { top: offset, left: offset },
    'top-right': { top: offset, right: offset },
    'bottom-left': { bottom: offset, left: offset },
    'bottom-right': { bottom: offset, right: offset },
  };

  // ensure positions are valid
  if (!validPositions.hasOwnProperty(position)) {
    console.warn(
      `${position} is not a valid position, defaulting to bottom-left`,
    );
    position = 'bottom-left';
  }

  // create modifiable params
  const params = new URLSearchParams();
  params.append('theme', theme);
  if (typeof caption === 'string' && caption.length > 0) {
    params.append('caption', caption);
  }

  // create link & styles
  const badgeAnchor = document.createElement('a');
  Object.assign(badgeAnchor, {
    target: '_blank',
    href: 'https://new-1.danfos.repl.co',
  });

  // create badge image & styles
  const badgeImage = document.createElement('img');
  badgeImage.src = `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fhome_25694&psig=AOvVaw3QqoBuI6euPgwZK7vs4DLh&ust=1699721384200000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNjRktzxuYIDFQAAAAAdAAAAABAS`;
  badgeImage.id = 'replitBadge';
  Object.assign(badgeImage.style, validPositions[position]);

  // inject styles
  document.head.insertAdjacentHTML(
    'beforeend',
    `
    <style>
      #replitBadge {
        position: fixed;
        cursor: pointer;
        z-index: 100;
        transition: transform 100ms ease-in-out;
      }

      #replitBadge:hover {
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
  document.currentScript.getAttribute('caption'),
);