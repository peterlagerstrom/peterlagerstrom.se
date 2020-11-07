<template>
  <Layout>
    <ul >
      <template v-for="edge in $page.posts.edges">
        <BlockSmall 
          v-if="edge.node.type === 'social'" 
          v-bind:url="edge.node.link" 
          v-bind:title="edge.node.name"
           :key="edge.node.link"
        />
        <BlockVideo
          v-if="edge.node.type === 'video'" 
          v-bind:url="edge.node.link" 
          v-bind:title="edge.node.name" 
          v-bind:source="edge.node.source"
           :key="edge.node.link"
        />
      </template>
    </ul>  
  </Layout>
</template>

<page-query>
query {
  posts: allItems {
    edges {
      node {
        name
        link
        type
        source
      }
    }
  }
}
</page-query>
<script>
  import BlockSmall from '~/components/BlockSmall.vue'
  import BlockVideo from '~/components/BlockVideo.vue'

  export default {
    components: {
      BlockSmall, 
      BlockVideo
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