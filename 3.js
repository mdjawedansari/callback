// Age in Days

const person = {
    firstName : "Jawed",
    lastName : "Akhtar",
    age : 28,
};

function ageInDays(personObject, callback) {
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const ageInDays = personObject.age * 365;
    callback(fullName, ageInDays);
}

function logResult(fullName, ageInDays) {
    console.log(
        `The person's full name is ${fullName} and their age in days is ${ageInDays}`
    );
}

ageInDays(person, logResult);