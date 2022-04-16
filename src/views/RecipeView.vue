<template>
<router-link to="/"> &lt; Back</router-link>
 <div class="recipe">
   
           <h3>{{recipe.title}}</h3>
           <div class="desc">
             <p>Description</p>
             <hr>
            {{recipe.description}}
           </div>
           <div class="ingredients">
             <p>Ingredients</p>
             <hr>
             <ul>
               <li v-for = "(ingredient,index) in recipe.ingredients" :key="index">
                  {{ingredient}}
               </li>
             </ul>
           </div>
           <div class="method">
             <p>methods</p>
             <hr>
             <ol>
               <li v-for="(step,index) in recipe.method" :key="index">
                    <span v-html="cleanText(step)"></span>
               </li>
             </ol>
           </div>
 </div>
   
</template>

<script>
export default {
  computed:{
    recipe(){
      return this.$store.state.recipes.find(recipe =>
        recipe.slug === this.$route.params.slug
      )
    
  }

},
methods:{  
  cleanText(text){
    return text.replace(/\n/g,'<br/>')
  }
}
}
</script>

<style>
.recipe{
  padding:3rem;
  max-width: 768px;
  margin: 0 auto;
}

.desc{
  font-size:1.125rem;
  line-height:1.4;
  margin-bottom:1rem;
}

hr{
  margin-bottom:1rem;
}

h3{
  margin-bottom: 1rem;;
}

.ingredients{
  padding:1rem;
  background-color: #081c33;
  border-radius:0.5rem;
  margin-bottom:2rem;
}

.ingredients ul li {
  margin-bottom:2rem;
  list-style-position: inside;
  line-height: 1.4;
}

.method ol li{
  margin-bottom:2rem;
  padding-bottom:1rem;
  list-style-position: inside;
  border-bottom:1px solid #eee;
}
</style>