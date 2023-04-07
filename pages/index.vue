<template>
  <div class="page">
    <IndexBanner />
    <IndexPrivileges />
    <IndexTechnologies />
    <IndexSteps />
    <IndexProjects />
    <IndexInvitation />
    <IndexPartners />
  </div>
</template>

<script>
import scrolltrigger from "~/mixins/scrolltrigger.js"

export default {
  mixins: [scrolltrigger],
  name: 'IndexPage'
}
</script>
