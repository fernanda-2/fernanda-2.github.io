class Primos extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/
      `Copyright &copy; 2021 González Vargas Laura Fernanda.`;
  }
}
customElements.define("primos", Primos);
