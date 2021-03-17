const fields = document.querySelectorAll("[required]")

function customValidation(event) {
    const field = event.target

    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;
        for (let error in field.validity) {
            if (field.validity[error]) {
                foundError = true;
            }
        }

        return foundError
    }

    const error = verifyError()
    console.log("Error Exists: ", error)

    if (error) {
        // trocar mensagem de required
        field.setCustomValidity("Esse campo e obrigatorio")
    } else {
        field.setCustomValidity("")
    }


}

for (let field of fields) {
    field.addEventListener("invalid", customValidation)
}



































document.querySelector("form").addEventListener("submit", () => {
    console.log("enviar o formulario!")

    // nao vai enviar o formulario
    event.preventDefault()
})