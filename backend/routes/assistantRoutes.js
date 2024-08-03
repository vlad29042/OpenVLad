const express = require('express');
const router = express.Router();
const assistantController = require('../controllers/assistantController');

// Маршрут для получения информации об ассистенте
router.get('/:id', assistantController.getAssistantById);

// Маршрут для создания ассистента
router.post('/create', assistantController.createAssistant);

// Маршрут для обновления ассистента
router.put('/:id', assistantController.updateAssistant);

module.exports = router;
