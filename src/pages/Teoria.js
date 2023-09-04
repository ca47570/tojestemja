import React, { useState } from 'react';

const itemsData = [
  {
    id: 1,
    name: 'Bezradność',
    image: '/assets/1.svg',
    description: 'Brak nadzei. Bezsens. Niemoc. To uczucia towarzyszące nam, kiedy brakuje perspektywy na poprawę, pomysłów na rozwiązanie problemu lub chęci do dalszego działania.',
  },
  {
    id: 2,
    name: 'Ekscytacja',
    image: '/assets/2.svg',
    description: 'Reakacja związana z oczekiwaniem na coś lub cieszeniem się z bieżących wydarzeń. Charakteryzuje się wysokim pobudzeniem, odczuwanym przez przyspieszone bicie serca.',
  },
  {
    id: 3,
    name: 'Furia',
    image: '/assets/3.svg',
    description: 'Szał, histeria. Jest jednym ze szczytowych epizodów złości, dlatego często może towarzyszyć jej agresja, a nawet przemoc.',
  },
  {
    id: 4,
    name: 'Irytacja',
    image: '/assets/4.svg',
    description: 'Emocja wywołana niezadowoleniem z czegoś, przykrą sytuacją lub zmęczeniem. Charakteryzuje się brakiem akceptacji na odebrany czynnik.',
  },
  {
    id: 5,
    name: 'Lęk',
    image: '/assets/5.svg',
    description: 'Obawa, niezdecydowanie, zamartwianie się. Rozważanie negatywnych scenariuszy i mnożenie potencjalnych niezbezpieczeństw.',
  },
  {
    id: 6,
    name: 'Poczucie winy',
    image: '/assets/6.svg',
    description: 'Stan pokutowania za popełnione błędy, skłaniająca do poprawy lub zadośćuczynienia.',
  },
  {
    id: 7,
    name: 'Radość',
    image: '/assets/7.svg',
    description: 'Charakteryzuje się pozytywną walencją. Jest jedną z emocji dążeniowych, składniających do dalszego działania.',
  },
  {
    id: 8,
    name: 'Rozczarowanie',
    image: '/assets/8.svg',
    description: 'Zawód, żal, jest nierozerwalnie związane z niespołnionymi oczekiwaniami, jakie stawiamy sobie my samy lub stawia nam nasze otoczenie.',
  },
  {
    id: 9,
    name: 'Rozdrażnienie',
    image: '/assets/9.svg',
    description: 'Uczucie pobudzenia, poirytowanie, rodzaj reakcji na zmiany w otoczeniu, na stresujące  sytuacje lub niesprzyjający stan fizyczny.',
  },
  {
    id: 10,
    name: 'Rozpacz',
    image: '/assets/10.svg',
    description: 'Stanowi silne uczucie wyrażające bezsilność i zwątpienie, spowodowane nieszczęściem.',
  },
  {
    id: 11,
    name: 'Smutek',
    image: '/assets/11.svg',
    description: 'Emocja mogąca ściągnąć na sam dół. Sprawiająca, że ogarnia człowieka wewnętrzny mrok, spowodowany wydarzeniami z przeszłości.',
  },
  {
    id: 12,
    name: 'Spokój',
    image: '/assets/12.svg',
    description: 'Uczucie dające poczucie bezpieczeństwa, stałości, sprawczości.',
  },
  {
    id: 13,
    name: 'Strach',
    image: '/assets/13.svg',
    description: 'Emocja, która ma na celu ostrzeganie przed zagrożeniem. Pojawia się w przypadku wystąpienia sytuacji, której człowiek chciałby uniknąć.',
  },
  {
    id: 14,
    name: 'Szczęście',
    image: '/assets/14.svg',
    description: 'Doświadczanie radości, zadowolenia i dobrego samopoczucia, połączone ze świadomością tego, że nasze życie jest dobre, wartościowe i ma sens.',
  },
  {
    id: 15,
    name: 'Trauma',
    image: '/assets/15.svg',
    description: 'Odnosi się zarówno do terźniejszości, przeszłości jak i przyszłości. Uczucie ponownego przeżywania stresującego i zagrażającego doświadczenia.',
  },
  {
    id: 16,
    name: 'Uraza',
    image: '/assets/16.svg',
    description: 'Może przybrać formę smutku i wycofania. Przypomina stłumioną, zapętloną złość lub głęboko skrywaną nienawiść. Powoduje ją uczucie zranienia, upokorzenia lub frustracji.',
  },
  {
    id: 17,
    name: 'Wstyd',
    image: '/assets/17.svg',
    description: 'Uczucie skrępowania lub pogarda wobec siebie samego. Nieśmiałość lub przekonanie o własnej porażce. Skłania do reflekcji nad własnym postępowaniem. Pojawia się, kiedy nie spełniamy stdardów własnych lub ogólnych norm moralnych.',
  },
  {
    id: 18,
    name: 'Zachwyt',
    image: '/assets/18.svg',
    description: 'Uczucie znalezienia się w obliczu czegoś ogromnego, rozległego, również metaforycznie, czego nie da się od razu pojąć. Może mieć w sobie cząstkę strachu, element podziwu lub obcowania z pięknem. ',
  },
  {
    id: 19,
    name: 'Złość',
    image: '/assets/19.svg',
    description: 'Charakteryzuje się negatywną walencją, może wiązać się z agresją lub przemocą. Jest rezultatem zablokowanych celów, któych człowiek nie może osiągnąć.',
  },
  {
    id: 20,
    name: 'Żałoba',
    image: '/assets/20.svg',
    description: 'Stan po stracie czegoś lub kogoś bliskiego. Jest podzielona na 5 faz, gdzie każda charakteryzuje się różnym zestawem emocji.',
  },
];

function Teoria() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = itemsData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <><div className="teoria-container">
      <h1 className="edu_h2">Poznaj najpopularniejsze emocje</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Wyszukaj emocji..."
          className="search_input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} />
      </div>
      <div className="items-container">
        {filteredItems.map(item => (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div><><div className="full-width-container">
      <div>
        <h1 className="warrning">Pamiętaj!</h1>
        <p>Wskazane poniżej informacje są tylko doraźnym sposobem na poprawę samopoczucia. Jeżeli cierpisz, nie bój się, szukaj pomocy u specjalistów.</p>
      </div>
    </div><><div>
      <h1 className="edu_h2">Wprowadź drobne zmiany, aby poczuć się lepiej.</h1>
    </div><div className="next_content">
            <div className="text">
              <h2 className="main_header">Wprowadzenie rutyny i rytuałów</h2>
              <p className="main_paragraph">Nasz organizm lubi rutynę i przewidywalność. Dzięki temu zapewniamy mu poczucie bezpieczeństwa. Warto zadbać o regularność w naszym życiu,
                szczególnie gdy mowa o zaspokajaniu potrzeb fizjologicznych, ale nie za wszelką cenę - nie do tego stopnia, aby wywierać na sobie presję lub przeżywać stres z powodu drobnego
                odstępstwa od założonego planu. Korzyści płynące z wprowadzenia rytuałów są znaczące: mają one zdolność do osadzania nas w rzeczywistości tu i teraz
                oraz ułatwiają przeżywanie przyjemnych emocji.</p>
            </div>
            <div className="graphic">
              <img src="/assets/rutyna.svg" alt="rutyna" />
            </div>
            <div className="next_content">
              <div className="graphic">
                <img src="/assets/food.svg" alt="odzywianie" />
              </div>
              <div className="text">
                <h2 className="main_header">Odżywianie</h2>
                <p className="main_paragraph">Pożywienie jest dosłownie paliwem dla naszego organizmu, jednak my często bardziej skupiamy się na jakości benzyny, którą wlewamy do naszych samochodów, niż na jakości jedzenia,
                  którym karmimy własne ciała. Znaczenie ma zarówno odpowiednia ilość jedzenia, jak i to, kiedy i w jaki sposób je spożywamy. Warto też uważnie zjadać posiłki, bez rozpraszaczy i pośpiechu.
                  Ważna jest również suplementacja, którą najlepiej dobierać indywidualnie, pod okiem specjalisty.</p>
              </div>
            </div>

            <div className="next_content">
              <div className="text">
                <h2 className="main_header">Higiena snu</h2>
                <p className="main_paragraph">Sen jest naturalną, darmową i niezbędną formą regeneracji organizmu. Jego ilość niekoniecznie równa się jakości, dlatego warto zadbać o higienę snu.
                  Co ważne, higiena snu rozpoczyna się już od momentu porannego wstania z łóżka. Aby móc cieszyć się głębokim i zdrowym snem, warto wystawiać się na światło słoneczne w ciągu dnia i jednocześnie ograniczać
                  sztuczne oświetlenie wieczorem. Regularność pór snu ma również ogromne znaczenie, ułatwia to zasypianie i naturalne budzenie się.</p>
              </div>
              <div className="graphic">
                <img src="/assets/sleepy.svg" alt="higiena snu" />
              </div>
            </div>

            <div className="next_content">
              <div className="graphic">
                <img src="/assets/jogging.svg" alt="aktywność fizyczna" />
              </div>
              <div className="text">
                <h2 className="main_header">Aktywność fizyczna</h2>
                <p className="main_paragraph">Nasi przodkowei nie chodzili na siłownię, ale ruch i wysiłek fizyczny były wpisane w ich codzienność Ewolucyjnie ruch to jedna z najważniejszych strategii radzenia sobie ze stresem
                  wywołanym przez wzbudzenia autonomiczne. Dlatego tak ważna jest codzienna aktywność, chociażby w formie spaceru czy wejścia po schodach. Warto wybrać taki rodzaj ruchu,
                  który sprawia nam przyjemność i który lubimy.</p>
              </div>
            </div>

            <div className="next_content">
              <div className="text">
                <h2 className="main_header">Regeneracja i odpoczynek</h2>
                <p className="main_paragraph">Często w ramach relaku po szkole, uczelni czy pracy wybieramy takie aktywności, które nas nadal stymulują. Rozrywka jest oczywiście ważną częścią naszego życia
                  i służy utrzymaniu dobrostanu organizmu, jendak powinniśmy również znaleźć czas na odpoczynek, w trakcie którego będzie do nas dochodzić ograniczona ilość bodźców, abyśmy mogli skupić się na bieżącej chwili.
                  Może to być kilka minut (lub więcej) medytacji lub relaksacji, czytanie, prowadzenie dziennika, słuchanie muzyki lub kreatywne spędzanie czasu, jak zajęcia artystyczne.</p>
              </div>
              <div className="graphic">
                <img src="/assets/art.svg" alt="regeneracja i odpoczynek" />
              </div>
            </div>

            <div className="next_content">
              <div className="graphic">
                <img src="/assets/buddy.svg" alt="czas dla bliskich" />
              </div>
              <div className="text">
                <h2 className="main_header">Czas dla bliskich</h2>
                <p className="main_paragraph">Relacje społeczne mają ogromne znaczenie dla naszego dobrostanu psychicznego, są również okazją do wyrażania i przeżywania emocji. W ramach bliskich relacji wzajemnie z drugą osobą
                  regulujemy swoje budżety ciała - dzieje się tak dzięki mechanizmowi empatii i mądrego wsparcia. Czasem nawet samo bycie blisko czy przytulenie może działać kojąco na drugą osobę..</p>
              </div>
            </div>

          </div></></></>
  )
}

export default Teoria;
