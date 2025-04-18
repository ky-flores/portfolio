console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

let pages = [
    { url: "", title: "Home" },
    { url: "projects/", title: "Projects" },
    { url: "resume/", title: "Resume" },
    { url: "contact/", title: "Contact" },
    { url: "https://github.com/kyle-flores", title: "GitHub" } 
  ];

let nav = document.createElement('nav');
document.body.prepend(nav);

const BASE_PATH = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
  ? "/"                  
  : "/portfolio/"; 

  for (let p of pages) {
    let url = !p.url.startsWith('http') ? BASE_PATH + p.url : p.url;
  
    let a = document.createElement('a');
    a.href = url;
    if (p.url.startsWith('http')) a.target = "_blank";
    a.textContent = p.title;
  
    a.classList.toggle(
      'current',
      a.host === location.host && a.pathname === location.pathname
    );
  
    a.toggleAttribute('target', a.host !== location.host);
  
    nav.append(a);
  }

  document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <label class="color-scheme">
      Theme:
      <select>
        <option value="light dark">Automatic</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
    `
  );

  let select = document.querySelector(".color-scheme select");

  function setColorScheme(value) {
    document.documentElement.style.setProperty("color-scheme", value);
    
    if (value === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  if ("colorScheme" in localStorage) {
    setColorScheme(localStorage.colorScheme);
    select.value = localStorage.colorScheme;
  }

  select.addEventListener("input", function (event) {
    const value = event.target.value;
  
    localStorage.colorScheme = value;
  
    setColorScheme(value);
  
    console.log("Color scheme changed to:", value);
  });



// console.log("IT’S ALIVE!");

// function $$(selector, context = document) {
//   return Array.from(context.querySelectorAll(selector));
// }

// let pages = [
//   { url: '', title: 'Home' },
//   { url: 'projects/', title: 'Projects' },
//   { url: 'contact/', title: 'Contact' },
//   { url: 'resume/', title: 'Resume' },
//   { url: 'https://github.com/kyle-flores', title: 'Github'}
// ];

// let nav = document.createElement('nav');
// document.body.prepend(nav);

// const BASE_PATH = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
//   ? "/"                  
//   : "/portfolio/"; 

//   for (let p of pages) {
//     let url = !p.url.startsWith('http') ? BASE_PATH + p.url : p.url;
  
//     let a = document.createElement('a');
//     a.href = url;
//     if (p.url.startsWith('http')) a.target = "_blank";
//     a.textContent = p.title;
  
//     a.classList.toggle(
//       'current',
//       a.host === location.host && a.pathname === location.pathname
//     );
  
//     a.toggleAttribute('target', a.host !== location.host);
  
//     nav.append(a);
//   }

//   document.body.insertAdjacentHTML(
//     'afterbegin',
//     `
//     <label class="color-scheme">
//       Theme:
//       <select>
//         <option value="light dark">Automatic</option>
//         <option value="light">Light</option>
//         <option value="dark">Dark</option>
//       </select>
//     </label>
//     `
//   );

//   let select = document.querySelector(".color-scheme select");

//   function setColorScheme(value) {
//     document.documentElement.style.setProperty("color-scheme", value);
//   }
  
//   if ("colorScheme" in localStorage) {
//     setColorScheme(localStorage.colorScheme);
//     select.value = localStorage.colorScheme;
//   }
  
//   select.addEventListener("input", function (event) {
//     let value = event.target.value;
//     console.log("color scheme changed to", value);
//     setColorScheme(value);
//     localStorage.colorScheme = value;
//   });
//   let form = document.querySelector("form");

// form?.addEventListener("submit", function (event) {
//   event.preventDefault(); 

//   let data = new FormData(form);
//   let params = [];

//   for (let [name, value] of data) {
//     let encoded = `${name}=${encodeURIComponent(value)}`;
//     params.push(encoded);
//   }

//   let url = `${form.action}?${params.join("&")}`;

//   location.href = url;
// });