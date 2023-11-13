// Função para mudar o curso
function mudar(cursoe) {
    
let cursos = [
    {
        curso: "Extensivo",
        info: "O curso <b>extensivo</b> deve começar em 19/02 e acompanhar os alunos até o vestibular da UFPR no fim do ano.<br> Nossas aulas são de segunda a sexta, 6 aulas diárias de 45 minutos cada. O curso conta com orientação vocacional, planejamento de estudos, que ajudam o aluno a organizar a rotina de acordo com os seus horários disponíveis, professores assistentes no contraturno, para sanar dúvidas e auxiliar nas suas necessidades específicas e uma plataforma de redações, sem limites nos números de redações postadas com devolutiva. Além disso, o material didático, que já está incluso no valor da mensalidade, é de autoria dos nossos próprios professores.",
        unidades :"<b>Disponível nas seguintes unidades:</b><br><br> <b>Vicente Machado:</b><br> Manhã (7:10 á 12:20)<br>Tarde (13:30 á 18:30)<br>Noite (18:45 á 23:00)<br><br><b>Hauer:</b><br>Manhã (7:35 á 12:35)<br><br><b>Boa Vista:</b><br>Manhã (7:15 á 12:25)"
    },
    {
        curso: "Terceirão",
        info: "O <b>terceirão</b> deve começar em 19/02 e acompanhar os alunos até o vestibular da UFPR no fim do ano.<br> Nossas aulas são de segunda a sexta, 6 aulas diárias de 45 minutos cada. O curso conta com orientação vocacional, planejamento de estudos, que ajudam o aluno a organizar a rotina de acordo com os seus horários disponíveis, professores assistentes no contraturno, para sanar dúvidas e auxiliar nas suas necessidades específicas e uma plataforma de redações, sem limites nos números de redações postadas com devolutiva. Além disso, o material didático, que já está incluso no valor da mensalidade, é de autoria dos nossos próprios professores.",
        unidades :"<b>Disponível nas seguintes unidades:</b><br><br> <b>Vicente Machado:</b><br> Manhã (7:10 á 12:20)<br>Tarde (13:30 á 18:30)<br>Noite (18:45 á 23:00)<br><br><b>Hauer:</b><br>Manhã (7:35 á 12:35)<br><br><b>Boa Vista:</b><br>Manhã (7:15 á 12:25)"
    },
    {
        curso: "Integral",
        info: "No integral o aluno terá as aulas regulares no turno principal, manhã das 7:10 às 12:20 ou noite das 18:45 às 23:00, sendo o contraturno dos dois no período da tarde, de terça a sexta, das <b>13:30 às 15:00.</b><br>  O contraturno oferece:<br>→ *+100 aulas* de aprofundamento no *conteúdo comum* a todos os vestibulares,  <br>→ *+100 aulas* de aprofundamento nas *matérias com mais peso no seu vestibular* <br>→ Acesso ao *MEMOFLIX* (mais de 200 aulas de revisão on-line)→ *15 aulas de história da arte* on-line <br>→ Salas de Estudos *exclusiva* com cabines individuais <br>→ Assistência presencial de Redação, Física, Matemática, Química, Biologia, <br>→ História, Geografia e Filosofia <br>→ Assistência on-line de Matemática, Física, Química, Biologia, História, Geografia e Filosofia <br>→ Simulados periódicos com questões objetivas <br>→ Curso de Redação on-line com correção de redação <br>→ *Orientação de estudos individual e atendimento exclusivo para aumentar seu rendimento*  <br>→ *Assistência Psicológica, apoio emocional e orientação profissional* <br>Ele pode ser dividido em 3 áreas:<br><b>*Posi Medicina:*</b> Foco em vestibulares da área da saúde; 100 aulas específicas de Química e Biologia; Avaliações discursivas em todas as aulas específicas.<br><b>*Posi Exatas:*</b> Foco em vestibulares de Engenharia e Exatas; 100 aulas específica de Matemática e Física; Avaliações discursivas em todas as aulas específicas.<br><b>*Posi Humanas:*</b> Foco em vestibulares de Humanas; 100 aulas específicas de História e Filosofia; Avaliações discursivas em todas as aulas específicas.",
        unidades: 0
    },
    {
        curso: "SemiExtensivo",
        info: "O semiextensivo terá aproximadamente 05 meses de aula.<br>Que serão:<br><br><b>14</b> semanas de conteúdo<br><b>01</b> semana de revisão para a UFPR (1ª fase)<br><b>03</b> semanas de revisão para o ENEM<br><b>03</b> semanas de preparação para as discursivas UFPR (2ª fase)<br>Também teremos 04 simulados, sendo 02 para a 1ª fase da UFPR, 01 para a 2ª fase e 01 para o ENEM.",
        unidades :"<b>Disponível nas seguintes unidades:</b><br><br> <b>Vicente Machado:</b><br> Manhã (7:10 á 12:20)<br>Tarde (13:30 á 18:30)<br>Noite (18:45 á 23:00)<br><br><b>Hauer:</b><br>Manhã (7:35 á 12:35)<br><br><b>Boa Vista:</b><br>Manhã (7:15 á 12:25)"
    },
    {
        curso: "SuperIntensivo",
        info: "O semiextensivo terá aproximadamente 05 meses de aula.<br>Que serão:<br><br><b>14</b> semanas de conteúdo<br><b>01</b> semana de revisão para a UFPR (1ª fase)<br><b>03</b> semanas de revisão para o ENEM<br><b>03</b> semanas de preparação para as discursivas UFPR (2ª fase)<br>Também teremos 04 simulados, sendo 02 para a 1ª fase da UFPR, 01 para a 2ª fase e 01 para o ENEM.",
        unidades :"<b>Disponível nas seguintes unidades:</b><br><br> <b>Vicente Machado:</b><br> Manhã (7:10 á 12:20)<br>Tarde (13:30 á 18:30)<br>Noite (18:45 á 23:00)<br><br><b>Hauer:</b><br>Manhã (7:35 á 12:35)<br><br><b>Boa Vista:</b><br>Manhã (7:15 á 12:25)"
    }
];


let mudarDiv = document.getElementById('mudar');
let cardoptions = document.getElementById('cardoptions')
let info = document.getElementById('infocursosdiv')
let infocurso1 = document.getElementById('infoCurso1')
let infocurso2 = document.getElementById('infoCurso2')
let button = document.getElementById('volta');

    for (let i = 0; cursoe != cursos.curso; i++) {
        if (cursos[i].curso === cursoe) {
            mudarDiv.innerHTML = cursos[i].curso;
            cardoptions.style.display = 'none'
            info.style.display = 'block'
            if(cursos[i].unidades != 0){
                infocurso2.innerHTML = cursos[i].unidades
            }else{
                infocurso2.style.display = "none"
            }
            infocurso1.innerHTML = cursos[i].info
            button.style.display = 'block'
            break;
        }
    }
}


function voltar(){
    
let mudarDiv = document.getElementById('mudar');
let cardoptions = document.getElementById('cardoptions')
let info = document.getElementById('infocursosdiv')
let infocurso1 = document.getElementById('infoCurso1')
let button = document.getElementById('volta');



mudarDiv.textContent = 'Informações sobre tudo';
cardoptions.style.display = ''
info.style.display = ''
infocurso1.textContent = ''
button.style.display = ''


}


 let data = [
     {
         valorEscola: 19905.60,
         valorMaterial: 4375.80,
         varCurso: 'Extensivo',
         varTurno: 'manha',
         varSede: 'Vicente_Machado'
     },
     {
         valorEscola: 11926.20,
         valorMaterial: 4375.80,
         varCurso: 'Extensivo',
         varTurno: 'tarde',
         varSede: 'Vicente_Machado'
     },
     {
         valorEscola: 8923.20,
         valorMaterial: 4375.80,
         varCurso: 'Extensivo',
         varTurno: 'noite',
         varSede: 'Vicente_Machado'
     },
     {
         valorEscola: 13384.80,
         valorMaterial: 4375.80,
         varCurso: 'Extensivo',
         varTurno: 'manha',
         varSede: 'Hauer'
     },
     {
         valorEscola: 17503.20,
         valorMaterial: 4375.80, 
         varCurso: 'Extensivo',
         varTurno: 'manha',
         varSede: 'Boa_Vista'
     },
     {
        valorEscola: 9738.36,
        valorMaterial: 4375.80, 
        varCurso: 'Extensivo',
        varTurno: 'EAD',
        varSede: ''
    },

    //valores SemiExtensivo

   


     //valores terceirão

     {
        valorEscola: 24882.00,
        valorMaterial: 4375.80,
        varCurso: 'Terceirão',
        varTurno: 'manha',
        varSede: 'Vicente_Machado'
    },
    {
        valorEscola: 14929.20,
        valorMaterial: 4375.80,
        varCurso: 'Terceirão',
        varTurno: 'tarde',
        varSede: 'Vicente_Machado'
    },
    {
        valorEscola: 12269.40,
        valorMaterial: 4375.80,
        varCurso: 'Terceirão',
        varTurno: 'noite',
        varSede: 'Vicente_Machado'
    },
    {
        valorEscola: 18532.80,
        valorMaterial: 4375.80,
        varCurso: 'Terceirão',
        varTurno: 'manha',
        varSede: 'Hauer'
    },
    {
        valorEscola: 24024.00,
        valorMaterial: 4375.80, 
        varCurso: 'Terceirão',
        varTurno: 'manha',
        varSede: 'Boa_Vista'
    },
 ];
 
 document.getElementById('calcularButton').addEventListener('click', function (event) {
     event.preventDefault();
     var parcelamento = parseInt(document.getElementById('parcelamento').value, 10);
     var curso = document.getElementById('curso').value;
     let sede = document.getElementById('sede').value;
     let turno = document.querySelector('input[name="turno"]:checked').value;
     let desconto = document.getElementById('desconto').value
     let integral = 6435.00;
     let assinatura = 1201.20
     console.log(curso);
     console.log(turno);
     console.log(sede)
     console.log(desconto)


     let valorTotalFormatado = null;
     let valorTotalFormatadoIntegral = null;
     let valorTotalFormatadoAssinatura = null;


     if(desconto != 0){
     

             for (let i = 0; i < data.length; i++) {
                if (data[i].varCurso === curso && data[i].varSede === sede && data[i].varTurno === turno) {
                    var valorEscola = data[i].valorEscola;
                    var valorMaterial = data[i].valorMaterial;
                    console.log('entrou', desconto)
                    let valorTotal = ((valorEscola * (1 - (desconto/100))) + valorMaterial) / parcelamento
                    let valorIntegral = ((valorEscola * (1- desconto/100)) + valorMaterial + integral) / parcelamento
                    let valorAssinatura = ((valorEscola * (1- desconto/100)) + valorMaterial + assinatura) / parcelamento
                    valorTotalFormatado = valorTotal.toFixed(2).replace('.', ',');
                    valorTotalFormatadoIntegral = valorIntegral.toFixed(2).replace('.', ',');
                    valorTotalFormatadoAssinatura = valorAssinatura.toFixed(2).replace('.', ',');
       
                    break;
                }
            }
    
    }else if (parcelamento != 1 ){
        for (let i = 0; i < data.length; i++) {
           
            if (data[i].varCurso === curso && data[i].varSede === sede && data[i].varTurno === turno) { 
                if(turno === "EAD"){
                    let valorEscola = data[i].valorEscola;
                    let valorMaterial = data[i].valorMaterial;
       
                    let valorTotal = (valorEscola + valorMaterial) / parcelamento
                    valorTotalFormatado = valorTotal.toFixed(2).replace('.', ',');
                    valorTotalFormatadoIntegral = "Não existe"
                    valorTotalFormatadoAssinatura = "Não existe"
       
                    break;
                }else{
                let valorEscola = data[i].valorEscola;
                let valorMaterial = data[i].valorMaterial;
   
                let valorTotal = (valorEscola + valorMaterial) / parcelamento
                let valorIntegral = (valorEscola + valorMaterial + integral) / parcelamento
                let valorAssinatura = (valorEscola + valorMaterial + assinatura) / parcelamento
                valorTotalFormatado = valorTotal.toFixed(2).replace('.', ',');
                valorTotalFormatadoIntegral = valorIntegral.toFixed(2).replace('.', ',');
                valorTotalFormatadoAssinatura = valorAssinatura.toFixed(2).replace('.', ',');
   
                break;
                }
            }
        }

    }else{
        for (let i = 0; i < data.length; i++) {
            if (data[i].varCurso === curso && data[i].varSede === sede && data[i].varTurno === turno) {
                var valorEscola = data[i].valorEscola;
                var valorMaterial = data[i].valorMaterial;
   
   
                let valorTotal = (valorEscola + valorMaterial) * 0.96;
                let valorIntegral = (valorEscola + valorMaterial + integral) *0.96
                let valorAssinatura = (valorEscola + valorMaterial + assinatura) * 0.96
                valorTotalFormatado = valorTotal.toFixed(2).replace('.', ',');
                valorTotalFormatadoIntegral = valorIntegral.toFixed(2).replace('.', ',');
                valorTotalFormatadoAssinatura = valorAssinatura.toFixed(2).replace('.', ',');
   
                break;
            }
        }
        
    }
 
     if (valorTotalFormatado !== null ) {
         console.log("Valor total: " + valorTotalFormatado);
         document.getElementById('primeiroValor').textContent = (parcelamento + "x de " + valorTotalFormatado)
         document.getElementById('segundoValor').textContent = ("Com Integral:" + parcelamento + "x de " + valorTotalFormatadoIntegral)
         document.getElementById('terceiroValor').textContent = ("Com Assinatura" + parcelamento + "x de " + valorTotalFormatadoAssinatura)
     }
     
     if(valorTotalFormatadoIntegral === "Não existe"){
         document.getElementById('segundoValor').textContent = ("Com Integral: " + valorTotalFormatadoIntegral)
     }
     
     if(valorTotalFormatadoAssinatura === "Não existe"){
        document.getElementById('terceiroValor').textContent = ("Com Assinatura: " + valorTotalFormatadoAssinatura)
     }

     if(valorTotalFormatado === null){
        document.getElementById('primeiroValor').textContent = ("Erro")
        document.getElementById('segundoValor').textContent = ("")
        document.getElementById('terceiroValor').textContent = ("")
     }

     if(turno === "EAD"){
        document.getElementById('calcTitle').innerHTML = ("Valores do Online em " + parcelamento + " X")
     }
 });





 function selecionarInput(id) {
    var input = document.getElementById(id);
    if (input) {
        input.checked = true;
    }
}




