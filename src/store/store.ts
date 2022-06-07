import { reactive, watchEffect } from "vue";
import { ajax } from "rxjs/ajax";

export interface AppState {
  limit: number;
  offset: number;
  count: number;
  currentPage: number;
  totalPage: number;
  pokemons: any[];
}

const initState: AppState = {
  count: 0,
  limit: 10,
  offset: 0,
  currentPage: 0,
  totalPage: 0,
  pokemons: [],
};

export const store = reactive<AppState>(initState);

// effect
watchEffect((onCleanup) => {
  const subscription = ajax
    .getJSON<any>(
      `https://pokeapi.co/api/v2/pokemon?limit=${store.limit}&offset=${store.offset}`
    )
    .subscribe((response) => {
      store.pokemons = response.results;
      store.count = response.count;
    });

  onCleanup(() => subscription.unsubscribe());
});

//currentPageEffect
watchEffect(() => {
  store.currentPage = (store.offset + store.limit) / store.limit;
});

//totalPageEffect
watchEffect(() => {
  store.totalPage = Math.ceil(store.count / store.limit);
});

// action
export const nextPage = () => {
  store.offset += store.limit;
};

export const prevPage = () => {
  if (store.offset - store.limit >= 0) {
    store.offset -= store.limit;
  }
};
