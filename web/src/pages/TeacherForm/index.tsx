import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningImg from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de escrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" type="tel" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input name="cost" label="Custo da usa hora por aula" type="text" />
        </fieldset>
        <footer>
          <p>
            <img src={warningImg} alt="Warning" />
            Importante!
            <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadástro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
