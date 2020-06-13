import React, { useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calender,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 13</span>
            <span>Sabado</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/62670548?s=460&u=3894c156289f9f1789755d82e20b38e2388ae501&v=4"
                alt="Anderson Wiedemann"
              />
              <strong>Anderson Wiedemann</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/62670548?s=460&u=3894c156289f9f1789755d82e20b38e2388ae501&v=4"
                  alt="Anderson Wiedemann"
                />
                <strong>Anderson Wiedemann</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/62670548?s=460&u=3894c156289f9f1789755d82e20b38e2388ae501&v=4"
                  alt="Anderson Wiedemann"
                />
                <strong>Anderson Wiedemann</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/62670548?s=460&u=3894c156289f9f1789755d82e20b38e2388ae501&v=4"
                  alt="Anderson Wiedemann"
                />
                <strong>Anderson Wiedemann</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calender />
      </Content>
    </Container>
  );
};

export default Dashboard;
