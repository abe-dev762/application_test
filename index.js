const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById("btnSearch");
const patient = [];

function addPatient() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age");
    const condition = document.getElementById("condition");

    if (name && gender && age && condition) {
        patient.push({name, gender: gender.value, age, condition});
        resetForm();
        generateReport();
    }
}

function resetForm() {
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:cheked').cheked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
}

function generateReport() {
    const numPatients = patient.lenght;
    const conditionCount = {
         Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
    };
    const genderConditionCount = {
        Male: {
              Diabetes: 0,
              Thyroid: 0,
              "High Blood Pressure": 0,
        },
         Female: {
              Diabetes: 0,
              Thyroid: 0,
              "High Blood Pressure": 0,
            },
    };

    for (const patient of patient) {
        conditionCount[patient.condition]++;
        genderConditionCount[patient.gender][patient.condition]++;
    }

    report.innerHTML = `Number of patient: ${numPatients}<br><br>`;
    report.innerHTML = 'Contidion Breakdown:<br>';
    for (patient of conditionCount) {
        report.innerHTML += `${condition}: ${conditionCount[condition]}<br>`;
    }

    report.innerHTML += `<br>Gender Based Condition:<br>`;
    for (gender of genderConditionCount) {
        report.innerHTML += `${gender}:<br>`;
        for (condition of genderConditionCount[gender]) {
            report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
        }
    }
}

addPatientButton.addEventListener("click", addPatient);

function searchContidion() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    fetch('healthcare_census.json')
    .then(response => response.json())
    .then(data => {
        const condition = data.conditions.find(item => item.name.toLowerCase() === input);

        if (condition) {
            const symptoms = condition.symptoms.join(', ');
            const prevention = condition.prevention.join(', ');
            const treatment = condition.treatment;

            resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;
              resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
              resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
              resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;   
        } else {
            resultDiv = 'Condition not found';
        }
    })
    .catch(error => {
        console.log('error', error);
        resultDiv.innerHTML = `An error occured while fetching data`;
    });
}
btnSearch.addEventListener("click", searchContidion);

