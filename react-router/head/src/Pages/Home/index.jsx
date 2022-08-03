import { Head } from '../../components/Head';
import * as C from './style';

export const Home = () => {
  return (
    <C.Container>
      <Head title="Home" description="Essa é a descrição da Home" />
      <h1>Home</h1>
    </C.Container>
  );
};
