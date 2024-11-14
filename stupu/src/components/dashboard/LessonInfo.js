import "./LessonInfo.css";

const LessonInfo = () => {


  return (

        <article className="my-lesson-content w-100">
          <div className="my-lesson-info p-1">
            <h2 className="mt-2">Info over deze bijles</h2>
            <ul>
              <li className="flex">
                <div className="bold mr-1">Datum & Tijd:</div>24/10/24 |
                12:00-14:00
              </li>
              <li className="flex">
                <div className="bold mr-1">Locatie:</div> Online ( link: https//teams.meeting.com/... )
              </li>
              <li className="flex">
                <div className="bold mr-1">Onderwerp:</div> Vervolg op de vierkantswortel. 
              </li>
            </ul>
            <h3 className="lesson-materials mt-2">Nodige materialen:</h3>
            <ul>
              <li className="flex">
                <svg
                  className="mr-2"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 14C24 11.8783 23.1571 9.84344 21.6569 8.34315C20.1566 6.84285 18.1217 6 16 6H4V36H18C19.5913 36 21.1174 36.6321 22.2426 37.7574C23.3679 38.8826 24 40.4087 24 42M24 14V42M24 14C24 11.8783 24.8429 9.84344 26.3431 8.34315C27.8434 6.84285 29.8783 6 32 6H44V36H30C28.4087 36 26.8826 36.6321 25.7574 37.7574C24.6321 38.8826 24 40.4087 24 42"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Kladblok
              </li>
              <li className="flex">
                <svg
                  className="mr-2"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.9396 12H32.9396M22.9396 36H30.9396M22.9396 27.9L32.9396 28M22.9396 20H28.9396M16.8796 14H5.05957M42.9396 38V10C42.9396 6 40.9396 4 36.9396 4H28.9396C24.9396 4 22.9396 6 22.9396 10V38C22.9396 42 24.9396 44 28.9396 44H36.9396C40.9396 44 42.9396 42 42.9396 38ZM10.9796 4C7.71957 4 5.05957 6.66 5.05957 9.9V35.82C5.05957 36.72 5.43957 38.08 5.89957 38.86L7.53957 41.58C9.41957 44.72 12.5196 44.72 14.3996 41.58L16.0396 38.86C16.4996 38.08 16.8796 36.72 16.8796 35.82V9.9C16.8796 6.66 14.2196 4 10.9796 4Z"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
                Schijfgrief
              </li>
              <li className="flex">
                <svg
                  className="mr-2"
                  width="48"
                  height="48"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2552 26.25H15.2769M22.491 26.25H22.5127M29.7269 26.25H29.7485M15.2552 32.8125H15.2769M22.491 32.8125H22.5127M29.7269 32.8125H29.7485M18.75 41.25H26.25C35.625 41.25 39.375 37.5 39.375 28.125V16.875C39.375 7.5 35.625 3.75 26.25 3.75H18.75C9.375 3.75 5.625 7.5 5.625 16.875V28.125C5.625 37.5 9.375 41.25 18.75 41.25ZM30.9375 14.2125V16.0875C30.9375 17.625 29.6812 18.9 28.125 18.9H16.875C15.3375 18.9 14.0625 17.6437 14.0625 16.0875V14.2125C14.0625 12.675 15.3188 11.4 16.875 11.4H28.125C29.6812 11.4 30.9375 12.6562 30.9375 14.2125Z"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Rekenmachine
              </li>
            </ul>
          </div>
          <div className="about">
            <h2 className="mt-2">Manier van lesgeven</h2>
            <p className="ptb-1">
              John Doe hanteert een gestructureerde en persoonlijke aanpak in
              zijn lessen. Hij stemt zijn onderwijsmethode af op de behoeften en
              het leervermogen van elke student. Door complexe onderwerpen op
              een eenvoudige manier uit te leggen, zorgt John ervoor dat zijn
              studenten stap voor stap vertrouwen opbouwen in hun vaardigheden.
            </p>
            <p className="ptb-1">
              Hij gelooft in interactieve lessen, waarin ruimte is voor vragen,
              discussie en het toepassen van theorie in de praktijk. John
              moedigt zijn studenten aan om zelfstandig te denken en problemen
              kritisch te benaderen, terwijl hij hen met geduld en ondersteuning
              begeleidt.
            </p>
          </div>
          <div className="about">
            <h2 className="mt-2">Ervaringen & Kwalificaties</h2>
            <p className="ptb-1">
              Ik ben al geruime tijd tutor en heb een sterke achtergrond in mijn
              vakgebied. Door de jaren heen heb ik niet alleen de nodige
              certificaten behaald, maar ook veel praktijkervaring opgedaan.
              Hierdoor ben ik goed in staat om mijn kennis op een heldere en
              begrijpelijke manier over te brengen. Ik kijk ernaar uit om samen
              te werken en je te helpen jouw doelen te bereiken!
            </p>
          </div>
        </article>
  );
};

export default LessonInfo;
