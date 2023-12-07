/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom'
import { AboutMe } from '../pages/AboutMe/AboutMe'
import { Home } from '../pages/Home/Home'
import { TecnologiesStack } from '../pages/TecnologiesStack/TecnologiesStack'
import { Websites } from '../pages/Websites/Websites'
import { ContactMe } from '../pages/ContactMe/ContactMe'

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Perfil',
    element: <AboutMe />
  },
  {
    path: '/Stack',
    element: <TecnologiesStack />
  },
  {
    path: '/Proyectos',
    element: <Websites />
  },
  {
    path: '/Contactame',
    element: <ContactMe />
  }
])


export default appRoutes;