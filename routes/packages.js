const express = require('express');
const router = express.Router();
const db = require('../config/db'); // ปรับให้ตรงกับ path ของการเชื่อมต่อฐานข้อมูล

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      // สมมติว่ามีฟังก์ชันลบจากฐานข้อมูล
      await deletePackageById(id); 
      res.status(200).send({ message: 'Package deleted successfully' });
    } catch (err) {
      res.status(400).send({ message: 'Error deleting package', error: err.message });
    }
  });

// แก้ไข URL รูปภาพ
router.put('/:id/image', async (req, res) => {
    const { id } = req.params;
    const { imageUrl } = req.body;

    try {
        await db.query('UPDATE Packages SET ImageURL = ? WHERE PackageID = ?', [imageUrl, id]);
        res.status(200).send({ message: 'Image updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to update image' });
    }
});

module.exports = router;    