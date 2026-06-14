let modsData=[];
let farmingData=[];

async function loadData(){
    modsData = await fetch('mods.json').then(r=>r.json());
    farmingData = await fetch('farming.json').then(r=>r.json());

    let farmHTML = '';
    farmingData.forEach(f=>{
        farmHTML += `<p><b>${f.tier}</b> - iLvl ${f.ilvl}</p>`;
    });

    document.getElementById('farming').innerHTML = farmHTML;
}

function analyze(){
    const slot = document.getElementById('slot').value;
    const ilvl = parseInt(document.getElementById('ilvl').value);

    const data = modsData.find(x=>x.slot===slot);

    let score = 'B';

    if(ilvl >= 75) score='S';
    else if(ilvl >= 71) score='A';

    let html = `<h3>Crafting Score: ${score}</h3>`;

    if(data){
        html += '<b>Top Mods:</b><ul>';
        data.mods.forEach(m=> html += `<li>${m}</li>`);
        html += '</ul>';
    }

    document.getElementById('result').innerHTML = html;
}

loadData();
