<template>
  <Layout>
<<<<<<< HEAD


  <ul>
        <BlockSmall url="http://vimeo.com/user12035599/videos" title="Vimeo" />
        <li><a href="" title="" className="icon-vimeo" target="_blank" onclick="_gaq.push(['_trackEvent', 'ExternalLink', 'Vimeo']);"></a></li>
        <li><a href="http://se.linkedin.com/in/peterlagerstrom" title="LinkedIn" class="icon-linkedin" target="_blank" onclick="_gaq.push(['_trackEvent', 'ExternalLink', 'LinkedIn']);"></a></li>
        <li><a href="https://twitter.com/peterlagerstrom" title="Twitter" class="icon-twitter" target="_blank" onclick="_gaq.push(['_trackEvent', 'ExternalLink', 'Twitter']);"></a></li>
        <li><a href="http://instagram.com/peterlagerstrom" title="Instagram" class="icon-instagram" target="_blank" onclick="_gaq.push(['_trackEvent', 'ExternalLink', 'Instagram']);"></a></li>
        <li><a href="https://foursquare.com/peterlagerstrom" title="Foursquare" class="icon-foursquare" target="_blank" onclick="_gaq.push(['_trackEvent', 'ExternalLink', 'Foursquare']);"></a></li>
        <li><a href="https://github.com/peterlagerstrom" title="Github" class="icon-github" target="_blank" onclick="_gaq.push(['_trackEvent', 'ExternalLink', 'Github']);"></a></li>
=======
    <ul>
      <BlockSmall url="http://vimeo.com/user12035599/videos" title="Vimeo" />
      <BlockSmall url="http://se.linkedin.com/in/peterlagerstrom" title="LinkedIn" />
      <BlockSmall url="https://twitter.com/peterlagerstrom" title="Twitter" />
      <BlockSmall url="https://instagram.com/peterlagerstrom" title="Instagram" />  
      <BlockSmall url="https://github.com/peterlagerstrom" title="Github" />
>>>>>>> 3.1
    </ul>   
  </Layout>
</template>

<script>
<<<<<<< HEAD
import BlockSmall from '~/components/BlockSmall.vue'

export default {
  components: {
    BlockSmall
  },
  metaInfo: {
    title: ''
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
=======
  import BlockSmall from '~/components/BlockSmall.vue'

  export default {
    components: {
      BlockSmall
    },
    metaInfo: {
      title: 'Peter Lagerstr&ouml;m'
    }
  }
</script>

<style>


ul{
  width: auto;
  text-align: center;
  margin: 20px auto 0;
  font-size:5em;

}
@media only screen and (min-width: 700px) {
ul{
  width:700px;
  margin:200px auto 0;
    }
  }


>>>>>>> 3.1
</style>
