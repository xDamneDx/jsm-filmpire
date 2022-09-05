import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const app = () => (
  <div>
    <NavBar />
    <main>
      <Routes>
        <Route path="movie/:id" element={<MovieInformation />} />
        <Route path="actors/:id" element={<Actors />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="/" element={<Movies />} />
      </Routes>
    </main>
  </div>
);

export default app;
