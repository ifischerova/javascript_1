console.log('funguju!');

function updateSkill(id, number) {
    const elemProgress = document.querySelector(`${id} .skill__bar .skill__progress`);
    const elemSkillValue = document.querySelector(`${id} .skill__value`);
    elemProgress.style.width = `${number}%`;
    elemSkillValue.textContent = `${number} / 100`;
}

const htmlKnowledge = Number(prompt("Na skale od 1 do 100 ohodnotte svoji znalost HTML:"));
const cssKnowledge = Number(prompt("Na skale od 1 do 100 ohodnotte svoji znalost CSS:"));
const jsKnowledge = Number(prompt("Na skale od 1 do 100 ohodnotte svoji znalost JS:"));



updateSkill("#skill1", htmlKnowledge );
updateSkill("#skill2", cssKnowledge );
updateSkill("#skill3", jsKnowledge );