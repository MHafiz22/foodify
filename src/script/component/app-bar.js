class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = ` 
    <style>
      * {
        margin: 0;
        box-sizing: border-box;
      }

      :host {
        display: block;
        padding: 16px;
        width: 100%;
        background-color: transparent;
      }

      h1 {
        margin-left: 10rem;
        color: var(--main-color);
        font-family: "Baloo 2", sans-serif;
        padding: 8px;
      }

      @media only screen and (max-width: 992px) {
        h1 {
          text-align: center;
          margin-left: 0;
        }
      }
      </style> 
      
      <h1>Foodify.</h1>
    `;
  }
}

customElements.define("app-bar", AppBar);
