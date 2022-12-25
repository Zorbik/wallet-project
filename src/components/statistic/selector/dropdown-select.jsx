import { Formik, ErrorMessage } from 'formik';
// import Notiflix from 'notiflix';
import { getStatistic } from '../../../redux/statistic/statisticOperations';
import { useEffect, useState } from 'react';
import {
  StyledForm,
  StyledField,
  FieldContainer,
} from './dropdown-select.styled';
import { useDispatch } from 'react-redux';

export function Selectors() {
  const STORAGE_KEY = 'statistic';
  const [month, setMonth] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY))?.month || ''
  );
  const [year, setYear] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY))?.year || ''
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!Boolean(month) || !Boolean(year)) return;
    dispatch(getStatistic({ month, year }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ month, year }));
  }, [dispatch, month, year]);

  const handleMonthChange = e => {
    setMonth(e[0].value);
  };
  const handleYearChange = e => {
    setYear(e[0].value);
  };

  const options = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];

  const yearOptions = generateYearOptions(new Date().getFullYear());
  const currentMonth = generateCurrentMonth(month, options);

  return (
    <>
      <Formik>
        <StyledForm>
          <FieldContainer>
            <StyledField
              options={options}
              labelField="name"
              valueField="value"
              onChange={handleMonthChange}
              placeholder={currentMonth}
            />
          </FieldContainer>
          <ErrorMessage name="month" />
          <FieldContainer>
            <StyledField
              options={yearOptions.map(year => ({
                value: year,
              }))}
              labelField="value"
              valueField="value"
              placeholder={year}
              onChange={handleYearChange}
            ></StyledField>
          </FieldContainer>
        </StyledForm>
      </Formik>
    </>
  );
}

function generateCurrentMonth(month, options) {
  let currentMonth = options.filter(e => e.value === month);

  return currentMonth[0]?.name;
}

function generateYearOptions(currentYear) {
  let yearOptions = [];
  for (let i = 2017; i <= currentYear; i += 1) {
    yearOptions.push(i);
  }
  return yearOptions;
}
