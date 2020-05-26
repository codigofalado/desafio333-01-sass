import React, { useRef, useEffect, useState } from 'react';

import P5 from 'p5';

import Layout from '../../components/Layout';
import { useConfig } from '../../hooks/config';
import sketch from './sketch';

import * as S from './styles';

const Game: React.FC = () => {
  const { config } = useConfig();

  const [game, setGame] = useState<P5>();
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boardRef.current) {
      setGame(new P5(sketch, boardRef.current));
    }
  }, []);

  return (
    <Layout>
      <S.Container>
        <h1>Game</h1>
        <div ref={boardRef} />
      </S.Container>
    </Layout>
  );
};

export default Game;
