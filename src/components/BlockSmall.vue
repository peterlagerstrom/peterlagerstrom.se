 <template>  
   <li>
      <a :href="url"  
         :title="title" 
         class="icon"
         target="_blank" 
         v-on:click="gaTrack(title)"
      >
         <Instagram v-if="title === 'Instagram'" />
         <Twitter v-else-if="title === 'Twitter'" />
         <Vimeo v-else-if="title === 'Vimeo'" />
         <LinkedIn v-else-if="title === 'LinkedIn'" />
         <Github v-else-if="title === 'Github'" />
      </a>
   </li>
</template>
<script>
   import Github from '~/icons/github.svg'
   import Instagram from '~/icons/instagram.svg'
   import Twitter from '~/icons/twitter.svg'
   import Vimeo from '~/icons/vimeo.svg'
   import LinkedIn from '~/icons/linkedin.svg'
   
   export default {
      name: 'BlockSmall',
      props: ['title', 'url', 'iconClass'],
      components: {
         Instagram, Twitter, Vimeo, LinkedIn, Github
      },
      methods: {
         gaTrack: function (title) {
            _gaq.push(['_trackEvent', 'ExternalLink', title]);
         }
      }
   }
</script>