import React from 'react';

export default function Praktyka() {
  return (
    <div className="wsparcie-containter">
      <h1 className="edu_h2">Nigdy nie jesteś sam. Uzyskaj pomoc specjalistów.</h1>

      {/* Pierwszy dodatkowy div */}
      <div className="section">
        <img src="/assets/tel.svg" alt="Telefon" />
        <h2>Telefony zaufania</h2>
        <p> 116111 - telefon zaufania dla dzieci i młodzieży </p>
      <p> 800 70 2222 - centrum Wsparcia dla Osób Dorosłych w Kryzysie Psychicznym</p>
      </div>

      {/* Drugi dodatkowy div */}
      <div className="section">
        <img src="/assets/place.svg" alt="Placówki" />
        <h2>Zarezerwuj termin do specjalisty w ramach NFZ</h2>
        <a href="https://terminyleczenia.nfz.gov.pl/" className="btn">Znajdź termin</a>
      </div>

      {/* Trzeci dodatkowy div */}
      <div className="section">
        <img src="/assets/expert.svg" alt="Specjaliści" />
        <h2>Znajdź certyfikowanego specjalistę zdrowia psychicznego</h2>
        <a href="https://sekcjanaukowapsychoterapii.org/lista-psychoterapeutow-i-superwizorow-snp-ptp/" className="btn">Wyszukiwarka specjalistów</a>
      </div>
    </div>
  );
}
