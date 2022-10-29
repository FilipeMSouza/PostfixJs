export class Regras{
  private n_estado!: number[];
  private simbolo!: string[];
  private movimento!: number[];
  private cont!: number;

  public setFuncaoTransicao(q1: number, a1: string, p1: number){
    this.n_estado[this.cont] = q1;
    this.movimento[this.cont] = p1;
    this.simbolo[this.cont] = a1;
    this.cont++;
  };
  public getFuncaoTransicao(q1: number, a1: string, flag: number){
    let ret: number[] | null = [];
    let temp: number = 0;

    for(var i = 0; i < this.cont; i++){
      if(this.n_estado[i] ==q1 && this.simbolo[i] == a1){
        ret[temp]=this.movimento[i];
      }
    }
    if(flag == 1){
      var aux = temp
      return aux
    }
    return ret
  };
  
  get getcount(){
    return this.cont
  }
}

