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
* {
  margin:0;
  padding:0
}

html,body{
  margin:0;
  width:100%;
  height:100%;
  background:#fff;
  background:-moz-linear-gradient(top,#fff 0,#eaeaea 100%);
  background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#fff),color-stop(100%,#eaeaea));
  background:-webkit-linear-gradient(top,#fff 0,#eaeaea 100%);
  background:-o-linear-gradient(top,#fff 0,#eaeaea 100%);
  background:-ms-linear-gradient(top,#fff 0,#eaeaea 100%);
  background:linear-gradient(to bottom,#fff 0,#eaeaea 100%);
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#eaeaea',GradientType=0);
  overflow:hidden
}

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

a,a:hover,
a.visited, 
a.active{
  text-decoration:none
}

li {
  display: block;
}
@media only screen and (min-width: 700px) {
li {
  display: inline-block;
}
  }
.icon {
  width: 80px;
  display:inline-block;
  margin:0 30px
}


</style>
