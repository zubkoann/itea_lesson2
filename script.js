document.addEventListener('DOMContentLoaded', () => {


  const Feed = [];

  class Post {
    constructor({company, greeting}) {//деструктуризация
      this.id = Math.random() * 10000;
      this.title = company;
      this.text = greeting;
      this.like = 0;
      this.dislike = 0;

      this.addLike = this.addLike.bind(this);// при любом візове метода он всегда должен ссілаться на контекст того обьекта вккотором он обявлен
      this.addDisLike = this.addDisLike.bind(this);// при любом візове метода он всегда должен ссілаться на контекст того обьекта вккотором он обявлен

      Feed.push(this)
    }
    addDisLike() {
      this.dislike++;
      this.render();
    }


    addLike() {
      this.like++;
      this.render();
      // let node = document.querySelector(`.node[data-id="${this.id}"]>button`)
      // node.innerText = `Like! (${this.like})`;
    }

    render() {
      const nodeInDom = document.querySelector(`.node[data-id="${this.id}"]`);
      const target = document.getElementById('target');
      let node;
      if (nodeInDom) {
        node = nodeInDom;
        // let old_btn = document.querySelector('.like_btn');
        // old_btn.removeEventListener('click', this.addLike);//удаляем обработчик чтобі не біло утечки памяти если используем addeventlistener , если использовать onclick то єтого делать не нужно
      } else {
        node = document.createElement('div');
      }

      node.innerHTML = `
      <div class="node" data-id="${this.id}">
      <h2>${this.title}</h2>
      <p>${this.text}</p>
      <button class="like_btn">LIKE! ${this.like}</button>
      <button class="dislike_btn">DISLIKE! ${this.dislike}</button>
      </div>
      `;

      if (!nodeInDom) target.appendChild(node);

      let like_btn = node.querySelector('.like_btn');
      let dislike_btn = node.querySelector('.dislike_btn');
      // like_btn.addEventListener('click', this.addLike)
      like_btn.onclick = this.addLike; // при таком использовании удалять обработчик не нужно
      dislike_btn.onclick = this.addDisLike; // при таком использовании удалять обработчик не нужно
    }
  }

  class Advertisment extends Post {
    constructor(title, text) {
      super(title, text);
    }
    addDisLike() {
      this.like++;
      this.render();
    }

    render() {
      const nodeInDom = document.querySelector(`.node[data-id="${this.id}"]`);
      const target = document.getElementById('target');
      let node;
      if (nodeInDom) {
        node = nodeInDom;
        // let old_btn = document.querySelector('.like_btn');
        // old_btn.removeEventListener('click', this.addLike);//удаляем обработчик чтобі не біло утечки памяти если используем addeventlistener , если использовать onclick то єтого делать не нужно
      } else {
        node = document.createElement('div');
      }
      node.innerHTML = `
      <div class="node" data-id="${this.id}">
      <h1> I'm advertisement</h1>
      <button class="like_btn">LIKE! ${this.like}</button>
      <button class="dislike_btn">DISLIKE! ${this.dislike}</button>
      </div>
`;
      let like_btn = node.querySelector('.like_btn');
      like_btn.onclick = this.addLike; // при таком использовании удалять обработчик не нужно

      let dislike_btn = node.querySelector('.dislike_btn');
      dislike_btn.onclick = this.addDisLike; // при таком использовании удалять обработчик не нужно


      if (!nodeInDom) target.appendChild(node);
    }
  }

  new Post('Hello', 'Hello word');
  new Post('Foo', 'Woogoo')
  new Advertisment('Advertisment', '123')

  console.log('FEED', Feed)

  

  //Feed.map(item => item.render())

  fetch('http://www.json-generator.com/api/json/get/bTETZdLygi?indent=2')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data.map(item => new Post(item).render())
      })



})
