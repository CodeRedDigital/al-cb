---
pagination:
    data: projects
    size: 1
    alias: project
    permalink: "projects/{{ project.slugs | slug }}/"
title: '{{ project.data.title[0].text }}'
layout: 'layouts/pages.html'
color: 'cool-grey'
background: 'rusty-orange'
logo-colours: ['cool-grey', 'pale-blue', 'charcoal-blue']
bodyclass: 'project'
---
