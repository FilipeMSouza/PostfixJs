import { Regras } from "./regras";

export class Automato extends Regras{
  private alfabeto!: string[];
  private estado!: number;
  private qtdEstado!: number;
  private transicao!: Regras;
  private inicial!: number;
  private final!: number;
  private qtdFinal!: number;
}