function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

const nosotros = document.querySelector("#aboutus");
const servicios = document.querySelector("#services");
const planes = document.querySelector("#plans");
const creadores = document.querySelector("#creators");
const contacto = document.querySelector("#contact");

nosotros.addEventListener("click", (n) => {
    n.preventDefault();
    const selectionN = document.querySelector("#aboutus-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
});
servicios.addEventListener("click", (s) => {
    s.preventDefault();
    const selectionS = document.querySelector("#services-section");
    selectionS.scrollIntoView({ behavior: "smooth" });
});
planes.addEventListener("click", (p) => {
    p.preventDefault();
    const selectionP = document.querySelector("#plans-section");
    selectionP.scrollIntoView({ behavior: "smooth" });
});
creadores.addEventListener("click", (cr) => {
    cr.preventDefault();
    const selectionCr = document.querySelector("#creators-section");
    selectionCr.scrollIntoView({ behavior: "smooth" });
});

contacto.addEventListener("click", (c) => {
    c.preventDefault();
    const selectionC = document.querySelector("#contact-section");
    selectionC.scrollIntoView({ behavior: "smooth" });
});

const nosotros2 = document.querySelector("#aboutus2");
const servicios2 = document.querySelector("#services2");
const planes2 = document.querySelector("#plans2");
const creadores2 = document.querySelector("#creators2");
const contacto2 = document.querySelector("#contact2");

nosotros2.addEventListener("click", (n) => {
    n.preventDefault();
    const selectionN = document.querySelector("#aboutus-section");
    selectionN.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
servicios2.addEventListener("click", (s) => {
    s.preventDefault();
    const selectionS = document.querySelector("#services-section");
    selectionS.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
planes2.addEventListener("click", (p) => {
    p.preventDefault();
    const selectionP = document.querySelector("#plans-section");
    selectionP.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
contacto2.addEventListener("click", (c) => {
    c.preventDefault();
    const selectionC = document.querySelector("#contact-section");
    selectionC.scrollIntoView({ behavior: "smooth" });
    closeNav();
});
creadores2.addEventListener("click", (cr) => {
    cr.preventDefault();
    const selectionCr = document.querySelector("#creators-section");
    selectionCr.scrollIntoView({ behavior: "smooth" });
    closeNav();
});