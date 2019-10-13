Vue.component('cabezera', {
  props: ['title'],
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="index.html">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="example2.html">Animes-card <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="grid.html">Grid-Pokémon <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>`
})

var app = new Vue({
  el: '#app',
  data: {
    images: [{
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/detective-pikachu-trailer-1548489854.jpg?crop=1xw:1xh;center,top&resize=480:*',
        description: 'Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga.'
      },
      {
        img: 'https://pm1.narvii.com/6112/edfb3f0b1a57a21e4d75b3cf056de890b5947b3c_hq.jpg',
        description: 'A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.'
      },
      {
        img: 'https://i.guim.co.uk/img/media/c433a7fddb05056b8b345ce74e4116df18898735/0_269_1381_829/master/1381.jpg?width=300&quality=85&auto=format&fit=max&s=ecbcd4f87fd52eb4450dc418e19a3932',
        description: ''
      },
      {
        img: 'https://i.blogs.es/7b7641/chimchar/450_1000.png',
        description: ''
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4tDlpPuG-QuM5YlKd_5O7GJSNdQPmKaw8uPlD88sd9Z3lgLd',
        description: ''
      },
      {
        img: 'https://cde.laprensa.e3.pe/ima/0/0/1/4/1/141453.jpg',
        description: ''
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0D7UQCG9NfxM8Z7aSCdJgqbntzSSx8n_yvCEK35jJ1sxInRo',
        description: ''
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRashC1seZtXWquQoIlUEV1JUbyVX5_Ba3CqnQd5MmwaSkf18dS'
      }
    ]
  }
})