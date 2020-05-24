 <template>  
   <li><a href={props.url} 
                title={props.title}  
                class="icon-vimeo"
                target="_blank" 
                onclick="_gaq.push(['_trackEvent', 'ExternalLink', '{props.title} ']);"></a></li>
</template>
<script>
export default {
  name: 'BlockSmall'
}
</script>