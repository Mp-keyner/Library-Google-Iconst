let add = document.querySelectorAll("#add");
add.forEach((add) => {
  add.innerHTML = `<div id="divHover">
<div id="divClick">
</div>
<svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path></svg>
</div>`;
  add.style.fill = add.dataset.color;
  if (add.dataset.message) {
    add.innerHTML += `<div id="messages"><p>${add.dataset.message}</p></div>`;
  }
});

let Folder = document.querySelectorAll("#Folder");
Folder.forEach((Folder) => {
  Folder.innerHTML = `<div id="divHover">
<div id="divClick">
</div>
<svg viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"></path></svg>
</div>`;
  Folder.style.fill = Folder.dataset.color;
  if (Folder.dataset.message) {
    Folder.innerHTML += `<div id="messages"><p>${Folder.dataset.message}</p></div>`;
  }
});

let calendar = document.querySelectorAll("#calendar");
calendar.forEach((calendar) => {
  calendar.innerHTML = `<div id="divHover">
<div id="divClick">
</div>
<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CalendarTodayIcon" tabindex="-1" title="CalendarToday"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z"></path></svg>
</div>`;
  calendar.style.fill = calendar.dataset.color;
  if (calendar.dataset.message) {
    calendar.innerHTML += `<div id="messages"><p>${calendar.dataset.message}</p></div>`;
  }
});


let logo_steams = Array.from(document.getElementsByTagName('logo_steam'));
logo_steams.forEach((logo_steam) => {
   logo_steam.innerHTML = `<img src="https://firebasestorage.googleapis.com/v0/b/steam-academy-b3423.appspot.com/o/Favicon%2Flogo_Steam.png?alt=media&token=e1601216-c935-4006-bb1e-c652b3840909" class="logo_steams"/>`;
});
