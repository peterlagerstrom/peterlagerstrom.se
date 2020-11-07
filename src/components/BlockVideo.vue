 <template>  
   <li>
      <a :href="url"  
         :title="title" 
         class="icon"
         target="_blank" 
         v-on:click="gaTrack(title)"
      >
        <span class="blockvideo__title"> {{ title }}</span>
         <PlayIcon />
        <span class="blockvideo__source">A spark of joy from {{ source }}</span>

      </a>
   </li>
</template>
<script>   
   import PlayIcon from '~/icons/playicon.svg'

   export default {
      name: 'BlockVideo',
      props: ['title', 'url', 'source'],
      components: {
         PlayIcon
      },
      methods: {
         gaTrack: function (title) {
            _gaq.push(['_trackEvent', 'ExternalVideo', title]);
         }
      }
   }
</script>
<style scoped>
a,a:hover,
a.visited, 
a.active{
  text-decoration:none
}

li {
  display: inline-block;
  margin: 30px auto;
}

@media only screen and (min-width: 700px) {
   li {
      display: inline-block;
   }
}

.blockvideo__title {
   font-size: 12px;
   display: block;
   margin-top: 10px;
   color: var(--background-dark);
}

.blockvideo__source {
   font-size: 12px;
   display: block;
   margin-bottom: 10px;
   color: var(--background-dark);
}

.icon {
   width: 120px;
   display: inline-block;
   margin:0 20px;
   border: 5px solid var(--background-dark);
   border-radius: 15px;
   background-color: var(--blockvideo-light);
}

.icon svg{
   margin: 20px;
   vertical-align: top;
}

@media screen and (prefers-color-scheme: dark) {
   .blockvideo__title {
      color:  var(--background-darker);
   }

   .blockvideo__source {
      color: var(--background-darker);
   }

   .icon {
      background-color: var(--blockvideo-dark);
      border-color: var(--background-darker);
   }

   .icon svg { 
      fill: var(--background-darker);
   }
}
</style>