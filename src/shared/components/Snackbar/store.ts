import { makeObservable, observable, action } from "mobx";
import { Color } from '@material-ui/lab/Alert';

const DEFAULT_COLOR = 'success';

export class SnackbarStore {
  // Показывать ли уведомление
  open: boolean = false;
  // Текст уведомления
  text: string = '';
  // Цвет уведомления
  color: Color = DEFAULT_COLOR;

  constructor() {
    makeObservable(this, {
      open: observable,
      text: observable,
      color: observable,
      show: action,
      hide: action,
    });
  }

  // Показывает плашку с уведомлением
  show(text: string, color?: Color) {
    this.open = true;
    this.text = text;
    this.color = color || DEFAULT_COLOR;
  }

  // Скрывает плашку с уведомлением
  hide() {
    this.open = false;
  }
}

export default new SnackbarStore();
