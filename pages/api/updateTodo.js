import { table, getMinifiedRecord } from './utils/Airtable';

module.exports = async (req, res) => {
  const { id, fields } = req.body;
  try {
    const updatedRecord = await table.update([{ id, fields }]);
    res.statuCode = 200;
    res.json(getMinifiedRecord(updatedRecord[0]));
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: 'Something went wrong' });
  }
};
