/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

const TeacherList: React.FC = () => {
  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Esses são os Proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Frontend', label: 'Frontend' },
              { value: 'Backend', label: 'Artes' },
              { value: 'Mobile', label: 'Mobile' },
              { value: 'Devops', label: 'Devops' },
              { value: 'FullStack', label: 'FullStack' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domimgo' },
              { value: '0', label: 'segunda-feira' },
              { value: '2', label: 'terça-feira' },
              { value: '3', label: 'quarta-feira' },
              { value: '4', label: 'quinta-feira' },
              { value: '5', label: 'sexta-feira' },
              { value: '6', label: 'sábado-feira' },
            ]}
          />
          <Input name="time" label="Hora" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
