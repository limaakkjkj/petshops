// Função para adicionar um atendimento à lista
function addAppointment(appointment) {
    const appointmentList = document.getElementById("appointmentList");

    const appointmentItem = document.createElement("li");
    appointmentItem.classList.add("appointment-item");

    const appointmentText = document.createElement("span");
    appointmentText.textContent = appointment;
    
    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("appointment-delete");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        appointmentList.removeChild(appointmentItem);
    });

    appointmentItem.appendChild(appointmentText);
    appointmentItem.appendChild(deleteBtn);

    appointmentList.appendChild(appointmentItem);
}


// Opções de atendimentos
const appointmentOptions = [
    "Banho",
    "Tosa",
    "Banho e Tosa",
    "Consulta Médica",
    "Outros"
];

// Função para preencher as opções de atendimentos
function fillAppointmentOptions(selectElement) {
    appointmentOptions.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const selectAppointment = document.getElementById("selectAppointment");
    fillAppointmentOptions(selectAppointment);

    document.getElementById("addAppointmentBtn").addEventListener("click", () => {
        const selectedAppointment = selectAppointment.value;
        if (selectedAppointment === "Outros") {
            const customAppointment = prompt("Digite o atendimento personalizado:");
            if (customAppointment !== null && customAppointment.trim() !== "") {
                addAppointment(customAppointment);
                askForPhoneNumber();
            }
        } else if (selectedAppointment !== "") {
            addAppointment(selectedAppointment);
            askForPhoneNumber();
        }
    });

    // Adicionar evento de clique para exibir o texto completo
    const appointmentList = document.getElementById("appointmentList");
    appointmentList.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("appointment-item-text")) {
            target.classList.toggle("expanded");
        }
    });
});

    function askForPhoneNumber() {
        let phoneNumber = "";
        while (phoneNumber.trim() === "") {
            phoneNumber = prompt("Por favor, insira seu número de telefone:");
            if (phoneNumber === null) {
                break;
            } else if (phoneNumber.trim() === "") {
                alert("Por favor, insira um número de telefone válido.");
            }
        }
    
        if (phoneNumber !== null && phoneNumber.trim() !== "") {
            alert("Seu atendimento foi agendado. Nós entraremos em contato em breve.");
        }
    }