<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/MrCube42.png',
    name: 'David Würfel',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/MrCube42' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/davidwuerfel/' }
    ]
  }
]
</script>

# Retroject Projektteam

Wir suchen noch Verstärkung für unser tolles Entwicklungs-Team.

<VPTeamMembers size="small" :members="members" />