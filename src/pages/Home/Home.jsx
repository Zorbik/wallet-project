import { useState } from 'react';
import { ModalTransactions } from '../../components/modal/modal';
import TableTransactions from '../../components/table/table';
import { Button, IconPlus, StyledBox } from './Home.styled';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const onBtnClick = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <StyledBox mx="auto">
      <TableTransactions />
      <Button onClick={onBtnClick}>
        <IconPlus />
      </Button>
      {showModal ? <ModalTransactions onClose={onClose} /> : ''}
    </StyledBox>
  );
};
export default Home;
