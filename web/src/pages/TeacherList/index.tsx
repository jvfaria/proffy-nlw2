import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';

import TeacherItem from '../../components/TeacherItem';
const TeacherList = () => {

  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis:">

        <form id="search-teachers">

          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="day-week">Dia da semana</label>
            <input type="text" name="day-week" id="day-week" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" name="time" id="time" />
          </div>

        </form>

      </PageHeader>
      <TeacherItem />
    </div>

  )
}

export default TeacherList;