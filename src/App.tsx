import React from 'react'
import './index.css'
import './styles/_index.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedModule from './modules/ProtectedModule/ProtectedModule'
import SwapPages from './pages/swap'
import Liquidity from './pages/liquidity'
import VestPages from './pages/vest'
import VotePages from './pages/vote'
import BribePages from './pages/bribe'
import RewardsPage from './pages/rewards'
import MigrationPages from './pages/migration'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedModule />}>
          <Route path="/" element={<SwapPages />} />
          <Route path="/liquidity" element={<Liquidity />} />
          <Route path="/vest" element={<VestPages />} />
          <Route path="/vote" element={<VotePages />} />
          <Route path="/bribe" element={<BribePages />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/migration" element={<MigrationPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
