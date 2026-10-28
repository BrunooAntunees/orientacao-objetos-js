class DispositivoInteligente {
    constructor(nome, comodo) {
        if (this.constructor === DispositivoInteligente) {
            throw new Error("Esta é uma classe abstrata e não pode ser instanciada diretamente.");
        }
        this.nome = nome;
        this.comodo = comodo;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        return `${this.nome} do(a) ${this.comodo} foi ligado(a).`;
    }

    desligar() {
        this.ligado = false;
        return `${this.nome} do(a) ${this.comodo} foi desligado(a).`;
    }
}

class LampadaInteligente extends DispositivoInteligente {
    constructor(nome, comodo, corLuz, brilho) {
        super(nome, comodo);
        this.corLuz = corLuz;
        this.brilho = brilho;
    }

    ajustarBrilho(novoBrilho) {
        this.brilho = novoBrilho;
        return `O brilho da ${this.nome} foi ajustado para ${this.brilho}%.`;
    }
}

class Termostato extends DispositivoInteligente {
    constructor(nome, comodo, temperaturaAlvo) {
        super(nome, comodo);
        this.temperaturaAlvo = temperaturaAlvo;
    }

    ajustarTemperatura(novaTemperatura) {
        this.temperaturaAlvo = novaTemperatura;
        return `A temperatura do ${this.nome} foi definida para ${this.temperaturaAlvo}°C.`;
    }
}

const lampadaSala = new LampadaInteligente('Lâmpada RGB', 'Sala de Estar', 'Branco Frio', 75);
const lampadaQuarto = new LampadaInteligente('Lâmpada de Leitura', 'Quarto', 'Amarelo Suave', 40);
const termostatoEscritorio = new Termostato('Ar-Condicionado Central', 'Escritório', 21);

console.log(lampadaSala.ligar());
console.log(lampadaSala.ajustarBrilho(100));

console.log(lampadaQuarto.ligar());

console.log(termostatoEscritorio.ligar());
console.log(termostatoEscritorio.ajustarTemperatura(19));