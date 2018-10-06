import React, { Component } from 'react';

const BlockSmall = (props) => (
        <li><a href={props.url} 
                title={props.title}  
                class="icon-vimeo"
                target="_blank" 
                onclick="_gaq.push(['_trackEvent', 'ExternalLink', '{props.title} ']);"></a></li>
)
export default BlockSmall;
