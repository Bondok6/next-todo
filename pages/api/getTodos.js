import { table, mnifyRecords } from './utils/Airtable';

module.exports = async (_, res) => {
  try {
    const records = await table.select({}).firstPage();
    const minifiedRecords = mnifyRecords(records);
    res.statuCode = 200;
    res.json(minifiedRecords);
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: 'Something went wrong' });
  }
};
