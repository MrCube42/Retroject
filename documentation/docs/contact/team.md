<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/images/Female-Avatar-4.png',
    name: 'Pia Oldenburg',
    title: 'Product Ownerin'
  },
  {
    avatar: 'https://github.com/MrCube42.png',
    name: 'David Würfel',
    title: 'Entwickler',
    links: [
      { icon: 'github', link: 'https://github.com/MrCube42' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/davidwuerfel/' },
      { icon: 'instagram', link: 'https://www.instagram.com/mrcube42/' }
    ]
  },
  {
    avatar: '/images/Female-Avatar-5.png',
    name: 'Daisy Develoe',
    title: 'Entwicklerin'
  }
]
</script>

# Retroject Projektteam

Wir suchen noch Verstärkung für unser tolles Entwicklungs-Team.

<VPTeamMembers size="small" :members="members" />
