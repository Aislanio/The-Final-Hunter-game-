  //Quando iniciar a tela
  let canvas = document.getElementById('canvas');
  const ctx = canvas.getContext("2d");
      canvas.width = 1300;
      canvas.height = 620;  


  //Player
  let Players =[];

  //TUMABAS
  Tumbas =[];
  //Objetos
  let Objetos = [];

let ObjetosFixo = [];
  //Tiros
  let Tiros =[];
  //lAYOUT
  let Layout_Objs = [];
  //Texto
  let Textos =[];

  //Tiles
  let Backgrounds = [];
  
  //Tiles
  let Terras = [];

  //Money do Player
  let Money_Player = 0;
  //money
  let Money_obj = null;
  //Variaves Globais
  let Arco_chao = true;
  let Arco_obg =null;
  const TIRO_TEMPO_MAX = 1000;
  const RECARGA_TEMPO = 1000;

  let Refreseh_game = false;
  let ultimoTiro = 0; 

  let arcoPegado = true;
  let arcomirando = true;

  let color_bord = 'black';

  let mirando = false;

  let Inicio_Music = null;
  //Estado
  let Estado = 'Vivo';

  //Estado do jogo
  let Estado_game = "jogando";

  Arrow_img = new Image();
  Tumba_img = new Image();
  Garra_img = new Image();

  pergaminho= new Image();
  Wolf_img =  new Image();

  water_img = new Image();

  //Chao 
  CenterTerra = new Image();
  DireTerra = new Image();
  EsqTerra = new Image();
  MidTerra = new Image();
  MidEsq = new Image();
  MidEmbaixo = new Image();
  MidDire = new Image();
  //money
  //objs
  madeira =  new Image();
  //mouse
  let mouseX = 0;
  let mouseY = 0;

  //Power
  let WolfAtivou = false;
  //Canvas Config
  
  // Icons
  Wolf_marrom_Icon = new Image();
  Hunter_Icon = new Image();
  Villager_icon = new Image();
  Morto_icon = new Image();
  //camerad

let camera = {
  x: 200,
  y: 100,
  width: canvas.width,
  height: canvas.height,
  leftEdge:function(){
    return this.x + (this.width * 0.25 );
  },
  rightEdge:function(){
    return this.x + (this.width * 0.75 );
  },
  topEdge:function(){
    return this.y + (this.height * 0.25 );
  },
  bottomEdge:function(){
    return this.y + (this.height * 0.75 );
  },
  };
  //Load de imagens
  //Texto
  class Texto{
    constructor(texto,posx,posy,tam,font){
      this.texto = texto,
      this.posx = posx,
      this.posy = posy,
      this.tam = tam,
      this.font = font

    }
  }

  let MiniMap = new Image();
  //POO - Criação dos personagens 
    
  class JogarPlayer{
    constructor(id,name,estado,img,posx,posy,speed,classe,tub){
        this.id = id,
        this.name = name,
        this.Estado = estado,
        this.img = img,
        this.posx = posx,
        this.posy = posy,
        this.speed = speed
        this.classe = classe,
        this.tub = tub
    
    }
        
    Attack(){
        if(this.classe == "Wolf"){
            console.log('Wolf attacou')
        }
        if(this.classe == "Hunter"){
          
          if(Attack_mode){

          }
        }
    }
  }

  //POO - Criação dos Objetos

  class Object{
  constructor(name,img,posx,posy,width,height,visible){
      this.name = name,
      this.img = img,
      this.posx = posx,
      this.posy = posy,
      this.width = width,
      this.height = height,
      this.visible = visible

  }

  }
 function assetsIlha(){
    MiniMap.src = "assets/map/background/grass.png"
    water_img.src = "assets/map/background/grass.png";
    CenterTerra.src = "assets/map/background/chao/CenterTerra.png";
    DireTerra.src = "assets/map/background/chao/DireTerra.png";
    EsqTerra.src = "assets/map/background/chao/EsqTerra.png";
    MidTerra.src = "assets/map/background/chao/MidTerra.png";
    MidDire.src = "assets/map/background/chao/MidDire.png";
    MidEsq.src = "assets/map/background/chao/MidEsq.png";
    MidEmbaixo.src = "assets/map/background/chao/MidEmbaixo.png";
  }
load();
  async function load(){
      Player_img = new Image();
      Player_img.src = 'assets/player/player.png'

      //Money
      money_img = new Image();
      money_img.src = 'assets/itens/money.png';
      Money_obj = new Object("Money",money_img,1200,10,90,90,true);
      ObjetosFixo.push(Money_obj);

      let Money_Text = new Texto(Money_Player,Money_obj.posx - 80,Money_obj.posy + 60,"30px","Verdana");
      Textos.push(Money_Text);


      //Map Ilha
      madeira.src = 'assets/map/background/objs/madeira.png'
      
      //Atualizar dinheor do player
      let Money_atual = setMoneyPlayer(0);
      Money_Player = Money_atual;
      console.log(Money_atual);

      await assetsIlha();

      await LoadMap();  

      if(Refreseh_game == false){
        let Player1 = new JogarPlayer(0,'lanio',"Vivo",Player_img,40,70,3,'null',false);
        Players.push(Player1);
        let Player2 = new JogarPlayer(0,'Anto',"Vivo",Player_img,50,70,3,'null',false);
        Players.push(Player2);
        let Player3 = new JogarPlayer(0,'Ttata',"Vivo",Player_img,100,70,3,'null',false);
        Players.push(Player3);
        let Player4 = new JogarPlayer(0,'Lalal',"Vivo",Player_img,300,70,3,'null',false);
        Players.push(Player4);
        let Player5 = new JogarPlayer(0,'joao',"Vivo",Player_img,400,70,3,'null',false);
        Players.push(Player5);
      }


      classRandom(Players);
      //arco
      Arco_img = new Image();
      Arco_img.src = 'assets/layout/arco1.png'
      Arco_obg = new Object("arco",Arco_img,500,40,64,64,true);
      Garra_img.src = 'assets/layout/garra.png';
      Arrow_img.src = 'assets/Arrow.png';

    //Pergaminho
    pergaminho.src = "assets/pergaminho.png"
    //Tumabas
    Tumba_img.src = "assets/morte.png";


    //icons
    Wolf_marrom_Icon.src = "assets/icons/CabeçaMarrom.png";
    Hunter_Icon.src = "assets/icons/hunter.png";
    Villager_icon.src = "assets/icons/villager.png";
    Morto_icon.src = "assets/icons/morte.png"
    //wolf
    
    Wolf_img.src = "assets/player/Wolf1.png"
    //Musica
    Inicio_Music = new Audio('assets/Music/gameLoad.wav');
    gerarPosicoesAleatorias(); 
    PlayMusic();
  }




  console.log(Players);
  console.log(Objetos)
  render();

  //Desenhar no canva #################################################################################################################
  async function render() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(-camera.x, -camera.y);
    
    ctx.drawImage(MiniMap, 0,0);

    //Map

    //Background
    Backgrounds.forEach(back => {
      if(back.visible == true){
        ctx.drawImage(back.img, back.posx, back.posy,back.width,back.height); // Desenhar a imagem do jogador
      };
      
    });
   Terras.forEach(ter => {
      if(ter.visible == true){
        ctx.drawImage(ter.img, ter.posx, ter.posy,ter.width,ter.height); // Desenhar a imagem do jogador
      };
      
    });
      //Tumabs
      Tumbas.forEach(tumb => {
        ctx.drawImage(tumb.img, tumb.posx, tumb.posy,100 / 2, 100  / 2 );
      });

      Players.forEach(player => {
        if(player.Estado != "Morto"){
          ctx.drawImage(player.img, player.posx, player.posy); // Desenhar a imagem do jogador
        }
        
      });

      //Names
      Players.forEach(player => {
        ctx.fillText(`${player.name}`,player.posx + 15,player.posy ); // Desenhar a imagem do jogador
      });

      Objetos.forEach(obj => {
        if(obj.visible = true){
          ctx.drawImage(obj.img, obj.posx, obj.posy); // Desenhar a imagem do jogador
        }

  
    });
    
    Tiros.forEach(arrow => {
      const angle = Math.atan2(arrow.directionY, arrow.directionX);

          // Salvar o contexto atual
          ctx.save();

          // Transladar o contexto para a posição do tiro
          ctx.translate(arrow.posx, arrow.posy);

          // Rotacionar o contexto
          ctx.rotate(angle);

          // Desenhar a imagem do tiro
          ctx.drawImage(arrow.img, -arrow.img.width / 2, -arrow.img.height / 2);

          // Restaurar o contexto original
          ctx.restore();
    });
    


    
    ctx.restore();
    ObjetosFixo.forEach(obj => {
      if(obj.visible = true){
        ctx.drawImage(obj.img, obj.posx, obj.posy,obj.width,obj.height); // Desenhar a imagem do jogador
      }
    });
    Textos.forEach(text => {
      
      ctx.font = `${text.tam} ${text.font}`
      ctx.fillText(text.texto,text.posx,text.posy);
      
    });

    if(Players.length >=1){
      if(Players[0].classe == "Hunter"){
      
        const x = 600;  // Coordenada x do canto superior esquerdo
        const y = 550;  // Coordenada y do canto superior esquerdo
        const largura = 50;  // Largura do quadrado
        const altura = 50;  // Altura do quadrado

        // Define a cor da borda e a largura da linha
        ctx.strokeStyle = color_bord;  // Cor da borda
        ctx.lineWidth = 2;  // Largura da linha

        // Desenha o quadrado com apenas a borda
        ctx.strokeRect(x, y, largura, altura); 
        ctx.drawImage(Arco_img, x, y);
      }
      if(Players[0].classe == "Wolf"){
      
        const x = 600;  // Coordenada x do canto superior esquerdo
        const y = 550;  // Coordenada y do canto superior esquerdo
        const largura = 50;  // Largura do quadrado
        const altura = 50;  // Altura do quadrado

        // Define a cor da borda e a largura da linha
        ctx.strokeStyle = color_bord;  // Cor da borda
        ctx.lineWidth = 2;  // Largura da linha

        // Desenha o quadrado com apenas a borda
        ctx.strokeRect(x, y, largura, altura); 
        ctx.drawImage(Garra_img, x +4 , y +3,40,40);
      }
    
    }
  }


  //Lopp
  ArcoI = true;
function Uptade(){
    if(Estado == "Vivo"){
      if(moveCima){
        Players[0].posy -= Players[0].speed;
          dire = 1;
          andando = true;
      }
      if(moveBaixo){
        andando = true;
        Players[0].posy  += Players[0].speed;
        if (moveShift) {
          dire = 2;
        }
        
      }
      if(moveDireita){
        andando = true;
        Players[0].posx += Players[0].speed;
        if (moveShift) {
          dire = 3;
        }
        
      }
      if(moveEsquerda){
        andando = true;
        Players[0].posx -= Players[0].speed;
        if (moveShift) {
          dire = 3;
        }
        
      }
      //Mirando o arco
    if(Players[0].classe == "Hunter"){
      if(mirando){
        if(arcomirando){
          if(ArcoI){
            Objetos.push(Arco_obg);
            ArcoI = false;
          }
          
          arcomirando = false;
        }
          let index = 0;
          Objetos[0].posx = Players[0].posx -20;
        
          Objetos[0].posy = Players[0].posy -13;
        }
    }
    if(Players[0].classe == "Wolf"){

    }
    }
      
        
      //Tiros
      const currentTime = Date.now();
      Tiros.forEach(arrow => {
        arrow.posx += arrow.directionX * arrow.speed;
        arrow.posy += arrow.directionY * arrow.speed;

        if (currentTime - arrow.spawnTime > TIRO_TEMPO_MAX) {
          arrow.remove = true;
      }
      });
      
      
      render();
      colider();
      colider_arrow();
      updateCamera()
      Estados();
      checkBoundaries() 
      //IA
      moveAI();
      moveAI2();
      moveAI3();
      moveAI4();
      if(Arco_chao){
        coliderArco();
      }
      requestAnimationFrame(Uptade)
  }

  //Movimentação E attack

      let up = 87, down = 83,left = 65 ,emv = 69, right = 68,tiro_tec = 74,crea = 1,ini =1,shift = 16,attack_tecle = 69
      let moveEsquerda = moveDireita = moveCima = moveBaixo = moveShift= Attack_mode = atirar = false;

      let playerId = 0;

      window.addEventListener("keydown",keydowHandler);
      window.addEventListener("keyup",keyupHandler);
      function keydowHandler(e){

        let player = Players.find(p => p.id === playerId);

        if (!player) return;
        if(player.Estado =="Morto"){
          return
        }
        
        let key =  e.keyCode;

        if(key  === up && key != down){
          moveCima = true;
        };
        if(key  === down && key != up){
          moveBaixo = true;
        };
        if(key  === left && key != right) {
          moveEsquerda =true
        };
        if(key  === right && key != left){
        moveDireita = true;
        };
        if (key === tiro_tec) {
          atirar=false;
        }
        if (key == shift) {
          moveShift = true;
        }
        if (key == emv) {
          E = true;
        }
        if (key == attack_tecle) {
          if(Players[0].classe == 'Hunter'){
            arcomirando = true;
            
            Attack_mode = true;
            Hunter_Layout(Attack_mode);
          }
          if(Players[0].classe == 'Wolf'){
            Wolf_Layout();
          }
          
        }
      };

      function keyupHandler(e){
        
        let key =  e.keyCode;
        if(key  === up && key != down){
          moveCima = false;
        };
        if(key  === down && key != up){
          moveBaixo = false;
        };
        if(key  === left && key != right) {
          moveEsquerda = false;
        };
        if(key  === right && key != left){
        moveDireita = false;
        };
        if (key === tiro_tec) {
          atirar = true;
        }
        if(key == shift){
          moveShift = false;
        }
        if (key == emv) {
          E = false;
        }
        
      };
    //ATACK
    canvas.addEventListener('click', function(event) {
      const currentTime = Date.now();
      if (event.button === 0) {
        
        if(Estado != "Vivo"){
          return
        }
          if(Players[0].classe == "Hunter"){
          if(Players[0].Estado == "Morto"){
            return
          }
            if(mirando){
              const player = Players[0];

              const directionX = mouseX - (player.posx + player.img.width / 2);
              const directionY = mouseY - (player.posy + player.img.height / 2);
              
              if (currentTime - ultimoTiro >= RECARGA_TEMPO){
                const magnitude = Math.sqrt(directionX * directionX + directionY * directionY);
                const normalizedDirectionX = directionX / magnitude;
                const normalizedDirectionY = directionY / magnitude;


                const arrow = {
                  posx: player.posx + player.img.width / 1.5,
                  posy: player.posy + player.img.height / 1.5,
                  directionX: normalizedDirectionX,
                  directionY: normalizedDirectionY,
                  speed: 8.5,
                  img: Arrow_img,
                  spawnTime: Date.now(), // Tempo em que o tiro foi criado
                  remove: false
                };

                Tiros.push(arrow);
                ultimoTiro = currentTime;
              }
            }
          } else if(Players[0].classe == "Wolf"){
                let LoboAttackColider = Players[0];
                Players.forEach(player => {
                  if(player.posx + 40 >  LoboAttackColider .posx && player.posx <  LoboAttackColider .posx + 40 && player.posy + 40 >  LoboAttackColider.posy && player.posy <  LoboAttackColider.posy + 40){
                  if(player.classe != "Wolf"){
                    if(player.classe != "Hunter"){
                      player.Estado = "Morto";
                    }else{
                      
                      Arco_chao = true;
                      Arco_obg.posx = player.posx;
                      Arco_obg.posy = player.posy;
                      player.Estado = "Morto";
                      Objetos.push(Arco_obg);
                    }
                  }
                  }
                });
          }
        
      }
  });

  function Hunter_Layout(e){
    if(e){
      if (color_bord == "black") {
        color_bord = 'blue';
        document.querySelector('body').classList.add('hunter')
        mirando = true;
        arcomirando = true;
      } else {
        color_bord = 'black';
        document.querySelector('body').classList.remove('hunter')
        arcomirando = false;
        mirando = false
        ArcoI = true;
        Objetos.splice(0,1);
      }
    }



  }


    

  //Posição do mouse

      document.querySelector('canvas').addEventListener('mousemove',(event) =>{
        mouseX = event.clientX - canvas.offsetLeft;
        mouseY = event.clientY - canvas.offsetTop;
      })


  function colider(){
   /* Players.forEach((player)=>{
      if(playerColison.posx + 40 > playerColison2.posx && playerColison.posx < playerColison2.posx + 40 && playerColison.posy + 40 >  playerColison2.posy && playerColison.posy < playerColison2.posy + 40){
      
      }
    })*/
   
  }

  function coliderArco(){
    if(Arco_chao){
      
      Players.forEach(player => {
        if(player.classe == "Hunter" && player.Estado == "Morto"){
          Arco_obg.posx = player.posx;
          Arco_obg.posy = player.posy;
          Objetos.push(Arco_obg);
        }
        

        if(player.posx + 40 > Arco_obg.posx && player.posx < Arco_obg.posx + 40 && player.posy + 40 >  Arco_obg.posy && player.posy < Arco_obg.posy + 40){
          if(player.classe != "Wolf"){
            if(player.Estado == "Vivo"){
              player.classe = "Hunter";
              Arco_chao=false;
            }
           
          
          }
        }
      });
    }
  }

  //Arrow colisão 
  function colider_arrow(){
    Players.forEach((playerColison,playerIndex) => {
      Tiros.forEach((Tiro,indexT) => {
        if(playerColison.posx + 40 > Tiro.posx && playerColison.posx < Tiro.posx + 40 && playerColison.posy + 40 >  Tiro.posy && playerColison.posy < Tiro.posy + 40){
          if(playerColison.classe != "Hunter"){

        
            if(playerColison.classe != "Wolf"){
              if(playerColison.Estado !="Vivo"){
                return;
              }
              Players.forEach(Hunter =>{
                  if(Hunter.classe == "Hunter"){
                    
                    Hunter.Estado = "Morto";
                    Arco_chao = true;
                  }
              });
            }
          
            console.log('Morreu')
            
            let indexTiro = Players.indexOf(indexT);
            Tiros.splice(indexTiro, 1);
            playerColison.Estado = "Morto";
          }
        } 
      });
    });
  }

  let CamAlea = 0;
  let PlayerAlea  = null
  function updateCamera() {

   if(Players[0].Estado == "Morto"){
    if(CamAlea == 1 && Players[PlayerAlea].Estado == "Morto"){
      CamAlea = 0;
    }
    if(CamAlea == 0){
      PlayerAlea= Math.floor(Math.random() * Players.length);
      if(Players[PlayerAlea].Estado == "Morto"){return;}
      CamAlea++;

    }

    camera.x = Players[PlayerAlea].posx - (camera.width / 2);

    // Centraliza a câmera na posição Y do jogador
    camera.y = Players[PlayerAlea].posy - (camera.height / 2);
    return;
   }
    camera.x = Players[0].posx - (camera.width / 2);

    // Centraliza a câmera na posição Y do jogador
    camera.y = Players[0].posy - (camera.height / 2);
  }
  
  
  //Layout

  function Layout(){
    if( Players[0].classe == 'Hunter'){
        
    }

  }


  function Wolf_Layout(){
    //console.log('Auuuuuuuuuuu');
    
    if (color_bord == "black") {
      if(WolfAtivou == true){return;}
      WolfAtivou = true;
      color_bord = 'blue';
      document.querySelector('body').classList.add('wolf')

      
      const wolf = Players.find(p => p.classe === "Wolf");
      
      wolf.img = Wolf_img;
      wolf.speed = 3.6;
    }else if(color_bord == "blue"){
      if(WolfAtivou == false){return;}
      WolfAtivou = false;
      color_bord = 'black';
      document.querySelector('body').classList.remove('wolf')
      console.log('Desativo')
      const wolf = Players.find(p => p.classe === "Wolf");
      wolf.img = Player_img;
      wolf.speed = 3;
    }
  }


 Iplayers = 0;
 let iPerga = false;
 
  //Verificar se os Players está vivos
  function Estados(){
      //Criação de Tumbas
      Players.forEach(player =>{
          if(player.Estado == "Morto"){
            if(player.tub == false){
              let TumbinhaHunter = {
                img: Tumba_img,
                posx: player.posx,
                posy: player.posy
              }
              
              if(player.classe == "Hunter"){
                Arco_chao = true;
                
              }
              let index = Players.indexOf(player);
            
              
              
              Tumbas.push(TumbinhaHunter);
              player.tub = true;
              Iplayers++;
            }
           
          }
      });
    
    if(Iplayers== Players.length -1){
      
      
     if(iPerga == false){
      let fim_perga =  new Object("Pergaminho_final",pergaminho,canvas.width / 2 - 150,canvas.height / 2 -250,300,500,true);
      ObjetosFixo.push(fim_perga);
      console.log('Lobo Venceu');
      iPerga = true;
      Refreseh_game = true;
      FimDetails(fim_perga);
      setTimeout(load(), 5000);
     }
      
    }
    const wolf = Players.find(p => p.classe === "Wolf");
    if(wolf.Estado == "Morto"){
      let fim_perga =  new Object("Pergaminho_final",pergaminho,canvas.width / 2 - 150,canvas.height / 2 -250,300,500,true);
      if(iPerga == false){
       ObjetosFixo.push(fim_perga);
       iPerga = true;
       Refreseh_game = true;
       FimDetails(fim_perga);
       setTimeout(load(), 5000);
      }
    }
    
  }
  requestAnimationFrame(Uptade);

  //Detalhes da partida
  let numePlayer = 100;
  function FimDetails(fim_perga){
    Players.forEach((player)=>{
      let PlayerText = new Texto(player.name,fim_perga.posx +50,fim_perga.posy + numePlayer +20,"20px","Arial")
      if(player.Estado == "Morto" && player.classe != "Wolf" && player.classe != "Hunter"){
        let morto_Obj = new Object("Player morto",Morto_icon,PlayerText.posx + 150,PlayerText.posy - 30,32,32,true);
        ObjetosFixo.push(morto_Obj);
      }else if(player.classe == "Hunter"){
        let morto_Obj = new Object("Hunter Morto",Hunter_Icon,PlayerText.posx + 150,PlayerText.posy -30,32,32,true);
        ObjetosFixo.push(morto_Obj);
      }
      
      //Wolf Victory
      if(player.classe == "Wolf"){
        let morto_Obj = new Object("Wolf morto",Wolf_marrom_Icon,PlayerText.posx + 120,PlayerText.posy - 40,64,64,true);
        ObjetosFixo.push(morto_Obj);
      }
      Textos.push(PlayerText);
      numePlayer +=50

      
    });

    //Moedas 
    Player1 = Players[0];

    if(Player1.classe == "Wolf" && Player1.Estado == "Vivo"){
      setMoneyPlayer(2);
      
      
    }else if(Player1.classe == "Villager" && Player1.Estado == "Vivo"){
      setMoneyPlayer(1);
      
      
    }else if(Player1.classe == "Hunter" && Player1.Estado == "Vivo"){
      setMoneyPlayer(2);
        
      
    }

    
  };
  
 function PlayMusic(){
  document.addEventListener('keydown', () => {

    // Remover a mensagem depois de tocar o som
    
    Inicio_Music.loop = true; 
    Inicio_Music.play();
}, { once: true });
  }
  //Sorteio de clases ############################################################################################


  function  classRandom(ListPlays){ 
    let classes = ["Wolf", "Hunter", "Villager"];
      
    // Escolhe o Wolf e o Hunter
    let wolfIndex = Math.floor(Math.random() * ListPlays.length);
    let hunterIndex;

    do {
        hunterIndex = Math.floor(Math.random() * ListPlays.length);
    } while (hunterIndex === wolfIndex); // Garante que o Hunter não seja o mesmo que o Wolf

    // Atribui as classes
    ListPlays.forEach((player, index) => {
        if (index === wolfIndex) {
            player.classe = "Wolf";
        } else if (index === hunterIndex) {
            player.classe = "Hunter";
        } else {
            player.classe = "Villager";
        }
    });


  }

//Sorteio de posições #######################################################
function gerarPosicoesAleatorias() {
  const mapWidth = 1000;  // Largura do mapa
  const mapHeight = 1000; // Altura do mapa
  
  Players.forEach(player => {
      player.posx = Math.floor(Math.random() * mapWidth);
      player.posy = Math.floor(Math.random() * mapHeight);
  });
}


//IA1 ###############################
let i = 100;
let MoveDire = null;
let Decio_Morte = false;
let shouldKill= false;
let WolfRop= true;

function moveAI() {
  IA1Player = Players[1];
  
    if(Players[1].Estado != "Vivo"){return};
      //fugir do wolf
      if(IA1Player.classe != "Wolf"){
        const wolf = Players.find(p => p.classe === "Wolf");
      
        
        // Cálculo da direção de fuga
          if(WolfAtivou){
            let distX = IA1Player.posx - wolf.posx; // Distância horizontal até o Wolf
            let distY = IA1Player.posy - wolf.posy; // Distância vertical até o Wolf
            let distance = Math.sqrt(distX * distX + distY * distY); // Distância total até o Wolf
            if(distance < 100){
                // Se a IA estiver muito perto do Wolf, ela foge
              function getNewDistance(newPosX, newPosY) {
                let newDistX = newPosX - wolf.posx;
                let newDistY = newPosY - wolf.posy;
                return Math.sqrt(newDistX * newDistX + newDistY * newDistY);
              }
              
              // Se o movimento para cima aumentar a distância, mova
              if (getNewDistance(IA1Player.posx, IA1Player.posy - IA1Player.speed) > distance) {
                
                IA1Player.posy -= IA1Player.speed;
                
              }
              
              // Se o movimento para baixo aumentar a distância, mova
              if (getNewDistance(IA1Player.posx, IA1Player.posy + IA1Player.speed) > distance) {
                
                IA1Player.posy += IA1Player.speed;
                
              }
              
              // Se o movimento para direita aumentar a distância, mova
              if (getNewDistance(IA1Player.posx + IA1Player.speed, IA1Player.posy) > distance) {
                
                IA1Player.posx += IA1Player.speed;
                
              }
              
              // Se o movimento para esquerda aumentar a distância, mova
              if (getNewDistance(IA1Player.posx - IA1Player.speed, IA1Player.posy) > distance) {
                
                IA1Player.posx -= IA1Player.speed;
                
              }
              return;
            }
            
        }
          
      }

      if(IA1Player.classe == "Wolf"){
          // Encontrar o player vivo mais próximo
          let nearestPlayer = null;
          let minDistance = Infinity;
    
          Players.forEach(player => {
              if(player.Estado === "Vivo" && player !== IA1Player){ // Não considerar o próprio Wolf
                  let distX = player.posx - IA1Player.posx;
                  let distY = player.posy - IA1Player.posy;
                  let distance = Math.sqrt(distX * distX + distY * distY);
                  
                  if(distance < minDistance){
                      minDistance = distance;
                      nearestPlayer = player;
                  }
              }
          });

          if(Decio_Morte == false && shouldKill == false){
            shouldKill = Math.random() > 0.5; // 50% de chance de atacar
            Decio_Morte = true;
            
            
          }else{
            setTimeout(() =>{
              Decio_Morte =false;
            }, 30000);
          }
          if(shouldKill == true){
            IA1Player.img = Wolf_img;
          }else if(shouldKill == false){
            IA1Player.img = Player_img;
          }
          
          if(nearestPlayer){
              // Decidir se vai matar o player
              
              
              
              if(shouldKill){
                  
                  // Se decidir atacar e estiver próximo o suficiente
                  if(minDistance < 20){ 
                    
                      
                      
                    
                      nearestPlayer.Estado = "Morto"; // Muda o estado do jogador para morto

                      WolfRop = false
                      WolfAttackIA(IA1Player);
                      console.log( 'Matou Player')
                        
                      Decio_Morte = true;
                      
                      shouldKill = false;
                  } else {
                      // Perseguir o jogador mais próximo
                      if(nearestPlayer.posx > IA1Player.posx){
                          IA1Player.posx += IA1Player.speed;
                          moveWolf(cima,1);
                      } else if(nearestPlayer.posx < IA1Player.posx){
                          IA1Player.posx -= IA1Player.speed;
                          moveWolf(baixo,1);
                      }
                      
                      if(nearestPlayer.posy > IA1Player.posy){
                          IA1Player.posy += IA1Player.speed;
                          moveWolf(esquerda,1);
                      } else if(nearestPlayer.posy < IA1Player.posy){
                          IA1Player.posy -= IA1Player.speed;
                          moveWolf(direita,1);
                      }
                  }
                  return;
              } }
                
            }

      //Movimento Aleatorio
      let movimento = ["Cima", "Baixo", "Direita","Esquerda"];
      let MoveIndex = null;
      

    
        if (i === 100) {
          MoveIndex = Math.floor(Math.random() * movimento.length);
          MoveDire = movimento[MoveIndex];
          
          i = 0;
        } else {
          i++; 
        }
        
      //MOver a IA
      
      if(MoveDire == "Cima"){
       
        IA1Player.posy -= IA1Player.speed;
          
      }
      if(MoveDire == "Baixo"){
        
        IA1Player.posy  += IA1Player.speed;
        
        
      }
      if(MoveDire == "Direita"){
        
        IA1Player.posx += IA1Player.speed;
        
        
      }
      if(MoveDire == "Esquerda"){
        
        IA1Player.posx -= IA1Player.speed;
        
        
      }


    

  
}




//IA2 ###############################
let i2 = 100;
let MoveDire2 = null;
let Decio_Morte2 = false;
let shouldKill2= false;
let WolfRop2= true;

function moveAI2() {
  IA1Player = Players[2];
  
    if(Players[2].Estado != "Vivo"){return};
      //fugir do wolf
      if(IA1Player.classe != "Wolf"){
        const wolf = Players.find(p => p.classe === "Wolf");
      
        
        // Cálculo da direção de fuga
          if(WolfAtivou){
            let distX = IA1Player.posx - wolf.posx; // Distância horizontal até o Wolf
            let distY = IA1Player.posy - wolf.posy; // Distância vertical até o Wolf
            let distance = Math.sqrt(distX * distX + distY * distY); // Distância total até o Wolf
            if(distance < 100){
                // Se a IA estiver muito perto do Wolf, ela foge
              function getNewDistance(newPosX, newPosY) {
                let newDistX = newPosX - wolf.posx;
                let newDistY = newPosY - wolf.posy;
                return Math.sqrt(newDistX * newDistX + newDistY * newDistY);
              }
              
              // Se o movimento para cima aumentar a distância, mova
              if (getNewDistance(IA1Player.posx, IA1Player.posy - IA1Player.speed) > distance) {
                console.log('Movendo para cima, posição Y: ' + IA1Player.posy);
                IA1Player.posy -= IA1Player.speed;
              }
              
              // Se o movimento para baixo aumentar a distância, mova
              if (getNewDistance(IA1Player.posx, IA1Player.posy + IA1Player.speed) > distance) {
                console.log('Movendo para baixo, posição Y: ' + IA1Player.posy);
                IA1Player.posy += IA1Player.speed;
              }
              
              // Se o movimento para direita aumentar a distância, mova
              if (getNewDistance(IA1Player.posx + IA1Player.speed, IA1Player.posy) > distance) {
                console.log('Movendo para direita, posição X: ' + IA1Player.posx);
                IA1Player.posx += IA1Player.speed;
              }
              
              // Se o movimento para esquerda aumentar a distância, mova
              if (getNewDistance(IA1Player.posx - IA1Player.speed, IA1Player.posy) > distance) {
                console.log('Movendo para esquerda, posição X: ' + IA1Player.posx);
                IA1Player.posx -= IA1Player.speed;
              }
              return;
            }
            
        }
          
      }

      if(IA1Player.classe == "Wolf"){
          // Encontrar o player vivo mais próximo
          let nearestPlayer = null;
          let minDistance = Infinity;
          
          Players.forEach(player => {
              if(player.Estado === "Vivo" && player !== IA1Player){ // Não considerar o próprio Wolf
                  let distX = player.posx - IA1Player.posx;
                  let distY = player.posy - IA1Player.posy;
                  let distance = Math.sqrt(distX * distX + distY * distY);
                  
                  if(distance < minDistance){
                      minDistance = distance;
                      nearestPlayer = player;
                  }
              }
          });

          if(Decio_Morte2 == false && shouldKill2 == false){
            shouldKill2 = Math.random() > 0.5; // 50% de chance de atacar
            Decio_Morte2 = true;
            
            
          }else{
            setTimeout(() =>{
              Decio_Morte2 =false;
            }, 30000);
          }
          if(shouldKill2 == true){
            IA1Player.img = Wolf_img;
          }else if(shouldKill2 == false){
            IA1Player.img = Player_img;
          }
          
          if(nearestPlayer){
              // Decidir se vai matar o player
              
              
              
              if(shouldKill2){
                  
                  // Se decidir atacar e estiver próximo o suficiente
                  if(minDistance < 20){ // A distância de 20 é um exemplo, ajuste conforme necessário
                    
                      
                      
                    
                      nearestPlayer.Estado = "Morto"; // Muda o estado do jogador para morto

                      WolfRop2 = false
                      WolfAttackIA(IA1Player);
                      console.log( 'Matou Player')
                        
                      Decio_Morte2 = true;
                      
                      shouldKill2 = false;
                  } else {
                      // Perseguir o jogador mais próximo
                      if(nearestPlayer.posx > IA1Player.posx){
                          IA1Player.posx += IA1Player.speed;
                      } else if(nearestPlayer.posx < IA1Player.posx){
                          IA1Player.posx -= IA1Player.speed;
                      }
                      
                      if(nearestPlayer.posy > IA1Player.posy){
                          IA1Player.posy += IA1Player.speed;
                      } else if(nearestPlayer.posy < IA1Player.posy){
                          IA1Player.posy -= IA1Player.speed;
                      }
                  }
                  return;
              } }
                
            }

      //Movimento Aleatorio
      let movimento = ["Cima", "Baixo", "Direita","Esquerda"];
      let MoveIndex = null;
      

    
        if (i2 === 100) {
          MoveIndex = Math.floor(Math.random() * movimento.length);
          MoveDire2 = movimento[MoveIndex];
          
          i2 = 0;
        } else {
          i2++; 
        }
        
      //MOver a IA
      
      if(MoveDire2 == "Cima"){
       
        IA1Player.posy -= IA1Player.speed;
          
      }
      if(MoveDire2 == "Baixo"){
        
        IA1Player.posy  += IA1Player.speed;
        
        
      }
      if(MoveDire2 == "Direita"){
        
        IA1Player.posx += IA1Player.speed;
        
        
      }
      if(MoveDire2 == "Esquerda"){
        
        IA1Player.posx -= IA1Player.speed;
        
        
      }


    

  
}



//IA3 ###############################
let i3 = 100;
let MoveDire3 = null;
let Decio_Morte3 = false;
let shouldKill3= false;
let WolfRop3= true;

function moveAI3() {
  IA1Player = Players[3];
  
    if(IA1Player.Estado != "Vivo"){return};
      //fugir do wolf
      if(IA1Player.classe != "Wolf"){
        const wolf = Players.find(p => p.classe === "Wolf");
      
        
        // Cálculo da direção de fuga
          if(WolfAtivou){
            let distX = IA1Player.posx - wolf.posx; // Distância horizontal até o Wolf
            let distY = IA1Player.posy - wolf.posy; // Distância vertical até o Wolf
            let distance = Math.sqrt(distX * distX + distY * distY); // Distância total até o Wolf
            if(distance < 100){
                // Se a IA estiver muito perto do Wolf, ela foge
              function getNewDistance(newPosX, newPosY) {
                let newDistX = newPosX - wolf.posx;
                let newDistY = newPosY - wolf.posy;
                return Math.sqrt(newDistX * newDistX + newDistY * newDistY);
              }
              
              // Se o movimento para cima aumentar a distância, mova
              if (getNewDistance(IA1Player.posx, IA1Player.posy - IA1Player.speed) > distance) {
                console.log('Movendo para cima, posição Y: ' + IA1Player.posy);
                IA1Player.posy -= IA1Player.speed;
              }
              
              // Se o movimento para baixo aumentar a distância, mova
              if (getNewDistance(IA1Player.posx, IA1Player.posy + IA1Player.speed) > distance) {
                console.log('Movendo para baixo, posição Y: ' + IA1Player.posy);
                IA1Player.posy += IA1Player.speed;
              }
              
              // Se o movimento para direita aumentar a distância, mova
              if (getNewDistance(IA1Player.posx + IA1Player.speed, IA1Player.posy) > distance) {
                console.log('Movendo para direita, posição X: ' + IA1Player.posx);
                IA1Player.posx += IA1Player.speed;
              }
              
              // Se o movimento para esquerda aumentar a distância, mova
              if (getNewDistance(IA1Player.posx - IA1Player.speed, IA1Player.posy) > distance) {
                console.log('Movendo para esquerda, posição X: ' + IA1Player.posx);
                IA1Player.posx -= IA1Player.speed;
              }
              return;
            }
            
        }
          
      }

      if(IA1Player.classe == "Wolf"){
          // Encontrar o player vivo mais próximo
          let nearestPlayer = null;
          let minDistance = Infinity;
          
          Players.forEach(player => {
              if(player.Estado === "Vivo" && player !== IA1Player){ // Não considerar o próprio Wolf
                  let distX = player.posx - IA1Player.posx;
                  let distY = player.posy - IA1Player.posy;
                  let distance = Math.sqrt(distX * distX + distY * distY);
                  
                  if(distance < minDistance){
                      minDistance = distance;
                      nearestPlayer = player;
                  }
              }
          });

          if(Decio_Morte3 == false && shouldKill3 == false){
            shouldKill3 = Math.random() > 0.5; // 50% de chance de atacar
            Decio_Morte3 = true;
            
            
          }else{
            setTimeout(() =>{
              Decio_Morte3 =false;
            }, 30000);
          }
          if(shouldKill3 == true){
            IA1Player.img = Wolf_img;
          }else if(shouldKill3 == false){
            IA1Player.img = Player_img;
          }
          
          if(nearestPlayer){
              // Decidir se vai matar o player
              
              
              
              if(shouldKill3){
                  
                  // Se decidir atacar e estiver próximo o suficiente
                  if(minDistance < 20){ // A distância de 20 é um exemplo, ajuste conforme necessário
                    
                      
                      
                    
                      nearestPlayer.Estado = "Morto"; // Muda o estado do jogador para morto

                      WolfRop3 = false
                      WolfAttackIA(IA1Player);
                      console.log( 'Matou Player')
                        
                      Decio_Morte3 = true;
                      
                      shouldKill3 = false;
                  } else {
                      // Perseguir o jogador mais próximo
                      if(nearestPlayer.posx > IA1Player.posx){
                          IA1Player.posx += IA1Player.speed;
                      } else if(nearestPlayer.posx < IA1Player.posx){
                          IA1Player.posx -= IA1Player.speed;
                      }
                      
                      if(nearestPlayer.posy > IA1Player.posy){
                          IA1Player.posy += IA1Player.speed;
                      } else if(nearestPlayer.posy < IA1Player.posy){
                          IA1Player.posy -= IA1Player.speed;
                      }
                  }
                  return;
              } }
                
            }

      //Movimento Aleatorio
      let movimento = ["Cima", "Baixo", "Direita","Esquerda"];
      let MoveIndex = null;
      

    
        if (i2 === 100) {
          MoveIndex = Math.floor(Math.random() * movimento.length);
          MoveDire3= movimento[MoveIndex];
          
          i2 = 0;
        } else {
          i2++; 
        }
        
      //MOver a IA
      
      if(MoveDire3 == "Cima"){
       
        IA1Player.posy -= IA1Player.speed;
          
      }
      if(MoveDire3 == "Baixo"){
        
        IA1Player.posy  += IA1Player.speed;
        
        
      }
      if(MoveDire3 == "Direita"){
        
        IA1Player.posx += IA1Player.speed;
        
        
      }
      if(MoveDire3 == "Esquerda"){
        
        IA1Player.posx -= IA1Player.speed;
        
        
      }


    

  
}

//IA4 ###############################
let i4 = 100;
let MoveDire4 = null;
let Decio_Morte4 = false;
let shouldKill4= false;
let WolfRop4= true;

function moveAI4() {
  IA1Player = Players[4];
  
    if(Players[4].Estado != "Vivo"){return};
      //fugir do wolf
      if(IA1Player.classe != "Wolf"){
        const wolf = Players.find(p => p.classe === "Wolf");
      
        
        // Cálculo da direção de fuga
          if(WolfAtivou){
            let distX = IA1Player.posx - wolf.posx; // Distância horizontal até o Wolf
            let distY = IA1Player.posy - wolf.posy; // Distância vertical até o Wolf
            let distance = Math.sqrt(distX * distX + distY * distY); // Distância total até o Wolf
            if(distance < 100){
                // Se a IA estiver muito perto do Wolf, ela foge
              function getNewDistance(newPosX, newPosY) {
                let newDistX = newPosX - wolf.posx;
                let newDistY = newPosY - wolf.posy;
                return Math.sqrt(newDistX * newDistX + newDistY * newDistY);
              }
              
              // Se o movimento para cima aumentar a distância, mova
              if (getNewDistance(IA1Player.posx, IA1Player.posy - IA1Player.speed) > distance) {
                console.log('Movendo para cima, posição Y: ' + IA1Player.posy);
                IA1Player.posy -= IA1Player.speed;
              }
              
              // Se o movimento para baixo aumentar a distância, mova
              if (getNewDistance(IA1Player.posx, IA1Player.posy + IA1Player.speed) > distance) {
                console.log('Movendo para baixo, posição Y: ' + IA1Player.posy);
                IA1Player.posy += IA1Player.speed;
              }
              
              // Se o movimento para direita aumentar a distância, mova
              if (getNewDistance(IA1Player.posx + IA1Player.speed, IA1Player.posy) > distance) {
                console.log('Movendo para direita, posição X: ' + IA1Player.posx);
                IA1Player.posx += IA1Player.speed;
              }
              
              // Se o movimento para esquerda aumentar a distância, mova
              if (getNewDistance(IA1Player.posx - IA1Player.speed, IA1Player.posy) > distance) {
                console.log('Movendo para esquerda, posição X: ' + IA1Player.posx);
                IA1Player.posx -= IA1Player.speed;
              }
              return;
            }
            
        }
          
      }

      if(IA1Player.classe == "Wolf"){
          // Encontrar o player vivo mais próximo
          let nearestPlayer = null;
          let minDistance = Infinity;
          
          Players.forEach(player => {
              if(player.Estado === "Vivo" && player !== IA1Player){ // Não considerar o próprio Wolf
                  let distX = player.posx - IA1Player.posx;
                  let distY = player.posy - IA1Player.posy;
                  let distance = Math.sqrt(distX * distX + distY * distY);
                  
                  if(distance < minDistance){
                      minDistance = distance;
                      nearestPlayer = player;
                  }
              }
          });

          if(Decio_Morte4 == false && shouldKill4 == false){
            shouldKill4 = Math.random() > 0.5; // 50% de chance de atacar
            Decio_Morte4 = true;
            
            
          }else{
            setTimeout(() =>{
              Decio_Morte4 =false;
            }, 30000);
          }
          if(shouldKill4 == true){
            IA1Player.img = Wolf_img;
          }else if(shouldKill4 == false){
            IA1Player.img = Player_img;
          }
          
          if(nearestPlayer){
              // Decidir se vai matar o player
              
              
              
              if(shouldKill4){
                  
                  // Se decidir atacar e estiver próximo o suficiente
                  if(minDistance < 20){ // A distância de 20 é um exemplo, ajuste conforme necessário
                    
                      
                      
                    
                      nearestPlayer.Estado = "Morto"; // Muda o estado do jogador para morto

                      WolfRop4 = false
                      WolfAttackIA(IA1Player);
                      console.log( 'Matou Player')
                        
                      Decio_Morte4 = true;
                      
                      shouldKill4 = false;
                  } else {
                      // Perseguir o jogador mais próximo
                      if(nearestPlayer.posx > IA1Player.posx){
                          IA1Player.posx += IA1Player.speed;
                      } else if(nearestPlayer.posx < IA1Player.posx){
                          IA1Player.posx -= IA1Player.speed;
                      }
                      
                      if(nearestPlayer.posy > IA1Player.posy){
                          IA1Player.posy += IA1Player.speed;
                      } else if(nearestPlayer.posy < IA1Player.posy){
                          IA1Player.posy -= IA1Player.speed;
                      }
                  }
                  return;
              } }
                
            }

      //Movimento Aleatorio
      let movimento = ["Cima", "Baixo", "Direita","Esquerda"];
      let MoveIndex = null;
      

    
        if (i2 === 100) {
          MoveIndex = Math.floor(Math.random() * movimento.length);
          MoveDire4 = movimento[MoveIndex];
          
          i2 = 0;
        } else {
          i2++; 
        }
        
      //MOver a IA
      
      if(MoveDire4 == "Cima"){
       
        IA1Player.posy -= IA1Player.speed;
          
      }
      if(MoveDire4 == "Baixo"){
        
        IA1Player.posy  += IA1Player.speed;
        
        
      }
      if(MoveDire4 == "Direita"){
        
        IA1Player.posx += IA1Player.speed;
        
        
      }
      if(MoveDire4 == "Esquerda"){
        
        IA1Player.posx -= IA1Player.speed;
        
        
      }


    

  
}



/* Players.forEach((player, index) => {
      if (index === 0) return; // Ignora o jogador controlado pelo usuário

      if (player.Estado === "Vivo") {
          if (player.classe === "Villager") {
              // Se for um Villager, pode fugir de um Wolf se estiver próximo
              const wolf = Players.find(p => p.classe === "Wolf");
              if (color_bord == "black") {
                console.log('lobo corre')
                  const distX = player.posx - wolf.posx;
                  const distY = player.posy - wolf.posy;
                  const distance = Math.sqrt(distX * distX + distY * distY);

                  if (distance < 100) { // Distância para começar a fugir
                      player.posx += distX * 0.1; // Movimento para longe do Wolf
                      player.posy += distY * 0.1;
                  }
              } else {
                  // Movimentação aleatória
                  
              }
          } else if (player.classe === "Wolf") {
              // Wolf tenta se aproximar do Hunter
              const hunter = Players.find(p => p.classe === "Hunter");
              if (hunter) {
                  const distX = hunter.posx - player.posx;
                  const distY = hunter.posy - player.posy;
                  const distance = Math.sqrt(distX * distX + distY * distY);

                  if (distance < 50) { // Distância para atacar
                      player.Attack();
                  } else {
                      player.posx += (distX / distance) * player.speed; // Move na direção do Hunter
                      player.posy += (distY / distance) * player.speed;
                  }
              }
          }
          player.posx += (Math.random() - 0.5) * player.speed;
          player.posy += (Math.random() - 0.5) * player.speed;
      }
  }); */



//Limites do Map ############################
function checkBoundaries() {
  Players.forEach((player, index) => {
    if (player.posy < 0) player.posy = 0;

  // Impede o jogador de passar do limite inferior
    if (player.posy + 64 > 2000) player.posy = 2000 - 64;

  // Impede o jogador de passar do limite esquerdo
    if (player.posx < 0) player.posx = 0;

  // Impede o jogador de passar do limite direito
    if (player.posx + 64 > 3000) player.posx = 3000 - 64;
    });
  // Impede o jogador de passar do limite superior
  
}

//wOLF IA
let WolfI= true;
function WolfAttackIA(E){
  if(WolfI){
    E.img = Wolf_img;
    E.speed = 3.6;
    WolfI = false;
  }else if(WolfI == false){
    E.img = Player_img;
    E.speed = 3;
    WolfI = true;
  }
}






//Mapa 



function LoadMap(){
  //Ilha
  const MapData = {
    "width": 1000,
    "height": 1000,
    "tileSize": 64,
    "layers": [
      {
        "name": "Chao",
        "data": [
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

        ]
      },
      {
        "name": "Objetos",
        "data": [
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

        ]
      }
  
    ],
    "tilesets": [
      {
        "name": "terrain",
        "image": "terrain.png",
        "tileSize": 64
      }
    ]
  } 


  //########################### PROCESAR MAP ###########################################

  //Tile 1 = EsqTerra(quina); 2 = MidTerra; 3 = DireTerra(QUina da direita) 4 = CenterTerra(só terra)
  class Tile{
    constructor(img,posx,posy,width,height,visible){
        this.img = img,
        this.posx = posx,
        this.posy = posy,
        this.width = width,
        this.height = height,
        this.visible = visible
    }
  
  }
  /////////

  MapData.layers.forEach((layer)=>{

    if(layer.name == "Chao"){
      layer.data.forEach((rowi,rowIndex )=>{
        rowi.forEach((tile, colIndex) => {
            if(tile == 0){
              const posx = colIndex * MapData.tileSize;
              const posy = rowIndex * MapData.tileSize;
              let tile_back = new Tile(water_img,posx,posy,64,64,true);
              Backgrounds.push(tile_back);
            }
        });
      });
    };

    if(layer.name == "Chao"){
      layer.data.forEach((rowi,rowIndex )=>{
        rowi.forEach((tile, colIndex) => {
            if(tile == 1){
              const posx = colIndex * MapData.tileSize;
              const posy = rowIndex * MapData.tileSize;
              let tile_back = new Tile(EsqTerra,posx,posy,64,64,true);
              Backgrounds.push(tile_back);
            }
            if(tile == 2){
              const posx = colIndex * MapData.tileSize;
              const posy = rowIndex * MapData.tileSize;
              let tile_back = new Tile(MidTerra,posx,posy,64,64,true);
              Backgrounds.push(tile_back);
            }
            if(tile == 3){
              const posx = colIndex * MapData.tileSize;
              const posy = rowIndex * MapData.tileSize;
              let tile_back = new Tile(DireTerra,posx,posy,64,64,true);
              Backgrounds.push(tile_back);
            }
            if(tile == 4){
              const posx = colIndex * MapData.tileSize;
              const posy = rowIndex * MapData.tileSize;
              let tile_back = new Tile(CenterTerra,posx,posy,64,64,true);
              Backgrounds.push(tile_back);
            }
            if(tile == 5){
              const posx = colIndex * MapData.tileSize;
              const posy = rowIndex * MapData.tileSize;
              let tile_back = new Tile(MidEsq,posx,posy,64,64,true);
              Backgrounds.push(tile_back);
            }
            if(tile == 6){
              const posx = colIndex * MapData.tileSize;
              const posy = rowIndex * MapData.tileSize;
              let tile_back = new Tile(MidDire,posx,posy,64,64,true);
              Backgrounds.push(tile_back);
            }
        });
      });
    }
    //Obejtos
    if(layer.name == "Objetos"){
      layer.data.forEach((rowi,rowIndex )=>{
        rowi.forEach((tile, colIndex) => {
            if(tile == 1){
              const posx = colIndex * MapData.tileSize;
              const posy = rowIndex * MapData.tileSize;
              let tile_back = new Tile(madeira,posx,posy,64,64,true);
              Backgrounds.push(tile_back);
            }
           
        });
      });
    }
    
  });

}

MapSecond.layers.forEach((layer)=>{

  if(layer.name == "Chao"){
    layer.data.forEach((rowi,rowIndex )=>{
      rowi.forEach((tile, colIndex) => {
          if(tile == 0){
            const posx = colIndex * MapData.tileSize;
            const posy = rowIndex * MapData.tileSize;
            let tile_back = new Tile(water_img,posx,posy,64,64,true);
            Backgrounds.push(tile_back);
          }
      });
    });
  };

  if(layer.name == "Chao"){
    layer.data.forEach((rowi,rowIndex )=>{
      rowi.forEach((tile, colIndex) => {
          if(tile == 1){
            const posx = colIndex * MapData.tileSize;
            const posy = rowIndex * MapData.tileSize;
            let tile_back = new Tile(EsqTerra,posx,posy,64,64,true);
            Backgrounds.push(tile_back);
          }
          if(tile == 2){
            const posx = colIndex * MapData.tileSize;
            const posy = rowIndex * MapData.tileSize;
            let tile_back = new Tile(MidTerra,posx,posy,64,64,true);
            Backgrounds.push(tile_back);
          }
          if(tile == 3){
            const posx = colIndex * MapData.tileSize;
            const posy = rowIndex * MapData.tileSize;
            let tile_back = new Tile(DireTerra,posx,posy,64,64,true);
            Backgrounds.push(tile_back);
          }
          if(tile == 4){
            const posx = colIndex * MapData.tileSize;
            const posy = rowIndex * MapData.tileSize;
            let tile_back = new Tile(CenterTerra,posx,posy,64,64,true);
            Backgrounds.push(tile_back);
          }
          if(tile == 5){
            const posx = colIndex * MapData.tileSize;
            const posy = rowIndex * MapData.tileSize;
            let tile_back = new Tile(MidEsq,posx,posy,64,64,true);
            Backgrounds.push(tile_back);
          }
          if(tile == 6){
            const posx = colIndex * MapData.tileSize;
            const posy = rowIndex * MapData.tileSize;
            let tile_back = new Tile(MidDire,posx,posy,64,64,true);
            Backgrounds.push(tile_back);
          }
      });
    });
  }
  
});

// DINHEIRO MONEY COOKIE
function setMoneyPlayer(value) {
  // Obtém o valor atual e soma o novo valor
  let getMone = Number(getMoneyPlayer());
  let money = getMone + value;
  console.log(money);
  
  if(money == 0){
    return
  }
  localStorage.removeItem("coin");
  localStorage.setItem("coin", money);
  Money_Player = money
  Textos[0].texto = money;
}

function getMoneyPlayer() {
  console.log('getMoney:')
  const cat = localStorage.getItem("coin");
  console.log('catGetmoney  : '+cat)
  if(cat == null){
    return 0
  }
  else{
    return cat
  }
 
}


//ANIMAÇÃO DO PERSONAGENS
let moveImg = 1;
function moveWolf(dire, player){

  if(dire = 'direita'){
    setInterval(() => {
      
    }, 1000);
  }
}