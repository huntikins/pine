import { PineOptions } from "./pine.interface";

export default class Pine {
  private readonly src: string;
  private readonly options?: PineOptions | {};

  constructor(src: string, options?: PineOptions) {
    this.src = src;
    this.options = options ?? {};

    console.log("Hello World");
  }
}
