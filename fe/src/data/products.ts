import logo1 from '@images/logo-1.jpeg'
import heroGraphic from '@images/logo-2.jpeg'
import bodyWave from '@images/body-wave-1.PNG'
import waterWave from '@images/water-wave-1.PNG'
import burmeseCurl from '@images/burmese-curl-1.PNG'
import pineappleCurl from '@images/1.PNG'
import straightWig from '@images/3.PNG'
import deepWave from '@images/body-wave-2.PNG'
import triColor from '@images/2.PNG'

export const siteData = {
  logo: logo1,
  heroImage: heroGraphic,
  brandName: 'JTS Beauty',
  description:
    'Discover premium wigs, serums, and styling tools for standout glamour. Shop the latest textures and launch-ready beauty essentials crafted for a polished, confident look.',
  ctas: [
    { label: 'Shop Best Sellers', href: '#products' },
    { label: 'Book Appointment', href: '#contact' }
  ]
}

export const benefits = [
  { title: 'Premium textures', subtitle: 'Soft, natural wig styles designed to feel as good as they look.' },
  { title: 'Fast delivery', subtitle: 'Fresh inventory shipped quickly for every order.' },
  { title: 'Expert styling', subtitle: 'Support and appointments with a trusted stylist team.' }
]

export const categories = [
  { name: 'Long Wigs', description: 'Shop the latest long wigs looks', badge: 'Wigs' },
  { name: 'Blonde', description: 'Shop the latest blonde looks', badge: 'Color' },
  { name: 'Brown', description: 'Shop the latest brown looks', badge: 'Neutral' },
  { name: 'Black', description: 'Shop the latest black looks', badge: 'Classic' },
  { name: 'Specialty', description: 'Shop the latest specialty looks', badge: 'Limited' }
]

export type Product = {
  id: string
  title: string
  subtitle: string
  price: string
  image: string
  details: string
}

export const products: Product[] = [
  {
    id: 'prod-1',
    title: 'Pineapple Curl',
    subtitle: '13x4 250 density transparent lace wig',
    price: '$420.00',
    image: pineappleCurl,
    details: 'Lightweight curl pattern and polished shine for everyday glamour.'
  },
  {
    id: 'prod-2',
    title: 'Burmese Curl',
    subtitle: 'JTS Beauty water wave in natural texture',
    price: 'Contact for price',
    image: burmeseCurl,
    details: 'Soft bounce with root definition for dreamy volume.'
  },
  {
    id: 'prod-3',
    title: 'Water Wave',
    subtitle: '13x4 transparent lace comfortable fit',
    price: 'Contact for price',
    image: waterWave,
    details: 'Soft body wave movement that still feels light and natural.'
  },
  {
    id: 'prod-4',
    title: 'Straight Lace Wig',
    subtitle: 'Sleek transparent lace with flawless finish',
    price: 'Contact for price',
    image: straightWig,
    details: 'Minimalist style for a polished everyday look.'
  },
  {
    id: 'prod-5',
    title: 'Deep Wave',
    subtitle: 'Deep wave transparent lace wig',
    price: 'Contact for price',
    image: deepWave,
    details: 'Rich texture with soft definition for full-bodied style.'
  },
  {
    id: 'prod-6',
    title: 'Tri Color Body Wave',
    subtitle: '13x4 250 density 30 inch',
    price: '$500.00',
    image: triColor,
    details: 'Bold color with lush waves for a statement look.'
  }
]

export const footerLinks = {
  contact: [
    { label: 'jtsbeautyworldboutiquellc@gmail.com', href: 'mailto:jtsbeautyworldboutiquellc@gmail.com' },
    { label: '561-255-3698', href: 'tel:+15612553698' }
  ],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/share/177aaiVESS/' },
    { label: 'Instagram', href: 'https://www.instagram.com/jtsbeautyworld?utm_source=qr&igsh=MXgxOHV0cWZvdHE2Zg==' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@jtsbeauty?_r=1&_t=ZP-96CYRj8ubNP' }
  ]
}
