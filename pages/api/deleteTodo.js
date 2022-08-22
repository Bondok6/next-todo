import { table, getMinifiedRecord } from './utils/Airtable';

module.exports = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedRecords = await table.destroy([id]);
    res.statuCode = 200;
    res.json(getMinifiedRecord(deletedRecords[0]));
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: 'Something went wrong' });
  }
};
