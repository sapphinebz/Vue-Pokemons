export interface ResponsePaginatePokemon {
  count: number;
  next?: any;
  previous?: any;
  results: PaginatePokemon[];
}

export interface PaginatePokemon {
  name: string;
  url: string;
}
