import acrowellHero from '../../assets/Acrowell/1.png'
import cbaHero from '../../assets/CBA/2.png'
import rojinHero from '../../assets/Project1/1.png'
import nestHero from '../../assets/Nest/1.png'
import mriHero from '../../assets/MRI/1.png'
import spfHero from '../../assets/SPF/1.png'

export const projects = [
  { id: 1, title: 'Acrowell', category: 'Branding', tags: ['Brand Identity', 'Logo Design'], img: acrowellHero, size: 'square', href: '/projects/acrowell', tag: 'Branding · 2024' },
  { id: 2, title: 'CBA', category: 'Branding', tags: ['Brand Identity', 'Logo Design'], img: cbaHero, size: 'square', href: '/projects/cba', tag: 'Branding · 2024' },
  { id: 4, title: 'Nest', category: ['Communication Design', 'Video Editing'], tags: ['Brand Applications', 'Marketing Design', 'Campaign Creatives', 'Digital Assets'], img: nestHero, size: 'square', href: '/projects/nest', tag: 'Branding · 2024' },
  { id: 5, title: 'MRI Master', category: 'Branding', tags: ['Logo Design', 'Brand Identity'], img: mriHero, size: 'square', href: '/projects/mri', tag: 'Branding · 2024' },
  { id: 6, title: 'The Sign & Print Factory', category: 'Branding', tags: ['Logo Design', 'Brand Identity'], img: spfHero, size: 'square', href: '/projects/spf', tag: 'Branding · 2024' },
]

export const categories = ['All', 'Branding', 'Communication Design', 'Video Editing']
