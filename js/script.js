// selecionando elementos pelo id
let button = document.getElementById('myBtn');
let hiphop = document.getElementById('hip-hop');
let rock = document.getElementById('rock');

// quando o usuario der scroll superior a 100px, o botão back-to-top aparece
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
}

// faz o botao back-to-top dar scroll ao inicio/topo da pagina
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// adicionando listener ao elemento hiphop e setando pra false
hiphop.addEventListener('mouseover', mOver, false);
hiphop.addEventListener('mouseout', mOut, false);

// adicionando listener ao elemento rock e setando pra false
rock.addEventListener('mouseover', rockOver, false);
rock.addEventListener('mouseout', rockOut, false);


// funcao que adiciona a classe vibrate-1 ao elemento hiphop quando hover
function mOver(){
    hiphop.classList.add('vibrate-1');
}

// funcao que tira a classe vibrate-1 do elemento hiphop quando o hover finaliza
function mOut(){
    hiphop.classList.remove('vibrate-1');
}

// funcao que adiciona a classe vibrate-1 ao elemento rock quando hover
function rockOver(){
    rock.classList.add('vibrate-1');
}

// funcao que tira a classe vibrate-1 do elemento rock quando o hover finaliza
function rockOut(){
    rock.classList.remove('vibrate-1');
}