import { onMount } from 'svelte';
import { writable } from 'svelte/store';

const VERSION = "0.0.0";

const getFromLocalStorage = (name, defaultValue) => {
  const rawCell = window.localStorage.getItem(name);

  if (!rawCell) return defaultValue;

  const cell = JSON.parse(rawCell);

  if (cell.version !== VERSION) return defaultValue;

  return cell.value ?? defaultValue;
}

const setToLocalStorage = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify({
    value,
    version: VERSION,
  }))
}

export function localStorageWriteable(
  name,
  defaultValue,
  debounceDelay = 1000
) {

  let timer = null;

  const value = writable(defaultValue);

  onMount(() => {
    value.set(getFromLocalStorage(name, defaultValue))

    value.subscribe((value) => {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        setToLocalStorage(name, value);
      }, debounceDelay)
    })
  });

  return value;
}
