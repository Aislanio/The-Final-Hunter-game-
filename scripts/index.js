const myElement = document.querySelectorAll('span');
let Img = document.querySelector('main img');

    myElement.forEach((al)=>{
        al.addEventListener('mouseover', () => {
          Img.src = "assets/wolfRed.png";
      });
      
      al.addEventListener('mouseout', () => {
            Img.src = "assets/wolf.png"
      });
     
      al.addEventListener('click',(e)=>{
        if(al.innerHTML =="Jogar"){
            User();
        }
      });
    });

//Load Frase

let Frases = ["No escuro da noite, todos caçam... quem sobreviverá?","Confie em seus instintos ou caia como presa.","A floresta não perdoa... só os mais fortes vencem."
,"Todo caçador tem seu momento de ser caçado.","Você corre com os lobos ou os enfrenta de frente?","O silêncio esconde segredos, mas a lua revela o caçador.","Cada movimento conta... um erro pode ser fatal.","O lobo espreita... o caçador nunca descansa.","Escolha seu lado, pois o jogo nunca termina.","Na escuridão, quem você realmente é?","A noite caiu, a caça começou. De que lado você está?"]

let Jogar = document.querySelector('.jogar')
let UserSidebar = document.querySelector('.login')

Jogar.addEventListener('click',(e)=>{
    loginSideBar()
});


function loginSideBar(){
    let Frase = document.querySelector('.Topico-Frasal');
    let Aleatorio = Math.floor(Math.random() * Frases.length);
    Frase.innerHTML = Frases[Aleatorio];
    if (UserSidebar.classList.contains('on')) {
        UserSidebar.classList.remove('on');
        UserSidebar.classList.add('off');
    } else {
        UserSidebar.classList.remove('off');
        UserSidebar.classList.add('on');
    }
}