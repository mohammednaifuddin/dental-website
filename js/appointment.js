const appointmentForm =
document.getElementById("appointmentForm");

appointmentForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const inputs =
appointmentForm.querySelectorAll(
"input, select, textarea"
);

const patientName = inputs[0].value;
const email = inputs[1].value;
const phone = inputs[2].value;
const date = inputs[3].value;
const treatment = inputs[4].value;
const message = inputs[5].value;

if(
patientName === "" ||
email === "" ||
phone === "" ||
date === ""
){
alert("Please fill all required fields");
return;
}

const whatsappMessage =

`🦷 New Appointment Request

Name: ${patientName}

Email: ${email}

Phone: ${phone}

Date: ${date}

Treatment: ${treatment}

Message: ${message}
`;

const clinicNumber =
"918639667904";

const whatsappURL =
`https://wa.me/${clinicNumber}?text=${encodeURIComponent(
whatsappMessage
)}`;

window.open(
whatsappURL,
"_blank"
);

appointmentForm.reset();

alert(
"Appointment details prepared successfully."
);

});
