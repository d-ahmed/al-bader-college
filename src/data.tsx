import React from 'react'
import Registration from './components/Registration'
import { SlideItem } from './components/Slider/types'
import { Value } from './components/Value/types'

export const sliderItems: SlideItem[] = [
  {
    id: 1,
    content: <Registration />
  }
]


export const values: Value[] = [
  {
    id: 1,
    title: "Apprentissage holistique",
    imageSrc: "https://cdn.pixabay.com/photo/2020/05/23/20/08/books-5211309_1280.jpg",
    description: "Nous nous engageons à fournir une éducation complète qui prend en compte tous les aspects du développement de nos élèves, y compris leur développement intellectuel, physique, social et émotionnel."
  },
  {
    id: 2,
    title: "Éthique et moralité",
    imageSrc: "https://cdn.pixabay.com/photo/2017/09/04/09/34/head-2713346_1280.jpg",
    description: "Nous mettons l'accent sur les valeurs éthiques et morales islamiques, telles que l'honnêteté, l'intégrité, la bienveillance, et la responsabilité, pour former des citoyens respectueux et responsables."
  },
  {
    id: 3,
    title: "Respect et tolérance",
    imageSrc: "https://cdn.pixabay.com/photo/2019/03/28/11/46/hands-4087018_1280.jpg",
    description: "Nous prônons le respect et la tolérance envers les autres, quelle que soit leur origine ethnique, culturelle ou religieuse, et encourageons la compréhension mutuelle et la diversité au sein de notre communauté."
  },
  {
    id: 4,
    title: "Engagement envers la communauté",
    imageSrc: "https://cdn.pixabay.com/photo/2020/05/23/20/08/books-5211309_1280.jpg",
    description: "Nous encourageons nos élèves à être actifs dans leur communauté et à participer à des activités bénévoles et caritatives pour développer leur sens des responsabilités envers la société et leur engagement envers les autres."
  }
]