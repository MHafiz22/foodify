class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        .search-box {
        height: 55px;
        margin: 25px 0;
        position: relative;
        display: flex;
        align-items: center;
        }

        .search-box input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        font-size: 1.1rem;
        padding-left: 55px;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        }

        .search-box > input::placeholder {
        color: var(--main-color);
        font-weight: normal;
        }

        .search-box button {
        height: 100%;
        background-color: var(--main-color);
        color: #fff;
        font-size: 1.1rem;
        padding: 10px 20px;
        border: none;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        cursor: pointer;
        }

        .search-box button:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        transform: translateY(-2px);
        }

        @media only screen and (max-width: 768px) {
          .search-box {
          height: 50px;
          margin: 30px 0;
          }
        }
        </style>
        <div id="search-box" class="search-box">
            <input type="search" id="searchElement" placeholder="Cari Makanan" />
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
    `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
