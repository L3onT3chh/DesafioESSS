import React from 'react';
import { useParams } from 'react-router-dom';

// Styled
import {
  Container,
  Context,
} from './styled';

// Components
import BlockData from '../DataRepository';
import { IPropsRepos } from '../../interface';

interface IPropsRepoArray{
  Data: IPropsRepos
}

const BlockYellow: React.FC<IPropsRepoArray> = (Data) => (
  <Container>
    <Context />
    <BlockData DataRepos={Data.Data} />
  </Container>
);

export default BlockYellow;