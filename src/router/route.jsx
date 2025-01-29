import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hook/usePath'
import { History, HomePrice, Price, Profile, Guide, SignIn, SignUp, NotFound } from "../pages"
import EvalutePrice from '../pages/EvalutePrice'
import Home from '../pages/Home'


const RouteCustom = () => {
  return (
    <Routes>
      <Route path={PATH.home} element={<Home />} />
      <Route path={PATH.history} element={<History />} />
      <Route path={PATH.price} element={<Price />} />
      <Route path={PATH.profile} element={<Profile />} />
      <Route path={PATH.homePrice} element={<HomePrice />} />
      <Route path={PATH.guide} element={<Guide />} />
      <Route path={PATH.evalutePrice} element={<EvalutePrice />} />
      <Route path={PATH.signIn} element={<SignIn />} />
      <Route path={PATH.signUp} element={<SignUp />} />
      {/* 404 Not Found sahifasi */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RouteCustom