---
pagination:
  data: projects.results
  size: 1
  alias: project
permalink: "projects/{{ project.slugs[0] | slug }}/"
title: "Placeholder"
layout: "layouts/project.html"
color: "cool-grey"
background: "rusty-orange"
logo-colours: ["cool-grey", "pale-blue", "charcoal-blue"]
bodyclass: "project-page"
cursors:
  normal: "/images/rusty-orange-cursor.png"
  pointer: "/images/charcoal-blue-cursor.png"
---

{{ project.data.title[0].text }}
