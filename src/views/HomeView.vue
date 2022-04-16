<template>
  <div class="home">
    <h1>My Recipe</h1>
    <button @click="togglePopupOpen">Add new recipe</button>
  
  <div class="recipes">
          <div class="card"  v-for="recipe in $store.state.recipes" :key="recipe.slug">
                <h2> {{recipe.slug}}</h2>
             <p>{{recipe.description}}</p>
               <router-link :to="`/recipe/${recipe.slug}`">
              <button>View recipe</button>
                </router-link>
               <!-- <router-link :to="{name:'recipe',params:{id:recipe.slug}}">
              <button>View recipe</button>
                </router-link> -->
            </div>
  </div>
  
  <div class="add-recipe-popup" v-if="popupOpen">
      <div class="popup-content">
        <h2>Add new recipe</h2>

        <form class="submit" @submit.prevent="addNewRecipe">
          <div class="group">
            <label>Title</label>
            <input type="text" v-model="newRecipe.title"/>
          </div>

           <div class="group">
            <label>Description</label>
            <textarea v-model="newRecipe.description"></textarea>
            </div>

             <div class="group">
            <label>Ingredients</label>
            <div class="ingredient" v-for="i in newRecipe.ingredientRows" :key="i">
                 
              <input type="text" v-model="newRecipe.ingredients[i-1]"/>
            </div>
            <button type="button" @click="addNewIngredient">Add Ingredient</button>
          </div>

           <div class="group">
            <label>Method</label>
            <div class="method" v-for="i in newRecipe.methodRows" :key="i">
          
              <textarea v-model="newRecipe.method[i-1]"></textarea>
            </div>
            <button type="button" @click="addNewStep">Add Step</button>
          </div>
           
           <button type="submit">Add recipe</button>
           <button type="button" @click="togglePopupOpen">Close</button>
        </form>
      </div>
  </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import {useStore} from 'vuex';
// @ is an alias to /src


export default {
  name: 'HomeView',
  setup(){
   const newRecipe = ref({ 
   title:'',
   description:'',
   ingredients:[],
   method:[],
   ingredientRows : 1,
   methodRows : 1
   });
     const popupOpen = ref(false);

     const store = useStore();

     const togglePopupOpen = () =>{
       popupOpen.value = !popupOpen.value
     }; 
     const addNewIngredient = () =>{
      newRecipe.value.ingredientRows++
      console.log(newRecipe.value.ingredientRows)
     };
     const addNewStep = () =>{
      newRecipe.value.methodRows++
      console.log(newRecipe.value.methodRows)
     };
    const addNewRecipe = () =>{
      newRecipe.value.slug = newRecipe.value.title.toLowerCase().replace(/\s/g,'-')
      console.log(newRecipe.value.slug)
    
    if(!newRecipe.value.slug){
      alert('please input title')
      return
    }
    store.commit('add_recipe',{...newRecipe.value})
     console.log(store.state.recipes)
    newRecipe.value = {
       title:'',
       description:'',
       ingredients:[],
       method:[],
       ingredientRows : 1,
       methodRows : 1
    }
    togglePopupOpen()
    
    }

    return{newRecipe,
    togglePopupOpen,
    popupOpen,
    addNewIngredient,
    addNewStep,
    addNewRecipe}
  }
  
}
</script>
<style>
.home{
  padding: 1rem;
  display: flex;
  flex-direction:column;
  align-items: center;
}
h1{
  font-size:2rem;
  margin-bottom:10px;
}
.recipes{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
}
.recipes .card{
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background: #081c33;
}
.recipes .card h2{
  font-size: 2rem;
  margin-bottom: 1rem;
}
.recipes .card p{
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.add-recipe-popup {
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-recipe-popup .popup-content{
  background-color: #081c33;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 760px;
}
.popup-content h2{
  font-size:2rem;
  margin-bottom:1rem;
}
.popup-content .group{
  margin-bottom:1rem;
}
.popup-content .group label{
  display: block;
  margin-bottom:0.5rem;
}
.popup-content .group input,
.popup-content .group textarea{
  display: block;
  width: 100%;
  padding: 0.5rem;
  border:1px solid black;
  border-radius: 5px;
  margin-bottom:1rem;
}
.popup-content .group textarea{
 height:100%;
 resize:none;
}
.popup-content button[type = "submit"]{
 margin-right:1rem;
}
</style>