---
layout: default
description: "manol's writing experiments and projects"
---
<div class="post-list">
{% for post in site.posts %}
  <div class="card-post">
    <a href="{{ post.url }}">
        <img src='/assets/images/{{post.image}}'>
        <div class='footer-card'>
        <div class="title-date">
        <span class='title'>
            {{ post.title }}
        </span> 
         / 
        <time datetime="{{ post.date | date: "%Y-%m-%d" }}">
        {{ post.date | date_to_long_string }}
        </time>
        </div>
        <div class='description'>
        {{post.description}}
        </div>
        </div>
    </a>
  </div>
{% endfor %}
</div>