class ItemCardapio {
    nome= ''
    preco = 0

    preparar() {
        throw new Error("Método da subClasse");
    }
}
class PratoPrincipal extends ItemCardapio {

    nome= ''
    preco = 0

    setNome(nome) { 
        this.nome = nome;
    }

    setPreco(preco) {
        this.preco = preco;
    }

    preparar() {
        console.log(`Preparando prato principal`);
    }
}

class Sobremesa extends ItemCardapio {
    
    nome= ''
    preco = 0
    
    setNome(nome) { 
        this.nome = nome;
    }

    setPreco(preco) {
        this.preco = preco;
    }
    preparar() {
        console.log(`Preparando sobremesa `);
    }
}

class Bebida extends ItemCardapio {
    
    nome= ''
    preco = 0
    
    setNome(nome) { 
        this.nome = nome;
    }

    setPreco(preco) {
        this.preco = preco;
    }
    preparar() {
        console.log(`Servindo bebida`);
    }
}


class CriadorDeItem extends ItemCardapio{
    nome= ''
    preco = 0
    
     criarItem(){
        throw new Error("Método da subclasse");
     }

}
class CriadorPratoPrincipal extends CriadorDeItem{
    criarItem(){    
        return new PratoPrincipal();
    }
}

class CriadorSobremesa extends CriadorDeItem{
    criarItem(){    
        return new Sobremesa();
    }
}

class CriadorBebida extends CriadorDeItem{
    criarItem(){    
        return new Bebida();
    }
}


class Pedido {


       itemCardapio = [];


    adicionarItem(item) {
        this.itemCardapio.push(item);
    }

    resumirPedido() {
        const resumoPedidos = this.itemCardapio.map((item) => ({
            nome: item.nome,
            preco: item.preco,
           preparo: item.preparar()
        }));

        console.log(resumoPedidos);
        
    }
}

const pedido = new Pedido();


//Prato Principal
const criadorPratoPrincipal = new CriadorPratoPrincipal(); 
const pratoPrincipal = criadorPratoPrincipal.criarItem();
pratoPrincipal.setNome("Feijoada");
pratoPrincipal.setPreco(15);
pedido.adicionarItem(pratoPrincipal);



//Sobremesa
const criadorSobremesa = new CriadorSobremesa();
const sobremesa = criadorSobremesa.criarItem();
sobremesa.setNome("Brigadeiro");
sobremesa.setPreco(5);
pedido.adicionarItem(sobremesa);



//Bebida
const criadorBebida = new CriadorBebida();  
const bebida = criadorBebida.criarItem();
bebida.setNome("Coca-Cola");
bebida.setPreco(5);
pedido.adicionarItem(bebida);


// Resumindo o pedido
pedido.resumirPedido();