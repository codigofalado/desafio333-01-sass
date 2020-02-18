import React, { FC, useState, useRef } from 'react';

import Timer, { TimerRef } from '~/atoms/Timer';

import Result from '../Result';

import { Container, FinishButton } from './styles';

interface Props {
  data: string[];
}

const Calculator: FC<Props> = ({ data }) => {
  const [start, setStart] = useState(true);
  const [pmm, setPmm] = useState(0);
  const timerRef = useRef<TimerRef>(null);

  function calculateResult() {
    setStart(false);

    const seconds = timerRef.current?.getSeconds() ?? 0;
  }

  return (
    <Container>
      {start ? (
        <>
          <Timer start={start} ref={timerRef} />
          <article>
            {data.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <FinishButton onClick={calculateResult}>Finalizar</FinishButton>
        </>
      ) : (
        <Result ppm={pmm} />
      )}
    </Container>
  );
};

export default Calculator;
