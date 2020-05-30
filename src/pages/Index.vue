<template>
  <Layout>
    <ul>
      <BlockSmall url="http://vimeo.com/user12035599/videos" title="Vimeo" />
      <BlockSmall url="http://se.linkedin.com/in/peterlagerstrom" title="LinkedIn" />
      <BlockSmall url="https://twitter.com/peterlagerstrom" title="Twitter" />
      <BlockSmall url="https://instagram.com/peterlagerstrom" title="Instagram" />  
      <BlockSmall url="https://github.com/peterlagerstrom" title="Github" />
    </ul>   
  </Layout>
</template>

<script>
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



</style>