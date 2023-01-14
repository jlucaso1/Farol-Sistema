class Semaforo {
  // propriedades (variáveis de estado)
  luzAmarela = false;
  luzVerde = false;
  luzVermelha = false;
  farolVermelho;
  farolAmarelo;
  farolVerde;

  constructor(idAmarela, idVermelha, idVerde) {
    this.farolVermelho = document.getElementById(idVermelha);
    this.farolAmarelo = document.getElementById(idAmarela);
    this.farolVerde = document.getElementById(idVerde);
  }

  ligarLuz(luz) {
    // 1 - Verifica se já está ativa/ligada
    // se estiver ele apenas desliga
    switch (luz) {
      case "verde":
        if (this.luzVerde) {
          this.desligarLuz(luz);
          return;
        }

        break;
      case "vermelha":
        if (this.luzVermelha) {
          this.desligarLuz(luz);
          return;
        }
        break;
      case "amarela":
        if (this.luzAmarela) {
          this.desligarLuz(luz);
          return;
        }
        break;
      default:
        console.error("Valor não existe");
        break;
    }

    this.desligarLuzes();

    // Ligar uma luz apenas
    switch (luz) {
      case "verde":
        this.luzVerde = true;
        this.farolVerde.classList.add("cor-verde");
        break;
      case "vermelha":
        this.luzVermelha = true;
        this.farolVermelho.classList.add("cor-vermelha");
        break;
      case "amarela":
        this.luzAmarela = true;
        this.farolAmarelo.classList.add("cor-amarela");
        break;
      default:
        console.error("Valor não existe");
        break;
    }
  }

  desligarLuz(luz) {
    switch (luz) {
      case "verde":
        this.farolVerde.classList.remove("cor-verde");
        this.luzVerde = false;

        break;
      case "vermelha":
        this.farolVermelho.classList.remove("cor-vermelha");
        this.luzVermelha = false;
        break;
      case "amarela":
        this.farolAmarelo.classList.remove("cor-amarela");
        this.luzAmarela = false;
        break;
      default:
        console.error("Valor não existe");
        break;
    }
  }

  desligarLuzes() {
    this.luzVerde = false;
    this.luzVermelha = false;
    this.luzAmarela = false;
    this.farolAmarelo.classList.remove("cor-amarela");
    this.farolVermelho.classList.remove("cor-vermelha");
    this.farolVerde.classList.remove("cor-verde");
  }

  iniciarSemaforo() {
    this.ligarLuz("verde");
    setTimeout(() => {
      this.ligarLuz("amarela");

      setTimeout(() => {
        this.ligarLuz("vermelha");
        setTimeout(() => {
          this.iniciarSemaforo();
        }, 2000);
      }, 2000);
    }, 2000);
  }
}

// Exemplo teste

const semaforo1 = new Semaforo("farolAmarelo", "farolVermelho", "farolVerde");
const semaforo2 = new Semaforo(
  "farolAmarelo2",
  "farolVermelho2",
  "farolVerde2"
);

semaforo1.iniciarSemaforo();

setTimeout(() => {
  semaforo2.iniciarSemaforo();
}, 2000);
