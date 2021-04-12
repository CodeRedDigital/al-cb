---
pagination:
    data: projects
    size: 1
    alias: project
# permalink: "projects/{{ project.slugs[0] }}/"
title: "Placeholder"
layout: 'layouts/project.html'
color: 'cool-grey'
background: 'rusty-orange'
logo-colours: ['cool-grey', 'pale-blue', 'charcoal-blue']
bodyclass: 'project-page'
---
{{ project.data.title[0].text }}