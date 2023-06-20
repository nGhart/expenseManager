// import React from 'react';

// const BudgetPage = () => {
//   return <div>BudgetPage</div>;
// };

// export default BudgetPage;
import React from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const users = [
  {
    name: 'Kojo Asante',
    number: '0244111111',
    group: 'AHS Alumni',
    rsvp: 'Yes',
    plusOne: 'Yes',
    table: 'Table 1',
    id: 're4er56erf',
  },
  {
    name: 'Kobina Asante',
    number: '0244111112',
    group: 'XXX Bank',
    rsvp: 'No',
    plusOne: 'Yes',
    table: 'Table 2',
    id: 're4er56erg',
  },
  {
    name: 'Kwaku Asante',
    number: '0244111113',
    group: 'Accra Church',
    rsvp: 'Maybe',
    plusOne: 'No',
    table: 'Table 3',
    id: 're4er56erh',
  },
  {
    name: 'Yaw Asante',
    number: '0244111114',
    group: 'FHS Alumni',
    rsvp: 'Yes',
    plusOne: 'No',
    table: 'Table 4',
    id: 're4er56eri',
  },
  {
    name: 'Kofi Asante',
    number: '0244111115',
    group: "Men's Group",
    rsvp: 'Yes',
    plusOne: 'No',
    table: 'Table 5',
    id: 're4er56erj',
  },
  {
    name: 'Kwame Asante',
    number: '0244111116',
    group: 'UofA Alumni',
    rsvp: 'Yes',
    plusOne: 'No',
    table: 'Table 6',
    id: 're4er56erK',
  },
];

const TableList = () => {
  const tables = users.reduce((tableMembers, item) => {
    const { table } = item;
    if (!tableMembers[table]) {
      tableMembers[table] = [];
    }
    tableMembers[table].push(item);
    return tableMembers;
  }, {});
  console.log(tables);
  return (
    <Row className="seatingChartContainer" style={{ marginTop: '60px' }}>
      {Object.entries(tables).map(([table, items]) => (
        <Col xs={4} sm={2} key={table}>
          <h3>{table}</h3>
          <div className="tablelist">
            {items.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default TableList;
