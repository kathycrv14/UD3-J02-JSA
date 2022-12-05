const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userLastname = document.getElementById("userLastname");
const userPhone = document.getElementById("userPhone");
const userEmail = document.getElementById("userEmail");
const Textarea = document.getElementById("Textarea");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertLastname = document.getElementById("alertLastname");
const alertPhone = document.getElementById("alertPhone");
const alertEmail = document.getElementById("alertEmail");
const alertTextarea = document.getElementById("alertTextarea");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserLastname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserPhone = /^[0-9]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regTextarea = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = [];

    // validar nombre
    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");

        errores.push({
            tipo: alertName,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    // validar apellido
    if (!regUserLastname.test(userLastname.value) || !userLastname.value.trim()) {
        userLastname.classList.add("is-invalid");

        errores.push({
            tipo: alertLastname,
            msg: "Formato no válido campo nombre, solo letras",
        });
    } else {
        userLastname.classList.remove("is-invalid");
        userLastname.classList.add("is-valid");
        alertLastname.classList.add("d-none");
    }

    // validar celular
    if (!regUserPhone.test(userPhone.value) || !userPhone.value.trim()) {
        userPhone.classList.add("is-invalid");

        errores.push({
            tipo: alertPhone,
            msg: "Formato no válido campo celular, solo números",
        });
    } else {
        userPhone.classList.remove("is-invalid");
        userPhone.classList.add("is-valid");
        alertPhone.classList.add("d-none");
    }

    // validar email
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    pintarMensajeExito();

});