import { Head } from '../../components/Head';
import * as C from './style';
import { Helmet } from 'react-helmet';

export const Sobre = () => {
  return (
    <C.Content>
      <Helmet>
        <title>Sobre</title>
      </Helmet>
      {/* <Head title="Sobre" description="Essa é a descrição da Home" /> */}
      <h1>Sobre</h1>
    </C.Content>
  );
};
