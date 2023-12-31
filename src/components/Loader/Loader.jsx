import { Bars } from 'react-loader-spinner';
import {LoaderContainer} from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Bars
  height="80"
  width="80"
  color="#15395A"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </LoaderContainer>
  );
};
export default Loader;