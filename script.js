const candidatos = {
    candidato_X: 889,
    candidato_Y: 847,
    candidato_Z: 515,
    branco: 0
}
let voto = 0, votosZ = 0, votosY = 0, votosX = 0, votosB = 0;
let saida = false;

do{
    alert(`LISTA DE CANDIDATOS:\n 
    ${candidatos.candidato_X}- candidato X\n
    ${candidatos.candidato_Y}- candidato Y\n
    ${candidatos.candidato_Z}- candidato Z\n
    ${candidatos.branco}- Voto em branco`);
    voto = parseInt(window.prompt('Digite o código referente ao canditato sa sua escolha:'));

    if (isNaN(voto)){
        alert('Opção inválida.. Vote novamente!');
    }else{
        switch(voto){
            case candidatos.candidato_X:
                votosX++
                break;
            case candidatos.candidato_Y:
                votosY++
                break;
            case candidatos.candidato_Z:
                votosZ++
                break;
            default:
                votosB++        
        }

        saida = confirm('Deseja encerrar a votação?');

        if (saida){
            if(votosX > votosY && votosX > votosZ){
                alert(`O vencedor foi o candidato ${candidatos.candidato_X} com ${votosX} votos.\n
                Votos do candidato ${candidatos.candidato_Y} - ${votosY}\n
                Votos do candidato ${candidatos.candidato_Z} - ${votosZ}\n
                Outros votos - ${votosB}`);
            }
            if(votosY > votosX && votosY > votosZ){
                alert(`O vencedor foi o candidato ${candidatos.candidato_Y} com ${votosY} votos.\n
                Votos do candidato ${candidatos.candidato_X} - ${votosX}\n
                Votos do candidato ${candidatos.candidato_Z} - ${votosZ}\n
                Outros votos - ${votosB}`);
            }
            if(votosZ > votosY && votosZ > votosX){
                alert(`O vencedor foi o candidato ${candidatos.candidato_Z} com ${votosZ} votos.\n
                Votos do candidato ${candidatos.candidato_Y} - ${votosY}\n
                Votos do candidato ${candidatos.candidato_X} - ${votosX}\n
                Outros votos - ${votosB}`);
            }
            

            if (votosX < votosZ && votosZ == votosY){
                alert(`Houve um empate.. Retomar votações.\n
                Votos do candidato ${candidatos.candidato_Z} - ${votosZ}\n
                Votos do candidato ${candidatos.candidato_Y} - ${votosY}\n
                Votos do candidato ${candidatos.candidato_X} - ${votosX}\n
                Outros votos - ${votosB}`)
                saida = false;
            }
            if (votosY < votosZ && votosZ == votosX){
                alert(`Houve um empate.. Retomar votações.\n
                Votos do candidato ${candidatos.candidato_Z} - ${votosZ}\n
                Votos do candidato ${candidatos.candidato_Y} - ${votosY}\n
                Votos do candidato ${candidatos.candidato_X} - ${votosX}\n
                Outros votos - ${votosB}`)
                saida = false;
            }
            if (votosZ < votosX && votosX == votosY){
                alert(`Houve um empate.. Retomar votações.\n
                Votos do candidato ${candidatos.candidato_Z} - ${votosZ}\n
                Votos do candidato ${candidatos.candidato_Y} - ${votosY}\n
                Votos do candidato ${candidatos.candidato_X} - ${votosX}\n
                Outros votos - ${votosB}`)
                saida = false;
            }
            if (votosZ == votosX && votosX == votosY){
                alert(`Houve um empate.. Retomar votações.\n
                Votos do candidato ${candidatos.candidato_Z} - ${votosZ}\n
                Votos do candidato ${candidatos.candidato_Y} - ${votosY}\n
                Votos do candidato ${candidatos.candidato_X} - ${votosX}\n
                Outros votos - ${votosB}`)
                saida = false;
            }
        }
    }
}while (saida == false)