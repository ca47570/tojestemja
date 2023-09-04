import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="text">
          <h2 className="main_header">Nie jesteś wyszukiwarką internetową</h2>
          <p className="main_paragraph">Odnalezienie siebie nie będzie możliwe po wpisaniu jednego zapytania.</p>
        </div>
        <div className="graphic">
          <img src="/assets/search.svg" alt="search"/>
        </div>
      </div>

      <div className="next_content">
        <div className="graphic">
          <img src="/assets/me.svg" alt="me"/>
        </div>
        <div className="text">
          <h2 className="main_header">To jestem Ja</h2>
          <p className="main_paragraph">Aplikacja, która pozwoli poznać Ci podstawy wiedzy psychologicznej, abyś mógł lepiej zrozumieć siebie.</p>
        </div>
      </div>

      <div className="main_h">
        <h2 className="edu_h2">Dlaczego edukcja psychologiczna jest ważna?</h2>
      </div>

      <div className="next_content">
        <div className="text">
          <h2 className="main_header">Raport "Młode głowy"</h2>
          <p className="main_paragraph">Raport z badania dotyczącego zdrowia psychicznego, poczucia własnej wartości i sprawczości wśród młodych ludzi w Polsce przedstawił niepokojący stan ich zdrowia psychicznego.</p>
        </div>
        <div className="graphic">
          <img src="/assets/people.svg" alt="people"/>
        </div>
      </div>

      <div className="next_content">
        <div className="graphic">
          <img src="/assets/do.svg" alt="cancel"/>
        </div>
        <div className="text">
          <h2 className="main_header">52,4%</h2>
          <p className="main_paragraph">Ponad połowa młodych odczuwa brak motywacji do działania.</p>
        </div>
      </div>

      <div className="next_content">
        <div className="text">
          <h2 className="main_header">1 na 3 badanych</h2>
          <p className="main_paragraph">Ma problemy ze snem.</p>
        </div>
        <div className="graphic">
          <img src="/assets/sleep.svg" alt="sleep"/>
        </div>
      </div>

      <div className="next_content">
        <div className="graphic">
          <img src="/assets/personal.svg" alt="apperance"/>
        </div>
        <div className="text">
          <h2 className="main_header">32,5%</h2>
          <p className="main_paragraph">Nie akceptuje tego, kim jest i jak wygląda.</p>
        </div>
      </div>

      <div className="next_content">
        <div className="text">
          <h2 className="main_header">41,9%</h2>
          <p className="main_paragraph">Badanych młodych ludzi przyznało, że w ich najbliższym otoczeniu ktoś mówił o samobójstwie, podjął próbę samobójczą lub odebrał sobie życie.</p>
        </div>
        <div className="graphic">
          <img src="/assets/life.svg" alt="life"/>
        </div>
      </div>

      <div className="next_content">
        <div className="graphic">
          <img src="/assets/itsme.svg" alt="apperance"/>
        </div>
        <div className="text">
          <h2 className="main_header">2 na 3 uczniów</h2>
          <p className="main_paragraph">Chciałoby mieć więcej szacunku do samego siebie.</p>
        </div>
      </div>
      
      <div className="main_h">
        <h2 className="edu_h2">Chcesz dowiedzieć się więcej?</h2>
      </div>
      <a href="https://mlodeglowy.pl/wp-content/uploads/2023/04/MLODE-GLOWY.-Otwarcie-o-zdrowiu-psychicznym_-Raport-final.pdf" className="btn">Pełen raport</a>
    </div>
  );
};

export default MainContent;
