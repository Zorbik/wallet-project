import { useState } from 'react';
import { useMedia } from 'react-use';
import { ModalTransactions } from '../../components/modal/modal';
import TableTransactions from '../../components/table/table';
import { Button, IconPlus, StyledBox } from './Home.styled';
import { TotalBalance } from '../../components/totalBalance/TotalBalance';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const isWide = useMedia('(max-width:768px)');

  const onBtnClick = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {isWide ? (
        <StyledBox mx="auto">
          <TotalBalance />
          <TableTransactions />
          <Button onClick={onBtnClick}>
            <IconPlus />
          </Button>
          {showModal ? <ModalTransactions onClose={onClose} /> : ''}
        </StyledBox>
      ) : (
        <StyledBox mx="auto">
          <TableTransactions />
          <Button onClick={onBtnClick}>
            <IconPlus />
          </Button>
          {showModal ? <ModalTransactions onClose={onClose} /> : ''}
        </StyledBox>
      )}
    </>
  );
};
export default Home;
