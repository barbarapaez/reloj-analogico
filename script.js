const deg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sg = document.querySelector('#sg');

const setReloj = ()=> {
   let dia = new Date();
   let hh = dia.getHours() * 30;
   let mm = dia.getMinutes() * deg;
   let ss = dia.getSeconds() * deg;
   hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
   min.style.transform = `rotateZ(${mm}deg)`;
   sg.style.transform = `rotateZ(${ss}deg)`;
};

setReloj();
setInterval(setReloj, 1000);

const cambiarTema = (evt) => {
	const cambiarBtn = evt.target;
	if (cambiarBtn.textContent.toLowerCase() === "dia") {
		cambiarBtn.textContent = "noche";
		document.documentElement.setAttribute("data-theme", "noche");
	} else {
		cambiarBtn.textContent = "dia";
		document.documentElement.setAttribute("data-theme", "dia");
	}
};

const cambiaTemaBtn = document.querySelector(".cambiar-btn");
cambiaTemaBtn.addEventListener("click", cambiarTema, false);

let temaActual = "dia";
/*en caso de querer poner el tema noche como default
debería cambiar "dia" por "noche" */

if (temaActual) {
	document.documentElement.setAttribute("data-theme", temaActual);
	cambiaTemaBtn.textContent = temaActual;
}


