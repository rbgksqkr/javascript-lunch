import type { IButtonAttributes } from '@/types/dom';

const CLOSE_BUTTON_ATTRIBUTE: IButtonAttributes = {
  id: 'button-close',
  type: 'button',
  classNames: ['button', 'button--secondary', 'text-caption'],
  text: '취소하기',
};
const ADD_BUTTON_ATTRIBUTE: IButtonAttributes = {
  id: 'button-add',
  classNames: ['button', 'button--primary', 'text-caption'],
  text: '추가하기',
};
const MODAL_CLOSE_BUTTON_ATTRIBUTE: IButtonAttributes = {
  id: 'button-modal-close',
  type: 'button',
  classNames: ['button', 'button--primary', 'text-caption'],
  text: '닫기',
};
const MODAL_DELETE_BUTTON_ATTRIBUTE: IButtonAttributes = {
  id: 'button-modal-delete',
  type: 'button',
  classNames: ['button', 'button--secondary', 'text-caption'],
  text: '삭제하기',
};

export { CLOSE_BUTTON_ATTRIBUTE, ADD_BUTTON_ATTRIBUTE, MODAL_CLOSE_BUTTON_ATTRIBUTE, MODAL_DELETE_BUTTON_ATTRIBUTE };
