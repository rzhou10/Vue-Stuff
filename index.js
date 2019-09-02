var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!'
    }
});

app.message = 'Nah fam, this is the new text.';

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: `You loaded this page on ${new Date().toLocaleString()}`
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{ text: 'Learn JS' }, { text: 'Learn Vue' }, { text: 'Make something' }]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Learn Vue.js!'
    },
    methods: {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue.js!'
    }
});

Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: [ 'todo' ],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
});

var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello!'
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('');
        }
    }
});

var objectSyntax = new Vue({
    data: {
        isActive: true,
        error: null
      },
      computed: {
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        }
      }
});

Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
});

var cleanTemplate = new Vue({
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
});

var example1 = new Vue({
    el: '#example-1',
    data: {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
});

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
        { message: 'Foo' },
        { message: 'Bar' }
        ]
    }
});

var forObject = new Vue({
    el: '#v-for-object',
    data: {
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
});

// doesn't allow dynamically adding new root-level reactive properties to already created instance
// can add new reactive properties to nested object:
var vm0 = new Vue({
    data: {
      userProfile: {
        name: 'Anika'
      }
    }
});

Vue.set(vm.userProfile, 'age', 27);

// use Object.assign() or _.extend() to assign number of new properties to existing object
vm.userProfile = Object.assign({}, vm.userProfile, {
    age: 27,
    favoriteColor: 'Vue Green'
  });

var useMethod = new Vue({
    data: {
        numbers: [ 1, 2, 3, 4, 5 ]
    },
      methods: {
        even: function (numbers) {
          return numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
    }
});

Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
  });
  
new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
        {
            id: 1,
            title: 'Do the dishes',
        },
        {
            id: 2,
            title: 'Take out the trash',
        },
        {
            id: 3,
            title: 'Mow the lawn'
        }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
        this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
        })
        this.newTodoText = ''
        }
    }
});

var example4 = new Vue({
  el: '#example-4',
  data: {
    counter: 0
  }
});
var example5 = new Vue({
  el: '#example-5',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!');
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
});

// you can invoke methods in JavaScript too
example5.greet(); // => 'Hello Vue.js!'

new Vue({
  el: '#example-6',
  methods: {
    say: function (message) {
      alert(message);
    }
  }
});

// this is for the HTML on 306
new Vue({
  el: '',
  methods: {
    warn: function (message, event) {
      // now we have access to the native event
      if (event) event.preventDefault()
      alert(message);
    }
  }
});

new Vue({
  el: '#example-check',
  data: {
    checkedNames: []
  }
});

new Vue({
  el: 'select-statement',
  data: {
    selected: ''
  }
});

new Vue({
  el: 'dynamicOptions',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
});