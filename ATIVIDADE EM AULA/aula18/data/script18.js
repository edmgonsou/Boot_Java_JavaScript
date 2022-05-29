let meses = [
    'Janeiro','Fevereiro','Março','Abril','Maio',
    'Junho','Julho','Agosto','Setembro',
    'Outubro','Novembro','Dezembro'
];

let diaSemana = [
    'Domingo','Segunda','Terça','Quarta-Feira',
    'Quinta-Feira','Sexta-feira','Sabado'
];

let data = new Date();
console.log(`Hoje é ${diaSemana[data.getDay()]} ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`);

let dataFomatada = data.toLocaleString('pt-br', {year:'numeric',month:'2-digit',day:'2-digit'});
console.log(dataFomatada);
console.log(data.toLocaleDateString());