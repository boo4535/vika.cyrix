const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // إضافة وحدة path

const app = express();

app.use(bodyParser.json());
app.use(cors());

// خدمة الملفات الثابتة من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// إعداد المسار الرئيسي لخدمة index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
