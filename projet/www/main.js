const cardsData = [
  {
    img:'https://placeimg.com/100/140/animals',
    title: 'Title 1',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 9.5,
    stars: 4
  },
  {
    img:'https://placeimg.com/100/140/arch',
    title: 'Title 2',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 8.4,
    stars: 5
  },
  {
    img:'https://placeimg.com/100/140/people',
    title: 'Title 3',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 7.234,
    stars: 2
  },
  {
    img:'https://placeimg.com/100/140/animals',
    title: 'Title 1',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 9.5,
    stars: 4
  },
  {
    img:'https://placeimg.com/100/140/arch',
    title: 'Title 2',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 8.4,
    stars: 5
  },
  {
    img:'https://placeimg.com/100/140/people',
    title: 'Title 3',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 7.234,
    stars: 2
  },
  {
    img:'https://placeimg.com/100/140/animals',
    title: 'Title 1',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 9.5,
    stars: 4
  },
  {
    img:'https://placeimg.com/100/140/arch',
    title: 'Title 2',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 8.4,
    stars: 5
  },
  {
    img:'https://placeimg.com/100/140/people',
    title: 'Title 3',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 7.234,
    stars: 2
  },
  {
    img:'https://placeimg.com/100/140/animals',
    title: 'Title 1',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 9.5,
    stars: 4
  },
  {
    img:'https://placeimg.com/100/140/arch',
    title: 'Title 2',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 8.4,
    stars: 5
  },
  {
    img:'https://placeimg.com/100/140/people',
    title: 'Title 3',
    description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
    rating: 7.234,
    stars: 2
  }
]

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  el: '#app',
  data: {
    cards: cardsData,
    scrollPosition: 0
  },
  filters: {
    oneDecimal: function (value) {
      return value.toFixed(1)
    },
    toStars: function (value) {
      let result = ''
      while(result.length < value) {
        result+='★' 
      }
      return result
    }
  },
  computed: {
    styledCards () {
      return this.cards.map(this.calculateCardStyle)
    }
  },
  methods: {
    onScroll () {
      this.scrollPosition = window.scrollY
    },
    calculateCardStyle (card, index) {
      const cardHeight = 160 // height + padding + margin
      
      const positionY = index * cardHeight
      const deltaY = positionY - this.scrollPosition

      // constrain deltaY between -160 and 0
      const dY = this.clamp(deltaY, -cardHeight, 0)

      const dissapearingValue = (dY / cardHeight) + 1
      const zValue = dY / cardHeight * 50
      const yValue = dY / cardHeight * -20

      card.style = {
        opacity: dissapearingValue,
        transform: `perspective(200px) translate3d(0,${yValue}px, ${zValue}px)`
      }
      return card
    },
    clamp (value, min, max) {
      return Math.min(Math.max(min, value), max)
    }
  }
})
