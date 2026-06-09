import { useEffect } from 'react';
import { Container } from '../../Components/Container';
import { GenericHtml } from '../../Components/GenericHtml';
import { Heading } from '../../Components/Heading';
import { MainTemplate } from '../../Templates/MainTemplate';

export function AboutPomodoro() {
  useEffect(() => {
    document.title = 'Entenda a Técnica Pomodoro - Chronos Pomodoro';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>A Técnica Pomodoro </Heading>

          <p>
            A Técnica Pomodoro é um método de organização de tempo criado para
            ajudar você a manter o foco em uma tarefa por vez, evitando
            distrações e melhorando sua produtividade.
          </p>

          <p>
            A ideia é simples: você escolhe uma tarefa, trabalha nela por um
            período de foco e depois faz uma pequena pausa. No Chronos, esse
            ciclo ajuda você a estudar, programar ou trabalhar com mais
            disciplina.
          </p>

          <p>
            Depois de alguns ciclos concluídos, é recomendado fazer uma pausa
            maior para descansar a mente. Assim, você mantém um ritmo saudável
            sem se sobrecarregar.
          </p>

          <p>
            Com o Pomodoro, grandes tarefas ficam mais fáceis de começar,
            porque você não precisa resolver tudo de uma vez: basta focar no
            próximo ciclo.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}