import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes:[ 
      {
        slug:'Rice',
        title:'how to make fried rice',
        description:'a delicious meal that people loves to eat at party',
        ingredients:[
          '1 teaspoon of salt',
          '4 cups of rice',
          '4 cubes of maggi',
          'roasted fish and saucy meat'
        ],
        method:['pour vegetable oil with meshed pepper and meat after the rice has been per boiled,leave it heated for 20 minutes and stirred together',
                   'pour vegetable oil with meshed pepper and meat after the rice has been']
      },
      {
        slug:'semo',
        title:' semo and egusi soup',
        description:'a package flour,very rich in vitamin A',
        ingredients:[
          '1 teaspoon of salt',
          '4 cups of rice',
          '4 cubes of maggi',
          'roasted fish and saucy meat'
        ],
        method:['boil the water inside the pot to some certain degree,pour the powder inside and stir it,till it becomes sticky']
      }
    ]
  },
  
  mutations: {
    add_recipe(state,recipe){
      state.recipes.push(recipe)
    }
  },
 
})
