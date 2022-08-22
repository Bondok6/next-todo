import { table } from './utils/Airtable';

module.exports = async (req, res) => {
  const { description } = req.body;
  try {
    const createdRecords = await table.create([{ fields: { description } }]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };
    res.statuCode = 200;
    res.json(createdRecord);
  } catch (error) {
    res.statusCode = 500;
    res.json({ msg: 'Something went wrong' });
  }
};
