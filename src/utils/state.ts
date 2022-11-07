export class State {
  

  constructor(
    public  index: number,
    public  isInitial: boolean,
    public  isFinal: boolean
  ){
    this.index = index;
    this.isInitial = isInitial;
    this.isFinal = isFinal
  }

}