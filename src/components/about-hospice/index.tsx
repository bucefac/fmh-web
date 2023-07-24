import styles from "./index.module.less";

export const About = () => {
  const data = [
    {
      id: 1,
      title: "Фактический адрес",
      content: (
        <>
          <div>119048, г. Москва, ул. Доватора, д. 10</div>
          <img
            className={styles.map}
            src="/images/map.jpg"
            alt="Адрес: 119048, г. Москва, ул. Доватора, д. 10"
          />
        </>
      ),
    },
    {
      id: 2,
      title: "Телефоны",
      content: (
        <>
          <div>
            Приемное отделение: <b>+7 499 245 00 03</b> (круглосуточно)
          </div>
          <div>
            Отделение выездной паллиативной помощи: <b>+7 499 245 00 09</b>{" "}
            (круглосуточно)
          </div>
        </>
      ),
    },
    {
      id: 3,
      title: "Режим работы хосписа",
      content: (
        <>
          <div>Отделение выездной паллиативной службы: ежедневно</div>
          <div>Стационар: круглосуточно</div>
          <div>Посещение пациентов: круглосуточно</div>
        </>
      ),
    },
    {
      id: 4,
      title: "Режим работы хосписа",
      content: (
        <>
          <div>
            Подача документов производится через Координационный центр по
            телефону и электронной почте:
          </div>
          <div>
            <b>+7 499 940-19-48</b>
          </div>
          <div>
            <b>+7 499 940-19-50</b>
          </div>
          <br />
          <div>
            <a href="mailto: lifelist@zdrav.mos.ru">lifelist@zdrav.mos.ru</a>
          </div>
          <div>
            <a href="mailto: 9401948@mos.ru">9401948@mos.ru</a>
          </div>
          <br />
          <div>
            Маршрутизация пациентов осуществляется с учётом района проживания и
            пожеланий пациента и его близких.
          </div>
        </>
      ),
    },
    {
      id: 5,
      title: "Схема проезда",
      content: (
        <>
          <div>
            <b>ПЕШКОМ</b>
          </div>
          <div>
            От станции метро «Спортивная» Сокольнической линии (последний вагон
            из центра) посетители доберутся до Хосписа № 1 им. В.В.
            Миллионщиковой за пару минут: поднявшись вверх по эскалатору и выйдя
            на улицу, повернуть налево и двигаться к комплексу зданий
            учреждения, окружённому забором из красного кирпича (вход — со
            стороны улицы Доватора).
          </div>
          <br />
          <div>
            <b>НА АВТОМОБИЛЕ</b>
          </div>
          <div>
            Следуя по внутренней стороне ТТК (Луженецкая эстакада), осуществить
            съезд направо, на Луженецкий проезд, далее через 400 метров сдать
            правее и, двигаясь по Малой Пироговской улице, свернуть направо, на
            улицу 10-летия Октября (хоспис расположен на перекрёстке с улицей
            Доватора, вход — со стороны улицы Доватора).
          </div>
        </>
      ),
    },
    {
      id: 6,
      title: "Официальный сайт",
      content: <a href="https://cpmdzm.ru/">https://cpmdzm.ru/</a>,
    },
  ];

  return (
    <div className={styles.about}>
      <div className={styles.title}>Хоспис №1 им. В.В. Миллионщиковой</div>
      <div className={styles.table}>
        {data.map((item) => (
          <div key={item.id} className={styles.row}>
            <div className={styles.header}>{item.title}</div>
            <div className={styles.content}>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};